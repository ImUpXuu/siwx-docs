# siwx-docs

[SIWX](https://github.com/ImUpXuu/SIWX) 的官方文档站源码 —— VitePress 构建，部署于 Vercel。

> SIWX：把微信 4.x 的本地聊天记录与朋友圈，变成可浏览、可搜索、可导出、可交给 AI 的个人资料库。

## 本地开发

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 构建前自动执行隐私门禁扫描
npm run docs:preview  # 预览构建产物
```

## 部署（Vercel）

仓库根目录的 `vercel.json` 已声明构建命令与输出目录，导入仓库即可，无需额外配置：

- Build Command: `npm run docs:build`
- Output Directory: `docs/.vitepress/dist`

## 隐私门禁（构建强制执行）

`docs/.vitepress/check-privacy.mjs` 在每次 `build` / `dev` 前扫描全部待发布 Markdown 与页面模板，
命中真实账号标识（wxid / 手机号 / 密钥 / 邮箱 / 用户名路径）即构建失败。
规则与占位符白名单与主仓库 `CLAUDE.md` 第三节同源，改动需两边同步。

内部审计报告与研究笔记不上站：见 `config.mts` 的 `srcExclude`。

## 内容说明

- `docs/guide/` — 用户指南（安装、快速开始、控制台、朋友圈、导出、MCP、FAQ、隐私、免责声明）
- `docs/architecture.md` 等模块文档 — 与主仓库 `docs/` 保持同步（主仓库为开发基准）
- 首页宣发页组件：`docs/.vitepress/theme/components/LandingHero.vue`（纯 CSS/JS 动画，零第三方动画库）

## 许可

文档内容随 SIWX 项目采用 AGPL-3.0 许可，详见 [LICENSE](./LICENSE)。
