## 配置远程访问
```shell
sudo vim /etc/systemd/system/ollama.service
```
1. 在 `[Service]` 后添加：   
```conf
Environment="OLLAMA_HOST=0.0.0.0:11434"
```
2. 重载配置：   
```shell
sudo systemctl daemon-reload
sudo systemctl restart ollama
```
