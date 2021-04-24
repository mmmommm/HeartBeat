test:
	go test ./...

serve:
	go run main.go

build: fmt
	go build

fmt:
	gofmt -l -s -w .

deploy:
	gcloud app deploy ./app.yaml

dev: fmt
	go build && ./HeartBeat
