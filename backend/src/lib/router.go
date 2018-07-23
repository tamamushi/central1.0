/*
 vim:set ts=4 fenc=utf-8:
*/

package router

func Add(mt String, func interface{}) {
	
	func.echo()
	fmt.Println(mt)
}

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
	return events.APIGatewayProxyResponse {Body:request.Body, StatusCode:200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

