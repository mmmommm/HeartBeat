package domain

import "gorm.io/gorm"

type Song struct {
	gorm.Model
	Artist string `json:"artist"`
	Name   string `json:"name"`
	Detail string `json:"detail"`
	Image  string `json:"image"`
}
