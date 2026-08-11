import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="くぁー — 個人ページ" />
        <meta name="theme-color" content="#f5f5f7" />
        <title>くぁー | kubobeem.me</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="bg-mesh" aria-hidden="true"></div>
        <div class="bg-glow bg-glow-1" aria-hidden="true"></div>
        <div class="bg-glow bg-glow-2" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  )
})
