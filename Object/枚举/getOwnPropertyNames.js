let o = {
	x: 1,
	y: 2,
	txt: 'hello'
};

// 返回一个数组
// 包括对象自身的所有可枚举属性（不含Symbol属性，但是包括不可枚举属性）。
console.log(Object.getOwnPropertyNames(o))