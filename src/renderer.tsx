import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="くぁー — HYPER FUTURE INTERFACE / kubobeem.me" />
        <meta name="theme-color" content="#000008" />
        <title>くぁー // HYPER NODE // kubobeem.me</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;700;900&family=JetBrains+Mono:wght@300;400;500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/hyper.css" />
      </head>
      <body>
        <div class="fx fx-1"></div>
        <div class="fx fx-2"></div>
        <div class="fx fx-3"></div>
        <div class="fx fx-4"></div>
        <div class="noise"></div>
        <div class="side-tick l"></div>
        <div class="side-tick r"></div>

        <div class="hud-top">
          <div class="seg">
            <span class="blink">●</span> NODE_ACTIVE
          </div>
          <div class="seg">KUBOBEEM.ME // v4.1 HYPER</div>
          <div class="seg">EDGE · SSR · HONO</div>
          <div class="seg" style="color:var(--magenta)">SECURE_LINK</div>
        </div>
        <div class="hud-bar"></div>

        {children}
      </body>
    </html>
  )
})
