# headers 安全

## x-xss-protection

#### 目的
这个header主要是用来防止浏览器中的反射性xss。

#### 参数
|配置   |说明                   |
|-------|-----------------------|
|0      |关闭对浏览器的xss防护  |
|1      |开启xss保护            |
|1; mode=block |开启xss防护并通知浏览器阻止而不是过滤用户注入的脚本 |
|1; report=http://site.com/ | 这个只有chrome和webkit内核的浏览器支持，告诉浏览器当发现疑似xss攻击的时候，将这部分数据post到指定地址|


## X-Frame-Options

#### 功能 

这个header主要用来配置哪些网站可以通过frame来加载资源。它主要是用来防止UI redressing 补偿样式攻击。IE8和firefox 18以后的版本都开始支持ALLOW-FROM。

#### 配置

|参数         | 说明                       |
|-------------|----------------------------|
| DENY        | 禁止所有的资源（本地或远程）试图通过iframe来加载其他也支持x-Frame-Options的资源 |
| SAMEORIGIN  | 只允许遵守同源策略的资源（和站点同源）通过frame加载那些受保护的资源             |
| ALLOW-FROM http://www.example.com | 允许指定的资源（必须带上协议http或https)通过frame来加载受保护的资源。这个配置只有在IE和火狐下有效。其他浏览器则默认允许任何源的资源（在X-Frame-Options没设置的情况下）|

## 参考
[header的安全配置指南](http://drops.wooyun.org/tips/1166)