# 免费 IP 查询 API

1. [qqzeng](https://www.qqzeng.com/ip/)

来自: `https://ip.ainou.moe/`
端点: `https://ipapi.atto.town/iphtml/qqzeng/xxx.xxx.xxx.xxx`
响应示例:

```json
{
    "asn": 24444,
    "position": "中国 山东 东营 东营 中国移动",
    "asOrg": "Shandong Mobile Communication Company Limited",
    "fallback": "中国 山东省 青岛市, Shandong Mobile Communication Company Limited"
}
```

1. [纯真网络](https://cz88.net/)

端点(街道级): `https://cz88.net/api/cz88/ip/street?ip=xxx.xxx.xxx.xxx`
响应示例:

```json
{
    "code": 200,
    "success": true,
    "message": "操作成功",
    "data": {
        "ip": "223.71.64.155",
        "geocode": "156011001013",
        "asn": "CMNET-BEIJING-AP China Mobile Communicaitons Corporation",
        "asnCode": "AS56048",
        "iana": "中国",
        "ianaEn": "CN",
        "country": "中国",
        "province": "北京",
        "city": "北京",
        "districts": "顺义区",
        "isp": "中国移动",
        "netWorkType": "专线用户",
        "mbRate": "暂未发现",
        "score": "55",
        "honeypot": "未知",
        "locations": [
            {
                "latitude": "40.053163",
                "longitude": "116.609694",
                "radius": 280.0
            },
            {
                "latitude": "40.078899",
                "longitude": "116.587128",
                "radius": 90.0
            },
            {
                "latitude": "40.075073",
                "longitude": "116.606676",
                "radius": 320.0
            }
        ],
        "locationsBd": [
            {
                "latitude": "40.060304",
                "longitude": "116.621952",
                "radius": 280.0
            },
            {
                "latitude": "40.085675",
                "longitude": "116.599528",
                "radius": 90.0
            },
            {
                "latitude": "40.082165",
                "longitude": "116.618967",
                "radius": 320.0
            }
        ],
        "continent": "AS",
        "timezone": "+0800",
        "countryCode": "CN",
        "provinceCode": "110000",
        "cityCode": "110100",
        "districtCode": "110113",
        "vpn": false,
        "tor": false,
        "proxy": false,
        "spider": false,
        "wz": [
            {
                "rd": 280.0,
                "hash": "wx4gve2wdf9z",
                "s2": "35f108a0c7edc609",
                "h3": "8c31aa0a54131ff"
            },
            {
                "rd": 90.0,
                "hash": "wx4uj00hsbr9",
                "s2": "35f105e72ed1a1fd",
                "h3": "8c31aa18a10d1ff"
            },
            {
                "rd": 320.0,
                "hash": "wx4gvrqqhrpd",
                "s2": "35f105f8eb359053",
                "h3": "8c31aa18b1995ff"
            }
        ],
        "roaming": false,
        "icloudPrivateRelay": false
    },
    "time": "2026-05-05 09:10:08"
}
```
