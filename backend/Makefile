test:
	go test ./...

build: fmt
	go build

fmt:
	gofmt -l -s -w .

deploy:
	gcloud app deploy

dev: fmt
	go build && ./HeartBeat

db:
	./cloud_sql_proxy -instances=noted-hangout-310606:asia-northeast1:default=tcp:3306