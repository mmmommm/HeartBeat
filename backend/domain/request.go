package domain

import "gorm.io/gorm"

type Request struct {
	gorm.Model
	Name    string `json:"name"`
	Artist  string `json:"artist"`
	Song    string `json:"song"`
	Content string `json:"content"`
}
