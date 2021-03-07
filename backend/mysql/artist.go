package mysql

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"

	"gorm.io/gorm"
)

// ArtistRepositoryImpl is dependent sqlx and ArtistRepository
type ArtistRepositoryImpl struct {
	db *gorm.DB
}

// NewArtistRepositoryImpl is
func NewArtistRepositoryImpl(DB *gorm.DB) repository.ArtistRepository {
	return &ArtistRepositoryImpl{
		db: DB,
	}
}

// Insert is
func (r *ArtistRepositoryImpl) Insert(artist domain.Artist) (int, error) {
	result := r.db.Create(&artist)
	if result.Error != nil {
		return 0, result.Error
	}
	return int(artist.ID), nil
}

// SelectByID is
func (r *ArtistRepositoryImpl) SelectByID(id int) (domain.Artist, error) {
	var artist domain.Artist
	tx := r.db.First(&artist, id)
	return artist, tx.Error
}

// SelectAll is
func (r *ArtistRepositoryImpl) SelectAll() ([]domain.Artist, error) {
	var jobSalaries []domain.Artist
	result := r.db.Order("create_data_js desc").Find(&jobSalaries)
	return jobSalaries, result.Error
}

// SelectByName is
func (r *ArtistRepositoryImpl) SelectByName(name string) ([]domain.Artist, error) {
	var jobSalaries []domain.Artist
	result := r.db.Order("create_data_js desc").Where("name = ?", name).Find(&jobSalaries)
	return jobSalaries, result.Error
}
