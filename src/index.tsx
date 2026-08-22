import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use('*', renderer)

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
        <p>三重振り子・ローレンツアトラクタ・ラングトンの蟻・謎の立体。</p>
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
        <p><img src="https://count.getloli.com/@kubobeem?name=kubobeem&theme=random&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" alt="カウンター" /></p>
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
        <p class="subtitle">数学と物理のおもちゃ箱</p>
      </header>

      <nav class="nav">
        <a href="#pendulum">振り子</a>
        <a href="#lorenz">ローレンツ</a>
        <a href="#ant">蟻</a>
        <a href="#object">立体</a>
      </nav>

      <section class="card" id="pendulum">
        <h2>三重振り子</h2>
        <p>
          3本の剛体棒が関節でつながった系。微小な初期差がやがて大きく分かれる、
          決定論的カオスの定番です。先端の軌跡を残しています。
        </p>
        <div class="sim-wrap">
          <canvas class="sim-canvas" id="pendulum-canvas" width="640" height="420"></canvas>
          <div class="sim-controls">
            <button type="button" class="lab-btn" id="pend-toggle">一時停止</button>
            <button type="button" class="lab-btn" id="pend-reset">リセット</button>
            <button type="button" class="lab-btn" id="pend-nudge">少し揺らす</button>
            <span class="sim-meta" id="pend-energy">E ≈ —</span>
          </div>
        </div>
        <p class="math-note">
          状態は角度 θ₁,θ₂,θ₃ と角速度。ラグランジュ方程式を RK4 で積分しています（簡易モデル）。
        </p>
      </section>

      <section class="card" id="lorenz">
        <h2>ローレンツ・アトラクタ</h2>
        <p>
          気象モデルから生まれた連続力学系。蝶の羽のようなストレンジ・アトラクタに収束しつつ、
          軌道は決して周期的になりません。
        </p>
        <div class="sim-wrap">
          <canvas class="sim-canvas" id="lorenz-canvas" width="640" height="400"></canvas>
          <div class="sim-controls">
            <button type="button" class="lab-btn" id="lorenz-toggle">一時停止</button>
            <button type="button" class="lab-btn" id="lorenz-reset">リセット</button>
          </div>
        </div>
        <p class="math-note">
          dx/dt = σ(y−x), dy/dt = x(ρ−z)−y, dz/dt = xy−βz　（σ=10, ρ=28, β=8/3）
        </p>
      </section>

      <section class="card" id="ant">
        <h2>ラングトンの蟻</h2>
        <p>
          白いマスでは右折して黒く塗り、黒いマスでは左折して白く戻す。
          約1万歩あたりから「高速道路」と呼ばれる周期的なパターンが現れます。
        </p>
        <div class="sim-wrap">
          <canvas class="sim-canvas" id="ant-canvas" width="640" height="360"></canvas>
          <div class="sim-controls">
            <button type="button" class="lab-btn" id="ant-toggle">一時停止</button>
            <button type="button" class="lab-btn" id="ant-reset">リセット</button>
            <label>
              速度
              <input type="range" id="ant-speed" min="1" max="200" value="40" />
            </label>
            <span class="sim-meta" id="ant-steps">0 steps</span>
          </div>
        </div>
      </section>

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
        <p class="mystery-cap">数学ではない。ただ回っている。</p>
      </section>

      <footer>
        <p class="brand">くぁー · 実験室</p>
        <p><img src="https://count.getloli.com/@kubobeem?name=kubobeem&theme=random&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" alt="カウンター" /></p>
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
    version: '5.2.0',
    design: 'liquid-glass',
    lab: ['triple-pendulum', 'lorenz', 'langton-ant', 'mystery-cube'],
    timestamp: new Date().toISOString(),
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
