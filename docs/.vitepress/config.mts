import { defineConfig } from 'vitepress'

// 文档站配置。
// 注意：srcExclude 只影响“哪些文档上站”，所有 md 仍受 docs/.vitepress/check-privacy.mjs
// 隐私门禁扫描（构建前执行，命中真实标识即失败）。两处红线规则与仓库 CLAUDE.md 同源。
export default defineConfig({
  lang: 'zh-CN',
  title: 'SIWX 文档',
  description:
    '微信 4.x 本地聊天记录与朋友圈的解密、浏览、统计、多格式导出与 MCP 接入。完全本地运行。',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: [
    // GitHub 浏览入口 / 文档地图（站点首页与侧边栏已承担其职责）
    'README.md',
    // 内部审计报告与研究笔记：含实测原始数据与内部待办，不上站
    '**/*audit*.md',
    'media-research.md',
    'sns-research-*.md',
    'sns-todo.md',
    'sns-implementation-guide.md',
    'wal-support-plan.md',
  ],
  head: [['meta', { name: 'robots', content: 'index,follow' }]],
  themeConfig: {
    siteTitle: 'SIWX 文档',
    nav: [
      { text: '指南', link: '/guide/intro', activeMatch: '^/guide/' },
      { text: '进阶', link: '/cli-commands', activeMatch: '^/(cli-commands|api-reference|plugin-development|module-plugins|packaging)' },
      { text: '开发者', link: '/architecture', activeMatch: '^/(architecture|module-|media-decryption-principles)' },
      { text: 'GitHub', link: 'https://github.com/ImUpXuu/SIWX' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '简介', link: '/guide/intro' },
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
        {
          text: '功能使用',
          items: [
            { text: 'Web 控制台', link: '/guide/webconsole' },
            { text: '朋友圈', link: '/guide/sns' },
            { text: '导出', link: '/guide/export' },
            { text: 'MCP 接入 AI', link: '/guide/mcp' },
          ],
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/guide/faq' },
            { text: '隐私与安全', link: '/guide/privacy' },
            { text: '免责声明', link: '/guide/disclaimer' },
          ],
        },
      ],
      '/': [
        {
          text: '进阶参考',
          collapsed: false,
          items: [
            { text: 'CLI 命令参考', link: '/cli-commands' },
            { text: 'Web API 参考', link: '/api-reference' },
            { text: '插件开发指南', link: '/plugin-development' },
            { text: '插件系统内部架构', link: '/module-plugins' },
            { text: '打包与发版', link: '/packaging' },
          ],
        },
        {
          text: '开发者',
          collapsed: false,
          items: [
            { text: '架构总览', link: '/architecture' },
            { text: '媒体解密原理', link: '/media-decryption-principles' },
          ],
        },
        {
          text: '核心链路',
          collapsed: true,
          items: [
            { text: 'extract — 编排器', link: '/module-extract' },
            { text: 'sqlcipher — 页级流式解密', link: '/module-sqlcipher' },
            { text: 'keystore — 密钥库', link: '/module-keystore' },
            { text: 'discover — 目录与进程发现', link: '/module-discover' },
            { text: 'winproc — 跨进程内存访问', link: '/module-winproc' },
            { text: 'strategies — 策略链', link: '/module-strategies' },
            { text: 'pool — 多进程解密池', link: '/module-pool' },
          ],
        },
        {
          text: '内容处理',
          collapsed: true,
          items: [
            { text: 'media — 媒体解密', link: '/module-media' },
            { text: 'sns — 朋友圈', link: '/module-sns' },
            { text: 'exporter — 导出引擎', link: '/module-exporter' },
            { text: 'html-template — HTML 导出模板', link: '/module-html-template' },
          ],
        },
        {
          text: '服务与界面',
          collapsed: true,
          items: [
            { text: 'server — Web 控制台服务', link: '/module-server' },
            { text: 'mcp — MCP 服务器', link: '/module-mcp' },
            { text: 'tui — 终端 UI', link: '/module-tui' },
            { text: 'paths — 路径管理', link: '/module-paths' },
          ],
        },
      ],
    },
    outline: { level: [2, 3], label: '本页目录' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除查询条件',
                enterToSearch: '按回车键搜索',
                displayDetails: '显示详细列表',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/ImUpXuu/siwx-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ImUpXuu/SIWX' }],
    footer: {
      message: 'AGPL-3.0 · 本项目不可商用',
      copyright: 'Copyright © 2026 UPXUU',
    },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
