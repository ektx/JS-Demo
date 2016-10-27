# Layers

##### 简单的弹层.



## 使用方法

```html
<script src="jquery.js"></script>
<script src="layers.js"></script>
```

使用:

```javascript
layers.open({
	width: 600,
	height: 400,
	title: '你好!',
	resize: 'both',
	content: {
		type: 'ajax',
		inner: 'title.html'
	}
});
```



## 方法

- Layers.open(options) 打开弹层
- Layers.close(id|this)   关闭弹层



### Open options参数

| 参数      | 类型                             | 说明               |
| ------- | ------------------------------ | ---------------- |
| width   | number                         | 宽度               |
| height  | number                         | 高度               |
| title   | string                         | 标题               |
| resize  | both \| horizontal \| vertical | 可调整 高宽 \| 宽 \| 高 |
| content | object                         | 弹层内容             |
|         |                                |                  |
|         |                                |                  |

content 的设置有:

| 参数    | 类型                  | 说明                                      |
| ----- | ------------------- | --------------------------------------- |
| type  | http \| str \| ajax | 内容的                                     |
| inner | string              | 具体内容, 为 http 或 ajax 时指定一个url,为str时添加字符串 |

