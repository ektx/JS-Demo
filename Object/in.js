var o = {
	x: 1
};

console.log("x" in o); // true; x 是 o 的属性
console.log("y" in o); // false; y 不是o的属性
console.log("toString" in o); // true: o继承toString属性
