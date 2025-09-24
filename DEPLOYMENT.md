# 部署指南

本指南将帮助你将编程笔记博客部署到GitHub Pages。

## 准备工作

### 1. 创建GitHub仓库

1. 登录GitHub
2. 点击右上角的"+"按钮，选择"New repository"
3. 仓库名称建议使用：`yourusername.github.io` 或 `programming-blog`
4. 设置为公开仓库
5. 不要初始化README（我们已经有了）

### 2. 配置GitHub Pages

1. 进入仓库的Settings页面
2. 滚动到"Pages"部分
3. 在"Source"下选择"GitHub Actions"
4. 保存设置

## 部署步骤

### 方法一：使用GitHub Actions（推荐）

1. **推送代码到GitHub**：
   ```bash
   # 初始化Git仓库
   git init

   # 添加远程仓库
   git remote add origin https://github.com/yourusername/your-repo-name.git

   # 添加所有文件
   git add .

   # 提交更改
   git commit -m "Initial commit: Hugo blog setup"

   # 推送到GitHub
   git push -u origin main
   ```

2. **自动部署**：
   - 推送代码后，GitHub Actions会自动开始构建
   - 构建完成后，站点会自动部署到GitHub Pages
   - 访问地址：`https://yourusername.github.io/your-repo-name/`

### 方法二：手动部署

1. **构建静态文件**：
   ```bash
   # 构建生产版本
   hugo --minify
   ```

2. **部署到gh-pages分支**：
   ```bash
   # 安装gh-pages工具
   npm install

   # 部署到GitHub Pages
   npm run deploy
   ```

## 配置自定义域名（可选）

### 1. 添加CNAME文件

```bash
# 在static目录下创建CNAME文件
echo "your-domain.com" > static/CNAME
```

### 2. 配置DNS

在你的域名提供商处添加CNAME记录：
```
CNAME www yourusername.github.io
CNAME @ yourusername.github.io
```

### 3. 更新hugo.toml

```toml
baseURL = 'https://your-domain.com/'
```

## 更新内容

### 添加新文章

1. **创建新文章**：
   ```bash
   hugo new posts/your-new-article.md
   ```

2. **编辑文章**：
   ```markdown
   ---
   title: "你的文章标题"
   date: 2024-01-01T00:00:00Z
   draft: false
   tags: ["RDMA", "NCCL", "NIC", "AI"]
   summary: "文章摘要"
   ---

   # 文章内容

   这里是你的文章内容...
   ```

3. **提交并推送**：
   ```bash
   git add .
   git commit -m "Add new article: your-new-article"
   git push origin main
   ```

### 修改页面内容

1. **编辑页面文件**：
   - 联系页面：`content/contact/_index.md`
   - 实验室页面：`content/lab/_index.md`
   - 文章列表：`content/posts/_index.md`

2. **提交更改**：
   ```bash
   git add .
   git commit -m "Update page content"
   git push origin main
   ```

## 自定义配置

### 修改站点信息

编辑 `hugo.toml`：

```toml
baseURL = 'https://yourusername.github.io/programming-blog/'
languageCode = 'zh-cn'
title = '你的博客标题'
theme = 'kanban-blog'

[params]
  description = "你的博客描述"
  author = "你的名字"
```

### 修改导航菜单

在 `hugo.toml` 中修改 `[menu]` 部分：

```toml
[menu]
  [[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 1
  [[menu.main]]
    name = "Contact"
    url = "/contact/"
    weight = 2
  [[menu.main]]
    name = "Lab"
    url = "/lab/"
    weight = 3
```

### 自定义样式

编辑 `static/css/style.css` 文件来自定义：
- 颜色主题
- 字体样式
- 布局间距
- 响应式断点

## 故障排除

### 常见问题

1. **构建失败**：
   - 检查Hugo版本是否为Extended版本
   - 确保所有文件路径正确
   - 查看GitHub Actions日志

2. **页面显示异常**：
   - 检查baseURL配置是否正确
   - 确保所有静态资源路径正确
   - 清除浏览器缓存

3. **移动端显示问题**：
   - 检查CSS媒体查询
   - 测试不同屏幕尺寸
   - 使用浏览器开发者工具调试

### 调试技巧

1. **本地测试**：
   ```bash
   # 启动开发服务器
   hugo server --buildDrafts --bind 0.0.0.0 --port 1313
   ```

2. **检查构建输出**：
   ```bash
   # 构建并检查输出
   hugo --minify --verbose
   ```

3. **验证HTML**：
   - 使用W3C HTML验证器
   - 检查控制台错误信息

## 性能优化

### 1. 图片优化

```bash
# 使用Hugo的图片处理功能
{{< figure src="image.jpg" title="图片标题" >}}
```

### 2. CSS/JS优化

```bash
# 压缩静态资源
hugo --minify
```

### 3. 缓存配置

在 `hugo.toml` 中添加：

```toml
[params]
  enableRobotsTXT = true
  enableGitInfo = true
```

## 备份和恢复

### 备份

```bash
# 创建备份分支
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

### 恢复

```bash
# 从备份分支恢复
git checkout backup-20240101
git checkout main
git merge backup-20240101
```

## 监控和分析

### 1. 添加Google Analytics

在 `themes/kanban-blog/layouts/_default/baseof.html` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. 添加搜索功能

考虑集成Algolia或Lunr.js搜索功能。

## 总结

通过以上步骤，你的编程笔记博客应该已经成功部署到GitHub Pages。记住定期备份你的内容，并保持Hugo和依赖项的更新。

如有问题，请查看：
- [Hugo官方文档](https://gohugo.io/documentation/)
- [GitHub Pages文档](https://docs.github.com/en/pages)
- [项目README](README.md)
