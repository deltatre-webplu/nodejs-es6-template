"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
class Greeter {
	constructor(message) {
		this.message = message;
	}

	sayHello() {
		console.log(this.message);
	}
}
exports.Greeter = Greeter;