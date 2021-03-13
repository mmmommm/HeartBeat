package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/wire"

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
		dbUser = mustGetEnv("DB_USER")
		dbPwd  = mustGetEnv("DB_PASS")
		dbName = mustGetEnv("DB_NAME")
	)
	dns := fmt.Sprintf("%s:%s@/%s", dbUser, dbPwd, dbName)
	db, err := gorm.Open(mysql.Open(dns), &gorm.Config{})
	db.Set("gorm:table_options", "ENGINE=InnoDB")
	if err != nil {
		log.Fatalf("error: %s\n", err)
	}
	return db
}

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	var db *gorm.DB
	db = initDB()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000/en-US", "http://localhost:3000"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	artistAPI := wire.InitArtistAPI(db)

	db.AutoMigrate(&domain.Artist{})
	// db.AutoMigrate(&domain.Song{})

	e.GET("/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"ping": "pong"})
	})

	// artist
	e.GET("/v1/artist", artistAPI.GetAllArtist)
	// e.GET("/artist/statistics", artistAPI.GetStatistics)
	// e.POST("/artist", artistAPI.CreateArtist)
	// e.POST("/artists", artistAPI.ExportArtist)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}
	log.Printf("Listening on port %s", port)
	e.Logger.Fatal(e.Start(":" + port))
}