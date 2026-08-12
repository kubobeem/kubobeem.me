/* lab: triple pendulum, langton ant, lorenz */

function startPendulum() {
  const canvas = document.getElementById('pendulum-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const W = canvas.width
  const H = canvas.height
  const cx = W / 2
  const cy = H * 0.18

  let s = [Math.PI * 0.9, Math.PI * 0.95, Math.PI, 0, 0, 0]
  const m = [1, 1, 1]
  const L = [90, 80, 70]
  const g = 1.0
  let trail = []
  const MAX_TRAIL = 400
  let running = true
  const energyEl = document.getElementById('pend-energy')

  function deriv(st) {
    const [t1, t2, t3, w1, w2, w3] = st
    const [m1, m2, m3] = m
    const [l1, l2, l3] = L
    const c12 = Math.cos(t1 - t2), s12 = Math.sin(t1 - t2)
    const c13 = Math.cos(t1 - t3), s13 = Math.sin(t1 - t3)
    const c23 = Math.cos(t2 - t3), s23 = Math.sin(t2 - t3)

    const M11 = (m1 + m2 + m3) * l1
    const M12 = (m2 + m3) * l2 * c12
    const M13 = m3 * l3 * c13
    const M21 = (m2 + m3) * l1 * c12
    const M22 = (m2 + m3) * l2
    const M23 = m3 * l3 * c23
    const M31 = m3 * l1 * c13
    const M32 = m3 * l2 * c23
    const M33 = m3 * l3

    const b1 =
      -(m2 + m3) * l2 * w2 * w2 * s12 -
      m3 * l3 * w3 * w3 * s13 -
      (m1 + m2 + m3) * g * Math.sin(t1)
    const b2 =
      (m2 + m3) * l1 * w1 * w1 * s12 -
      m3 * l3 * w3 * w3 * s23 -
      (m2 + m3) * g * Math.sin(t2)
    const b3 =
      m3 * l1 * w1 * w1 * s13 +
      m3 * l2 * w2 * w2 * s23 -
      m3 * g * Math.sin(t3)

    const det =
      M11 * (M22 * M33 - M23 * M32) -
      M12 * (M21 * M33 - M23 * M31) +
      M13 * (M21 * M32 - M22 * M31)
    if (Math.abs(det) < 1e-9) return [w1, w2, w3, 0, 0, 0]

    const inv11 = (M22 * M33 - M23 * M32) / det
    const inv12 = (M13 * M32 - M12 * M33) / det
    const inv13 = (M12 * M23 - M13 * M22) / det
    const inv21 = (M23 * M31 - M21 * M33) / det
    const inv22 = (M11 * M33 - M13 * M31) / det
    const inv23 = (M13 * M21 - M11 * M23) / det
    const inv31 = (M21 * M32 - M22 * M31) / det
    const inv32 = (M12 * M31 - M11 * M32) / det
    const inv33 = (M11 * M22 - M12 * M21) / det

    const a1 = inv11 * b1 + inv12 * b2 + inv13 * b3
    const a2 = inv21 * b1 + inv22 * b2 + inv23 * b3
    const a3 = inv31 * b1 + inv32 * b2 + inv33 * b3
    return [w1, w2, w3, a1, a2, a3]
  }

  function rk4(st, dt) {
    const k1 = deriv(st)
    const s2 = st.map((v, i) => v + 0.5 * dt * k1[i])
    const k2 = deriv(s2)
    const s3 = st.map((v, i) => v + 0.5 * dt * k2[i])
    const k3 = deriv(s3)
    const s4 = st.map((v, i) => v + dt * k3[i])
    const k4 = deriv(s4)
    return st.map((v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]))
  }

  function positions(st) {
    const [t1, t2, t3] = st
    const x1 = cx + L[0] * Math.sin(t1)
    const y1 = cy + L[0] * Math.cos(t1)
    const x2 = x1 + L[1] * Math.sin(t2)
    const y2 = y1 + L[1] * Math.cos(t2)
    const x3 = x2 + L[2] * Math.sin(t3)
    const y3 = y2 + L[2] * Math.cos(t3)
    return [[cx, cy], [x1, y1], [x2, y2], [x3, y3]]
  }

  function energy(st) {
    const [t1, t2, t3, w1, w2, w3] = st
    const [m1, m2, m3] = m
    const [l1, l2, l3] = L
    const v1x = l1 * w1 * Math.cos(t1)
    const v1y = -l1 * w1 * Math.sin(t1)
    const v2x = v1x + l2 * w2 * Math.cos(t2)
    const v2y = v1y - l2 * w2 * Math.sin(t2)
    const v3x = v2x + l3 * w3 * Math.cos(t3)
    const v3y = v2y - l3 * w3 * Math.sin(t3)
    const T =
      0.5 * m1 * (v1x * v1x + v1y * v1y) +
      0.5 * m2 * (v2x * v2x + v2y * v2y) +
      0.5 * m3 * (v3x * v3x + v3y * v3y)
    const y1 = cy + l1 * Math.cos(t1)
    const y2 = y1 + l2 * Math.cos(t2)
    const y3 = y2 + l3 * Math.cos(t3)
    const V = -m1 * g * (y1 - cy) - m2 * g * (y2 - cy) - m3 * g * (y3 - cy)
    return T + V
  }

  function draw() {
    ctx.fillStyle = 'rgba(29, 29, 31, 0.22)'
    ctx.fillRect(0, 0, W, H)

    if (trail.length > 1) {
      ctx.beginPath()
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i]
        if (i === 0) ctx.moveTo(p[0], p[1])
        else ctx.lineTo(p[0], p[1])
      }
      ctx.strokeStyle = 'rgba(0, 113, 227, 0.45)'
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    const pts = positions(s)
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'
    ctx.lineWidth = 2.5
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(pts[0][0], pts[0][1])
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
    ctx.stroke()

    const colors = ['#86868b', '#0071e3', '#af52de', '#ff3b30']
    for (let i = 0; i < pts.length; i++) {
      ctx.beginPath()
      ctx.arc(pts[i][0], pts[i][1], i === 0 ? 4 : 8, 0, Math.PI * 2)
      ctx.fillStyle = colors[i]
      ctx.fill()
    }

    if (energyEl) energyEl.textContent = 'E ≈ ' + energy(s).toFixed(2)
  }

  function loop() {
    if (running) {
      const dt = 0.12
      for (let i = 0; i < 4; i++) s = rk4(s, dt / 4)
      const tip = positions(s)[3]
      trail.push(tip)
      if (trail.length > MAX_TRAIL) trail.shift()
    }
    draw()
    requestAnimationFrame(loop)
  }

  const toggle = document.getElementById('pend-toggle')
  const reset = document.getElementById('pend-reset')
  const nudge = document.getElementById('pend-nudge')
  if (toggle) {
    toggle.onclick = () => {
      running = !running
      toggle.textContent = running ? '一時停止' : '再開'
    }
  }
  if (reset) {
    reset.onclick = () => {
      s = [Math.PI * 0.9, Math.PI * 0.95, Math.PI, 0, 0, 0]
      trail = []
    }
  }
  if (nudge) {
    nudge.onclick = () => {
      s[3] += (Math.random() - 0.5) * 0.15
      s[4] += (Math.random() - 0.5) * 0.15
      s[5] += (Math.random() - 0.5) * 0.15
    }
  }

  ctx.fillStyle = '#1d1d1f'
  ctx.fillRect(0, 0, W, H)
  requestAnimationFrame(loop)
}

function startLorenz() {
  const canvas = document.getElementById('lorenz-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const W = canvas.width
  const H = canvas.height
  let x = 0.1, y = 0, z = 0
  const sigma = 10, rho = 28, beta = 8 / 3
  const dt = 0.008
  const scale = 8
  const ox = W / 2, oy = H * 0.45
  let running = true
  const pts = []
  const MAX = 3000

  function step() {
    const dx = sigma * (y - x)
    const dy = x * (rho - z) - y
    const dz = x * y - beta * z
    x += dx * dt
    y += dy * dt
    z += dz * dt
    pts.push([ox + x * scale, oy + z * scale * 0.85])
    if (pts.length > MAX) pts.shift()
  }

  function draw() {
    ctx.fillStyle = 'rgba(29, 29, 31, 0.08)'
    ctx.fillRect(0, 0, W, H)
    if (pts.length < 2) return
    ctx.beginPath()
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]
      if (i === 0) ctx.moveTo(p[0], p[1])
      else ctx.lineTo(p[0], p[1])
    }
    const g = ctx.createLinearGradient(0, 0, W, H)
    g.addColorStop(0, 'rgba(0, 113, 227, 0.7)')
    g.addColorStop(0.5, 'rgba(175, 82, 222, 0.7)')
    g.addColorStop(1, 'rgba(255, 59, 48, 0.5)')
    ctx.strokeStyle = g
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  function loop() {
    if (running) {
      for (let i = 0; i < 6; i++) step()
    }
    draw()
    requestAnimationFrame(loop)
  }

  const toggle = document.getElementById('lorenz-toggle')
  const reset = document.getElementById('lorenz-reset')
  if (toggle) {
    toggle.onclick = () => {
      running = !running
      toggle.textContent = running ? '一時停止' : '再開'
    }
  }
  if (reset) {
    reset.onclick = () => {
      x = 0.1; y = 0; z = 0
      pts.length = 0
      ctx.fillStyle = '#1d1d1f'
      ctx.fillRect(0, 0, W, H)
    }
  }

  ctx.fillStyle = '#1d1d1f'
  ctx.fillRect(0, 0, W, H)
  requestAnimationFrame(loop)
}

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
  startPendulum()
  startLorenz()
  startAnt()
})
