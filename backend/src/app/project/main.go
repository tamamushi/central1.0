/*
 vim:set ts=4 fenc=utf-8:
*/

package main

import (
	"fmt"
	"encoding/json"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/events"
	m "../../domain/model"
	service "../../domain/service"
)

var (
    Version  string
    Revision string
)

var _factory *service.Factory

func init() {

	_factory = service.NewFactory()
	_factory.Behave().SetFindLimit(10)
}

//func createProject(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
//}

func getProjects(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
	projects	:= []m.Project{}

	m.Finds(&projects)

	b, _ := json.Marshal(projects)
	return events.APIGatewayProxyResponse {Body: string(b), StatusCode: 200}, nil
}

func getProjectById(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	project		:= m.Project{}
	project.ID	= "100012"

	m.Find(&project)

	b, _ := json.Marshal(project)

	return events.APIGatewayProxyResponse {Body: string(b), StatusCode: 200}, nil
}

func main() {
	
	router	:= service.NewRouter()

	router.Get(getProjects)
	router.GetWithPathParam(getProjectById)
	
	lambda.Start(router.Handler)
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

