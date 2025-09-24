# Programming Notes Blog

个人编程笔记博客，专注于RDMA、NCCL、NIC、AI等技术领域的深度分享。

## 功能特性

- 🏠 **Kanban主页**: 按技术标签分类展示文章
- 📱 **响应式设计**: 完美适配手机端浏览
- 🚀 **快速加载**: 基于Hugo的静态站点生成
- 🎨 **现代UI**: 简洁美观的用户界面
- 📝 **Markdown支持**: 支持丰富的Markdown语法

## 技术栈

- **静态站点生成器**: Hugo
- **部署平台**: GitHub Pages
- **主题**: 自定义Kanban主题
- **样式**: 原生CSS + 响应式设计
- **交互**: 原生JavaScript

## 本地开发

### 环境要求

- Hugo (Extended版本)
- Node.js (可选，用于依赖管理)

### 安装Hugo

```bash
# macOS
brew install hugo

# 验证安装
hugo version
```

### 启动开发服务器

```bash
# 克隆项目
git clone https://github.com/yourusername/programming-blog.git
cd programming-blog

# 启动开发服务器
hugo server --buildDrafts --bind 0.0.0.0 --port 1313
```

访问 http://localhost:1313 查看站点。

### 构建生产版本

```bash
# 构建静态文件
hugo --minify

# 输出目录: public/
```

## 内容管理

### 创建新文章

```bash
# 创建新文章
hugo new posts/your-article-name.md

# 编辑文章
vim content/posts/your-article-name.md
```

### 文章模板

```markdown
---
title: "文章标题"
date: 2024-01-01T00:00:00Z
draft: false
tags: ["RDMA", "NCCL", "NIC", "AI"]  # 选择相关标签
summary: "文章摘要，用于Kanban卡片显示"
---

# 文章内容

这里是你的文章内容...
```

### 标签系统

当前支持的标签：
- **RDMA**: 远程直接内存访问相关技术
- **NCCL**: NVIDIA集合通信库
- **NIC**: 网络接口卡性能优化
- **AI**: 人工智能和机器学习

## 部署到GitHub Pages

### 自动部署

1. Fork此仓库到你的GitHub账户
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为部署源
4. 推送代码到main分支，自动触发部署

### 手动部署

```bash
# 安装gh-pages
npm install

# 构建并部署
npm run deploy
```

## 自定义配置

### 修改站点信息

编辑 `hugo.toml` 文件：

```toml
baseURL = 'https://yourusername.github.io/programming-blog/'
title = 'Your Blog Title'
theme = 'kanban-blog'

[params]
  description = "你的博客描述"
  author = "你的名字"
```

### 修改导航菜单

在 `hugo.toml` 中的 `[menu]` 部分修改导航链接。

### 自定义样式

编辑 `static/css/style.css` 文件来自定义样式。

## 项目结构

```
programming-blog/
├── content/           # 内容文件
│   ├── posts/        # 文章目录
│   ├── contact/      # 联系页面
│   └── lab/         # 实验室页面
├── static/           # 静态资源
│   ├── css/         # 样式文件
│   └── js/          # JavaScript文件
├── themes/          # 主题文件
│   └── kanban-blog/ # 自定义主题
├── .github/         # GitHub Actions配置
├── hugo.toml        # Hugo配置文件
└── README.md        # 项目说明
```

## 贡献指南

1. Fork项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- 个人网站: [your-website.com](https://your-website.com)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
