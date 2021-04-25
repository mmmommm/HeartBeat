package dto

type SongBody struct {
	Artist    string `json:"artist"`
	Name      string `json:"name"`
	ViewCount string `json:"viewcount"`
	Url       string `json:"url"`
}
