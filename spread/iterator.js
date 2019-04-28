let arrayLike = {
    '0': 'a',
    '1': 'b',
    length: 2
}

console.log([...Array.from(arrayLike)])