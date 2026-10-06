# 快速开始

## 首次使用：三步引导

启动程序后（双击 exe，或 `python run.py serve`），浏览器会自动打开 Web 控制台。按引导页完成三步：

| 步骤 | 做什么 |
| --- | --- |
| 1. 欢迎检查 | 检测微信状态、账号数量、密钥缓存与运行环境 |
| 2. 选择账号 | 从本机识别到的微信账号中选择要处理的账号 |
| 3. 提取并解密 | 自动提取密钥、解密数据库、生成可浏览数据 |

解密完成后，左侧菜单即可进入[聊天查看](/guide/webconsole)、[朋友圈](/guide/sns)、[统计](/guide/webconsole)、[导出](/guide/export)等页面。

::: tip macOS 用户注意
密钥未缓存时，点击"提取并解密"后请在 **60 秒内重新登录微信**。详见[安装 → macOS 重要说明](/guide/install#macos-重要说明)。
:::

## 命令行速查

聊天记录、朋友圈的浏览与导出都在 Web 控制台里操作；命令行只负责密钥、解密与 MCP。

```bash
python run.py auto                    # 全自动：发现 → 提密钥 → 解密
python run.py keys extract [--json]   # 仅提取密钥（--json 便于脚本消费）
python run.py keys list               # 查看密钥库（密钥打码显示）
python run.py decrypt [--db-dir X]    # 仅解密数据库
python run.py serve [--port 8787]     # 启动 Web 控制台
python run.py mcp                     # 启动 MCP Server（stdio）
python run.py doctor                  # 打印环境信息（提 issue 时粘贴）
```

完整参数说明见 [CLI 命令参考](/cli-commands)。

## 自动增量刷新

在 **设置 → 自动刷新数据库** 开启后：

- 后台调度器每隔 30 秒轮询一次；
- 满足「已开启 + 到达设定间隔 + 微信在线 + 当前无运行中任务」时，自动执行一次增量解密；
- 间隔可设为 1 ~ 1440 分钟，默认 30 分钟；
- 结果（上次运行时间、成功与否、消息）会回写到设置页，随时可见。

适合"微信长期挂着、想保持本地备份一直最新"的使用方式。

## 遇到问题？

先看[常见问题](/guide/faq)；仍解决不了时，用「设置 → 环境信息」复制打码后的环境信息提 issue。
