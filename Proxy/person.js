const person = {
    first: 'Bobo',
    last: 'Tom'
}

const cleverPerson = new Proxy(person, {
    get: function (target, prop) {
        if (!(prop in target)) {
            return prop.split('_').map(function (part) {
                return target[part]
            }).join(' ')
        }
    }
})

console.log(cleverPerson.first_last_last)

cleverPerson.last = 'king'
console.log(cleverPerson.first_last_last)