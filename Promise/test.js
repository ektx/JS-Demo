var p = new Promise((resolve, reject) => {
    console.log(1)
    if (true) {
        setTimeout(() => {
            resolve(2)
        }, 0)
        console.log(3)
    } else {
        reject()
    }

    var pp = new Promise((resolve, reject) => {
        resolve(5)
    })

    pp.then(mes => {
        console.log(mes)
    })
    console.log(6)
})

p.then(data => {
    console.log(data)
})
console.log(4)