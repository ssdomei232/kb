在终端中创建的 alias 只在本次会话中有效，要持久化需要修改 `~/.bashrc`文件
```
vim ~/.bashrc
```
往里面写入你需要的 alias 即可，格式为：
```
alias xxx='sudo xxx'
```
然后运行 `source ~/.bashrc` 来**重新加载** `.bashrc` 文件