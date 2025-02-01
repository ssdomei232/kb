## 装后必做

1. 更新Debian源
```shell
sed -i.bak 's|^deb http://ftp.debian.org|deb https://mirrors.ustc.edu.cn|g' /etc/apt/sources.list
```
```shell
sed -i 's|^deb http://security.debian.org|deb https://mirrors.ustc.edu.cn/debian-security|g' /etc/apt/sources.list
```
2. 更新PVE软件源   

**删除默认企业源**
```shell
rm -rf /etc/apt/sources.list.d/pve-enterprise.list
```
**更换中科大源**   
```shell
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
```
3. 更新CEPH分布式源
```shell
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/ceph-quincy bookworm no-subscription" > /etc/apt/sources.list.d/ceph.list
```
```shell
sed -i.bak "s#http://download.proxmox.com/debian#https://mirrors.ustc.edu.cn/proxmox/debian#g" /usr/share/perl5/PVE/CLI/pveceph.pm
```
4. 修复https证书并更新软件源 
```shell
apt update && apt-get install -y apt-transport-https ca-certificates  --fix-missing
```
5. 更新LXC容器仓库员（CT）
```shell
sed -i.bak "s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g" /usr/share/perl5/PVE/APLInfo.pm
# 重启PVE核心守护进程，稍等下手动刷新webui 页面
systemctl restart pvedaemon
```
7. 删除无效订阅弹窗
```shell
# 重启pveproxy.service完成后，需注销PVE登录后, 重新启动浏览器
sed -Ezi.bak "s/(Ext.Msg.show\(\{\s+title: gettext\('No valid sub)/void\(\{ \/\/\1/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
```

## 参考
[PVE8.3.0折腾记（一）——PVE初次安装后更换国内源](https://blog.csdn.net/weixin_52626278/article/details/144147244)