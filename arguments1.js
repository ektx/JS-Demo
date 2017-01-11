// 使用Arguments 对象来检查传入参数个数的正确性
function check(args) {
	// debugger
	// 传入参数个数
	let actual = args.length;
	let expected = args.callee.length;
	if (actual != expected) {
		throw new Error(`参数个数有误:期望值:${expected};实际值:${actual}`);
	}

}

function f(x,y,z) {
	check(arguments);
	return x + y + z;
}

f(1,2,3)

f(1,2)