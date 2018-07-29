/*
 vim:set ts=4 fenc=utf-8:
*/

package router

import (
	"fmt"
	"context"
	"github.com/aws/aws-lambda-go/events"
	"github.com/kr/pretty"
)



type Router struct {
	f func()
}

func (p *Router) Get(f func()) {
	p.f = f()
}

func (p *Router) GetWithPathParam(f interface{}) {
	
}

func (p *Router) Post(f interface{}) {
}

func (p *Router) Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	switch req.HTTPMethod {
		case "GET":
			if len(req.PathParameters) > 0 {
				fmt.Println("Request HTTP Method: GET with PathParam")
			} else {
				p.f()
				fmt.Println("Request HTTP Method: GET")
			}
		case "POST": 
			fmt.Println("Request HTTP Method: POST")
	}
	fmt.Printf("req : %# v", pretty.Formatter(req))
	
	return events.APIGatewayProxyResponse {Body:req.Body, StatusCode:200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

