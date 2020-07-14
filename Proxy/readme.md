# Proxy

[toc]

# 语法

```javascript
let proxy = new Proxy(target, handler)
```

- `target` — 是要包装的对象，可以是任何东西，包括函数。
- `handler` — 代理配置：带有“陷阱”（“traps”，即拦截操作的方法）的对象。比如 `get` 陷阱用于读取 `target` 的属性，`set` 陷阱用于写入 `target` 的属性，等等。

空代理的示例：

```js
let target = {}
let proxy = new Poxy(target, {}) // 空代理配制

proxy.test = 5 // 写入proxy对象
console.log(proxy.test) // => 5
console.log(target.test) // => 5 // 代理已经赋值给target
```



# Get

> get(target, property, receiver)

读取属性时触发该方法，参数如下：

- `target` — 是目标对象，该对象被作为第一个参数传递给 `new Proxy`，
- `property` — 目标属性名，
- `receiver` — 如果目标属性是一个 getter 访问器属性，则 `receiver` 就是本次读取属性所在的 `this` 对象。通常，这就是 `proxy` 对象本身（或者，如果我们从 proxy 继承，则是从该 proxy 继承的对象）。

```js
let people = {name:'pudding'}

numbers = new Proxy(people, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return '🤣'
    }
  }
});

alert( numbers.name ); // pudding
alert( numbers.age ); // 🤣（没有这项）
```



# 参考

[proxy](https://zh.javascript.info/proxy)  