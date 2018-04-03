/*
 vim:set ts=4 fenc=utf-8:
*/

package main

import (
	"fmt"
	"encoding/json"
	"strconv"
	"database/sql"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/events"
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

	jsonStr := {
		"name": "日本",
		"prefectures": [{
			"name": "東京都",
			"capital": "東京",
			"population": 13482040
		},
		{
			"name": "埼玉県",
			"capital": "さいたま市",
			"population": 7249287
		},
		{
			"name": "神奈川県",
			"capital": "横浜市",
			"population": 9116252
		}]
	}
	return events.APIGatewayProxyResponse {Body:jsonStr, StatusCode:200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

func main() {
	lambda.Start(Handler)
}
