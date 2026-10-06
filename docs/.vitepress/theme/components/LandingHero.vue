<template>
  <div class="lp">
    <!-- ═══════════ HERO ═══════════ -->
    <section class="sec sec-hero active">
      <div class="safe center">
        <span class="kicker up"><i class="kdot"></i>SIWX · v5.0.7 · AGPL-3.0</span>
        <h1 class="up d1">把微信 4.x 的聊天记录，<br />变成你真正能管理的个人数据。</h1>
        <p class="lead up d2">
          一个开源的本地解密与导出工具。解密 · 浏览 · 统计 · 备份 · 交给 AI，
          全程在你的电脑上完成，不上传任何数据。
        </p>
        <div class="pillrow up d3">
          <a class="btn blue" href="/guide/quickstart">快速开始 →</a>
          <a class="btn" href="https://github.com/ImUpXuu/SIWX" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn light" href="/guide/install">下载 Release</a>
        </div>
        <div class="pillrow meta up d4">
          <span class="pill">Windows 完整支持</span>
          <span class="pill">macOS 4.1.80+</span>
          <span class="pill">8 种导出格式</span>
          <span class="pill">11 个 MCP 工具</span>
          <span class="pill">零外部依赖</span>
        </div>
      </div>
    </section>

    <!-- ═══════════ UI 操作总览（App 演示） ═══════════ -->
    <section class="sec">
      <div class="safe">
        <div class="head-grid">
          <div>
            <span class="kicker up"><i class="kdot"></i>功能展示 · UI 操作</span>
            <h2 class="up d1">一页看完整控制台：左侧菜单逐项点击，右侧工作区即时切换。</h2>
            <p class="lead up d2">
              这就是实际产品的使用路径：先引导解密，再查看聊天、朋友圈、统计与导出，也可以接入 MCP、查看日志、调整设置。
            </p>
          </div>
        </div>
        <AppDemo class="up d2" />
      </div>
    </section>

    <!-- ═══════════ 核心价值 ═══════════ -->
    <section class="sec">
      <div class="safe grid2">
        <div>
          <span class="kicker up"><i class="kdot"></i>一句话价值</span>
          <h2 class="up d1">不是为了炫技，也不是为了猎奇。</h2>
          <p class="lead up d2">
            SIWX 解决的是一个很朴素的问题：自己的聊天记录，应该可以备份、迁移、检索和导出。
          </p>
        </div>
        <div class="card panel up d2">
          <div class="quote">聊天记录，应该有一扇门。</div>
          <div class="quote dim">互联网也许没有记忆，但我们可以为自己的记忆留一条路。</div>
          <div class="pillrow" style="margin-top:26px">
            <span class="pill">个人备份</span><span class="pill">本地查看</span><span class="pill">自主导出</span><span class="pill">AI 检索</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 能力总览 ═══════════ -->
    <section class="sec">
      <div class="safe">
        <span class="kicker up"><i class="kdot"></i>项目能力</span>
        <h2 class="up d1">从发现账号到 AI 查询，SIWX 覆盖完整链路。</h2>
        <div class="grid4" style="margin-top:36px">
          <div class="metric card up d1"><div><span class="num">3</span><span class="unit">步</span></div><p>欢迎检测、选择账号、一键提取并解密。</p></div>
          <div class="metric card up d2"><div><span class="num">8</span><span class="unit">种</span></div><p>JSON、HTML、TXT、CSV、Markdown、TOML、SQLite、XLSX。</p></div>
          <div class="metric card up d3"><div><span class="num">11</span><span class="unit">个</span></div><p>MCP 工具：状态、账号、会话、消息、搜索、导出、朋友圈全套。</p></div>
          <div class="metric card up d4"><div><span class="num">1</span><span class="unit">次</span></div><p>全局收割：多个账号共享一次内存扫描与联合验证。</p></div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 聊天查看 ═══════════ -->
    <section class="sec">
      <div class="safe">
        <span class="kicker up"><i class="kdot"></i>功能展示 · 聊天查看</span>
        <h2 class="up d1">把数据库重新还原成可以阅读的对话现场。</h2>
        <p class="lead up d2">会话分组、头像、滚动分页、语音 WAV、图片预览，都在一页完成。</p>
        <div class="chat chat-demo up d2">
          <aside class="c-list">
            <div class="c-top">
              <div class="fake-field mono">wxid_demo_1234</div>
              <div class="toolbar" style="margin-top:10px"><div class="fake-field">搜索会话...</div><div class="refresh">⟳</div></div>
            </div>
            <div class="sess group"><span class="ava">公</span><span class="s-name">公众号</span><span class="prev">官方账号会话 · 点击展开</span><span class="tm">17:59</span><span class="tag">展开</span></div>
            <div class="sess sel"><span class="ava">文</span><span class="s-name">文件传输助手</span><span class="prev">测试消息会解析为...</span><span class="tm">18:03</span></div>
            <div class="sess"><span class="ava">群</span><span class="s-name">示例群聊</span><span class="prev">收到，这周末对齐</span><span class="tm">17:51</span><span class="tag">群聊</span></div>
          </aside>
          <main class="c-main">
            <div class="c-head"><b>文件传输助手</b><span class="exportbtn">导出</span></div>
            <div class="msgs">
              <div class="timechip">2026-09-12 18:01</div>
              <div class="msg me"><span class="cell-a"><span class="mava">我</span></span><span class="cell-b"><span class="bubble">以下是 SIWX 的测试消息。</span></span></div>
              <div class="msg me"><span class="cell-a"><span class="mava">我</span></span><span class="cell-b"><span class="bubble">这是一段普通文本。</span></span></div>
              <div class="msg"><span class="cell-a"><span class="mava">友</span></span><span class="cell-b"><span class="bubble"><b>语音 2.4 秒</b> <span class="audio"></span></span></span></div>
              <div class="msg me"><span class="cell-a"><span class="mava">我</span></span><span class="cell-b"><span class="mimg"></span></span></div>
            </div>
          </main>
        </div>
      </div>
    </section>

    <!-- ═══════════ 多格式导出 ═══════════ -->
    <section class="sec">
      <div class="safe">
        <span class="kicker up"><i class="kdot"></i>功能展示 · 多格式导出</span>
        <h2 class="up d1">导出不是「另存为」：分片索引 + 流式写入，多年记录也不爆内存。</h2>
        <div class="export-ui up d2">
          <aside class="elist">
            <div class="etop">
              <div class="fake-field mono">wxid_demo_1234</div>
              <div class="fake-field" style="margin-top:10px">搜索会话...</div>
              <p class="small" style="margin-top:10px">全选</p>
            </div>
            <div class="esess sel"><span class="cb"></span><b>文件传输助手</b><div class="prev">测试文本和图片</div></div>
            <div class="esess"><span class="cb"></span><b>示例联系人</b><div class="prev">周末安排</div></div>
            <div class="esess sel"><span class="cb"></span><b>示例群聊</b><div class="prev">收到，这周末对齐</div></div>
          </aside>
          <div class="config">
            <div class="cfg card">
              <div class="cfg-head"><h3>导出配置</h3><span class="small">已选 2 个会话</span></div>
              <div class="cfg-grid">
                <label><div class="cfg-label">导出格式</div><div class="fake-field">HTML（自包含网页）</div></label>
                <label><div class="cfg-label">打包方式</div><div class="fake-field">单个 ZIP</div></label>
                <label><div class="cfg-label">开始日期</div><div class="fake-field">年 / 月 / 日</div></label>
                <label><div class="cfg-label">结束日期</div><div class="fake-field">年 / 月 / 日</div></label>
              </div>
              <div class="checks"><span class="checkitem">消息记录</span><span class="checkitem">媒体图片</span><span class="checkitem">语音转 WAV</span><span class="checkitem">联系人头像</span></div>
              <div class="formats"><span>JSON</span><span>HTML</span><span>TXT</span><span>CSV</span><span>MD</span><span>TOML</span><span>SQLite</span><span>XLSX</span></div>
            </div>
            <div class="cfg card">
              <h3>运行日志</h3>
              <div class="bar"><span></span></div>
              <div class="console">[export] 会话数=2 格式=html<br />[export] 消息=True 图片=True 语音=True 头像=True<br />[export] 62% 已写入 12000 条...<br />[export] 全部完成：2/2 个会话</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ MCP ═══════════ -->
    <section class="sec">
      <div class="safe grid2">
        <div>
          <span class="kicker up"><i class="kdot"></i>功能展示 · MCP</span>
          <h2 class="up d1">把聊天记录从「文件」，变成 AI 可以调用的本地工具。</h2>
          <p class="lead up d2">
            AI 不再靠你手动截图、复制粘贴，而是调用本地 MCP：先搜消息，再读上下文，最后按需要导出会话。
            朋友圈也可以交给 AI：时间线、详情、聚合与导出，五个工具全配齐。
          </p>
          <div class="card panel up d3" style="margin-top:24px">
            <h3>MCP 服务器</h3>
            <p class="caption" style="margin-top:8px">stdio 传输 · 零依赖 · 仅本地</p>
            <pre class="mono thin pre">{
  "mcpServers": {
    "stories-in-wx": {
      "command": "python",
      "args": ["run.py", "mcp"]
    }
  }
}</pre>
          </div>
        </div>
        <div class="card panel up d3">
          <h3>11 个工具</h3>
          <div class="list" style="margin-top:18px">
            <div class="rowline"><b>get_status</b><span>状态总览</span></div>
            <div class="rowline"><b>list_accounts</b><span>账号列表</span></div>
            <div class="rowline"><b>list_sessions</b><span>会话列表</span></div>
            <div class="rowline"><b>get_messages</b><span>读取消息</span></div>
            <div class="rowline"><b>search_messages</b><span>关键词搜索</span></div>
            <div class="rowline"><b>export_chat</b><span>发起导出</span></div>
            <div class="rowline"><b>list_sns_accounts</b><span>朋友圈账号</span></div>
            <div class="rowline"><b>get_sns_timeline</b><span>朋友圈时间线</span></div>
            <div class="rowline"><b>get_sns_detail</b><span>动态详情</span></div>
            <div class="rowline"><b>get_sns_friends</b><span>按发布者聚合</span></div>
            <div class="rowline"><b>export_sns</b><span>导出朋友圈</span></div>
          </div>
          <p class="caption" style="margin-top:14px">"帮我找上周关于导出失败的聊天记录。" —— MCP 页面可按需禁用单个工具。</p>
        </div>
      </div>
    </section>

    <!-- ═══════════ 整体架构 ═══════════ -->
    <section class="sec">
      <div class="safe">
        <span class="kicker up"><i class="kdot"></i>原理 · 总架构</span>
        <h2 class="up d1">用户看到的是 Web 控制台，下面是一条清楚的流水线。</h2>
        <div class="flow-scroll up d2">
          <div class="flow">
            <svg viewBox="0 0 1400 560" preserveAspectRatio="none">
              <path d="M228 258 C310 258 300 105 370 105" /><path d="M228 258 C310 258 300 410 370 410" />
              <path d="M518 105 C610 120 600 258 660 258" /><path d="M518 410 C610 390 600 258 660 258" />
              <path d="M818 258 C900 245 905 105 982 105" /><path d="M818 258 C900 300 905 410 982 410" />
              <path d="M1130 105 C1200 130 1190 258 1310 258" /><path d="M1130 410 C1200 390 1190 258 1310 258" />
            </svg>
            <div class="node n1"><b>用户入口</b><p>CLI / Web 控制台</p></div>
            <div class="node n2"><b>discover</b><p>目录发现 + 进程发现</p></div>
            <div class="node n3"><b>strategies</b><p>keystore / MMKV / Config.Cipher / memscan / LLDB</p></div>
            <div class="node n4 black"><b>verify_enc_key</b><p>page1 HMAC 统一验真</p></div>
            <div class="node n5"><b>decrypt pool</b><p>多进程页级解密</p></div>
            <div class="node n6"><b>media / voice</b><p>图片与语音按需处理</p></div>
            <div class="node n7"><b>UI / Export / MCP</b><p>浏览、导出、AI 查询</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 核心原理 + 性能 ═══════════ -->
    <section class="sec">
      <div class="safe grid2">
        <div class="code card panel up">
          <div class="scanline"></div>
          <pre>def verify_enc_key(enc_key, page1):
    salt = page1[:16]
    mac_salt = salt ^ 0x3A
    mac_key = PBKDF2_SHA512(enc_key, mac_salt, 2)
    hmac_data = page1[16 : 4032]
    stored = page1[-64:]
    hm = HMAC_SHA512(mac_key, hmac_data + pack("&lt;I", 1))
    return compare_digest(hm, stored)</pre>
        </div>
        <div>
          <span class="kicker up"><i class="kdot"></i>原理 · 验证咽喉</span>
          <h2 class="up d1">策略只负责提出候选，编排器负责统一验证。</h2>
          <p class="lead up d2">
            这就是 SIWX 的核心设计：propose / verify 分离。新增策略不用重复实现验证逻辑，
            所有候选都走同一个 HMAC 裁判——只要 page1 验证不过，任何密钥都不能进入系统。
          </p>
        </div>
      </div>
      <div class="safe grid4" style="margin-top:22px">
        <div class="pipe card up"><div class="idx">01</div><b>手写 CBC</b><p>ECB cipher 复用 + 大整数 XOR 恢复 CBC 链，减少每页重建 AES 的开销。</p></div>
        <div class="pipe card up"><div class="idx">02</div><b>多进程池</b><p>decrypt_parallel 按数据库分发任务，CPU 密集解密交给多进程。</p></div>
        <div class="pipe card up"><div class="idx">03</div><b>原子替换</b><p>先写 .part，成功后 os.replace，失败不会截断已有明文库。</p></div>
        <div class="pipe card up"><div class="idx">04</div><b>两层缓存</b><p>密钥按 salt 索引缓存，解密产物按 mtime+size+key 命中，源库未变秒回。</p></div>
      </div>
    </section>

    <!-- ═══════════ 安全边界 ═══════════ -->
    <section class="sec">
      <div class="safe grid2">
        <div>
          <span class="kicker up"><i class="kdot"></i>原理 · 边界</span>
          <h2 class="up d1">越是强调用户数据所有权，越要把使用边界讲清楚。</h2>
          <p class="lead up d2">
            SIWX 面向个人备份、迁移与研究。它不鼓励、也不服务任何未经授权访问他人数据的行为。
          </p>
        </div>
        <div class="card panel up d2">
          <div class="rowline"><b>本地 Web</b><span>仅监听 127.0.0.1</span></div>
          <div class="rowline" style="margin-top:12px"><b>进程访问</b><span>只读，无写入 / 注入</span></div>
          <div class="rowline" style="margin-top:12px"><b>日志</b><span>脱敏输出与导出</span></div>
          <div class="rowline" style="margin-top:12px"><b>密钥</b><span>DPAPI 加密，不落明文</span></div>
          <div class="rowline" style="margin-top:12px"><b>媒体</b><span>按需解密，不全量落明文</span></div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 结尾行动 ═══════════ -->
    <section class="sec">
      <div class="safe grid2">
        <div>
          <span class="kicker up"><i class="kdot"></i>SIWX</span>
          <h1 class="up d1">现在，把它跑起来。</h1>
          <p class="lead up d2">
            下载 Release，或者运行 <span class="mono">python run.py serve</span>。
            完成引导后，浏览、搜索、导出，也可以让 AI 整理你的历史上下文。
          </p>
          <div class="pillrow up d3" style="margin-top:28px">
            <a class="btn blue" href="/guide/quickstart">快速开始 →</a>
            <a class="btn" href="https://github.com/ImUpXuu/SIWX/releases" target="_blank" rel="noreferrer">下载 Release</a>
            <a class="btn light" href="/guide/intro">阅读文档</a>
          </div>
          <p class="small up d4" style="margin-top:26px">
            仅限处理本人拥有合法权限的数据 · 禁止商用 · 使用前请阅读<a href="/guide/disclaimer">免责声明</a>
          </p>
        </div>
        <div class="book card up d2">
          <div class="book-title">stories-in-wx</div>
          <div class="book-sub">local first · memory belongs to you</div>
          <div class="book-lines">
            <div class="book-line">密钥提取 <span>propose / verify</span></div>
            <div class="book-line">数据库解密 <span>SQLCipher 4</span></div>
            <div class="book-line">聊天查看 <span>分页 / 图片 / 语音</span></div>
            <div class="book-line">多格式导出 <span>JSON / HTML / SQLite / XLSX</span></div>
            <div class="book-line">AI 接管 <span>MCP stdio · 11 tools</span></div>
          </div>
          <div class="closing-quote">把时间从黑盒里，重新捞回来。</div>
          <p class="small" style="margin-top:16px">"于是我们奋力向前、逆水行舟，直至回到往昔岁月。"</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import AppDemo from './AppDemo.vue'

let io = null

onMounted(() => {
  // 各区块进入视口后触发 .active，跑一次 .up 入场与组件动画
  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('active')
        io.unobserve(e.target)
      }
    }),
    { threshold: 0.16 },
  )
  document.querySelectorAll('.lp .sec:not(.sec-hero)').forEach((el) => io.observe(el))
})

onBeforeUnmount(() => { if (io) io.disconnect() })
</script>

<style scoped>
/* ═══════════ 基调：白纸黑线编辑部风格 · 蓝色点缀 ═══════════ */
.lp {
  --ink: #0b0b0b;
  --muted: #606060;
  --soft: #f7f7f7;
  --line: #111111;
  --line2: #d8d8d8;
  --blue: #175fe0;
  --radius: 14px;
  --radius-lg: 22px;
  --shadow: 0 26px 90px rgba(0, 0, 0, 0.13);
  --ease: cubic-bezier(0.18, 0.9, 0.2, 1);
  background: #fff; color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
  overflow-x: clip;
}
.lp * { box-sizing: border-box; }

/* VitePress .vp-doc 默认样式复位（标题边线/链接色/代码底色） */
.lp h1, .lp h2, .lp h3 { border: none; padding: 0; margin: 0; }
.lp a { text-decoration: none; }

.sec { padding: 84px clamp(20px, 6vw, 84px); }
.sec-hero { padding-top: clamp(48px, 9vh, 110px); padding-bottom: 60px; }
.safe { max-width: 1240px; margin: 0 auto; }
.safe.center { display: grid; justify-items: start; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; align-items: stretch; }
.head-grid { max-width: 880px; }

h1 { font-size: clamp(40px, 5.6vw, 76px); line-height: 1.04; letter-spacing: -0.06em; font-weight: 900; max-width: 1120px; }
h2 { font-size: clamp(28px, 3.6vw, 48px); line-height: 1.12; letter-spacing: -0.045em; font-weight: 900; max-width: 1000px; }
h3 { font-size: 22px; font-weight: 900; letter-spacing: -0.02em; }
.lead { font-size: clamp(17px, 1.6vw, 22px); line-height: 1.68; color: #292929; font-weight: 600; max-width: 62ch; margin-top: 22px; }
.caption { font-size: 14px; line-height: 1.62; color: #666; }
.small { font-size: 13.5px; color: #777; }
.small a { color: var(--blue); font-weight: 700; text-decoration: underline; }
.mono { font-family: "SF Mono", Consolas, "Cascadia Code", monospace; }
.dim { color: #444; }

/* ── kicker / pill / 按钮 ── */
.kicker {
  display: inline-flex; align-items: center; gap: 10px;
  height: 34px; padding: 0 14px;
  border: 1px solid var(--line); border-radius: 999px;
  background: #fff; font-size: 14.5px; font-weight: 900; letter-spacing: 0.04em;
}
.kdot { width: 8px; height: 8px; border-radius: 50%; background: var(--blue); }
.pillrow { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
.pill { border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px; font-size: 14px; font-weight: 800; background: #fff; }
.pillrow.meta { margin-top: 30px; }
.pillrow.meta .pill { color: #555; font-weight: 700; border-color: #333; }
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 46px; border: 1px solid var(--line); border-radius: 11px;
  padding: 0 20px; font-weight: 900; font-size: 15px;
  background: var(--ink); color: #fff !important; cursor: pointer;
  transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease), background 0.2s ease;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18); }
.btn.blue { background: var(--blue); }
.btn.blue:hover { box-shadow: 0 10px 26px rgba(23, 95, 224, 0.35); }
.btn.light { background: #fff; color: var(--ink) !important; }
.sec-hero .pillrow:first-of-type { margin-top: 34px; }

/* ── 卡片 / 行线 / 引用 ── */
.card { background: #fff; border: 2px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.thin { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); }
.panel { padding: 26px; }
.quote { border-left: 5px solid var(--line); padding: 14px 0 14px 20px; font-size: clamp(22px, 2.4vw, 30px); line-height: 1.4; font-weight: 900; letter-spacing: -0.03em; }
.rowline {
  height: 52px; border: 1px solid var(--line); border-radius: 13px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 18px; font-weight: 800; background: #fff; font-size: 15px;
}
.rowline span { color: #666; font-weight: 700; font-size: 14px; }
.list { display: grid; gap: 11px; }
.metric { padding: 26px; position: relative; overflow: hidden; }
.metric .num { font-size: clamp(48px, 5vw, 66px); line-height: 0.9; letter-spacing: -0.06em; font-weight: 900; color: var(--blue); }
.metric .unit { font-size: 22px; font-weight: 900; margin-left: 6px; color: var(--ink); }
.metric p { font-size: 15.5px; line-height: 1.6; color: #555; margin-top: 16px; }
.metric::after { content: ""; position: absolute; right: -55px; bottom: -55px; width: 150px; height: 150px; border: 1px solid var(--line); border-radius: 999px; opacity: 0.1; }

/* ── 聊天演示 ── */
.chat { position: relative; height: 480px; margin-top: 30px; border: 2px solid var(--line); border-radius: 18px; display: grid; grid-template-columns: 300px 1fr; overflow: hidden; box-shadow: var(--shadow); }
.c-list { border-right: 1px solid var(--line); background: #fff; }
.c-top { padding: 14px; border-bottom: 1px solid var(--line); }
.toolbar { display: flex; gap: 8px; }
.toolbar .fake-field { flex: 1; }
.refresh { width: 40px; height: 38px; border: 1px solid var(--line); border-radius: 8px; display: grid; place-items: center; font-weight: 900; }
.fake-field { height: 38px; border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; font-size: 13px; background: #fff; display: flex; align-items: center; }
.sess { position: relative; min-height: 64px; border-bottom: 1px solid var(--line2); padding: 12px 12px 12px 62px; background: #fff; }
.sess.sel { background: var(--ink); color: #fff; }
.ava { position: absolute; left: 12px; top: 13px; width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: var(--ink); display: grid; place-items: center; font-weight: 900; }
.sess.sel .ava { background: var(--ink); color: #fff; }
.s-name { display: block; font-size: 13px; font-weight: 900; line-height: 18px; padding-right: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.prev { display: block; font-size: 12px; color: #777; line-height: 17px; margin-top: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tm { position: absolute; right: 12px; top: 12px; font-size: 11px; color: #777; }
.tag { position: absolute; right: 12px; bottom: 12px; font-size: 11px; color: #777; }
.sess.sel .prev, .sess.sel .tm { color: #ddd; }
.sess.group { background: var(--soft); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.c-main { position: relative; background: #fff; }
.c-head { height: 56px; border-bottom: 1px solid var(--line); padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; }
.c-head b { font-size: 15.5px; }
.exportbtn { border: 1px solid var(--line); border-radius: 8px; padding: 6px 12px; font-weight: 800; font-size: 13px; }
.msgs { position: absolute; left: 0; right: 0; top: 56px; bottom: 0; padding: 20px 26px; overflow: hidden; }
.timechip { text-align: center; color: #777; font-size: 11px; margin: 8px 0; }
.msg { display: table; width: 100%; margin: 9px 0; opacity: 0; }
.msg.me { direction: rtl; }
.cell-a { display: table-cell; width: 42px; vertical-align: top; }
.cell-b { display: table-cell; max-width: 540px; vertical-align: top; }
.msg.me .cell-b { direction: ltr; text-align: right; }
.mava { width: 34px; height: 34px; border: 1px solid var(--line); border-radius: 8px; display: inline-grid; place-items: center; font-size: 12px; font-weight: 900; }
.bubble { display: inline-block; border: 1px solid var(--line); border-radius: 10px; padding: 9px 12px; background: #fff; font-size: 14px; line-height: 1.55; text-align: left; white-space: pre-wrap; }
.msg.me .bubble { background: var(--ink); color: #fff; }
.mimg { width: 168px; height: 130px; border: 1px solid var(--line); border-radius: 9px; background: repeating-linear-gradient(0deg, #fff 0 16px, #f2f2f2 16px 32px); display: inline-block; }
.audio { display: inline-block; width: 120px; height: 12px; border: 1px solid currentColor; border-radius: 999px; position: relative; vertical-align: middle; }
.audio::before { content: ""; position: absolute; left: 5px; top: 4px; width: 60px; height: 2px; background: currentColor; }
.sec.active .chat-demo .msg { animation: msgIn 0.65s var(--ease) both; }
.sec.active .chat-demo .msg:nth-of-type(2) { animation-delay: 0.7s; }
.sec.active .chat-demo .msg:nth-of-type(3) { animation-delay: 1.3s; }
.sec.active .chat-demo .msg:nth-of-type(4) { animation-delay: 1.9s; }
.sec.active .chat-demo .msg:nth-of-type(5) { animation-delay: 2.5s; }
@keyframes msgIn { from { opacity: 0; transform: translateY(22px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }

/* ── 导出演示 ── */
.export-ui { height: 500px; margin-top: 30px; display: grid; grid-template-columns: 300px 1fr; gap: 18px; }
.elist { border: 2px solid var(--line); border-radius: 18px; overflow: hidden; background: #fff; }
.etop { padding: 14px; border-bottom: 1px solid var(--line); }
.esess { height: 62px; border-bottom: 1px solid var(--line2); padding: 12px 12px 12px 40px; position: relative; }
.esess b { font-size: 13.5px; }
.esess .prev { margin-top: 2px; }
.esess.sel { background: var(--ink); color: #fff; }
.esess.sel .prev { color: #ddd; }
.cb { position: absolute; left: 14px; top: 23px; width: 15px; height: 15px; border: 1px solid var(--line); background: #fff; }
.esess.sel .cb { background: #fff; }
.config { display: grid; grid-template-rows: auto 1fr; gap: 14px; min-width: 0; }
.cfg { padding: 22px; }
.cfg-head { display: flex; justify-content: space-between; align-items: center; }
.cfg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.cfg-label { font-size: 12px; font-weight: 900; color: #666; margin-bottom: 5px; }
.checks { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px; }
.checkitem { font-size: 13px; font-weight: 800; }
.formats { display: grid; grid-template-columns: repeat(8, 1fr); gap: 10px; margin-top: 16px; }
.formats span { height: 40px; border: 1px solid var(--line); border-radius: 10px; display: grid; place-items: center; font-weight: 900; font-size: 12.5px; }
.console { height: 150px; border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px; font-family: Consolas, monospace; font-size: 13px; line-height: 1.8; overflow: hidden; color: #333; }
.bar { height: 10px; border: 1px solid var(--line); border-radius: 999px; overflow: hidden; margin-top: 14px; }
.bar span { display: block; height: 100%; background: var(--blue); width: 0; }
.sec.active .bar span { animation: fillbar 5s var(--ease) 0.8s forwards; }
@keyframes fillbar { to { width: 100%; } }
.pre { padding: 14px 16px; font-size: 13px; line-height: 1.6; white-space: pre-wrap; margin-top: 14px; }

/* ── 架构流程 ── */
.flow-scroll { overflow-x: auto; margin-top: 30px; border: 2px solid var(--line); border-radius: 20px; box-shadow: var(--shadow); background: #fff; }
.flow { position: relative; height: 480px; min-width: 1080px; }
.flow svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.flow path { fill: none; stroke: var(--line); stroke-width: 2; stroke-dasharray: 10 10; stroke-linecap: round; }
.sec.active .flow path { animation: dash 3.2s linear infinite; }
@keyframes dash { to { stroke-dashoffset: -90; } }
.node { position: absolute; width: 228px; min-height: 94px; border: 2px solid var(--line); border-radius: 18px; background: #fff; padding: 16px; text-align: center; box-shadow: 0 18px 55px rgba(0, 0, 0, 0.08); }
.node b { display: block; font-size: 18px; }
.node p { font-size: 13.5px; line-height: 1.42; color: #555; margin-top: 7px; }
.node.black { background: var(--ink); }
.node.black b { color: #fff; }
.node.black p { color: #ddd; }
.n1 { left: 24px; top: 196px; }
.n2 { left: 296px; top: 56px; }
.n3 { left: 296px; top: 336px; }
.n4 { left: 584px; top: 196px; }
.n5 { left: 872px; top: 56px; }
.n6 { left: 872px; top: 336px; }
.n7 { right: 24px; top: 196px; }

/* ── 代码卡 ── */
.code { position: relative; overflow: hidden; }
.code pre { font-size: 14.5px; line-height: 1.7; white-space: pre-wrap; color: #1a1a1a; }
.scanline { position: absolute; left: 0; right: 0; top: 0; height: 80px; background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0)); opacity: 0.45; }
.sec.active .scanline { animation: scan 4s linear infinite; }
@keyframes scan { 0% { transform: translateY(-20%); } 100% { transform: translateY(420%); } }
.pipe { position: relative; padding: 24px; overflow: hidden; }
.pipe .idx { width: 42px; height: 30px; background: var(--ink); color: #fff; border-radius: 999px; display: grid; place-items: center; font-size: 14px; font-weight: 900; }
.pipe b { display: block; font-size: 22px; letter-spacing: -0.02em; margin-top: 16px; }
.pipe p { font-size: 14.5px; line-height: 1.6; color: #555; margin-top: 10px; }
.pipe::after { content: ""; position: absolute; right: -50px; bottom: -50px; width: 142px; height: 142px; border: 1px solid var(--line); border-radius: 999px; opacity: 0.1; }

/* ── 结尾 book 卡 ── */
.book { height: 100%; padding: 34px; position: relative; overflow: hidden; }
.book-title { font-size: clamp(30px, 3vw, 40px); font-weight: 900; letter-spacing: -0.045em; }
.book-sub { font-size: 16px; color: #555; font-weight: 800; margin-top: 8px; }
.book-lines { display: grid; gap: 12px; margin-top: 28px; }
.book-line { height: 52px; border: 1px solid var(--line); border-radius: 13px; display: flex; align-items: center; justify-content: space-between; padding: 0 18px; font-weight: 900; font-size: 14.5px; }
.book-line span { color: #666; font-weight: 700; font-size: 13.5px; }
.closing-quote { border-top: 1px solid var(--line); margin-top: 28px; padding-top: 20px; font-size: clamp(18px, 1.8vw, 22px); line-height: 1.5; font-weight: 900; letter-spacing: -0.02em; }

/* ── 入场动画（区块激活后触发） ── */
.up { opacity: 0; }
.sec.active .up { animation: up 0.78s var(--ease) both; }
.sec.active .d1 { animation-delay: 0.1s; }
.sec.active .d2 { animation-delay: 0.22s; }
.sec.active .d3 { animation-delay: 0.34s; }
.sec.active .d4 { animation-delay: 0.46s; }
@keyframes up { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

/* ── 响应式 ── */
@media (max-width: 980px) {
  .sec { padding: 60px 20px; }
  .grid2, .grid4 { grid-template-columns: 1fr; }
  .chat, .export-ui { grid-template-columns: 1fr; height: auto; }
  .c-list { display: none; }
  .msgs { position: static; }
  .chat { display: block; }
  .elist { display: none; }
  .flow { margin: 0 -20px; border-radius: 0; border-left: none; border-right: none; }
  .formats { grid-template-columns: repeat(4, 1fr); }
  .export-ui .config { grid-template-rows: none; }
}
@media (prefers-reduced-motion: reduce) {
  .up, .pane, .menu-marker, .msg, .bar span, .scanline, .flow path { animation: none !important; opacity: 1 !important; transform: none !important; }
}
</style>
