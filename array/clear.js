let arr = [1,2,3]
let b = arr
// 清空数组

// 1.赋值为空数组
arr = []
// 这里b不会改变，因为arr是新赋值，更改了引用地址，b并没有变化
console.log(b) // [1,2,3]

// 2.设置长度为0
arr.length = 0
// 这里是因为b与arr都引用了相同的地址，这里修改了地址的值
console.log(b) // []

// 使用 pop 删除
while (arr.pop) {}

