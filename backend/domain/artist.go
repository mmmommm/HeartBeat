package domain

import "gorm.io/gorm"

type Artist struct {
	gorm.Model
	Name      string `json:"name"`
	ViewCount string `json:"viewcount"`
	Url       string `json:"url"`
}
