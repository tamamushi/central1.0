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

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
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

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

func _createRoutes(route *Router) *Router {

//	route.Add('GET', get)
//	route.Add('POST', create)
//	route.Add('UPDATE', update)

	return route
}

func main() {
	
	route := &Router{}
	_createRoutes(route)
	
	lambda.Start(route.Handler)
}
