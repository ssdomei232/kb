# Nginx 跨域配置

在 Nginx 的 server 或 location 块中添加以下配置，允许所有域名、方法和请求头的跨域请求：

```conf
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        # 允许所有域名跨域
        add_header 'Access-Control-Allow-Origin' '*' always;
        
        # 允许的 HTTP 方法
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        
        # 允许的请求头
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range' always;
        
        # 允许暴露给客户端的响应头
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
        
        # 预检请求的缓存时间（单位：秒）
        add_header 'Access-Control-Max-Age' 1728000 always;

        # 处理 OPTIONS 预检请求
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }

        # 其他代理或转发配置
        proxy_pass http://backend;
    }
}
```
