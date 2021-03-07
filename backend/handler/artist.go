package handler

import (
	"github.com/mmmommm/HeartBeat/app"

	"net/http"

	"github.com/labstack/echo/v4"
)

// ArtistHandler is
type ArtistHandler struct {
	artistApplication app.ArtistApplication
}

// NewArtistHandler is
func NewArtistHandler(artistApplication app.ArtistApplication) ArtistHandler {
	return ArtistHandler{artistApplication: artistApplication}
}

// // CreateArtist is
// func (h *ArtistHandler) CreateArtist(c echo.Context) error {
// 	artist := new(dto.ArtistBody)
// 	c.Bind(artist)

// 	id, err := h.artistApplication.Insert(domain.Artist{
// 		Name:   artist.Name,
// 		Detail: artist.Detail,
// 	})
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, err)
// 	}
// 	return c.JSON(http.StatusOK, id)
// }

// GetAllArtist is
func (h *ArtistHandler) GetAllArtist(c echo.Context) error {
	name := c.QueryParam("name")
	if name != "" {
		response, err := h.artistApplication.GetByName(name)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}
		if len(response) == 0 {
			return c.JSON(http.StatusNotFound, "not found")
		}
		return c.JSON(http.StatusOK, response)
	}

	Artist, err := h.artistApplication.GetAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, Artist)
}

// GetStatistics is
// func (h *ArtistHandler) GetStatistics(c echo.Context) error {
// 	count, avg, mid, companyCount, err := h.artistApplication.GetStatistics()
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, err)
// 	}
// 	s := dto.ArtistStatistics{Count: count, CompanyCount: companyCount, Avg: avg, Mid: mid}
// 	return c.JSON(http.StatusOK, s)
// }

// ExportJobsSalary is
// func (h *ArtistHandler) ExportJobsSalary(c echo.Context) error {
// 	jobs := &[]dto.ExportArtistBody{}
// 	err := c.Bind(jobs)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	for _, job := range *jobs {
// 		salary, err := strconv.Atoi(job.Salary)
// 		if err != nil {
// 			return c.JSON(http.StatusInternalServerError, err)
// 		}
// 		_, err = h.artistApplication.Insert(domain.Artist{
// 			Name:         job.Name,
// 			CreateDataJS: strconv.Itoa(job.CreateDataJS),
// 			Detail:       job.Detail,
// 			Experience:   job.Experience,
// 			IsShow:       true,
// 			Salary:       salary,
// 			Term:         job.Term,
// 			Type:         job.Type,
// 			WorkDays:     job.WorkDays,
// 			WorkType:     job.WorkType,
// 		})
// 		if err != nil {
// 			return c.JSON(http.StatusInternalServerError, err)
// 		}
// 	}
// 	return c.JSON(http.StatusOK, len(*jobs))
// }
