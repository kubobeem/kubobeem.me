# kubobeem.me

くぁー — HYPER FUTURE INTERFACE

## Design

超最新 × ゴテゴテ:
- HUD / サイバネティックパネル
- シアン × マゼンタ × バイオレット ネオン
- 二重グリッド + スキャンライン + ノイズ
- 浮遊オーブ × 4
- Orbitron 900 + JetBrains Mono
- レインボーHUDバー
- クライアントJSなしの純粋SSR

## Stack

- **Hono** — ultrafast Web Standards framework
- **TypeScript**
- **Hono JSX SSR**
- **Vite 6**
- **Cloudflare Pages / Edge**

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## Cloudflare Pages 設定

| 項目 | 値 |
|------|-----|
| Framework preset | None / Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

カスタムドメイン: `kubobeem.me`

## API

`GET /api/status` → JSON status
