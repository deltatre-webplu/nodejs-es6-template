import { assert } from "chai";
import { Greeter } from "./../src/greeter";

it("Should return expected message", function() {
	// ARRANGE
	const target = new Greeter("Enrico");

	// ACT
	const result = target.getMessage();

	// ASSERT
	assert.strictEqual(result, "Hello Enrico");
});