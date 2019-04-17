const IndexedArray = new Proxy(Array, {
    construct: function (target, [originalArray]) {
        const index = {}
        originalArray.forEach(function (item) {
            index[item.id] = item
        })

        const newArray = new target(...originalArray)

        return new Proxy(newArray, {
            get: function (target, name) {
                if (name === 'push') {
                    // item 是push传入的内容
                    return function (item) {
                        index[item.id] = item
                        return target[name].call(target, item)
                    }
                } else if (name === 'findById') {
                    return function (searchId) {
                        return index[searchId]
                    }
                }
                return target[name]
            }
        })
    }
})

const myArr = new IndexedArray([
    {
        id: 1,
        name: 'china'
    },
    {
        id: 2,
        name: 'US'
    }
])

console.log(myArr.push({id: 3, name: 'UK'}))
console.log(myArr.findById(3))