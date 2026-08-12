/* lab interactions: board, speed, ant, 3d is CSS-only */

async function loadBoard() {
  const list = document.getElementById('board-list')
  if (!list) return
  try {
    const r = await fetch('/api/board')
    const data = await r.json()
    if (!data.posts?.length) {
      list.innerHTML = '<p class="muted">まだ投稿がありません。最初の一筆をどうぞ。</p>'
      return
    }
    list.innerHTML = data.posts.map(p => `
      <div class="board-post">
        <div class="board-meta"><strong>${esc(p.name)}</strong> · <time>${esc(p.at)}</time></div>
        <div class="board-body">${esc(p.body)}</div>
      </div>
    `).join('')
  } catch {
    list.innerHTML = '<p class="muted">掲示板を読めませんでした。</p>'
  }
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
}

async function submitBoard(e) {
  e.preventDefault()
  const form = e.target
  const name = form.name.value.trim() || '匿名'
  const body = form.body.value.trim()
  if (!body) return
  const btn = form.querySelector('button')
  btn.disabled = true
  try {
    const r = await fetch('/api/board', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, body }),
    })
    const data = await r.json()
    if (!r.ok) {
      alert(data.error || '投稿に失敗しました')
    } else {
      form.body.value = ''
      await loadBoard()
    }
  } catch {
    alert('通信エラー')
  }
  btn.disabled = false
}

/* ---- Speed test ---- */
async function runSpeedTest() {
  const out = document.getElementById('speed-result')
  const btn = document.getElementById('speed-btn')
  if (!out || !btn) return
  btn.disabled = true
  out.innerHTML = '測定中…'

  const sizes = [
    { label: '256 KB', bytes: 256 * 1024 },
    { label: '1 MB', bytes: 1024 * 1024 },
    { label: '4 MB', bytes: 4 * 1024 * 1024 },
  ]

  const lines = []
  try {
    await fetch('/api/speed/download?bytes=65536', { cache: 'no-store' })

    for (const s of sizes) {
      const t0 = performance.now()
      const r = await fetch(`/api/speed/download?bytes=${s.bytes}`, { cache: 'no-store' })
      const buf = await r.arrayBuffer()
      const t1 = performance.now()
      const sec = (t1 - t0) / 1000
      const mbps = (buf.byteLength * 8) / sec / 1e6
      lines.push(`↓ ${s.label}: <strong>${mbps.toFixed(1)} Mbps</strong> (${sec.toFixed(2)}s)`)
    }

    const upSize = 1024 * 1024
    const payload = new Uint8Array(upSize)
    crypto.getRandomValues(payload)
    const t2 = performance.now()
    const ur = await fetch('/api/speed/upload', {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/octet-stream' },
    })
    await ur.json()
    const t3 = performance.now()
    const usec = (t3 - t2) / 1000
    const umbps = (upSize * 8) / usec / 1e6
    lines.push(`↑ 1 MB: <strong>${umbps.toFixed(1)} Mbps</strong> (${usec.toFixed(2)}s)`)
    lines.push('<span class="muted">※ Worker 経由の概算です。ブラウザ拡張や回線状況で変動します。</span>')
  } catch (err) {
    lines.push('測定に失敗しました: ' + String(err.message || err))
  }
  out.innerHTML = lines.map(l => `<div>${l}</div>`).join('')
  btn.disabled = false
}

/* ---- Langton's ant ---- */
function startAnt() {
  const canvas = document.getElementById('ant-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const W = canvas.width
  const H = canvas.height
  const CELL = 4
  const cols = Math.floor(W / CELL)
  const rows = Math.floor(H / CELL)
  const grid = new Uint8Array(cols * rows)
  let x = Math.floor(cols / 2)
  let y = Math.floor(rows / 2)
  let dir = 0
  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0]
  let steps = 0
  let running = true
  let speed = 40

  const stepEl = document.getElementById('ant-steps')
  const toggleBtn = document.getElementById('ant-toggle')
  const resetBtn = document.getElementById('ant-reset')
  const speedRange = document.getElementById('ant-speed')

  function draw() {
    ctx.fillStyle = '#1d1d1f'
    ctx.fillRect(0, 0, W, H)
    for (let i = 0; i < grid.length; i++) {
      if (grid[i]) {
        const gx = i % cols
        const gy = (i / cols) | 0
        ctx.fillStyle = '#0071e3'
        ctx.fillRect(gx * CELL, gy * CELL, CELL, CELL)
      }
    }
    ctx.fillStyle = '#ff3b30'
    ctx.fillRect(x * CELL, y * CELL, CELL, CELL)
    if (stepEl) stepEl.textContent = steps.toLocaleString() + ' steps'
  }

  function tick() {
    if (!running) return
    const n = Math.max(1, speed)
    for (let i = 0; i < n; i++) {
      const idx = y * cols + x
      if (grid[idx]) {
        dir = (dir + 3) % 4
        grid[idx] = 0
      } else {
        dir = (dir + 1) % 4
        grid[idx] = 1
      }
      x = (x + dx[dir] + cols) % cols
      y = (y + dy[dir] + rows) % rows
      steps++
    }
    draw()
  }

  function loop() {
    tick()
    requestAnimationFrame(loop)
  }

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      running = !running
      toggleBtn.textContent = running ? '一時停止' : '再開'
    }
  }
  if (resetBtn) {
    resetBtn.onclick = () => {
      grid.fill(0)
      x = (cols / 2) | 0
      y = (rows / 2) | 0
      dir = 0
      steps = 0
      draw()
    }
  }
  if (speedRange) {
    speedRange.oninput = () => { speed = Number(speedRange.value) }
  }

  draw()
  requestAnimationFrame(loop)
}

document.addEventListener('DOMContentLoaded', () => {
  loadBoard()
  const form = document.getElementById('board-form')
  if (form) form.addEventListener('submit', submitBoard)
  const speedBtn = document.getElementById('speed-btn')
  if (speedBtn) speedBtn.addEventListener('click', runSpeedTest)
  startAnt()
})
