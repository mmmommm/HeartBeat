package dto

type RequestBody struct {
	Artist  string `json:"artist"`
	Song    string `json:"song"`
	Content string `json:"content"`
	Name    string `json:"name"`
}
