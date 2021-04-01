var p = new Promise((resolve, reject) => {
    console.log(1)
    if (true) {
        setTimeout(() => {
            resolve(6)
        }, 0)
        console.log(2)
    } else {
        reject()
    }

    var pp = new Promise((resolve, reject) => {
        resolve(5)
    })

    pp.then(mes => {
        console.log(mes)
    })
    console.log(3)
})

p.then(data => {
    console.log(data)
})

setTimeout(function() {
    console.log(7)
})

console.log(4)