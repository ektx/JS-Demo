class Animal {
    // 构造函数，实例化的时候将会被调用，
    // 如果不指定，那么会有一个不带参数的默认构造函数
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    // 在原型上定义一个属性
    toString() {
        console.log(`name: ${this.name}, color: ${this.color}`)
    }
}

let animal = new Animal('dog', 'white')
animal.toString()

console.log(animal instanceof Animal) // true
console.log(animal.hasOwnProperty('name')) // true
console.log(animal.hasOwnProperty('toString')) // false
console.log(animal.__proto__.hasOwnProperty('toString')) // true

class Cat extends Animal {
    constructor(action) {
        // 使用 super 来绑定继承
        super('cat', 'orange')
        this.action = action
    }

    toString() {
        super.toString()
    }
}

let cat = new Cat('tom')
cat.toString()

console.log(cat instanceof Cat) // true
console.log(cat instanceof Animal) // true