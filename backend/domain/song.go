package domain

import "gorm.io/gorm"

type Song struct {
	gorm.Model
	Artist    string `json:"artist"`
	Name      string `json:"name"`
	ViewCount string `json:"viewcount"`
	Url       string `json:"url"`
}
