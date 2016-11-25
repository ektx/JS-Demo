# Js异常

- ReferenceError 作用域判别失败相关
- TypeError 作用域判别成功,但对结果的操作不合理或非法

## 错误重现

```javascript
// 在控制台中访问没有定义的变量
console.log(abc);
// => ReferenceError

var a = 0;
a.c //=> TypeError
```



