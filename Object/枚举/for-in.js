let o = {
	x: 1,
	y: 2,
	txt: 'hello'
};

for (let i in o)
	console.log(i, o[i] );

o.propertyIsEnumerable( 'toString' );

for (let i in o) console.log(i, o[i] )


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

o = inherit({y: 2});
o.x = 1;

console.log(o.y)
for (let i in o) console.log(i, o[i] )
