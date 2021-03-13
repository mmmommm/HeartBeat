package app

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"
)

type ArtistApplication struct {
	artistRepository repository.ArtistRepository
}

func NewArtistApplication(repository repository.ArtistRepository) ArtistApplication {
	return ArtistApplication{
		artistRepository: repository,
	}
}

func (u *ArtistApplication) GetAll() ([]domain.Artist, error) {
	return u.artistRepository.SelectAll()
}

func (u *ArtistApplication) GetByName(name string) ([]domain.Artist, error) {
	return u.artistRepository.SelectByName(name)
}
