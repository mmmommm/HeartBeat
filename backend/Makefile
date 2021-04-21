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

db:
	./cloud_sql_proxy -instances=noted-hangout-310606:asia-northeast1:heart-beat=tcp:3306