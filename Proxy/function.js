function hello() {
    return 'hello man!'
}

const funProxy = new Proxy(hello, {
    apply: function (target, thisArg, args) {
        console.log('target:', target)
        console.log('thisArg:', thisArg)
        console.log('args:', args)
        return target().toUpperCase() + '!!!'
    }
})

console.log(funProxy('ektx'))
console.log(funProxy({name: 'ektx'}))