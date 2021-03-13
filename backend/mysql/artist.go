package mysql

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"

	"gorm.io/gorm"
)

type ArtistRepositoryImpl struct {
	db *gorm.DB
}

func NewArtistRepositoryImpl(DB *gorm.DB) repository.ArtistRepository {
	return &ArtistRepositoryImpl{
		db: DB,
	}
}

func (r *ArtistRepositoryImpl) SelectByID(id int) (domain.Artist, error) {
	var artistRepository domain.Artist
	tx := r.db.First(&artistRepository, id)
	return artistRepository, tx.Error
}

func (r *ArtistRepositoryImpl) SelectAll() ([]domain.Artist, error) {
	var artistRepository []domain.Artist
	result := r.db.Find(&artistRepository)
	return artistRepository, result.Error
}

func (r *ArtistRepositoryImpl) SelectByName(name string) ([]domain.Artist, error) {
	var artistRepository []domain.Artist
	result := r.db.Where("name = ?", name).Find(&artistRepository)
	return artistRepository, result.Error
}
