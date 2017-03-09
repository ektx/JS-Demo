var o = {
	x: 1
};

console.log(o.hasOwnProperty('x'), 'o本身具有x属性'); // true; 
console.log(o.hasOwnProperty('y'), 'o本身不存在y属性'); // false; 
console.log(o.hasOwnProperty('toString'), 'toString是继承属性'); // false: 
