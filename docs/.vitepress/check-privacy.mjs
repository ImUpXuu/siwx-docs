#!/usr/bin/env node
// 文档站隐私门禁 —— 在 vitepress build/dev 之前执行。
//
// 规则与占位符白名单必须与仓库根 CLAUDE.md / AGENTS.md 第三节保持一致：
// 任何真实账号标识（wxid、手机号、密钥、邮箱、用户名路径等）命中即构建失败。
// 站点是公开的，这里扫描 docs/ 全部 Markdown（含被 srcExclude 排除的内部文档）与根 README。
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const SCAN_DIRS = [join(ROOT, 'docs'), join(ROOT, 'siwx', 'ui', 'pages')]
const SCAN_FILES = [join(ROOT, 'README.md'), join(ROOT, 'CONTRIBUTING.md'), join(ROOT, 'MACOS_SUPPORT.md')]

// 占位符白名单：命中这些子串的匹配视为示例数据放行（与 CLAUDE.md 第三节一致，
// 并补充 docs 既有示例数据所用的明显虚假占位：xxx / demo / abc / owner / 重复模式演示密钥）
const ALLOW_SUBSTRINGS = [
  'wxalias',        // 历史清洗占位符
  'wxid_example',
  'wxid_test',
  'wxid_friend',
  'wxid_demo',
  'wxid_abc',
  'wxid_a_b',
  'wxid_owner',
  'wxid_clean',
  '6xyz',
  'xxx',            // 通用占位（wxid_xxx / C:\Users\xxx 等）
  'redacted_',
  'example_',
  'abcdef1234567890abcdef1234567890',  // 演示密钥（重复模式，明显合成）
  'fedcba9876543210fedcba9876543210',
  '<user>',         // 全历史清洗后的用户名占位
]

const RULES = [
  { name: 'wxid/账号前缀', re: /\bwxid_[a-z0-9_-]{6,}\b/gi },
  { name: '群聊 id', re: /[0-9]{6,}@chatroom/g },
  { name: '手机号', re: /\b1[3-9][0-9]{9}\b/g },
  { name: '64 位 hex（疑似密钥/哈希）', re: /\b[0-9a-f]{64}\b/gi },
  { name: '邮箱（QQ）', re: /@[a-z0-9._%+-]*qq\.com/gi },
  { name: '邮箱（常见服务商）', re: /\b[A-Za-z0-9._%+-]+@(?:gmail|163|126|outlook|hotmail|foxmail)\.(?:com|net)\b/gi },
  { name: '用户名路径', re: /\bUsers[\\/]+[a-z0-9_-]+/gi },
  { name: 'home 路径', re: /\b\/home\/[a-z0-9_-]+/gi },
]

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    let st
    try { st = statSync(p) } catch { continue }
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.vitepress' || name === 'vendor') continue
      yield* walk(p)
    } else if (/\.(md|html)$/.test(name)) {
      yield p
    }
  }
}

const hits = []
let scanned = 0
const files = new Set(SCAN_FILES.filter((f) => { try { return statSync(f).isFile() } catch { return false } }))
for (const dir of SCAN_DIRS) {
  try { for (const f of walk(dir)) files.add(f) } catch { /* 目录不存在则跳过 */ }
}

for (const file of [...files].sort()) {
  let text
  try { text = readFileSync(file, 'utf8') } catch { continue }
  scanned += 1
  const lines = text.split(/\r?\n/)
  for (const rule of RULES) {
    rule.re.lastIndex = 0
    for (let i = 0; i < lines.length; i++) {
      const m = rule.re.exec(lines[i])
      if (!m) continue
      rule.re.lastIndex = 0
      if (ALLOW_SUBSTRINGS.some((a) => lines[i].toLowerCase().includes(a.toLowerCase()))) continue
      hits.push(`${relative(ROOT, file).split(sep).join('/')}:${i + 1}  [${rule.name}]  ${lines[i].trim().slice(0, 120)}`)
    }
  }
}

if (hits.length) {
  console.error(`\n✗ 隐私门禁：发现 ${hits.length} 处疑似真实标识，构建中止：\n`)
  for (const h of hits) console.error('  ' + h)
  console.error('\n确认是占位符示例？请把该串加入 check-privacy.mjs 的 ALLOW_SUBSTRINGS（并同步 CLAUDE.md）。')
  process.exit(1)
}
console.log(`✓ 隐私门禁通过：扫描 ${scanned} 个文件，未发现真实标识`)
