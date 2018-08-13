/*
 vim:set ts=4 fenc=utf-8:
*/

package model

import (
	"../service"
)

type Model interface {
}

type modelBase struct {
	factory		*service.Factory
}

func Find(m *Project) {
	_ = service.NewFactory()

	m.ID	= "1000012"
	m.Title	= "XCOM様追加開発1"
}

func Finds(m *[]Project) {
	
	_ = service.NewFactory()
	
	*m = append(*m, Project{ 
					ID: 	"100011",
					Title:	"XCOM様追加開発",
				})

	*m = append(*m, Project{
					ID:		"100012",
					Title:	"XCOM様追加開発",
				})
}
