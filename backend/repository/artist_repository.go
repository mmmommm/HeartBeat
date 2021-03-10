package repository

import "github.com/mmmommm/HeartBeat/domain"

// JobSalaryRepository is interface
type ArtistRepository interface {
	// Insert(user domain.Artist) (id int, err error)
	SelectByID(id int) (domain.Artist, error)
	SelectByName(name string) ([]domain.Artist, error)
	SelectAll() ([]domain.Artist, error)
}
