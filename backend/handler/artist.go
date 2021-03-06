package handler

import (
	"github.com/mmmommm/HeartBeat/app"
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/handler/dto"

	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ArtistHandler struct {
	artistApplication app.ArtistApplication
}

func NewArtistHandler(artistApplication app.ArtistApplication) ArtistHandler {
	return ArtistHandler{artistApplication: artistApplication}
}

func (h *ArtistHandler) CreateArtist(c echo.Context) error {
	artist := new(dto.ArtistBody)
	c.Bind(artist)

	id, err := h.artistApplication.Insert(domain.Artist{
		Name:      artist.Name,
		ViewCount: artist.ViewCount,
		Url:       artist.Url,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, id)
}

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

func (h *ArtistHandler) Latest(c echo.Context) error {
	Artist, err := h.artistApplication.GetLatest()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, Artist)
}

func (h *ArtistHandler) GetArtistByName(c echo.Context) error {
	name := c.Param("name")
	if name != "" {
		response, err := h.artistApplication.GetByName(name)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}
		if len(response) == 0 {
			return c.JSON(http.StatusNotFound, "not found")
		}
		return c.JSON(http.StatusOK, response)
	} else {
		fmt.Println("nameがないです")
	}
	return nil
}
