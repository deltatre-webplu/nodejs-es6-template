import { Greeter } from "./greeter";
import { GreeterAsync } from "./greeterAsync";

console.log("Run some sync code...");
const greeter = new Greeter("Enrico");
const message = greeter.getMessage();
console.log(message);

console.log("Run some async code...");
runAsync()
	.catch((error) => console.error(error));

async function runAsync() {
	const greeter = new GreeterAsync("Enrico");
	const message = await greeter.getMessageAsync();
	console.log(message);
}