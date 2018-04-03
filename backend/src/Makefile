# vim:set ts=4 fenc=utf-8:

build:
	go get github.com/aws/aws-lambda-go/lambda
	go get github.com/mattn/go-sqlite3
	env GOOS=linux go build -ldflags="-s -w" -o bin/main main.go

deploy: build
	../node_modules/serverless/bin/serverless deploy -v

clean: remove
	rm -rf ./bin

remove:
	../node_modules/serverless/bin/serverless remove 
