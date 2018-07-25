/*
 vim:set ts=4 fenc=utf-8:
*/

package router

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
)

type Router struct {}

type 
func (p *Router) GET(f *interface{}) {
	
	
}

func (p *Router) POST(f *interface{} {
}

func (p *Router) Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	fmt.Println("%v", request)
	
	return events.APIGatewayProxyResponse {Body:request.Body, StatusCode:200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

