var arr = [1, 2, 3, 4, 5];
var obj = { "color": "blue", "app": "myos", "love": "小布丁" }


console.group('Array')
// 与 for in 相同，使用的是索引index
for (let index of arr) {
	console.log(`%c${index}`, 'color: red')
}
console.groupEnd()

console.group('使用Object.entries()来处理对象：')
/*
	Object.entries() ES7语法
	该方法返回一个给定对象自身可枚举的键值对数组,其排列与 for .. in 循环遍历该对象的
	顺序一致,区别在于 for in 循环也枚举原型链中的属性
	https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
*/
for (let [key, val] of Object.entries(obj)) {
	console.log(key, val)
}
console.groupEnd()
