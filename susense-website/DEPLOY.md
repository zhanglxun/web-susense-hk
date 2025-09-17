# OSS 静态网站部署指南

## 📁 静态文件位置

静态导出完成后，所有文件都在 `out/` 目录中：

```
out/
├── index.html          # 主页
├── 404.html           # 404 页面
├── favicon.ico        # 网站图标
├── _next/             # Next.js 静态资源
│   └── static/        # JS/CSS 文件
└── images/            # 图片资源
    ├── cases/         # 案例图片
    ├── clients/       # 客户 Logo
    ├── services/      # 服务图标
    └── team/          # 团队图标
```

## 🚀 部署方法

### 方法一：使用提供的脚本（推荐）

1. **安装 OSS SDK**：
   ```bash
   npm install ali-oss
   ```

2. **设置环境变量**：
   ```bash
   export OSS_ACCESS_KEY_ID=your_access_key_id
   export OSS_ACCESS_KEY_SECRET=your_access_key_secret
   export OSS_BUCKET_NAME=your_bucket_name
   ```

3. **运行部署脚本**：
   ```bash
   node deploy-to-oss.js
   ```

### 方法二：手动上传

1. **使用阿里云控制台**：
   - 登录阿里云 OSS 控制台
   - 选择您的存储桶
   - 点击"上传文件"
   - 选择整个 `out/` 目录进行上传

2. **使用 OSS 命令行工具**：
   ```bash
   # 安装 ossutil
   # 配置 ossutil
   ossutil config
   
   # 上传文件
   ossutil cp -r out/ oss://your-bucket-name/
   ```

## ⚙️ OSS 配置要求

### 1. 静态网站托管设置

在 OSS 控制台中启用静态网站托管：

- **默认首页**：`index.html`
- **默认 404 页**：`404.html`
- **索引文档**：`index.html`

### 2. 跨域设置（CORS）

如果需要跨域访问，请在 OSS 中配置 CORS：

```json
{
  "AllowedOrigins": ["*"],
  "AllowedMethods": ["GET", "HEAD"],
  "AllowedHeaders": ["*"],
  "ExposeHeaders": ["ETag", "x-oss-request-id"],
  "MaxAgeSeconds": 3600
}
```

### 3. 缓存设置

为不同类型的文件设置合适的缓存策略：

- **HTML 文件**：缓存 0 秒（实时更新）
- **CSS/JS 文件**：缓存 1 年
- **图片文件**：缓存 1 年

## 🔧 自定义配置

### 修改资源路径

如果您的 OSS 域名不是默认的，可以修改 `next.config.ts` 中的 `assetPrefix`：

```typescript
assetPrefix: 'https://your-custom-domain.com',
```

### 环境变量配置

创建 `.env.local` 文件：

```bash
# OSS 配置
OSS_ACCESS_KEY_ID=your_access_key_id
OSS_ACCESS_KEY_SECRET=your_access_key_secret
OSS_BUCKET_NAME=your_bucket_name
OSS_REGION=oss-cn-hangzhou

# 自定义域名（可选）
NEXT_PUBLIC_ASSET_PREFIX=https://your-domain.com
```

## 📊 性能优化建议

1. **启用 CDN**：将 OSS 与 CDN 结合使用
2. **压缩文件**：启用 Gzip 压缩
3. **缓存策略**：合理设置缓存时间
4. **HTTPS**：使用 HTTPS 访问

## 🐛 常见问题

### Q: 上传后页面显示空白？
A: 检查是否正确设置了静态网站托管，确保默认首页设置为 `index.html`

### Q: 图片无法显示？
A: 检查图片路径是否正确，确保 `images/` 目录完整上传

### Q: 样式文件加载失败？
A: 检查 `_next/static/` 目录是否完整上传

## 📞 技术支持

如有问题，请检查：
1. OSS 权限配置
2. 静态网站托管设置
3. 文件上传完整性
4. 浏览器控制台错误信息
