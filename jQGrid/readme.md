# jqGrid



## setGroupHeaders 多表头设置

![示例](doc/img/multer001.png)

`setGroupHeaders` 是jqGrid用于设置多表头的功能，但是原生的功能里，最多只能有2级的，如何实现以上4级的呢？

- 在原生代码中，找到setGroupHeaders的功能，然后将以下代码替换成我们的代码:

```javascript
// 原生代码 在v5.1.1版本中第 11118 行，找到如下代码
$th.attr("rowspan", 2);

// 替换为
// 取得当前合并列数
var _rowspan = $th.attr('rowspan');
if (_rowspan) {
  _rowspan = parseInt(_rowspan)	
  $th.attr("rowspan", ++_rowspan);
} else {
  // expand the header height to two rows
  $th.attr("rowspan", 2);
}
```

- 使用，参考 __多级表头3.html__

  ```javascript
  // 主要代码
  $("#id").jqGrid("setGroupHeaders", {
      useColSpanStyle: true,
      groupHeaders: [
      {
          startColumnName: "invdate",
          numberOfColumns: 2,
          titleText: 'test'
      },
      {
          startColumnName: "amount",
          numberOfColumns: 6,
          titleText: 'Hello world'
      }
      ]
  }).jqGrid("setGroupHeaders", {
      useColSpanStyle: true,
      groupHeaders: [
      {
          startColumnName: "tax",
          numberOfColumns: 3,
          titleText: 'test'
      }
      ]
  }).jqGrid("setGroupHeaders", {
      useColSpanStyle: true,
      groupHeaders: [
      {
          startColumnName: "tax",
          numberOfColumns: 2,
          titleText: 'test'
      }
      ]
  });
  ```



## destroyGroupHeader 移除分组表头

```javascript
// 使用方法
$("#id").jqGrid('destroyGroupHeader')
```



## 参考

[官网 Blog](http://www.trirand.com/blog/)

[wiKi groupingheadar](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:groupingheadar)

[多级表格使用参考](http://stackoverflow.com/questions/18969659/adding-more-than-two-columng-group-headers-in-jqgrid)

