import { Hono } from 'hono'
import { renderer } from './renderer'

type Env = {
  Bindings: {
    BOARD_KV?: KVNamespace
  }
}

const app = new Hono<Env>()

app.use('*', renderer)

type Post = { id: string; name: string; body: string; at: string; ts: number }
const boardMem: Post[] = []
const MAX_POSTS = 50
const MAX_BODY = 280
const MAX_NAME = 24

app.get('/', (c) => {
  return c.render(
    <div class="shell">
      <header class="hero">
        <h1>くぁー</h1>
        <p class="subtitle">サブ垢の個人ページ</p>
        <p class="meta">kubobeem.me</p>
      </header>

      <nav class="nav">
        <a href="#profile">プロフィール</a>
        <a href="#accounts">アカウント</a>
        <a href="#philosophy">理念</a>
        <a href="/lab">実験室</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">連絡</a>
      </nav>

      <section class="card" id="profile">
        <h2>プロフィール</h2>
        <p>
          このページは、<strong>@qa_a_aa</strong> および <strong>@Qaa_a_a_a</strong> の運営者である「くぁー」の個人ページです。
        </p>
        <p>
          本アカウント群はサブアカウントとして運用しています。本垢の有無や詳細は公開していません。
        </p>
        <div class="stats">
          <div class="stat">
            <div class="value">2</div>
            <div class="label">運用中アカウント</div>
          </div>
          <div class="stat">
            <div class="value">0</div>
            <div class="label">公式肩書き</div>
          </div>
          <div class="stat">
            <div class="value">—</div>
            <div class="label">本垢</div>
          </div>
          <div class="stat">
            <div class="value">JST</div>
            <div class="label">タイムゾーン</div>
          </div>
        </div>
        <table>
          <tbody>
            <tr><th>ハンドル</th><td>くぁー</td></tr>
            <tr><th>主な活動場所</th><td>X (旧Twitter)</td></tr>
            <tr><th>種別</th><td>サブアカウント</td></tr>
            <tr><th>言語</th><td>日本語</td></tr>
            <tr><th>タイムゾーン</th><td>Asia/Tokyo (JST)</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card" id="accounts">
        <h2>アカウント</h2>
        <div class="account">
          <div>
            <span class="account-name">@qa_a_aa</span>
            <span class="account-status">稼働中</span>
          </div>
          <table>
            <tbody>
              <tr><th>表示名</th><td>くぁー サブ垢</td></tr>
              <tr><th>ユーザー名</th><td>@qa_a_aa</td></tr>
            </tbody>
          </table>
          <a href="https://x.com/qa_a_aa" target="_blank" rel="noopener">プロフィールを開く →</a>
        </div>
        <div class="account">
          <div>
            <span class="account-name">@Qaa_a_a_a</span>
            <span class="account-status">稼働中</span>
          </div>
          <table>
            <tbody>
              <tr><th>表示名</th><td>くぁー サブ垢</td></tr>
              <tr><th>ユーザー名</th><td>@Qaa_a_a_a</td></tr>
              <tr><th>Discord</th><td>kuuuuuuuuuuaaaaaaa</td></tr>
            </tbody>
          </table>
          <a href="https://x.com/Qaa_a_a_a" target="_blank" rel="noopener">プロフィールを開く →</a>
        </div>
      </section>

      <section class="card" id="philosophy">
        <h2>理念</h2>
        <p>シンプルさを優先し、義務を負わず、透明性を保ちつつ個人情報は公開しない。</p>
        <ul>
          <li>シンプルさを優先する</li>
          <li>透明性を保つ（限界はある）</li>
          <li>義務を負わない</li>
          <li>他者への配慮</li>
          <li>技術的な選択を明示する</li>
        </ul>
      </section>

      <section class="card" id="lab-teaser">
        <h2>実験室</h2>
        <p>掲示板・謎の立体・速度測定・ラングトンの蟻。</p>
        <p><a href="/lab">実験室を開く →</a></p>
      </section>

      <section class="card" id="tech">
        <h2>技術</h2>
        <p>最新の軽量スタックで構築しています。</p>
        <div class="chips">
          <span class="chip">Hono</span>
          <span class="chip">TypeScript</span>
          <span class="chip">JSX SSR</span>
          <span class="chip">Cloudflare Pages</span>
          <span class="chip">Vite</span>
        </div>
      </section>

      <section class="card" id="faq">
        <h2>FAQ</h2>
        <div class="faq-item">
          <p class="q">本垢は？</p>
          <p class="a">公開していません。</p>
        </div>
        <div class="faq-item">
          <p class="q">なぜサブ垢を複数？</p>
          <p class="a">なんとなくです。</p>
        </div>
        <div class="faq-item">
          <p class="q">連絡方法は？</p>
          <p class="a">XのDMを試してください（返信保証なし）。</p>
        </div>
      </section>

      <section class="card" id="contact">
        <h2>連絡</h2>
        <p>XのDMへ。返信保証はありません。</p>
      </section>

      <footer>
        <p class="brand">くぁー</p>
        <p>Hono · Cloudflare Pages · TypeScript</p>
        <p>© 2026 くぁー</p>
      </footer>
    </div>
  )
})

app.get('/lab', (c) => {
  return c.render(
    <div class="shell">
      <a class="back-link" href="/">← トップへ</a>
      <header class="hero lab-intro">
        <h1>実験室</h1>
        <p class="subtitle">変なものを置いてある場所</p>
      </header>

      <nav class="nav">
        <a href="#object">立体</a>
        <a href="#board">掲示板</a>
        <a href="#speed">速度</a>
        <a href="#ant">蟻</a>
      </nav>

      <section class="card" id="object">
        <h2>謎の回る 3D Object</h2>
        <div class="scene-3d">
          <div class="cube">
            <div class="face f1">?</div>
            <div class="face f2">¿</div>
            <div class="face f3">?</div>
            <div class="face f4">¿</div>
            <div class="face f5">·</div>
            <div class="face f6">·</div>
          </div>
        </div>
        <p class="mystery-cap">正体不明。触っても何も起きない。ただ回っている。</p>
      </section>

      <section class="card" id="board">
        <h2>簡易掲示板</h2>
        <p class="muted">メモリ上の簡易版です。デプロイやコールドスタートで消えることがあります。</p>
        <form id="board-form">
          <input name="name" type="text" maxlength="24" placeholder="名前（省略可）" autocomplete="nickname" />
          <textarea name="body" maxlength="280" placeholder="ひとこと（280字まで）" required></textarea>
          <button type="submit">投稿する</button>
        </form>
        <div id="board-list">
          <p class="muted">読み込み中…</p>
        </div>
      </section>

      <section class="card" id="speed">
        <h2>インターネット速度測定</h2>
        <p>Cloudflare Worker 経由でダウンロード／アップロードを測ります。</p>
        <button type="button" class="lab-btn" id="speed-btn">測定開始</button>
        <div id="speed-result" class="muted">ボタンを押すと測定します。</div>
      </section>

      <section class="card" id="ant">
        <h2>ラングトンの蟻</h2>
        <p>
          白いマスでは右に曲がり黒く塗る。黒いマスでは左に曲がり白く戻す。
          十分に歩くと、突然「高速道路」を建て始める有名なセル・オートマトンです。
        </p>
        <div class="ant-wrap">
          <canvas id="ant-canvas" width="640" height="360"></canvas>
          <div class="ant-controls">
            <button type="button" class="lab-btn" id="ant-toggle">一時停止</button>
            <button type="button" class="lab-btn" id="ant-reset">リセット</button>
            <label>
              速度
              <input type="range" id="ant-speed" min="1" max="200" value="40" />
            </label>
            <span id="ant-steps">0 steps</span>
          </div>
        </div>
      </section>

      <footer>
        <p class="brand">くぁー · 実験室</p>
        <p>© 2026 くぁー</p>
      </footer>

      <link rel="stylesheet" href="/lab.css" />
      <script src="/lab.js" defer></script>
    </div>
  )
})

app.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    site: 'kubobeem.me',
    version: '5.1.0',
    design: 'liquid-glass',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/board', (c) => {
  return c.json({
    posts: boardMem.slice().reverse(),
    count: boardMem.length,
    ephemeral: true,
  })
})

app.post('/api/board', async (c) => {
  let data: { name?: string; body?: string }
  try {
    data = await c.req.json()
  } catch {
    return c.json({ error: 'JSON が読めません' }, 400)
  }
  const name = String(data.name ?? '匿名').trim().slice(0, MAX_NAME) || '匿名'
  const body = String(data.body ?? '').trim().slice(0, MAX_BODY)
  if (!body) return c.json({ error: '本文が空です' }, 400)
  if (boardMem.length && boardMem[boardMem.length - 1].body === body) {
    return c.json({ error: '同じ内容が連続しています' }, 429)
  }
  const post: Post = {
    id: crypto.randomUUID(),
    name,
    body,
    at: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
    ts: Date.now(),
  }
  boardMem.push(post)
  while (boardMem.length > MAX_POSTS) boardMem.shift()
  return c.json({ ok: true, post }, 201)
})

app.get('/api/speed/download', (c) => {
  const raw = Number(c.req.query('bytes') || '1048576')
  const bytes = Math.min(Math.max(raw, 1024), 8 * 1024 * 1024)
  const buf = new Uint8Array(bytes)
  for (let i = 0; i < bytes; i += 4096) {
    buf[i] = i & 255
  }
  return new Response(buf, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': String(bytes),
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  })
})

app.post('/api/speed/upload', async (c) => {
  const ab = await c.req.arrayBuffer()
  return c.json({
    received: ab.byteLength,
    ok: true,
  })
})

app.get('/.env', (c) => {
  const body = [
    '# ========================================',
    '#  おや、.env を見に来ましたね',
    '#  残念、ここには何もありません',
    '# ========================================',
    '',
    'SECRET_KEY=あなたはスキャナですか？',
    'API_TOKEN=帰ってください',
    'DATABASE_URL=postgres://nobody:nowhere@127.0.0.1:5432/lol',
    'AWS_ACCESS_KEY_ID=AKIA_NOPE',
    'AWS_SECRET_ACCESS_KEY=this_is_not_a_real_key_go_home',
    'OPENAI_API_KEY=sk-このサイトにAIの鍵はないよ',
    'FLAG=flag{nice_try_but_no}',
    'ADMIN_PASSWORD=password123は使ってません',
    '',
    '# くぁーより',
    '# サブ垢の個人ページです。攻撃はやめようね',
    '',
  ].join('\n')

  return c.text(body, 200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Robots-Tag': 'noindex',
    'X-Trolled': 'true',
  })
})

app.get('/.env.local', (c) => c.redirect('/.env', 302))
app.get('/.env.production', (c) => c.redirect('/.env', 302))
app.get('/.env.development', (c) => c.redirect('/.env', 302))

export default app
