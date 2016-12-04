### 创建元素时并添加属性

```javascript
var a = $('<a></a>', {href: '#', class: 'nav link', title: 'home'})
// "<a href="#" class="nav link" title="home"></a>"
```

#### 复选框选中效果

```javascript
// 方法一
$('input[type=checkbox]').attr('checked', true);
/* 此方法对人工点过的可能有问题 */

// 方法二 (推荐)
$('input[type=checkbox]').prop('checked', true)
```

