package app

import (
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/repository"
)

type RequestApplication struct {
	requestRepository repository.RequestRepository
}

func NewRequestApplication(repository repository.RequestRepository) RequestApplication {
	return RequestApplication{
		requestRepository: repository,
	}
}

func (u *RequestApplication) Insert(request domain.Request) (int, error) {
	return u.requestRepository.Insert(request)
}

func (u *RequestApplication) GetAll() ([]domain.Request, error) {
	return u.requestRepository.SelectAll()
}
