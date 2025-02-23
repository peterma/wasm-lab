package main

import (
	"syscall/js"
)

func calculateSquare(this js.Value, args []js.Value) interface{} {
	if len(args) != 1 {
		return "Invalid number of arguments"
	}
	
	number := args[0].Float()
	result := number * number
	
	return js.ValueOf(result)
}

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("calculateSquare", js.FuncOf(calculateSquare))
	<-c
}
