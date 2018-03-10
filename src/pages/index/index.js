class Menu {
	constructor(items) {
		this.items = items;
	}
	
	render() {
		items.forEach(item => console.log(item));
	}
}

new Menu([1, 2, 3, 4, 5]);