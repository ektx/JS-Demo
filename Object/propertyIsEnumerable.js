
// propertyIsEnumerable 是 hasOwnProperty()的增加版
// 只有检测到自有属性且这个属性的可枚举性为 true时才返回true

function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function")
		throw TypeError();
	function f() { };
	f.prototype = p;
	return new f();
}

let o = inherit({y: 2});
o = {
	x: 1
};

console.log(o.propertyIsEnumerable('x'), 'o有一个可枚举的自有属性x'); // true; 
console.log(o.propertyIsEnumerable('y'), 'y是继承来的'); // false; 
console.log(o.propertyIsEnumerable('toString'), '不可枚举'); // false: 
