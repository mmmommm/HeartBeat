test:
	go test ./...

build: fmt
	go build

fmt:
	gofmt -l -s -w .

deploy:
	gcloud app deploy ./app.yaml

dev: fmt
	go build && ./HeartBeat
