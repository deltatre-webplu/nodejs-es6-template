"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
class Greeter {
	constructor(name) {
		this.name = name;
	}

	getMessage() {
		return `Hello ${this.name}`;
	}
}
exports.Greeter = Greeter;