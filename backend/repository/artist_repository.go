package repository

import "github.com/mmmommm/HeartBeat/domain"

type ArtistRepository interface {
	SelectByID(id int) (domain.Artist, error)
	SelectByName(name string) ([]domain.Artist, error)
	SelectAll() ([]domain.Artist, error)
	Latest() ([]domain.Artist, error)
}
