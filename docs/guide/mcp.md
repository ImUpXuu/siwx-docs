# MCP 接入 AI

SIWX 内置 MCP Server（stdio + JSON-RPC 2.0），让支持 MCP 的 AI 客户端直接检索与导出你的聊天记录和朋友圈。

## 接入配置

在 Web 控制台的 MCP 页面复制以下配置到你的 MCP 客户端（路径改成你自己的 run.py 所在位置）：

```json
{
  "mcpServers": {
    "stories-in-wx": {
      "command": "python",
      "args": ["G:/path/to/run.py", "mcp"]
    }
  }
}
```

MCP 页面还可以：按需禁用单个工具、查看调用日志。

## 提供的工具（11 个）

| 工具 | 作用 |
| --- | --- |
| `get_status` | 查看 SIWX 当前状态 |
| `list_accounts` | 列出已解密账号 |
| `list_sessions` | 列出某个账号下的会话 |
| `get_messages` | 读取指定会话消息 |
| `search_messages` | 搜索聊天记录 |
| `export_chat` | 导出指定聊天（可含语音） |
| `list_sns_accounts` | 列出有朋友圈数据的账号 |
| `get_sns_timeline` | 读取朋友圈时间线（支持关键词/发布者/时间范围过滤） |
| `get_sns_detail` | 读取单条朋友圈动态详情（完整评论点赞） |
| `get_sns_friends` | 按发布者聚合朋友圈动态 |
| `export_sns` | 导出朋友圈（json/markdown/txt/html，可选媒体） |

## 可以这样问 AI

- "帮我找一下和某某有关的聊天记录。"
- "总结一下这个群最近一个月讨论了什么。"
- "把某个会话导出成 Markdown。"
- "我最近发了哪些朋友圈？把上个月的朋友圈导出成 Markdown。"

::: warning 接入前请评估隐私风险
通过 MCP 将聊天记录提供给 AI 客户端时，数据会离开本工具、交由该客户端及其背后的服务提供方处理，本工具无法控制其行为。请先阅读并评估其隐私政策，再决定是否接入。完整说明见[免责声明](/guide/disclaimer)。
:::
