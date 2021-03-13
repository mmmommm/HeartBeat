package handler

import (
	"github.com/mmmommm/HeartBeat/app"
	"github.com/mmmommm/HeartBeat/domain"
	"github.com/mmmommm/HeartBeat/handler/dto"

	"net/http"

	"github.com/labstack/echo/v4"
)

type RequestHandler struct {
	requestApplication app.RequestApplication
}

func NewRequestHandler(requestApplication app.RequestApplication) RequestHandler {
	return RequestHandler{requestApplication: requestApplication}
}

func (h *RequestHandler) CreateRequest(c echo.Context) error {
	request := new(dto.RequestBody)
	c.Bind(request)

	id, err := h.requestApplication.Insert(domain.Request{
		Name:    request.Name,
		Artist:  request.Artist,
		Song:    request.Song,
		Content: request.Content,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, id)
}
