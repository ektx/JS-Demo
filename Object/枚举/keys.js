let o = {
	x: 1,
	y: 2,
	txt: 'hello'
};

// 返回一个数组
// 包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）
console.log(Object.keys(o))