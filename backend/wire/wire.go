package wire

import (
	"github.com/mmmommm/HeartBeat/app"
	"github.com/mmmommm/HeartBeat/handler"
	"github.com/mmmommm/HeartBeat/mysql"

	"gorm.io/gorm"
)

func InitArtistAPI(db *gorm.DB) handler.ArtistHandler {
	artistRepository := mysql.NewArtistRepositoryImpl(db)
	artistApplication := app.NewArtistApplication(artistRepository)
	artistHandler := handler.NewArtistHandler(artistApplication)
	return artistHandler
}
