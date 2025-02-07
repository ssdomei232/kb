## 配置免密传输
1. 生成 SSH 密钥对：
```shell
ssh-keygen -t rsa
```
2. 复制公钥到远程服务器：
```shell
ssh-copy-id user@remote
```

## 通过 SSH 传输远程拷贝文件
```shell
# 从远程拉取文件到本地
rsync -av username@remote_host:/源目录/ /本地目录/

# 从本地推送文件到远程
rsync -av /本地目录/ username@remote_host:/远程目录/

# 备份机器拉取远端文件
rsync -av --delete user@remote_host:/destination 
```

## 参考资料
[rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)   
[rsync用法详解：最全面的rsync使用指南](https://blog.axiaoxin.com/post/rsync-guide/)