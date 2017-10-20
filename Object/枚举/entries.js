let o = {
	x: 1,
	y: 2,
	txt: 'hello'
};


for(let [key, value] of Object.entries(o)) {
    console.log(key, value);
}