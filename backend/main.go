package main

import (
	"log"
	"net/http"
	"os"

	"github.com/ant0ine/go-json-rest/rest"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

type User struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
	Sex  bool   `json:"sex"`
}

type Impl struct {
	DB *gorm.DB
}

func getEnv(k string) string {
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

func (i *Impl) initDB() {
	var err error
	i.DB, err = gorm.Open("mysql", "root:9434Yakitori@/go_sample")
	if err != nil {
		log.Fatalf("error: %s\n", err)
	}
	i.DB.LogMode(true)
}

func (i *Impl) initSchema() {
	i.DB.AutoMigrate(&User{})
}

func main() {
	i := Impl{}
	i.initDB()
	i.initSchema()

	api := rest.NewApi()
	api.Use(rest.DefaultDevStack...)
	router, err := rest.MakeRouter(
		rest.Get("/users", i.GetAllUsers),
		rest.Post("/users", i.PostUser),
		rest.Get("/users/:id", i.GetUser),
		rest.Put("/users/:id", i.PutUser),
		rest.Delete("/users/:id", i.DeleteUser),
	)
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("server started.")
	api.SetApp(router)
	log.Fatal(http.ListenAndServe(":8080", api.MakeHandler()))
}

// countriesテーブル内のデータ全出力
func (i *Impl) GetAllUsers(w rest.ResponseWriter, r *rest.Request) {
    users := []User{}
    i.DB.Find(&users)
    w.WriteJson(&users)
}

// パスパラメータ:idの国の該当データを出力
func (i *Impl) GetUser(w rest.ResponseWriter, r *rest.Request) {
    id := r.PathParam("id")
    user := User{}
    if i.DB.Find(&user, id).Error != nil {
        rest.NotFound(w, r)
        return
    }
    w.WriteJson(&user)
}

// json形式のデータをPOST {name:国名}
func (i *Impl) PostUser(w rest.ResponseWriter, r *rest.Request) {
    user := User{}
    err := r.DecodeJsonPayload(&user)
    if err != nil {
        rest.Error(w, err.Error(), http.StatusInternalServerError)
    }
    err = i.DB.Save(&user).Error
    if err != nil {
        rest.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.WriteJson(&user)
}

// パスパラメータ:idの国の該当データのNameを変更し出力
func (i *Impl) PutUser(w rest.ResponseWriter, r *rest.Request) {

    id := r.PathParam("id")
    user := User{}
    if i.DB.First(&user, id).Error != nil {
        rest.NotFound(w, r)
        return
    }
    updated := User{}
    if err := r.DecodeJsonPayload(&updated); err != nil {
        rest.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    user.Name = updated.Name

    if err := i.DB.Save(&user).Error; err != nil {
        rest.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.WriteJson(&user)
}

// パスパラメータ:idの国の該当データを削除
func (i *Impl) DeleteUser(w rest.ResponseWriter, r *rest.Request) {
    id := r.PathParam("id")
    user := User{}
    if i.DB.First(&user, id).Error != nil {
        rest.NotFound(w, r)
        return
    }
    if err := i.DB.Delete(&user).Error; err != nil {
        rest.Error(w, err.Error(), http.StatusInsufficientStorage)
        return
    }
    w.WriteHeader(http.StatusOK)
}