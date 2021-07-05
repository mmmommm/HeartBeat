FROM golang:1.15.3 AS build-env

ENV GOOS=linux
ENV GOARCH=amd64
ENV CGO_ENABLED=0
ENV GO111MODULE=on

WORKDIR /go/src/github.com/mmmommm/HeartBeat

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build .

FROM alpine:3.11.6

RUN apk add --no-cache bash ca-certificates curl

COPY ./docker/entry.sh /entry.sh
RUN chmod a+x /entry.sh

COPY ./mysql /mysql

COPY --from=build-env /go/src/github.com/mmmommm/HeartBeat/HeartBeat /HeartBeat
RUN chmod a+x /HeartBeat

EXPOSE 8080
ENTRYPOINT ["/entry.sh"]
CMD ["/HeartBeat"]