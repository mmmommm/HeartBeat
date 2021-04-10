package app

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"
)

type SongApplication struct {
	songRepository repository.SongRepository
}

func NewSongApplication(repository repository.SongRepository) SongApplication {
	return SongApplication{
		songRepository: repository,
	}
}

func (u *SongApplication) GetAll() ([]domain.Song, error) {
	return u.songRepository.SelectAll()
}

func (u *SongApplication) GetLatest() ([]domain.Song, error) {
	return u.songRepository.Latest()
}

func (u *SongApplication) GetByName(name string) ([]domain.Song, error) {
	return u.songRepository.SelectByName(name)
}
