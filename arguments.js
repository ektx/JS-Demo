function factorial (x) {
	if (x < 2) return 1;
	else return x * arguments.callee(x-1);
}

console.log(factorial(5))
