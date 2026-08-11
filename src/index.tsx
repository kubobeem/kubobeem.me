import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use('*', renderer)

app.get('/', (c) => {
  return c.render(
    <div class="shell">
      <header class="hero">
        <div class="hero-box">
          <span class="c c-tl"></span>
          <span class="c c-tr"></span>
          <span class="c c-bl"></span>
          <span class="c c-br"></span>
          <div class="status-pill">
            <span class="dot"></span>
            SYSTEM ONLINE · EDGE NODE ACTIVE
          </div>
          <h1>くぁー</h1>
          <p class="sub">SUB-ACCOUNT // HYPER PERSONAL INTERFACE</p>
          <p class="ver">v4.1 HYPER · HONO · CLOUDFLARE EDGE · 2026</p>
          <div class="glitch-lines">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </header>

      <nav class="nav">
        <a href="#profile">PROFILE</a>
        <a href="#accounts">ACCOUNTS</a>
        <a href="#philosophy">PHILOSOPHY</a>
        <a href="#status">STATUS</a>
        <a href="#tech">STACK</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <section class="panel" id="profile">
        <div class="panel-head">
          <span class="panel-id">01</span>
          <span class="panel-title">PROFILE</span>
          <span class="panel-deco">// IDENTITY_MODULE</span>
        </div>
        <p>
          このインターフェースは、<strong>@qa_a_aa</strong> および <strong>@Qaa_a_a_a</strong> の運営者「くぁー」の個人ノードです。
        </p>
        <p>
          本アカウント群はサブアカウントとして運用されています。本垢の有無・詳細は非公開プロトコルです。
        </p>
        <div class="metrics">
          <div class="metric">
            <div class="val">2</div>
            <div class="lbl">Active Nodes</div>
          </div>
          <div class="metric">
            <div class="val">0</div>
            <div class="lbl">Official Title</div>
          </div>
          <div class="metric">
            <div class="val">—</div>
            <div class="lbl">Main Account</div>
          </div>
          <div class="metric">
            <div class="val">JST</div>
            <div class="lbl">Timezone</div>
          </div>
        </div>
        <table class="dt">
          <tbody>
            <tr><th>Handle</th><td>くぁー</td></tr>
            <tr><th>Primary Platform</th><td>X (Twitter)</td></tr>
            <tr><th>Account Type</th><td>Sub-account</td></tr>
            <tr><th>Language</th><td>日本語</td></tr>
            <tr><th>Timezone</th><td>Asia/Tokyo (JST)</td></tr>
          </tbody>
        </table>
      </section>

      <section class="panel" id="accounts">
        <div class="panel-head">
          <span class="panel-id">02</span>
          <span class="panel-title">ACCOUNTS</span>
          <span class="panel-deco">// LINKED_NODES</span>
        </div>

        <div class="mod">
          <div class="mod-head">
            <span class="mod-name">@qa_a_aa</span>
            <span class="mod-live">● LIVE</span>
          </div>
          <table class="dt">
            <tbody>
              <tr><th>Display</th><td>くぁー サブ垢</td></tr>
              <tr><th>Username</th><td>@qa_a_aa</td></tr>
              <tr><th>Type</th><td>Sub-account</td></tr>
            </tbody>
          </table>
          <a href="https://x.com/qa_a_aa" target="_blank" rel="noopener">OPEN PROFILE →</a>
        </div>

        <div class="mod">
          <div class="mod-head">
            <span class="mod-name">@Qaa_a_a_a</span>
            <span class="mod-live">● LIVE</span>
          </div>
          <table class="dt">
            <tbody>
              <tr><th>Display</th><td>くぁー サブ垢</td></tr>
              <tr><th>Username</th><td>@Qaa_a_a_a</td></tr>
              <tr><th>Discord</th><td>kuuuuuuuuuuaaaaaaa</td></tr>
            </tbody>
          </table>
          <a href="https://x.com/Qaa_a_a_a" target="_blank" rel="noopener">OPEN PROFILE →</a>
        </div>
      </section>

      <section class="panel" id="philosophy">
        <div class="panel-head">
          <span class="panel-id">03</span>
          <span class="panel-title">PHILOSOPHY</span>
          <span class="panel-deco">// CORE_DIRECTIVES</span>
        </div>
        <p>シンプルさを優先し、義務を負わず、透明性を保ちつつ個人情報は公開しない。</p>
        <ul>
          <li>シンプルさを優先する</li>
          <li>透明性を保つ（限界はある）</li>
          <li>義務を負わない</li>
          <li>他者への配慮</li>
          <li>技術的な選択を明示する</li>
        </ul>
      </section>

      <section class="panel" id="history">
        <div class="panel-head">
          <span class="panel-id">04</span>
          <span class="panel-title">TIMELINE</span>
          <span class="panel-deco">// EVENT_LOG</span>
        </div>
        <h3>運用開始期</h3>
        <p>サブアカウントとしての運用を開始。</p>
        <h3>アカウント追加</h3>
        <p>@Qaa_a_a_a を追加。</p>
        <h3>2026.07</h3>
        <p>ホームページを作成・大幅拡張（GitHub Pages）。</p>
        <h3>2026.08</h3>
        <p>Hono + Cloudflare Edge による HYPER FUTURE INTERFACE へ完全移行。</p>
      </section>

      <section class="panel" id="status">
        <div class="panel-head">
          <span class="panel-id">05</span>
          <span class="panel-title">STATUS</span>
          <span class="panel-deco">// TELEMETRY</span>
        </div>
        <div class="metrics">
          <div class="metric">
            <div class="val">99%</div>
            <div class="lbl">Completion</div>
          </div>
          <div class="metric">
            <div class="val">EDGE</div>
            <div class="lbl">Delivery</div>
          </div>
          <div class="metric">
            <div class="val">SSR</div>
            <div class="lbl">Render</div>
          </div>
          <div class="metric">
            <div class="val">HONO</div>
            <div class="lbl">Runtime</div>
          </div>
        </div>
      </section>

      <section class="panel" id="tech">
        <div class="panel-head">
          <span class="panel-id">06</span>
          <span class="panel-title">TECH STACK</span>
          <span class="panel-deco">// HYPER_LAYER</span>
        </div>
        <p>本ノードは可能な限り未来寄りの技術で構築されています。シンプルさは捨てました。</p>
        <div class="chips">
          <span class="chip">HONO</span>
          <span class="chip">TYPESCRIPT</span>
          <span class="chip">JSX SSR</span>
          <span class="chip">CLOUDFLARE PAGES</span>
          <span class="chip">VITE 6</span>
          <span class="chip">EDGE RUNTIME</span>
          <span class="chip">WEB STANDARDS</span>
          <span class="chip">ZERO CLIENT JS</span>
          <span class="chip">ORBITRON</span>
          <span class="chip">NEON GRID</span>
          <span class="chip">SCANLINES</span>
          <span class="chip">HUD OVERLAY</span>
        </div>
        <h3>Architecture</h3>
        <ul>
          <li>Framework: Hono（超軽量・高速・Web Standards）</li>
          <li>Language: TypeScript</li>
          <li>Rendering: Server-Side Rendering (Hono JSX)</li>
          <li>Build: Vite 6</li>
          <li>Hosting: Cloudflare Pages / Edge</li>
          <li>Client JS: なし（純粋SSR）</li>
          <li>Design: HYPER maximalist cyber-HUD</li>
        </ul>
      </section>

      <section class="panel" id="rules">
        <div class="panel-head">
          <span class="panel-id">07</span>
          <span class="panel-title">PROTOCOL</span>
          <span class="panel-deco">// RULES</span>
        </div>
        <ul>
          <li>事実と意見を可能な範囲で区別する</li>
          <li>すべてのリプライやDMに返信する義務はない</li>
          <li>記載内容は予告なく変更される場合がある</li>
        </ul>
        <p style="margin-top:1rem;font-size:0.85rem;opacity:0.75">
          <strong>免責</strong>：このページの情報の正確性について保証しません。利用によって生じた損害について責任を負いません。
        </p>
      </section>

      <section class="panel" id="faq">
        <div class="panel-head">
          <span class="panel-id">08</span>
          <span class="panel-title">FAQ</span>
          <span class="panel-deco">// QUERY</span>
        </div>
        <p class="faq-q">Q. 本垢は？</p>
        <p class="faq-a">A. 公開していません。</p>
        <p class="faq-q">Q. なぜサブ垢を複数？</p>
        <p class="faq-a">A. なんとなくです。</p>
        <p class="faq-q">Q. 連絡方法は？</p>
        <p class="faq-a">A. XのDMを試してください（返信保証なし）。</p>
        <p class="faq-q">Q. なぜこんなにゴテゴテ？</p>
        <p class="faq-a">A. シンプルさはいらない。超最新でゴテゴテが必要だったからです。</p>
      </section>

      <section class="panel" id="changelog">
        <div class="panel-head">
          <span class="panel-id">09</span>
          <span class="panel-title">CHANGELOG</span>
          <span class="panel-deco">// HISTORY</span>
        </div>
        <table class="dt">
          <thead>
            <tr><th>DATE</th><th>EVENT</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-08-11</td>
              <td>v4.1 HYPER — ゴテゴテ未来UI完全版</td>
            </tr>
            <tr>
              <td>2026-08-11</td>
              <td>Hono + TypeScript + Cloudflare Pages 移行</td>
            </tr>
            <tr>
              <td>2026-07-27</td>
              <td>大幅拡充版公開（GitHub Pages）</td>
            </tr>
            <tr>
              <td>2026-07-27</td>
              <td>初期バージョン作成</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="panel" id="links">
        <div class="panel-head">
          <span class="panel-id">10</span>
          <span class="panel-title">LINKS</span>
          <span class="panel-deco">// EXTERNAL</span>
        </div>
        <ul>
          <li><a href="https://x.com/qa_a_aa" target="_blank" rel="noopener">@qa_a_aa</a></li>
          <li><a href="https://x.com/Qaa_a_a_a" target="_blank" rel="noopener">@Qaa_a_a_a</a></li>
          <li><a href="https://abehiroshi.la.coocan.jp/" target="_blank" rel="noopener">阿部寛のホームページ</a></li>
        </ul>
      </section>

      <section class="panel" id="contact">
        <div class="panel-head">
          <span class="panel-id">11</span>
          <span class="panel-title">CONTACT</span>
          <span class="panel-deco">// CHANNEL</span>
        </div>
        <p>XのDMへ。返信保証はありません。</p>
      </section>

      <footer class="footer">
        <p class="brand">くぁー // KUBOBEEM.ME</p>
        <p class="stack-line">HONO · CLOUDFLARE EDGE · TYPESCRIPT · VITE</p>
        <p class="dim">© 2026 くぁー — HYPER SUB-ACCOUNT PERSONAL NODE</p>
        <p class="dim">CONTENTS MAY CHANGE WITHOUT NOTICE · NO SIMPLICITY MODE</p>
      </footer>
    </div>
  )
})

app.get('/api/status', (c) => {
  return c.json({
    status: 'ONLINE',
    node: 'kubobeem.me',
    version: '4.1.0-HYPER',
    mode: 'maximalist',
    stack: ['Hono', 'TypeScript', 'Cloudflare Pages', 'Vite', 'Edge SSR'],
    design: 'hyper-cyber-hud',
    simplicity: false,
    timestamp: new Date().toISOString(),
  })
})

export default app
