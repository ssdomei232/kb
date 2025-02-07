## 安装 gnome-shell 插件和主题
1. 安装软件
```shell
sudo apt install gnome-tweaks chrome-gnome-shell
```
2. 安装浏览器插件
在任意浏览器扩展商店（Edge需要在 Google 扩展商店）搜索 `GNOME Shell` 并安装 `GNOME Shell 集成`
3. 安装插件
进入 [extensions.gnome.org](https://extensions.gnome.org/)   
选择需要的插件安装，这里推荐 `Blur my shell`（让指定位置变透明）和 `user themes`（用于更改图标和安装你喜欢的主题）   
4. 安装主题
进入网站下载主题：   
`https://www.gnome-look.org/browse/`    
或   
`https://www.pling.com/browse?cat=124&ord=latest`   
下载的文件中一般都有 `install.sh`   
### WhiteSur 主题
我使用的是 `WhiteSur` 主题,仿 `Macos 11 Big Sur`:
1. 安装 WhiteSur Gtk Theme
```shell
git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git --depth=1
cd WhiteSur-gtk-theme
./install.sh
```
2. 安装 WhiteSur icon
```shell
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git
cd WhiteSur-icon-theme
./install.sh -b
```
3. 安装 WhiteSur cursors
```shell
git clone https://github.com/vinceliuice/WhiteSur-cursors.git
cd WhiteSur-cursors
./install.sh
```
4. 安装 WhiteSur wallpapers
```shell
git clone https://github.com/vinceliuice/WhiteSur-wallpapers.git
cd WhiteSur-wallpapers
./install-wallpapers.sh
```
进入 优化-外观 在样式处找到主题的样式并选择

## GRUB 引导主题
1. 安装主题
在 `https://www.pling.com/browse?cat=124&ord=latest` 找到主题   
大部分主题会有 `install.sh`
2. 欣赏主题   
有些系统默认不会显示 GRUB 引导项选择界面，需要更改配置来显示   
```shell
vim /etc/default/grub
```
注释 `GRUB_TIMEOUT_STYLE` 配置   
修改 `GRUB_TIMEOUT` 配置为 10 （这项配置的单位是秒，按需修改）   
3. 更新配置
```shell
sudo update-grub
```

### 推荐的主题
[KawaiiGRUB](https://github.com/Gabbar-v7/KawaiiGRUB)，[Elegant-grub2-themes](https://github.com/vinceliuice/Elegant-grub2-themes)，[minegrub-theme](https://github.com/Lxtharia/minegrub-theme)   
你还可以在 [Gorgeous-GRUB](https://github.com/Jacksaur/Gorgeous-GRUB) 中找到精美的精选主题

## 多屏壁纸
### Multi Monitors Add-On
可以选择在 [GNOME Extensions](https://extensions.gnome.org/) 上安装 Multi Monitors Add-On 插件，不过此插件已经**不兼容**最新版的 GNOME   
### HydraPaper
我选择使用 HydraPaper 来实现多屏壁纸设置：   
1. 启用Flatpak支持   
```shell
sudo apt install flatpak
```
2. 添加Flathub仓库   
```shell
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```
3. 安装HydraPaper   
```shell
flatpak install flathub org.gabmus.hydrapaper
```
4. 重启   
重启电脑后可以在应用菜单找到 HydraPaper ，默认它会使用主目录下 `图片` 文件夹中的图片   

## 参考
[Ubuntu桌面美化教程，手把手教你。含GRUB引导界面美化。](https://blog.csdn.net/2301_76911706/article/details/133000145)   
[WhiteSur主题](https://skyao.io/learning-linux-mint/docs/installation/theme/whitesur/)   
[如何进入linux的grub引导界面](https://blog.csdn.net/yjj350418592/article/details/121759907)