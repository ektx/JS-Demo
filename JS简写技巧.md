# JS简写技巧

> 参考地址:
>
> [Javascript shorthand coding Techniques](https://www.sitepoint.com/shorthand-javascript-techniques/)



### 三元运算符(the Ternary Operator)

```javascript
const x = 20;
let result;
if (x > 10) {
  result = '大于10'
} else {
  result = '小于10'
}

// 建议使用
const result = x > 10 ? '大于10' : '小于10';
```



## 短声名

```javascript
let x;
let y;
let z = 3;

// 建议
let x, y, z =3;
```



### if 简写

```javascript
if (val === true)
// 简写
if (true)
  
if (val !== true) // => if (!val)
```



### For 循环

```javascript
for (let i = 0, l = array.length; i < l; i++)
// 简写
for (let index in array)
  
// or
array.forEach( (val, index, array) => {
  // ...
})
```



### 10进制指数使用

```javascript
for (let i = 0; i < 10000; i++) {}
// 简写
for (let i = 0; i < 1e4; i++) {}

// 示例
1e0 = 1;
1e1 = 10;
1e2 = 100;
```



### 对象声名 `ES6`

当新声名的名称和之前定义的变量名相同时,我们可以简写

```javascript
const obj = {x:x, y:y}
// 简写
const obj = {x, y}
```



### 箭头函数

```javascript
function sayHello(name) {
  console.log('Hello', name)
}
// 简写
sayHello = name => console.log('Hello', name)

SetTimeout(function() {
  console.log('Done')
}, 2000)
// 简写
setTimeout(() => console.log('Done'), 2000)

list.forEach(function(item) {
  console.log(item)
})
// 简写
list.forEach(item => console.log(item))
```



### 返回值

```javascript
function calcCircumference(diameter) {
  return Math.PI * diameter
}
// 简写
calcCircumference = diameter => ( Math.PI * diameter )
```



### 函数设定默认值

```javascript
function val(l, w, h) {
  if (w === undefined) w = 3;
  if (h === undefined) h = 4;
  
  // ...
}

// 简写
val = (l, w = 3, h = 4) => ( // ... )
```



### 使用字符串模板

```javascript
const welcome = 'Hello ' + world;
// 简写
const welcome = `Hello ${world}`;
```



### 使用解构

```javascript
const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require('mobx/runInAction');
// 简写
import { observable, action, runInAction } from 'mobx';

const store = this.props.store;
const form = this.props.form;
// 简写
const { store, form } = this.props;
```



### Spread Operator Shorthand

```javascript
const odd = [3,5,7];
const nums = [1,2,4].concat(odd);
// 简写
const odd = [3, 5, 7];
const nums = [1,2,4, ...odd];

// 复制数组
const arr = [1,2,3];
const arr2 = arr.slice()
// 简写
const arr = [1,2,3];
const arr2 = [...arr];

// 扩展
// 1. 数组合并2
const arr = [3,4];
const arr2 = [1,2, ...arr, 5, 6];

// 与解构结合
const {a,b,...z} = {a:1, b:2, c:3, d:4};
console.log(a) // => 1
console.log(b) // => 2
console.log(z) // => {c: 3, d: 4}

```



### Array.find

```javascript
const pets = [
  {type: 'Dog', name: 'Man'},
  {type: 'Cat', name: 'Karl'},
  {type: 'Dog', name: 'Tom'}
];

function findDog(name) {
  for(let i = 0, l = pets.length; i < l; ++i) {
    if (pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i]
    }
  }
}
// 简写
findDog = pets.find(pet => pet.typs === 'Dog' && pet.name === 'Tom');
```



### Mandatory Parameter Shorthand

```javascript
function foo(bar) {
  if (bar === undefined) {
    throw new Error('Missing parameter!')
  }
  return bar;
}

// 简写
mandatory = () => {
  throw new Error('Missing parameter!')
}
foo = (bar = mandatory()) => {
  return bar
}
```



## Double Bitwise NOT Shorthand

> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

```javascript
Math.floor(4.9) === 4;
// 简写
~~4.9 === 4
```

