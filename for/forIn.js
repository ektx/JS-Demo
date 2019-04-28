var arr = [1, 2, 3, 4, 5];
var obj = { "color": "blue", "app": "myos", "love": "小布丁" }

// 遍历数组时，参数是索引
for (let index in arr) {
    console.log(index)
}

// 遍历对象时，参数是key
for (let key in obj) {
    console.log(key)
}
