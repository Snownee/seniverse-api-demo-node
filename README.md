# seniverse-api-demo-node
Seniverse Weather API Demo without signature verification

# Node.js 调用 API 实例

## 使用更不安全的key验证方式

## 运行

```bash
$ npm install
# 修改 index.js 文件中的 UID 和 KEY

# 获取北京实况天气
$ node index.js
```

## 参数说明

### 所查询的位置

查询的城市支持如下参数形式：

- 城市ID 例如：`location=WX4FBXXFKE4F`
- 城市中文名 例如：`location=北京`
- 省市名称组合 例如：`location=辽宁朝阳`、`location=北京朝阳`
- 城市拼音/英文名 例如：`location=beijing`（如拼音相同城市，可在之前加省份和空格，例：shanxi yulin）
- 经纬度 例如：`location=39.93:116.40`（纬度前经度在后，冒号分隔）
- IP地址 例如：`location=220.181.111.86`（某些IP地址可能无法定位到城市）
- "ip"两个字母 自动识别请求IP地址，例如：`location=ip`
