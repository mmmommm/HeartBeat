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
func (h *RequestHandler) GetAllRequest(c echo.Context) error {
	// name := c.QueryParam("name")
	// if name != "" {
	// 	response, err := h.jobSalaryApplication.GetByName(name)
	// 	if err != nil {
	// 		return c.JSON(http.StatusInternalServerError, err)
	// 	}
	// 	if len(response) == 0 {
	// 		return c.JSON(http.StatusNotFound, "not found")
	// 	}
	// 	return c.JSON(http.StatusOK, response)
	// }

	Request, err := h.requestApplication.GetAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	return c.JSON(http.StatusOK, Request)
}
