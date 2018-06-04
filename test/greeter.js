import { assert } from "chai";
import { Greeter } from "./../src/greeter";

describe("Greeter", function() {

	this.timeout(20000);
	this.slow(30000);

	it("Should return expected message", function() {
		// ARRANGE
		const target = new Greeter("Enrico");
	
		// ACT
		const result = target.getMessage();
	
		// ASSERT
		assert.strictEqual(result, "Hello Enrico");
	});
});