// this 与内部方法之间的调用
let myObj = {
	value: 0,
	init: function(num) {
		this.value += typeof num === 'number' ? num : 1;
	}
}

myObj.init();
console.log(myObj.value) // 1

myObj.init(2);
console.log(myObj.value); // 3

myObj.init();
console.log(myObj.value)  // 4
