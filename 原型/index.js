function Fun () {}

Fun.prototype
// {constructor: A()}

Fun.prototype.constructor
// Fun () {}

// 对原型添加属性
Fun.prototype.name = 'abc'

Fun.prototype
// {name: 'abc', constructor: Fun()}

// 构造函数 Fun 的隐式原型是浏览器 Function
Fun.__proto__
// function 因为自己是个函数

Fun.constructor 
// A的构造函数就是 Function
// ƒ Function() { [native code] }

Fun.constructor.prototype
// function 原型就是函数

// 实例 b
b = new Fun()

b.prototype
// undefined

b.constructor
// Fun()

b.constructor.prototype
// {name: 'abc', constructor: Fun()}

b.__proto__ 
// {name: 'abc', constructor: Fun()}

// b的隐式原型 等于 构造函数Fun.prototype
console.log(b.__proto__ === Fun.prototype)
// true