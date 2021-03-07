package domain

import "gorm.io/gorm"

type song struct {
	gorm.Model
	Name string `json:"name"`
	Detail string `json:"detail"`
}