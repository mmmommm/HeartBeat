package main

import (
	"fmt"
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/wire"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	echo "github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func mustGetEnv(k string) string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
	v := os.Getenv(k)
	if v == "" {
		log.Fatalf("Warning: %s environment variable not set.\n", k)
	}
	return v
}

func initDB() *gorm.DB {
	var err error
	var (
		dbUser                 = mustGetEnv("DB_USER")
		dbPwd                  = mustGetEnv("DB_PASS")
		dbName                 = mustGetEnv("DB_NAME")
		instanceConnectionName = mustGetEnv("INSTANCE_CONNECTION_NAME")
	)
	dns := fmt.Sprintf("%s:%s@unix(/cloudsql/%s)/%s", dbUser, dbPwd, instanceConnectionName, dbName)
	db, err := gorm.Open(mysql.Open(dns), &gorm.Config{})
	db.Set("gorm:table_options", "ENGINE=InnoDB")
	if err != nil {
		log.Fatalf("error: %s\n", err)
	}
	return db
}

func initLocalDB() *gorm.DB {
	var dbPwd = mustGetEnv("DB_PASS")
	dns := fmt.Sprintf("root:%s@/go_sample?parseTime=true", dbPwd)
	db, err := gorm.Open(mysql.Open(dns), &gorm.Config{})
	db.Set("gorm:table_options", "ENGINE=InnoDB")
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	v := os.Getenv("RUNENV")

	var db *gorm.DB
	if v == "production" {
		db = initDB()
		e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
			AllowOrigins: []string{"https://heart-beat-blue.vercel.app"},
			AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
		}))
	} else {
		db = initLocalDB()
		e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
			AllowOrigins: []string{"http://localhost:3000/en-US", "http://localhost:3000"},
			AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
		}))
	}

	artistAPI := wire.InitArtistAPI(db)
	songAPI := wire.InitSongAPI(db)
	requestAPI := wire.InitRequestAPI(db)

	db.AutoMigrate(&domain.Artist{})
	db.AutoMigrate(&domain.Request{})
	db.AutoMigrate(&domain.Song{})

	e.GET("/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"hoge": "fuga"})
	})

	// artist
	e.GET("/v1/artists", artistAPI.GetAllArtist)
	e.GET("/v1/artist/:name", artistAPI.GetArtistByName)
	e.GET("/v1/artist/latest", artistAPI.Latest)
	// song
	e.GET("/v1/songs", songAPI.GetAllSong)
	e.GET("/v1/song/:name", songAPI.GetSongByName)
	e.GET("/v1/song/latest", songAPI.Latest)
	// request
	e.GET("/v1/requests", requestAPI.GetAllRequest)
	e.POST("/v1/request", requestAPI.CreateRequest)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}
	log.Printf("Listening on port %s", port)
	e.Logger.Fatal(e.Start(":" + port))
}
