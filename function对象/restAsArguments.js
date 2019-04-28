// arguments 变量写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort()
}

// rest 参数方法
const sortNumbers2 = (...nums) => nums.sort()

console.log(sortNumbers(7,5,1))
console.log(sortNumbers2(7,5,1))