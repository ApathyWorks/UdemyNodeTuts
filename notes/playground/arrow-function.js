//testing arrow functions

//arrows dont bind this keyword

var square = (x) => x * x;

console.log(square(9));

var user = {
	name: 'nick',
	sayHi: () => { //doesnt bind this
		console.log(`Hi. I am ${this.name}`);
	},
	sayHiAlt() { //does binds this
		console.log(`Hi. I am ${this.name}`);
	}
};

user.sayHi();
user.sayHiAlt();