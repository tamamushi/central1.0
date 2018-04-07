# vim:set ts=4 fenc=utf-8:
#

GOCMD := go
GOBUILD := $(GOCMD) build
GOCLEAN := $(GOCMD) clean

VERSION := $(shell git describe --tags --abbrev=0 >&/dev/null || echo "0.0.0.0")
REVISION := $(shell git rev-parse --short HEAD)

LDFLAGS := -ldflags="-s -w -X \"main.Version=$(VERSION)\" -X \"main.Revision=$(REVISION)\""

build: deps bin/project bin/invoice bin/payment

deploy: build
	../node_modules/serverless/bin/serverless deploy 

clean: 
	$(GOCLEAN)
	rm -rf ./bin

deps:
	go get github.com/aws/aws-lambda-go/lambda
	go get github.com/aws/aws-lambda-go/events
	go get github.com/mattn/go-sqlite3

bin/%: src/handler/%
	env GOOS=linux $(GOBUILD) $(LDFLAGS) -o $@ $</main.go

.PHONY: deps all
