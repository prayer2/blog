这个是项目是我用ai创建的，试图实现完全由ai完成代码的个人博客。

## 🛠️ 技术栈 (Vue 友好型)

1. **核心框架：Nuxt 3**
   * *为什么选它*：Nuxt 3 是 Vue 生态中最强大的全栈框架，完美支持服务端渲染 (SSR) 和静态站点生成 (SSG)。它的自动导入 (Auto-imports) 和文件路由功能能大幅减少样板代码，让 AI 专注于生成核心业务逻辑。
2. **内容物料：Nuxt Content**
   * 这是专为 Nuxt 打造的内容管理模块。它能直接读取项目里 `content/` 文件夹下的 Markdown 文档，支持在 Markdown 中直接使用 Vue 组件 (MDC 语法)。无论是渲染语法高亮、自动生成目录还是全文搜索，它都能开箱即用。
3. **样式与 UI：Tailwind CSS + Nuxt UI (或 shadcn-vue)**
   * **Tailwind CSS**：依然保留，因为 AI 对 Tailwind 的运用出神入化。
   * **Nuxt UI**：Nuxt 官方团队推出的 UI 库，深度集成 Tailwind，体积小巧且颜值极高；或者使用 **shadcn-vue**，也是目前最火的无头 UI 方案。
4. **部署托管：Vercel 或 Netlify**
   * Nuxt 3 支持零配置直接部署到这两种平台，通过 GitHub 自动构建和发布。
5. **评论系统：Giscus**
   * 基于 GitHub Discussions 的 Giscus，原生无广告。

## 🗺️ 开发路线图 (Vue 版)

### 第一阶段：基础设施搭建
* [x] 初始化 Nuxt 3 项目。
* [x] 安装并配置 `@nuxtjs/tailwindcss`。
* [x] 配置基础的项目目录结构 (如 `layouts`, `pages`, `components`)和 Git 提交。

### 第二阶段：强大的内容系统
* [x] 集成 `@nuxt/content` 模块。
* [x] 在 `content/` 目录下创建第一篇 Markdown 文章测试渲染。
* [x] 开发「博客列表页」：利用 Nuxt Content 的 API 获取文章列表、日期、摘要。
* [x] 开发「文章详情页」：渲染具体的 Markdown 正文和排版样式。

### 第三阶段：界面与体验完善
* [x] 开发全局导航栏 (Header) 包含响应式菜单。
* [x] 开发底部信息栏 (Footer)。
* [x] 借助 `@nuxtjs/color-mode` 实现浅色/深色模式切换。

### 第四阶段：功能进阶与 SEO
* [x] 优化 SEO Meta 标签。
* [x] 修改 Nuxt 配置生成 Sitemap 和 RSS。
* [x] 封装并植入 Giscus 评论组件。

### 第五阶段：部署与后续维护流
* [x] 推送代码至 GitHub，并在 Vercel 上一键部署。
* [x] 建立 AI 写文的 Markdown 模板规范。


# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
