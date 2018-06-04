export class GreeterAsync {
	constructor(name) {
		this.name = name;
	}

	getMessageAsync() {
		return new Promise((resolve) => {
			setTimeout(() => {
				const message = `Hello ${this.name} from async !`;
				resolve(message);
			}, 2000);
		});
	}
}