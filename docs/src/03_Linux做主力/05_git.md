## 生成 SSH 密钥和公钥

```shell
ssh-keygen -t ed25519 -C "YOUR-EMAIL"
```

然后一路回车  
在 `~/.ssh` 下：
公钥: `id_ed25519.pub`
私钥: `id_ed25519`

## Git 设置远程使用指定端口的SSH连接

1. 在 `~/.ssh` 下创建 `config` 文件
2. 添加以下内容：

```config
Host <远程主机名或IP>
  Port <指定的SSH端口>
```

其中，<远程主机名或IP>是你要连接的远程仓库的主机名或IP地址，<指定的SSH端口>是你要使用的SSH端口号
3. 在Git仓库中使用指定端口的SSH连接（*注意**不要使用**参考链接文章中的连接方式，那是错误的*）

```shell
git remote set-url origin ssh://example.com:username/repo.git
```

## 参考

[Git 设置远程使用指定端口的SSH连接](https://geek-docs.com/git/git-questions/608_git_setting_remote_to_use_specified_port_for_ssh.html)
