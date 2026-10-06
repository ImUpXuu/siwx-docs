# 安装

## 环境要求

| 项目 | 要求 |
| --- | --- |
| Windows | Windows 10 / 11 x64（推荐，全功能） |
| macOS | 微信 4.1.80+，需允许 LLDB 调试 |
| 免安装运行 | 直接下载 Release 产物即可，无需安装 Python |
| 源码运行 | Python 3.10+ |

## 方式一：下载 Release（推荐）

1. 打开 [Releases](https://github.com/ImUpXuu/SIWX/releases)。
2. 下载对应平台产物：
   - Windows：`stories-in-wx-v*-windows-x64.exe`
   - macOS：`stories-in-wx-v*-macos.dmg`
3. 校验文件完整性（可选但建议）：Release 附件中的 `SHA256SUMS.txt` 记录了每个产物的 SHA-256。
4. 双击运行，程序会自动打开浏览器进入 Web 控制台。
5. 按引导页完成：欢迎检查 → 选择账号 → 提取密钥并解密。

> Windows 下若被杀毒软件拦截或误报，请将程序加入信任列表后重试（详见[常见问题](/guide/faq)）。

## 方式二：源码运行

```bash
# 1. 克隆仓库
git clone https://github.com/ImUpXuu/SIWX.git
cd SIWX

# 2. 安装依赖（Python 3.10+）
pip install -r requirements.txt

# 3. 启动 Web 控制台
python run.py serve
# 浏览器自动打开 http://127.0.0.1:8787

# 4. 或使用命令行全自动模式
python run.py auto
```

## macOS 重要说明

macOS 版使用 LLDB 捕获微信内存中的密钥：

- 密钥已缓存时通常可直接复用，速度很快。
- 密钥未缓存时，点击"提取并解密"后请在 **60 秒内重新登录微信**，确保密钥出现在内存中。
- 需要允许调试微信进程；若提示权限不足，检查终端/应用的完全磁盘访问与开发者权限。

更多 macOS 相关问题（如双击秒退、密钥 0/N）见[常见问题](/guide/faq)。

## 升级

- **自动更新**：在 Web 控制台的「设置 → 版本更新」中检测并安装。
- **手动更新**：自动更新失败时（例如安装位置特殊、跨盘移动过），直接从 [Releases](https://github.com/ImUpXuu/SIWX/releases) 下载最新产物覆盖即可。

> 升级后**不需要**重新解密：解密产物按 `mtime + size + key` 缓存，源库未变时直接复用。
