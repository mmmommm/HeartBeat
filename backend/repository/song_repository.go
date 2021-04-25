package repository

import "github.com/mmmommm/HeartBeat/domain"

type SongRepository interface {
	SelectByID(id int) (domain.Song, error)
	SelectByName(name string) ([]domain.Song, error)
	SelectAll() ([]domain.Song, error)
	Latest() ([]domain.Song, error)
	Insert(song domain.Song) (id int, err error)
}
