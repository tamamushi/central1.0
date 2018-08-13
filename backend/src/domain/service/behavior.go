/*
 vim:set ts=4 fenc=utf-8:

 lib/behavior.go
*/

package service

import (
)

type Behavior struct {
	findLimit	int
}

func (self *Behavior) NewBehavior() *Behavior {
	return &Behavior{}
}

func (self *Behavior) SetFindLimit(limitNumber int) {
	self.findLimit	= limitNumber
}
