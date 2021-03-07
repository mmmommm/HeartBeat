package domain

import "gorm.io/gorm"

type artist struct {
	gorm.Model
	Name string `json:"name"`
	Detail string `json:"detail"`
}