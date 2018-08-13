/*
 vim:set ts=4 fenc=utf-8:

 lib/factory.go
*/

package service

import (
)

type Factory struct {
	behavior	*Behavior	
}

var instance *Factory

func init() {
	instance = &Factory{
		behavior:	new(Behavior),
	}

	instance.behavior.SetFindLimit(10)
}

func NewFactory() *Factory {
	return instance
}

func (self *Factory) Behave() *Behavior{
	return self.behavior
}
