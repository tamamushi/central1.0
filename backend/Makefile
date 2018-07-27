# vim:set ts=4 fenc=utf-8:
#

GOCMD := go
GOBUILD := $(GOCMD) build
GOCLEAN := $(GOCMD) clean

VERSION := $(shell git describe --tags --abbrev=0 >&/dev/null || echo "0.0.0.0")
REVISION := $(shell git rev-parse --short HEAD)

LDFLAGS := -ldflags="-s -w -X \"main.Version=$(VERSION)\" -X \"main.Revision=$(REVISION)\""

deploy: deps dep/project dep/invoice dep/payment
build: deps bin/project bin/invoice bin/payment

test-%: bin/%
	sls offline 

dep/%: bin/%
	../node_modules/serverless/bin/serverless deploy function -f \
	list$(shell echo $* | awk '{ print toupper(substr($$0, 1, 1)) substr($$0, 2, length($$0) - 1) }')
	../node_modules/serverless/bin/serverless deploy function -f \
	get$(shell echo $* | awk '{ print toupper(substr($$0, 1, 1)) substr($$0, 2, length($$0) - 1) }')

clean: 
	$(GOCLEAN)
	rm -rf ./bin

deps:
	go get github.com/aws/aws-lambda-go/lambda
	go get github.com/aws/aws-lambda-go/events
	go get github.com/mattn/go-sqlite3
	go get github.com/kr/pretty

bin/%: src/handler/%
	env GOOS=linux $(GOBUILD) $(LDFLAGS) -o $@ $</main.go

.PHONY: deps all
