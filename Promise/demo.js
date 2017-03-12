
let random = () => {
	return parseInt(Math.random() * 2)
}

let findDBVersion = new Promise( (resolve, reject)=> {
	console.log(0)
	if (random()) {
		resolve()
	} else {
		reject('error 1')
	}
})

// 1. 创建一个过渡表
let createToggleTable = () => {
	console.log(1)
	return new Promise( (resolve, reject) => {
		if (random()) {
			resolve()
		} else {
			reject('error 1')
		}
	})
};

// 2. 复制数据
let copyTableData = ()=> {
	console.log(2)
	return new Promise ( (resolve, reject)=> {
		if (random()) {
			resolve()
		} else {
			reject('error 2')
		}
	})
		
};

let dropOldTable = () => {
	console.log(3)
	return new Promise( (resolve, reject)=> {
		if (random()) {
			resolve()
		} else {
			reject('error 3')
		}
	})
};

let renameTable = () => {
	console.log(4)
	return new Promise((resolve, reject)=> {
		if (random()) {
			resolve()
		} else {
			reject('error 4')
		}
	})
};

let updateDBversion = ()=> {
	console.log(5)
	return new Promise( (resolve, reject)=> {
		if (random()) {
			resolve()
		} else {
			reject('error 5')
		}
	})
};


// http://liubin.org/promises-book/#chapter1-what-is-promise

findDBVersion
.then(createToggleTable)
.then(copyTableData)
.then(dropOldTable)
.then(renameTable)
.then(updateDBversion)
.catch(err=>{
	console.log(err)
})
.then(()=>{
	console.log('done')
})
