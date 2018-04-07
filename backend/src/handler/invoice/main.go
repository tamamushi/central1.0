/*
 vim:set ts=4 fenc=utf-8:

*/

package main

import (
	"fmt"
	//"encoding/json"
	"strconv"
	"database/sql"

	_ "github.com/mattn/go-sqlite3"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/events"
)

var (
    Version  string
    Revision string
)

type Response struct {
	Message string `json:"message"`
}

// Handler is the only one entry point.
func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
	var id int
	var identity string 
	var db *sql.DB
	var err error

	if db, err = sql.Open("sqlite3", "./test.db"); err != nil {
		return errorResponse(err);
	}

	if identity = request.RequestContext.Identity.User; len(identity) > 0 {
		fmt.Printf("%+s\n", identity )
	}

	if id, err = strconv.Atoi(request.PathParameters["id"]); err != nil {
		return errorResponse(err);
	}

	fmt.Printf("%+s\n", id)
	db.Close()
	return events.APIGatewayProxyResponse {Body:request.Body, StatusCode:200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

func main() {
	lambda.Start(Handler)
}
