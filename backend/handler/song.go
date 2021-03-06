package handler

import (
	"github.com/mmmommm/HeartBeat/app"
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/handler/dto"

	"net/http"

	"github.com/labstack/echo/v4"
)

type SongHandler struct {
	songApplication app.SongApplication
}

func NewSongHandler(songApplication app.SongApplication) SongHandler {
	return SongHandler{songApplication: songApplication}
}

func (h *SongHandler) CreateSong(c echo.Context) error {
	song := new(dto.SongBody)
	c.Bind(song)

	id, err := h.songApplication.Insert(domain.Song{
		Name:      song.Name,
		Artist:    song.Artist,
		ViewCount: song.ViewCount,
		Url:       song.Url,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, id)
}

func (h *SongHandler) GetAllSong(c echo.Context) error {
	name := c.QueryParam("name")
	if name != "" {
		response, err := h.songApplication.GetByName(name)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}
		if len(response) == 0 {
			return c.JSON(http.StatusNotFound, "not found")
		}
		return c.JSON(http.StatusOK, response)
	}

	Song, err := h.songApplication.GetAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, Song)
}

func (h *SongHandler) Latest(c echo.Context) error {
	Song, err := h.songApplication.GetLatest()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, Song)
}

func (h *SongHandler) GetSongByName(c echo.Context) error {
	name := c.Param("name")
	if name != "" {
		response, err := h.songApplication.GetByName(name)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}
		if len(response) == 0 {
			return c.JSON(http.StatusNotFound, "not found")
		}
		return c.JSON(http.StatusOK, response)
	}
	return nil
}
