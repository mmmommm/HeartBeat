package infra

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"

	"gorm.io/gorm"
)

type RequestRepositoryImpl struct {
	db *gorm.DB
}

func NewRequestRepositoryImpl(DB *gorm.DB) repository.RequestRepository {
	return &RequestRepositoryImpl{
		db: DB,
	}
}

func (r *RequestRepositoryImpl) Insert(request domain.Request) (int, error) {
	result := r.db.Create(&request)
	if result.Error != nil {
		return 0, result.Error
	}
	return int(request.ID), nil
}

func (r *RequestRepositoryImpl) SelectAll() ([]domain.Request, error) {
	var requests []domain.Request
	result := r.db.Find(&requests)
	return requests, result.Error
}
