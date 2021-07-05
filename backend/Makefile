ENV_LOCAL_FILE := env.local
ENV_LOCAL = $(shell cat $(ENV_LOCAL_FILE))

test:
	go test ./...

.PHONY: serve
serve:
	go run main.go

build:
	fmt
	go build

.PHONY: fmt
fmt:
	gofmt -l -s -w .

.PHONY: deploy
deploy:
	gcloud app deploy ./app.yaml

dev: fmt
	go build && ./HeartBeat

.PHONY: db-local
db-local:
	$(ENV_LOCAL) docker compose -f docker/docker-compose.deps.base.yml -f docker/docker-compose.deps.local.yml -p local up -d
