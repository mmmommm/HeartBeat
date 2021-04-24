package wire

import (
	"github.com/mmmommm/HeartBeat/app"
	"github.com/mmmommm/HeartBeat/handler"
	"github.com/mmmommm/HeartBeat/infra"

	"gorm.io/gorm"
)

func InitArtistAPI(db *gorm.DB) handler.ArtistHandler {
	artistRepository := infra.NewArtistRepositoryImpl(db)
	artistApplication := app.NewArtistApplication(artistRepository)
	artistHandler := handler.NewArtistHandler(artistApplication)
	return artistHandler
}

func InitSongAPI(db *gorm.DB) handler.SongHandler {
	songRepository := infra.NewSongRepositoryImpl(db)
	songApplication := app.NewSongApplication(songRepository)
	songHandler := handler.NewSongHandler(songApplication)
	return songHandler
}

func InitRequestAPI(db *gorm.DB) handler.RequestHandler {
	requestRepository := infra.NewRequestRepositoryImpl(db)
	requestApplication := app.NewRequestApplication(requestRepository)
	requestHandler := handler.NewRequestHandler(requestApplication)
	return requestHandler
}
