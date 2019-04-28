// 这里我们利用rest参数方法
// 将传入的内容放入 values 中
function add(...values) {
    let sum = 0

    // rest 参数将参数都形成数组形式调用
    for (let val of values) {
        sum += val
    }

    return sum
}

console.log( add(2,5,6) )
console.log( add(2,5) )