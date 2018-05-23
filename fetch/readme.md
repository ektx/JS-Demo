# fetch

Fetch API 是新一代的异步请求借口，它提供了与HTTP语义相同的Js语法。

## 概念和用法

> Fetch 提供了对 [`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request) 和 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response) （以及其他与网络请求有关的）对象的通用定义。使之今后可以被使用到更多地应用场景中：无论是service workers、Cache API、又或者是其他处理请求和响应的方式，甚至是任何一种需要你自己在程序中生成响应的方式。
>
> 它还提供了一种定义，将 CORS 和 HTTP 原生的头信息结合起来，取代了原来那种分离的定义。
>
> 发送请求或者获取资源，需要使用 [`GlobalFetch.fetch`](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch) 方法。它在很多接口中都被实现了，比如 [`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 和 [`WorkerGlobalScope`](https://developer.mozilla.org/zh-CN/docs/Web/API/WorkerGlobalScope)。所以在各种环境中都可以用这个方法获取到资源。
>
>  `fetch()` 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 promise 对象，resolve 对应请求的 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)。你也可以传一个可选的第二个参数`init`（参见 [`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)）。
>
> 一旦 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response) 被返回，就有一些方法可以使用了，比如定义内容或者处理方法（参见 [`Body`](https://developer.mozilla.org/zh-CN/docs/Web/API/Body)）。
>
> 你也可以通过 [`Request()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request/Request) 和 [`Response()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/Response) 的构造函数直接创建请求和响应，但是我们不建议这么做。他们应该被用于创建其他 API 的结果（比如，service workers 中的 [`FetchEvent.respondWith`](https://developer.mozilla.org/zh-CN/docs/Web/API/FetchEvent/respondWith)）。

以上引用来至 [Moz Fetch Api](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)



## 处理 body

body 可以是以下任何一种类型的实例

- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [ArrayBufferView](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) 
- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)/[File](https://developer.mozilla.org/en-US/docs/Web/API/File)
- string
- [URLSearchParams](https://url.spec.whatwg.org/#interface-urlsearchparams)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

此外，Request 和 Response 都为操作 `body` 提供了以下方法，这些方法都返回一个使用实际内容 resolve 的 Promise 对象。

- arrayBuffer()
- blob()
- json()
- text()
- formData()

```js
// 请求
var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
})

// 
fetch('/text.txt').then(res => res.text()).then(res => { console.log(res) })
```



## 参考

[Fetch API 简介](http://bubkoo.com/2015/05/08/introduction-to-fetch/)

[Moz Fetch Api](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

[fetch](https://fetch.spec.whatwg.org/)

