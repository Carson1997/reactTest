function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.info = "13134"; //直接赋值，是静态属性

Person.prototype.say = function () {
	console.log('Person实例方法')
}

Person.show = function () {
	console.log('Person静态方法')
}

//通过new出来的实例，叫实例属性
const p1 = new Person('哈哈哈', 18);
console.log(p1) //没有info
console.log('静态属性', Person.info)
p1.say()
Person.show()

console.log('===================')

class Animal {
	//类的构造器，每一次new,先执行构造器
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	//类里通过static修饰静态属性
	static info = "eeee";
	info1 = 123;

	say() {
		console.log('Aninal实例方法')
	}

	static show() {
		console.log('Aninal静态方法')
	}
}

const a1 = new Animal('狗', 1)
console.log(a1)
console.log("静态属性", Animal.info)
a1.say()
Animal.show()