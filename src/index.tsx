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
        <a href="#tech">技術</a>
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

      <section class="card" id="history">
        <h2>沿革</h2>
        <h3>運用開始</h3>
        <p>サブアカウントとしての運用を開始。</p>
        <h3>アカウント追加</h3>
        <p>@Qaa_a_a_a を追加。</p>
        <h3>2026年7月</h3>
        <p>ホームページを作成・拡張。</p>
        <h3>2026年8月</h3>
        <p>Hono + Cloudflare Pages へ移行。デザインを刷新。</p>
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
        <ul>
          <li>フレームワーク: Hono</li>
          <li>言語: TypeScript</li>
          <li>レンダリング: Server-Side Rendering</li>
          <li>ホスティング: Cloudflare Pages</li>
        </ul>
      </section>

      <section class="card" id="rules">
        <h2>運用方針</h2>
        <ul>
          <li>事実と意見を可能な範囲で区別する</li>
          <li>すべてのリプライやDMに返信する義務はない</li>
          <li>記載内容は予告なく変更される場合がある</li>
        </ul>
        <p style="margin-top:1rem;font-size:0.875rem">
          このページの情報の正確性について保証しません。利用によって生じた損害について責任を負いません。
        </p>
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

      <section class="card" id="links">
        <h2>リンク</h2>
        <ul>
          <li><a href="https://x.com/qa_a_aa" target="_blank" rel="noopener">@qa_a_aa</a></li>
          <li><a href="https://x.com/Qaa_a_a_a" target="_blank" rel="noopener">@Qaa_a_a_a</a></li>
          <li><a href="https://abehiroshi.la.coocan.jp/" target="_blank" rel="noopener">阿部寛のホームページ</a></li>
        </ul>
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

app.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    site: 'kubobeem.me',
    version: '5.0.0',
    design: 'liquid-glass',
    timestamp: new Date().toISOString(),
  })
})

export default app
