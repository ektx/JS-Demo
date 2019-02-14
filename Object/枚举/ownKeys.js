let o = {
    [Symbol()]: 0,
    b: 0,
    10: 0,
    2: 0,
    a: 0
};

// 返回一个数组
// 包含对象自身的所有属性,不管是属性名是Symbol或字符串，也不管是否可枚举。
console.log(Reflect.ownKeys(o))