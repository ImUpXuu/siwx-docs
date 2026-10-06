<template>
  <div class="demo" :class="{ interacted }">
    <!-- ═══ 侧栏（复刻 siwx/ui 壳层） ═══ -->
    <aside class="side" ref="sideEl">
      <div class="brand">
        <span class="logo">✦</span>
        <span class="brand-name">stories</span><span class="brand-dim">-in-</span><span class="brand-name">wx</span>
      </div>
      <nav class="menu">
        <a
          v-for="m in PAGES"
          :key="m.key"
          :class="{ on: active === m.key }"
          @click="go(m.key)"
        >
          <span class="ico" v-html="m.icon"></span><span>{{ m.label }}</span>
        </a>
      </nav>
      <span class="menu-marker" :style="markerStyle" aria-hidden="true"><i :key="pulseN" class="ring"></i></span>
      <div class="side-foot">
        <span class="mini">微信：运行中 · 本地模式</span>
        <button class="mini-btn" title="免责声明">⚖</button>
        <button class="mini-btn" title="切换主题">☾</button>
      </div>
    </aside>

    <!-- ═══ 工作区 ═══ -->
    <main class="view">
      <transition name="vp" mode="out-in">
        <div class="vp" :key="active">

          <!-- ── 引导设置 ── -->
          <template v-if="active === 'guide'">
            <div class="g-steps">
              <span class="g-chip on">1 欢迎</span><span class="g-chip">2 选号</span><span class="g-chip">3 提取并解密</span>
            </div>
            <div class="card g-screen">
              <span class="step-tag">引导 · 1/3</span>
              <h2 class="v-title">欢迎使用 stories-in-wx</h2>
              <p class="dim g-desc">三步完成配置：选择微信号 → 一键提取密钥并解密 → 进入主界面。<br />全程只读扫描微信进程，无需管理员；密钥经 DPAPI 加密保存，结果全部缓存。</p>
              <div class="g-check mono">
                <div><b class="ok">✓</b> 微信：运行中（本机检测到 1 个账号目录）</div>
                <div><b class="ok">✓</b> 数据目录：D:\xwechat_files\wxid_demo_1234\db_storage</div>
                <div><b class="ok">✓</b> 密钥缓存：32 条（重跑秒回）</div>
                <div><b class="ok">✓</b> 运行环境：Windows · Python 3.12 · 全部依赖就绪</div>
              </div>
              <div class="g-manual">
                <div class="g-manual-title">没有扫到目录？在这里直接指定微信数据目录</div>
                <div class="g-manual-row">
                  <span class="fake-input mono">例如: D:\xwechat_files\wxid_demo_1234\db_storage</span>
                  <span class="btn-sm black">保存目录</span>
                </div>
              </div>
              <div class="g-nav"><span class="btn black">开始配置 →</span></div>
            </div>
          </template>

          <!-- ── 聊天查看 ── -->
          <template v-else-if="active === 'chat'">
            <div class="chat">
              <aside class="c-list">
                <div class="c-top">
                  <div class="fake-field mono">wxid_demo_1234</div>
                  <div class="toolbar"><span class="fake-field grow">搜索会话…</span><span class="refresh">⟳</span></div>
                </div>
                <div
                  v-for="s in sessions"
                  :key="s.name"
                  class="sess"
                  :class="{ sel: sel === s.name, group: s.group }"
                  @click="sel = s.name"
                >
                  <span class="ava">{{ s.ini }}</span>
                  <span class="name">{{ s.name }}<template v-if="s.group">  +</template></span>
                  <span class="prev">{{ s.prev }}</span>
                  <span class="tm">{{ s.tm }}</span>
                  <span v-if="s.tag" class="tag">{{ s.tag }}</span>
                </div>
              </aside>
              <section class="c-main">
                <div class="c-head">
                  <span class="c-back">←</span>
                  <b class="c-title">{{ sel }}</b>
                  <span class="c-actions">
                    <span class="act">选择</span><span class="act">统计</span><span class="act primary">导出</span>
                  </span>
                </div>
                <div class="c-msgs">
                  <div class="timechip">2026-09-12 18:01</div>
                  <div class="m-row me"><span class="cell-ava"><span class="m-ava">我</span></span><span class="cell-body"><span class="m-bubble">以下是 SIWX 的测试消息。</span></span></div>
                  <div class="m-row me"><span class="cell-ava"><span class="m-ava">我</span></span><span class="cell-body"><span class="m-bubble">这是一段普通文本。</span></span></div>
                  <div class="m-row"><span class="cell-ava"><span class="m-ava">友</span></span><span class="cell-body"><span class="m-bubble voice"><b>语音 2.4 秒</b><span class="v-wave"><i v-for="(h, i) in VBAR" :key="i" :style="{ height: h + 'px' }"></i></span><u>下载 SILK</u></span></span></div>
                  <div class="m-row me"><span class="cell-ava"><span class="m-ava">我</span></span><span class="cell-body"><span class="m-img"></span></span></div>
                  <div class="m-row sys"><span class="m-bubble sys-line">— 已解密 · 本地渲染 · 滚动加载更多 —</span></div>
                </div>
              </section>
            </div>
          </template>

          <!-- ── 朋友圈 ── -->
          <template v-else-if="active === 'sns'">
            <div class="sns">
              <header class="sns-hero"><span class="sns-cover"></span><span class="sns-ava">我</span><span class="sns-name">我</span></header>
              <div class="sns-bar">
                <span class="fake-field grow">🔍 搜索朋友圈内容、标题、歌手、视频号…</span>
                <span class="sns-chip on">🗓 全部时间</span>
                <span class="sns-chip">👤 全部发布者</span>
              </div>
              <div class="sns-feed">
                <div class="sns-card" v-for="p in posts" :key="p.name">
                  <span class="sns-ava sm">{{ p.ini }}</span>
                  <div class="sns-body">
                    <b>{{ p.name }}</b>
                    <p>{{ p.text }}</p>
                    <div class="sns-imgs"><span v-for="i in p.imgs" :key="i"></span></div>
                    <div class="sns-foot"><span>{{ p.time }}</span><span>♡ {{ p.like }} · 💬 {{ p.cmt }}<template v-if="p.live"> · 实况</template></span></div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- ── 聊天统计 ── -->
          <template v-else-if="active === 'stats'">
            <div class="st">
              <div class="st-bar">
                <span class="st-label">统计账号</span><span class="fake-field mono">wxid_demo_1234</span>
                <span class="st-label">时间范围</span><span class="fake-field">最近一年</span>
                <span class="btn-sm black">⟳ 重新统计</span>
              </div>
              <div class="st-tiles">
                <div class="tile" v-for="t in tiles" :key="t.label"><b>{{ t.value }}</b><span>{{ t.label }}</span></div>
              </div>
              <div class="card st-card">
                <b class="v-sub">月度趋势</b>
                <div class="st-bars"><span v-for="(h, i) in MBARS" :key="i" :style="{ height: h + '%' }"></span></div>
              </div>
              <div class="card st-card">
                <b class="v-sub">私聊发送者排行</b>
                <div class="rowline"><b>示例联系人 A</b><span>3,204 条</span></div>
                <div class="rowline" style="margin-top:10px"><b>示例联系人 B</b><span>2,177 条</span></div>
                <div class="rowline" style="margin-top:10px"><b>示例群聊</b><span>1,988 条</span></div>
              </div>
            </div>
          </template>

          <!-- ── 导出 ── -->
          <template v-else-if="active === 'export'">
            <div class="export">
              <aside class="e-list">
                <div class="e-top">
                  <div class="fake-field mono">wxid_demo_1234</div>
                  <div class="fake-field" style="margin-top:8px">搜索会话…</div>
                  <label class="e-selall"><span class="cb on"></span> 全选</label>
                </div>
                <div v-for="s in esessions" :key="s.name" class="esess" :class="{ sel: s.on }" @click="s.on = !s.on">
                  <span class="cb" :class="{ on: s.on }"></span>
                  <b>{{ s.name }}</b><span class="prev">{{ s.prev }}</span>
                </div>
              </aside>
              <section class="e-side">
                <div class="card">
                  <div class="card-head"><h3>导出配置</h3><span class="hint">已选 2 个会话</span></div>
                  <div class="f-grid2">
                    <label>导出格式<span class="fake-field">HTML（自包含网页）</span></label>
                    <label>打包方式<span class="fake-field">单个 ZIP</span></label>
                    <label>开始日期<span class="fake-field">年 / 月 / 日</span></label>
                    <label>结束日期<span class="fake-field">年 / 月 / 日</span></label>
                  </div>
                  <div class="f-checks">
                    <span class="f-chk on">💬 消息记录</span>
                    <span class="f-chk">🖼 媒体图片（按需解密）</span>
                    <span class="f-chk on">🎤 语音（转 WAV）</span>
                    <span class="f-chk">👤 联系人头像</span>
                  </div>
                  <div class="g-nav"><span class="btn black">📦 开始导出</span></div>
                </div>
                <div class="card">
                  <div class="progress"><span class="bar-fill"></span></div>
                  <div class="console mono">[export] 会话数=2 格式=html<br />[export] 消息=True 图片=True 语音=True 头像=True<br />[export] 62% 已写入 12000 条...<br />[export] 全部完成：2/2 个会话</div>
                </div>
              </section>
            </div>
          </template>

          <!-- ── MCP ── -->
          <template v-else-if="active === 'mcp'">
            <div class="mcp">
              <section class="mcp-main">
                <div class="card">
                  <div class="card-head"><h3>MCP 服务器</h3><span class="hint">stdio 传输 · 零依赖 · 仅本地</span></div>
                  <div class="m-label">启动命令</div>
                  <div class="codebox mono">python run.py mcp<span class="copy">复制</span></div>
                  <div class="m-label">客户端配置（mcpServers JSON）</div>
                  <pre class="codebox mono json">{
  "mcpServers": {
    "stories-in-wx": { "command": "python", "args": ["run.py", "mcp"] }
  }
}</pre>
                </div>
                <div class="card">
                  <div class="card-head"><h3>工具开关</h3><span class="hint">点击可切换</span></div>
                  <div class="rowline" v-for="t in tools" :key="t.name">
                    <b class="mono">{{ t.name }}</b>
                    <span class="tgl" :class="{ off: !t.on }" @click="t.on = !t.on">{{ t.on ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </section>
            </div>
          </template>

          <!-- ── 日志 ── -->
          <template v-else-if="active === 'logs'">
            <div class="logs">
              <div class="logs-bar"><span class="seg"><i class="on">粗略</i><i>详细</i></span><span class="btn-sm">脱敏导出</span><span class="btn-sm">清屏</span></div>
              <div class="card logbox mono">
                <div><i class="tm2">15:45:30</i> [INFO] [job] 全自动: 输出目录=output</div>
                <div><i class="tm2">15:45:31</i> [INFO] [extract] 收集到 32 个数据库文件</div>
                <div><i class="tm2">15:45:32</i> [INFO] [keystore] 密钥缓存全覆盖，跳过内存扫描</div>
                <div><i class="tm2">15:45:33</i> [INFO] [decrypt] 缓存命中，秒回 32/32</div>
                <div><i class="tm2">15:45:40</i> [INFO] [mcp] tools/list → 11 tools（2 个已禁用）</div>
                <div><i class="tm2">15:45:52</i> [INFO] [export] 62% 已写入 12000 条</div>
                <div><i class="tm2">15:46:03</i> [WARN] [media] 3 张图 CDN 侧 404（已留痕）</div>
                <div><i class="tm2">15:46:05</i> [INFO] [job] 完成，耗时 35.2s</div>
              </div>
            </div>
          </template>

          <!-- ── 设置 ── -->
          <template v-else>
            <div class="settings">
              <div class="card">
                <div class="rowline"><b>版本</b><span>v5.0.7 · 最新 <u style="margin-left:6px">检查更新</u></span></div>
                <div class="rowline" style="margin-top:10px"><b>日志模式</b><span class="seg"><i class="on">粗略</i><i>详细</i></span></div>
                <div class="rowline" style="margin-top:10px"><b>自动刷新数据库</b><span>已开启 · 每 30 分钟</span></div>
                <div class="rowline" style="margin-top:10px"><b>脱敏导出</b><span>开启（日志页可用）</span></div>
                <div class="rowline" style="margin-top:10px"><b>环境信息</b><span><u>📋 复制环境信息</u>（路径已打码）</span></div>
                <div class="rowline" style="margin-top:10px"><b>缓存状态</b><span>32 库 · 556 MB <u style="margin-left:6px">清除缓存</u></span></div>
              </div>
            </div>
          </template>
        </div>
      </transition>

      <span class="demo-hint">☝ 可交互演示 —— 点击左侧菜单、会话、开关试试</span>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

const SVG = {
  guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.1 4.9-4.9 2.1 2.1-4.9z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v4l5-4h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/></svg>',
  sns: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 2.8 3 15.2 0 18M12 3c-3 2.8-3 15.2 0 18"/></svg>',
  stats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M7 21v-8M12 21V5M17 21V10"/></svg>',
  export: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  mcp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 13.5a4.6 4.6 0 0 0 6.5 0l2.3-2.3a4.6 4.6 0 1 0-6.5-6.5l-1.2 1.2"/><path d="M13.5 10.5a4.6 4.6 0 0 0-6.5 0l-2.3 2.3a4.6 4.6 0 1 0 6.5 6.5l1.2-1.2"/></svg>',
  logs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 6H21M8.5 12H21M8.5 18H21"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 6h-6M9 6H3M21 12h-9M6 12H3M21 18h-3M12 18H3"/><circle cx="12" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="15" cy="18" r="2"/></svg>',
}

const PAGES = [
  { key: 'guide', label: '引导设置', icon: SVG.guide },
  { key: 'chat', label: '聊天查看', icon: SVG.chat },
  { key: 'sns', label: '朋友圈', icon: SVG.sns },
  { key: 'stats', label: '聊天统计', icon: SVG.stats },
  { key: 'export', label: '导出', icon: SVG.export },
  { key: 'mcp', label: 'MCP', icon: SVG.mcp },
  { key: 'logs', label: '日志', icon: SVG.logs },
  { key: 'settings', label: '设置', icon: SVG.settings },
]

const active = ref('chat')
const interacted = ref(false)
let timer = null
let ti = 1 // 从 chat 后一项继续巡检

/* 假光标：吸附到当前巡检的菜单项，带点击波纹；用户点击后隐藏 */
const sideEl = ref(null)
const markerXY = ref({ x: -40, y: 0 })
const pulseN = ref(0)
const markerStyle = computed(() => ({
  transform: `translate(${markerXY.value.x}px, ${markerXY.value.y}px) translate(-50%, -50%)`,
}))

function updateMarker() {
  const side = sideEl.value
  const el = side?.querySelector('.menu a.on')
  if (!side || !el) return
  const s = side.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  markerXY.value = { x: r.right - s.left - 16, y: r.top - s.top + r.height / 2 }
  pulseN.value++
}

watch(active, () => nextTick(updateMarker))

function go(key) {
  active.value = key
  interacted.value = true
  if (timer) { clearInterval(timer); timer = null }
}

onMounted(() => {
  // 自动巡检演示；用户一旦点击即接管
  timer = setInterval(() => {
    if (interacted.value) return
    active.value = PAGES[ti % PAGES.length].key
    ti++
  }, 6500)
  nextTick(updateMarker)
  window.addEventListener('resize', updateMarker)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  window.removeEventListener('resize', updateMarker)
})

/* 聊天演示数据（占位） */
const sessions = [
  { name: '公众号', ini: '公', prev: '官方账号会话 · 点击展开', tm: '17:59', tag: '展开', group: true },
  { name: '文件传输助手', ini: '文', prev: '以下是 SIWX 的测试消息。', tm: '18:03' },
  { name: '示例群聊', ini: '群', prev: '收到，这周末对齐', tm: '17:51', tag: '群聊' },
  { name: '示例联系人', ini: '联', prev: '好的，明天发你', tm: '16:40' },
]
const sel = ref('文件传输助手')
const VBAR = [5, 9, 7, 11, 6, 10, 12, 7, 9, 11, 5, 10, 8]

/* 朋友圈演示数据（占位） */
const posts = [
  { name: '示例好友', ini: '友', text: '周末的 Outputs，天台上风很大，但云很好看。', imgs: 2, time: '昨天 21:47', like: 12, cmt: 3 },
  { name: '我', ini: '我', text: '备份完成：5684 条动态全部归档 ✓', imgs: 1, time: '10-02 14:20', like: 27, cmt: 8, live: true },
]

/* 统计演示数据（占位） */
const tiles = [
  { value: '12,480', label: '总消息量' },
  { value: '208', label: '会话数' },
  { value: '1,872', label: '图片' },
  { value: '314', label: '语音' },
]
const MBARS = [38, 52, 44, 66, 58, 74, 62, 88, 71, 96]

/* 导出 / MCP 演示数据（占位，可交互） */
const esessions = reactive([
  { name: '文件传输助手', prev: '测试文本和图片', on: true },
  { name: '示例联系人', prev: '周末安排', on: false },
  { name: '示例群聊', prev: '收到，这周末对齐', on: true },
])
const tools = reactive([
  { name: 'get_status', on: true },
  { name: 'list_accounts', on: true },
  { name: 'list_sessions', on: true },
  { name: 'get_messages', on: true },
  { name: 'search_messages', on: true },
  { name: 'export_chat', on: true },
  { name: 'list_sns_accounts', on: true },
  { name: 'get_sns_timeline', on: true },
  { name: 'get_sns_detail', on: true },
  { name: 'get_sns_friends', on: false },
  { name: 'export_sns', on: true },
])
</script>

<style scoped>
/* ═══ 复刻 siwx/ui 令牌 ═══ */
.demo {
  --line: #111; --line-soft: #d8d8d8; --text: #111; --muted: #5f5f5f;
  --card: #fff; --card-alt: #f7f7f7; --canvas: #f5f5f5;
  --green: #95ec69; --green-line: #7ed957; --green-deep: #07c160;
  --radius: 10px; --radius-sm: 8px;
  --ease: cubic-bezier(0.18, 0.9, 0.2, 1);
  position: relative; display: flex; height: 600px;
  border: 2px solid var(--line); border-radius: 20px;
  background: var(--card); overflow: hidden;
  box-shadow: 0 26px 90px rgba(0, 0, 0, 0.13);
  font-size: 13.5px; color: var(--text);
  text-align: left;
}
.demo * { box-sizing: border-box; }

/* ── 侧栏 ── */
.side { position: relative; width: 218px; flex: none; display: flex; flex-direction: column; border-right: 1px solid var(--line); padding: 16px 12px; background: var(--card); }
.brand { display: flex; align-items: center; gap: 6px; padding: 2px 6px 18px; }
.logo { width: 30px; height: 30px; border-radius: var(--radius-sm); flex: none; background: var(--text); color: var(--card); font-size: 13px; font-weight: 700; display: grid; place-items: center; }
.brand-name { font-size: 15px; font-weight: 700; }
.brand-dim { font-size: 15px; font-weight: 400; color: var(--muted); }
.menu { display: flex; flex-direction: column; gap: 5px; }
.menu a { display: flex; align-items: center; gap: 9px; min-height: 38px; padding: 8px 11px; border-radius: var(--radius-sm); font-weight: 500; border: 1px solid transparent; cursor: pointer; transition: background 0.12s ease, border-color 0.12s ease; }
.menu a:hover { background: var(--card-alt); border-color: var(--line); }
.menu a.on { background: var(--text); color: var(--card); border-color: var(--text); font-weight: 700; }
.menu .ico { width: 18px; text-align: center; }
.menu .ico :deep(svg) { width: 17px; height: 17px; display: block; margin: 0 auto; }
.side-foot { margin-top: auto; display: flex; align-items: center; gap: 7px; border-top: 1px solid var(--line); padding-top: 12px; }
.mini { font-size: 11.5px; color: var(--muted); flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-btn { border: 1px solid var(--line); background: var(--card); color: var(--text); border-radius: var(--radius-sm); padding: 4px 9px; font-size: 12px; cursor: pointer; }

/* ── 工作区 ── */
.view { flex: 1; min-width: 0; position: relative; overflow: hidden; }
.vp { position: absolute; inset: 0; padding: 18px; overflow-y: auto; scrollbar-width: thin; }
.vp-enter-active, .vp-leave-active { transition: opacity 0.22s ease, transform 0.28s var(--ease); }
.vp-enter-from { opacity: 0; transform: translateX(14px); }
.vp-leave-to { opacity: 0; transform: translateX(-10px); }

.v-title { font-size: 20px; font-weight: 900; letter-spacing: -0.02em; margin: 10px 0 6px; }
.v-sub { display: block; font-size: 14.5px; font-weight: 900; margin-bottom: 14px; }
.dim { color: var(--muted); }
.mono { font-family: "SF Mono", Consolas, "Cascadia Code", monospace; }
.card { border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); padding: 16px; margin-top: 12px; }
.card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.card-head h3 { margin: 0; font-size: 15.5px; font-weight: 900; }
.hint { font-size: 12px; color: var(--muted); }
.btn { display: inline-flex; align-items: center; height: 38px; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 0 14px; font-weight: 800; font-size: 13px; background: var(--card); color: var(--text); cursor: pointer; }
.btn.black { background: var(--text); color: var(--card); }
.btn-sm { display: inline-flex; align-items: center; height: 30px; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 0 10px; font-weight: 800; font-size: 12px; background: var(--card); cursor: pointer; }
.btn-sm.black { background: var(--text); color: var(--card); }
.rowline { height: 44px; border: 1px solid var(--line); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: space-between; padding: 0 14px; font-weight: 800; background: var(--card); margin-top: 8px; }
.rowline:first-child { margin-top: 0; }
.rowline b { font-size: 13px; }
.rowline span { color: var(--muted); font-weight: 600; font-size: 12.5px; }
.fake-field { display: flex; align-items: center; height: 36px; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 7px 10px; font-size: 12.5px; color: var(--muted); background: var(--card); overflow: hidden; white-space: nowrap; }
.grow { flex: 1; }

/* ── 引导 ── */
.g-steps { display: flex; gap: 8px; }
.g-chip { border: 1px solid var(--line); border-radius: 999px; padding: 5px 12px; font-size: 12px; font-weight: 800; color: var(--muted); }
.g-chip.on { background: var(--text); color: var(--card); }
.g-screen { position: relative; margin-top: 14px; padding: 20px; }
.step-tag { position: absolute; right: 16px; top: 16px; border: 1px dashed var(--line); border-radius: 999px; padding: 3px 10px; font-size: 11.5px; font-weight: 800; color: var(--muted); }
.g-desc { font-size: 12.5px; line-height: 1.7; margin-top: 4px; }
.g-check { border: 1px dashed var(--line); border-radius: var(--radius-sm); padding: 12px 14px; font-size: 12.5px; line-height: 2; margin-top: 14px; }
.g-check .ok { color: var(--green-deep); margin-right: 6px; }
.g-manual { border: 1px solid var(--line-soft); border-radius: var(--radius-sm); padding: 12px 14px; margin-top: 14px; }
.g-manual-title { font-size: 12.5px; font-weight: 800; }
.g-manual-row { display: flex; gap: 8px; margin-top: 8px; }
.g-manual-row .fake-field { flex: 1; }
.g-nav { display: flex; justify-content: flex-end; margin-top: 16px; }

/* ── 聊天 ── */
.chat { display: grid; grid-template-columns: 264px 1fr; height: 100%; min-height: 480px; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.c-list { border-right: 1px solid var(--line); background: var(--card); overflow-y: auto; scrollbar-width: thin; }
.c-top { padding: 12px; border-bottom: 1px solid var(--line); }
.toolbar { display: flex; gap: 8px; margin-top: 8px; }
.refresh { width: 38px; height: 36px; flex: none; border: 1px solid var(--line); border-radius: var(--radius-sm); display: grid; place-items: center; font-weight: 900; }
.sess { position: relative; min-height: 62px; border-bottom: 1px solid var(--line-soft); padding: 11px 12px 11px 58px; cursor: pointer; transition: background 0.12s ease; }
.sess:hover { background: var(--card-alt); }
.sess.sel { background: var(--text); color: var(--card); }
.sess .ava { position: absolute; left: 11px; top: 12px; width: 36px; height: 36px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: var(--card); color: var(--text); display: grid; place-items: center; font-weight: 800; font-size: 13px; }
.sess.sel .ava { background: var(--card); color: var(--text); border-color: var(--card); }
.sess .name { display: block; font-size: 13px; font-weight: 800; line-height: 18px; padding-right: 56px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sess .prev { display: block; font-size: 12px; color: var(--muted); line-height: 17px; margin-top: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sess .tm { position: absolute; right: 12px; top: 12px; font-size: 10.5px; color: var(--muted); }
.sess .tag { position: absolute; right: 12px; bottom: 12px; font-size: 10.5px; color: var(--muted); }
.sess.sel .prev, .sess.sel .tm, .sess.sel .tag { color: var(--card); opacity: 0.75; }
.sess.group { background: var(--card-alt); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.c-main { display: flex; flex-direction: column; min-width: 0; background: var(--card); }
.c-head { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--line); }
.c-back { width: 30px; height: 30px; border: 1px solid var(--line); border-radius: var(--radius-sm); display: grid; place-items: center; font-weight: 900; }
.c-title { font-size: 14.5px; flex: 1; }
.c-actions { display: flex; gap: 7px; }
.act { border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 5px 11px; font-size: 12px; font-weight: 800; }
.act.primary { background: var(--text); color: var(--card); }
.c-msgs { flex: 1; background: var(--canvas); padding: 16px 18px; overflow-y: auto; scrollbar-width: thin; }
.timechip { text-align: center; color: var(--muted); font-size: 11px; margin: 4px 0 10px; }
.m-row { display: table; width: 100%; margin: 7px 0; }
.m-row.me { direction: rtl; }
.cell-ava { display: table-cell; width: 40px; vertical-align: top; }
.cell-body { display: table-cell; vertical-align: top; max-width: 380px; }
.m-row.me .cell-body { direction: ltr; text-align: right; }
.m-ava { width: 32px; height: 32px; border: 1px solid var(--line); border-radius: var(--radius-sm); display: inline-grid; place-items: center; font-size: 11.5px; font-weight: 800; background: var(--card); }
.m-row.me .m-ava { background: var(--green-deep); color: #fff; border-color: var(--green-deep); }
.m-bubble { display: inline-block; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 8px 11px; background: var(--card); font-size: 13px; line-height: 1.55; text-align: left; }
.m-row.me .m-bubble { background: var(--green); border-color: var(--green-line); }
.m-bubble.voice { display: flex; align-items: center; gap: 8px; }
.m-bubble.voice b { font-size: 12px; }
.m-bubble.voice u { font-size: 11px; color: var(--muted); }
.v-wave { display: inline-flex; align-items: center; gap: 2px; }
.v-wave i { width: 3px; border-radius: 2px; background: var(--text); opacity: 0.75; }
.m-img { display: inline-block; width: 168px; height: 128px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: repeating-linear-gradient(0deg, #fff 0 16px, #efefef 16px 32px); }
.m-bubble.sys-line { background: var(--card-alt); color: var(--muted); border-color: var(--line-soft); font-size: 11.5px; }
.m-row.sys { text-align: center; }
.m-row.sys .cell-ava, .m-row.sys .cell-body { display: inline; }

/* ── 朋友圈 ── */
.sns { height: 100%; overflow-y: auto; scrollbar-width: thin; }
.sns-hero { position: relative; border: 1px solid var(--line); border-radius: var(--radius); height: 116px; background: repeating-linear-gradient(135deg, #fafafa 0 14px, #f1f1f1 14px 28px); }
.sns-cover { position: absolute; inset: 0; }
.sns-ava { position: absolute; right: 18px; bottom: -18px; width: 52px; height: 52px; border: 2px solid var(--line); border-radius: var(--radius-sm); background: var(--text); color: var(--card); display: grid; place-items: center; font-weight: 800; }
.sns-name { position: absolute; right: 84px; bottom: 10px; font-weight: 900; color: #fff; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.65); }
.sns-bar { display: flex; gap: 8px; margin-top: 26px; align-items: center; }
.sns-chip { border: 1px solid var(--line); border-radius: 999px; padding: 7px 12px; font-size: 12px; font-weight: 800; white-space: nowrap; }
.sns-chip.on { background: var(--text); color: var(--card); }
.sns-feed { margin-top: 12px; }
.sns-card { display: flex; gap: 10px; border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; margin-bottom: 10px; background: var(--card); }
.sns-ava.sm { flex: none; width: 38px; height: 38px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: var(--card-alt); display: grid; place-items: center; font-weight: 800; }
.sns-body { flex: 1; min-width: 0; }
.sns-body b { font-size: 13.5px; }
.sns-body p { margin: 5px 0; font-size: 13px; line-height: 1.6; }
.sns-imgs { display: flex; gap: 6px; }
.sns-imgs span { width: 92px; height: 74px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: repeating-linear-gradient(0deg, #fff 0 12px, #f1f1f1 12px 24px); }
.sns-foot { display: flex; justify-content: space-between; margin-top: 8px; font-size: 11.5px; color: var(--muted); }

/* ── 统计 ── */
.st-bar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.st-label { font-size: 12px; font-weight: 800; color: var(--muted); }
.st-tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 14px; }
.tile { border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; background: var(--card); }
.tile b { display: block; font-size: 26px; font-weight: 900; letter-spacing: -0.04em; font-family: "SF Mono", Consolas, monospace; }
.tile span { font-size: 12px; color: var(--muted); }
.st-card { margin-top: 12px; }
.st-bars { display: flex; align-items: flex-end; gap: 8px; height: 120px; }
.st-bars span { flex: 1; border: 1px solid var(--line); border-radius: 4px 4px 0 0; background: var(--card-alt); }
.st-bars span:nth-last-child(-n+3) { background: var(--text); }

/* ── 导出 ── */
.export { display: grid; grid-template-columns: 258px 1fr; gap: 12px; height: 100%; min-height: 480px; }
.e-list { border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); overflow-y: auto; scrollbar-width: thin; }
.e-top { padding: 12px; border-bottom: 1px solid var(--line); }
.e-selall { display: flex; align-items: center; gap: 7px; margin-top: 8px; font-size: 12px; font-weight: 800; }
.esess { position: relative; min-height: 58px; border-bottom: 1px solid var(--line-soft); padding: 10px 12px 10px 40px; cursor: pointer; transition: background 0.12s ease; }
.esess:hover { background: var(--card-alt); }
.esess.sel { background: var(--text); color: var(--card); }
.esess b { font-size: 13px; }
.esess .prev { display: block; font-size: 11.5px; color: var(--muted); margin-top: 2px; }
.esess.sel .prev { color: var(--card); opacity: 0.75; }
.cb { position: absolute; left: 13px; top: 20px; width: 14px; height: 14px; border: 1px solid var(--line); background: var(--card); display: inline-block; }
.esess.sel .cb, .cb.on { background: var(--card); }
.e-side { display: flex; flex-direction: column; gap: 0; min-width: 0; overflow-y: auto; scrollbar-width: thin; }
.e-side .card { margin-top: 0; }
.e-side .card + .card { margin-top: 12px; }
.f-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 8px; }
.f-grid2 label { font-size: 12px; font-weight: 800; color: var(--muted); }
.f-grid2 .fake-field { margin-top: 4px; color: var(--text); }
.f-checks { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 14px; }
.f-chk { font-size: 12.5px; font-weight: 700; color: var(--muted); }
.f-chk.on { color: var(--text); font-weight: 800; }
.f-chk.on::before { content: "☑ "; }
.f-chk:not(.on)::before { content: "☐ "; }
.progress { height: 10px; border: 1px solid var(--line); border-radius: 999px; overflow: hidden; margin-bottom: 12px; }
.bar-fill { display: block; height: 100%; width: 62%; background: var(--text); }
.console { border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 12px 14px; font-size: 12px; line-height: 1.85; color: #333; overflow: hidden; }

/* ── MCP ── */
.mcp { height: 100%; overflow-y: auto; scrollbar-width: thin; }
.mcp-main { max-width: 720px; }
.m-label { font-size: 12px; font-weight: 800; color: var(--muted); margin: 12px 0 5px; }
.m-label:first-of-type { margin-top: 2px; }
.codebox { position: relative; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 12.5px; background: var(--card-alt); white-space: pre-wrap; line-height: 1.6; }
.codebox .copy { position: absolute; right: 8px; top: 8px; border: 1px solid var(--line); border-radius: 6px; background: var(--card); padding: 2px 8px; font-size: 11px; font-weight: 800; cursor: pointer; }
.codebox.json { min-height: 96px; }
.tgl { border: 1px solid var(--line); border-radius: 999px; padding: 3px 12px; font-size: 11.5px; font-weight: 800; background: var(--text); color: var(--card); cursor: pointer; user-select: none; }
.tgl.off { background: var(--card); color: var(--muted); border-color: var(--line-soft); }

/* ── 日志 / 设置 ── */
.logs-bar { display: flex; gap: 10px; align-items: center; margin-bottom: 12px; }
.seg { display: inline-flex; border: 1px solid var(--line); border-radius: var(--radius-sm); overflow: hidden; }
.seg i { font-style: normal; padding: 6px 14px; font-size: 12px; font-weight: 800; }
.seg i.on { background: var(--text); color: var(--card); }
.logbox { font-size: 12px; line-height: 2.05; max-height: 430px; overflow-y: auto; scrollbar-width: thin; }
.logbox .tm2 { font-style: normal; color: var(--muted); margin-right: 8px; }

/* ── 假光标（自动巡检）：滑向当前项 + 到位波纹，用户点击后隐藏 ── */
.menu-marker {
  position: absolute; left: 0; top: 0; z-index: 30;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--text);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.08);
  opacity: 1;
  transition: transform 0.55s var(--ease), opacity 0.35s ease;
  pointer-events: none;
}
.demo.interacted .menu-marker { opacity: 0; transition: transform 0.55s var(--ease), opacity 0.3s ease; }
.menu-marker .ring {
  position: absolute; inset: -4px; border-radius: 50%;
  border: 2px solid var(--text); opacity: 0;
  animation: ringBurst 0.7s ease-out both;
}
@keyframes ringBurst {
  0% { transform: scale(0.55); opacity: 0.45; }
  100% { transform: scale(1.9); opacity: 0; }
}

/* ── 交互提示 ── */
.demo-hint {
  position: absolute; right: 14px; bottom: 12px; z-index: 5;
  border: 1px solid var(--line); border-radius: 999px;
  background: var(--card); color: var(--muted);
  padding: 5px 12px; font-size: 11.5px; font-weight: 700;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.demo.interacted .demo-hint { opacity: 0; }

/* ── 响应式 ── */
@media (max-width: 900px) {
  .demo { height: 540px; font-size: 12.5px; }
  .side { width: 62px; padding: 12px 7px; }
  .brand-name, .brand-dim, .menu a span:last-child, .mini { display: none; }
  .menu a { justify-content: center; padding: 8px 6px; }
  .chat, .export { grid-template-columns: 1fr; }
  .c-list, .e-list { display: none; }
  .st-tiles { grid-template-columns: repeat(2, 1fr); }
  .demo-hint { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .vp-enter-active, .vp-leave-active { transition: none; }
  .menu-marker { display: none; }
}
</style>
