/**
 * 自定义ajax错误
 */

// 定义http url格式错误
class HttpError extends Error {
  constructor(msg) {
    super(msg)
    // 定义名称，方便错误显示
    this.name = 'HttpError'
  }
}

// 简单封装 ajax
function ajax ({options}) {
  return new Promise((resolve, reject) => {
    if (!/^http/i.test(options.url)) {
      throw new Error('请求地址格式错误')
    }
    
    let xhr = new XMLHttpRequest()

    xhr.open('GET', options.url)
    xhr.send()
    xhr.onload = function () {
      if (this.status == 200) {
      resolve(JSON.parse(this.response))
      } else {
        reject('请求失败')
      }
    }
    xhr.onerror = function () {
      reject(this)
    }
  })
}