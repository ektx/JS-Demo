let o = {
	x: 1,
	y: 2,
	txt: 'hello'
};

// 返回一个数组
// 包含对象自身的所有Symbol属性。
console.log(Object.getOwnPropertySymbols(o))