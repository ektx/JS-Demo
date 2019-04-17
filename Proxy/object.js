let myProxy = new Proxy({}, {
    get: function (obj, prop) {
        console.log('get:', prop)
        return obj[prop]
    },
    set: function (obj, prop, value) {
        console.log(`set: ${prop} = ${value}`)
        obj[prop] = value
    }
})

myProxy.time = 30

console.log(myProxy.time)
// 30

myProxy.str = 'apple|com'
let str = myProxy.str.split('|').reduce((a, b) => {
    return `${a}.${b}`
}, 'www')
console.log('str:', str)
console.log('myProxy.str:', myProxy.str)

