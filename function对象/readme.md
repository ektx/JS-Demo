# Function

[toc]

## 静态方法

> 类（class）通过 **static** 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。
>
> 引用至 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static)

```js
// ES 6
class Demo {
  // 定义一个静态方法 hello
  static hello() {
    return `static method has been called.` 
  }
}

// 调用静态方法
Demo.hello() // => 'static method has been called'
```

## Arguments

arguments 以数组的形式记录了调用函数的参数信息。

```js
function demo() {
  console.log(arguments)
}

demo(1,2) // Arguments(2) [1,2, ...]
```

### arguments.callee.name

返回当前函数名。

```js
function hi() {
  console.log(arguments.callee.name)
}

hi() // => hi
```

### arguments.callee.caller.name

返回调用当前函数名。

```js
function demo() {
  // 返回调用 demo 的函数
  console.log(arguments.callee.caller.name)
}

(function hi() {
  demo()
})() // => hi
```



