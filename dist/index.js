"use strict";

var _greeter = require("./greeter");

const greeter = new _greeter.Greeter("Enrico");
const message = greeter.getMessage();

console.log(message);