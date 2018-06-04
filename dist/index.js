"use strict";

let runAsync = (() => {
	var _ref = _asyncToGenerator(function* () {
		const greeter = new _greeterAsync.GreeterAsync("Enrico");
		const message = yield greeter.getMessageAsync();
		console.log(message);
	});

	return function runAsync() {
		return _ref.apply(this, arguments);
	};
})();

var _greeter = require("./greeter");

var _greeterAsync = require("./greeterAsync");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log("Run some sync code...");
const greeter = new _greeter.Greeter("Enrico");
const message = greeter.getMessage();
console.log(message);

console.log("Run some async code...");
runAsync().catch(error => console.error(error));