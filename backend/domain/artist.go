package domain

import "gorm.io/gorm"

type Artist struct {
	gorm.Model
	Name   string `json:"name"`
	Detail string `json:"detail"`
}
