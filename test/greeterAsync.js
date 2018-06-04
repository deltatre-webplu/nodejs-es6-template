import { assert } from "chai";
import { GreeterAsync } from "./../src/greeterAsync";

describe("GreeterAsync", function() {
	
	this.timeout(20000);
	this.slow(30000);

	it("Should return expected message", async function() {
		// ARRANGE
		const target = new GreeterAsync("Enrico");
	
		// ACT
		const result = await target.getMessageAsync();
	
		// ASSERT
		assert.strictEqual(result, "Hello Enrico from async !");
	});
});
