package repository

import "github.com/mmmommm/HeartBeat/domain"

type RequestRepository interface {
	Insert(request domain.Request) (id int, err error)
	SelectAll() ([]domain.Request, error)
}
