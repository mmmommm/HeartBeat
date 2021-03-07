package app

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"
)

// ArtistApplication is
type ArtistApplication struct {
	artistRepository repository.ArtistRepository
}

// NewArtistApplication is
func NewArtistApplication(repository repository.ArtistRepository) ArtistApplication {
	return ArtistApplication{
		artistRepository: repository,
	}
}

// Insert is
// func (u *ArtistApplication) Insert(artist domain.Artist) (int, error) {
// 	return u.artistRepository.Insert(artist)
// }

// GetAll is
func (u *ArtistApplication) GetAll() ([]domain.Artist, error) {
	return u.artistRepository.SelectAll()
}

// GetByName is
func (u *ArtistApplication) GetByName(name string) ([]domain.Artist, error) {
	return u.artistRepository.SelectByName(name)
}

// GetStatistics will return statistics of Artist
// func (u *ArtistApplication) GetStatistics() (int, int, int, int, error) {
// 	list, err := u.artistRepository.SelectAll()
// 	if err != nil {
// 		return 0, 0, 0, 0, err
// 	}
// 	ArtistService := new(service.ArtistService)
// 	count := len(list)
// 	avg := ArtistService.GetAvg(list)
// 	mid := ArtistService.GetMid(list)
// 	companyCount := ArtistService.GetCountByCompanyName(list)
// 	return count, avg, mid, companyCount, nil
// }
