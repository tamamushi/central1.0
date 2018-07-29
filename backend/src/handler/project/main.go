/*
 vim:set ts=4 fenc=utf-8:
*/

package main

import (
	"fmt"
	"encoding/json"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/events"
	model "../../model"
	router "../../lib/router"
)

var (
    Version  string
    Revision string
)

func getProjects(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
	var projects	= map[string]*model.Project{}

	p1 := &model.Project {
			ID:		"1000011",
			Title:	"XCOM様追加開発"}

	p2 := &model.Project {
			ID:		"1000012",
			Title:	"XCOM様追加開発"}

	projects[p1.ID] = p1
	projects[p2.ID] = p2

	b, _ := json.Marshal(projects)
	return events.APIGatewayProxyResponse {Body: string(b), StatusCode: 200}, nil
}

func getProjectById() (events.APIGatewayProxyResponse, error) {

	b, _ := json.Marshal(&model.Project{ ID: "test" })

	return events.APIGatewayProxyResponse {Body: string(b), StatusCode: 200}, nil
}

func main() {
	
	router	:= router.NewRouter()

	router.Get(getProjects)
	router.GetWithPathParam(getProjectById)
	
	lambda.Start(router.Handler)
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

