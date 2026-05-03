# rclone

## 安装

```shell
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

## 配置

```shell
rclone config
```

## 复制

```shell
# 将本地目录复制到 WebDAV 中名为 backup 的目录
rclone copy /home/source remote:backup
```

## Shell自动补全

让你的终端能自动补全 rclone 命令和远程存储名称

```shell
# zsh
sudo rclone completion zsh
source ~/.zshrc

# bash
rclone completion bash
source ~/.bashrc
```

## 挂载

```shell
# 将远端挂载到已存在的本地目录
rclone mount remote:path/to/files /path/to/local/mount

# 使用 --daemon 标志可以强制以后台模式运行
rclone mount remote:path/to/files /path/to/local/mount --daemon
```

在后台模式下运行时，用户必须手动停止挂载

```shell
# Linux
fusermount -u /path/to/local/mount
#... or on some systems
fusermount3 -u /path/to/local/mount
```

## 同步

将源同步到目标，仅对目标进行更改。通过比较文件大小、修改时间或 MD5 校验和，不会传输源和目标上已存在的相同文件。目标会被更新以匹配源，必要时会删除文件（重复对象暂未得到处理）

```shell
# 先使用 --dry-run 进行测试(会告诉你将要执行什么，但不会真正执行)
rclone sync --dry-run 源 远程:目标
# 使用 --interactive/-i 标志进行交互式执行，在执行一个关键操作（比如覆盖文件、删除文件）之前，都会暂停下来，在终端里向你提问，等待你输入 y（确认）或 n（跳过）后才会继续
# 使用 -P/--progress 标志查看实时传输统计信息
rclone sync -P --interactive 源 远程:目标
```

## 参考资料

[rclone中文站](https://rclone.cn/)
