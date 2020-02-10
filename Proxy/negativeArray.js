const negativeArray = els => new Proxy(els, {
    get: (target, propKey, receiver) => Reflect.get(
        target, 
        (+propKey < 0) ? 
            String(target.length + +propKey) : 
            propKey, 
        receiver)
})

let arr = negativeArray([1,2,3])

console.log(arr[-1]) // 3