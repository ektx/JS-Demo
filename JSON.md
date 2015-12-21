#JSON

## 类型
* 简单值: 可在JSON中表示字符串,数值,布尔值和null
* 对象: 对象是一种复杂的数据类型,表示的是一组无序的键值对.  
* 数组  

JSON的特点:
```javascript
{
	"name": "zwl",
	"age": 26
}
```  
1.不用声明就是  
2.没有末尾分号  
3.使用双引号  

## 参数  
### `stringify(obj, [a, b, ..], 格式)` 将JSON转换成字符串
obj: json数据
[a, b, ..]: 非过滤内容,也可以是函数
格式: 要序列化方式 

```javascript
obj = {
	"name": "zwl",
	"age": 26,
	"book": ["abc", "def"]
};
JSON.stringify(obj, ['name']) //=> {"name":"zwl"} 

JSON.stringify(obj, function(key, value) {
	switch(key) {
		case 'name': return undefined; // undefined 此属性将被忽略
		case 'age': return 5000;
		case 'book': return value.join(',')
		default: return value;
	}
}) 
//=> {"age":5000,"book":"abc,def"}
```
小技巧:  
1. 过滤所有内容: `JSON.stringify(obj, [])  //=> {}`  
2. 不过滤所有内容: `JSON.stringify(obj, '') //=> '{"name":"zwl","age":26,"book":["abc", "def"]}'`  


第3个参数是用来做格式化输出的:  
比如输出时,每个级别缩进4个空格:  
```javascript
JSON.stringify(obj, null, 4)  
obj = {
	"name": "zwl",
	"age": 26,
	"book": ["abc", "def"]
};

// 每个级别缩进前加'**'
{
**"name": "zwl",
**"age": 26,
**"book": [
****"abc",
****"def"
**]
}"  
```

格式化的字符串最多10,超出只能显示前10个
```javascript
JSON.stringify(obj, null, '**1234567890')
"{
**12345678"name": "zwl",
**12345678"age": 26,
**12345678"book": [
**12345678**12345678"abc",
**12345678**12345678"def"
**12345678]
}"```
* `parse()` 将字符串转换成JSON  

## `toJSON()` 返回自身的JSON数据格式
例如:返回`obj`中的`book` 
```javascript 
obj = {
	"name": "zwl",
	"age": 26,
	"book": ["abc", "def"],
	toJSON:function(){return this.book}
};

JSON.stringify(obj) //=> ["abc","def"] 

obj = {
	"name": "zwl",
	"age": 26,
	"book": ["abc", "def"],
	toJSON:function(){
		return {
			book:this.book
		}
	}
};
JSON.stringify(obj) //=> {"book":["abc","def"]}  
JSON.stringify(obj.book) //=> ["abc","def"]  
```

## `JSON.parse()` 

```javascript
var i = {
	"name": "zwl",
	"time": new Date(2015, 7, 25),
	"age": 26
};

var iStr = JSON.stringify(i)

var reI = JSON.parse(iStr, function(key, val) {
	if (key == "time") return new Date(val)
	else if (key == 'age') { return undefined // undefined 忽略此输出  }  
	else return val
})
// reI => object  
```  

## 总结  
`JSON.stringify()` 序列化顺序:  
1.先查询是否有`toJSON()`方法,存在则调用当前方法;没有则返回对象  
2.是否存在第二个参数,有则序列化  
3.是否有第三个参数,格式化  
4.输出  


iE7-json解析:  
[shim](https://github.com/douglascrockford/JSON-js)