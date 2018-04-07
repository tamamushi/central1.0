/*
 vim:set ts=4 fenc=utf-8:
*/

package Handler

import (
	"fmt"
	"encoding/json"
	//"strconv"
	//"database/sql"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/events"
	model "../../model"
)

var (
    Version  string
    Revision string
)

func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	
	var projects	= map[string]*model.Project{}

	p := &model.Project {
			ID:		"1000011",
			Title:	"XCOM様追加開発"}

	projects[p.ID] = p

	b, _ := json.Marshal(projects)
	return events.APIGatewayProxyResponse {Body: string(b), StatusCode: 200}, nil
}

func errorResponse(err error) (events.APIGatewayProxyResponse, error) {
	fmt.Printf("%+v\n", err)
	return events.APIGatewayProxyResponse{StatusCode: 500, Body: "Internal Server Error"}, nil
}

func main() {
	lambda.Start(Handler)
}
