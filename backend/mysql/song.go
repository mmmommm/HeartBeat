package mysql

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"

	"gorm.io/gorm"
)

type SongRepositoryImpl struct {
	db *gorm.DB
}

func NewSongRepositoryImpl(DB *gorm.DB) repository.SongRepository {
	return &SongRepositoryImpl{
		db: DB,
	}
}

func (r *SongRepositoryImpl) SelectByID(id int) (domain.Song, error) {
	var songRepository domain.Song
	tx := r.db.First(&songRepository, id)
	return songRepository, tx.Error
}

func (r *SongRepositoryImpl) SelectAll() ([]domain.Song, error) {
	var songRepository []domain.Song
	result := r.db.Find(&songRepository)
	return songRepository, result.Error
}

func (r *SongRepositoryImpl) Latest() ([]domain.Song, error) {
	var songRepository []domain.Song
	result := r.db.Order("updated_at desc").Find(&songRepository)
	return songRepository, result.Error
}

func (r *SongRepositoryImpl) SelectByName(name string) ([]domain.Song, error) {
	var songRepository []domain.Song
	result := r.db.Where("name LIKE ?", "%"+name+"%").Find(&songRepository)
	return songRepository, result.Error
}
