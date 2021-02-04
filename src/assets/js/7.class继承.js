//父类
class Person{
	constructor(name,age) {
	    this.name = name;
		this.age = age;
	}
	
	say(str){
		console.log(str)
	}
}

//子类
class American extends Person{
}

const a1 = new American('Jack',18)
console.log(a1)
a1.say('hello')

console.log('==========');

//子类
class Chinese extends Person{
	//子类继承父类时会默认自动执行构造器的super,super要有对应的参数，否则会undefined
	constructor(name,age,id) {
		super(name,age,id)
		// 子类独有的参数要在super后赋值
	    this.id = id;
	}
}

const c1 = new Chinese('张三',18,123456)
console.log(c1)
c1.say('你好')