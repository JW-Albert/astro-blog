# Astro 部落格 — 內容編輯指引

部落格使用 [Astro](https://astro.build) 建置，部署於 [Cloudflare Workers](https://workers.cloudflare.com/) 靜態資產服務。

---

## 專案結構

```
src/
├── content/
│   └── blog/        ← 文章放這裡（.md / .mdx）
├── pages/
│   ├── index.astro  ← 首頁
│   ├── about.astro  ← 關於頁面
│   └── blog/        ← 文章列表與文章路由
├── components/      ← Header、Footer 等元件
├── layouts/         ← 文章版型
├── styles/
│   └── global.css   ← 全域樣式
└── consts.ts        ← 網站名稱、描述
public/              ← 靜態圖片、favicon 等
```

---

## 新增文章

在 `src/content/blog/` 建立新的 `.md` 檔案：

```markdown
---
title: "文章標題"
description: "文章摘要"
pubDate: "Apr 10 2026"
heroImage: "/blog-placeholder-1.jpg"
---

正文內容寫在這裡，支援標準 Markdown 語法。
```

### Frontmatter 欄位說明

| 欄位 | 必填 | 說明 |
|------|------|------|
| `title` | 是 | 文章標題 |
| `description` | 是 | 文章摘要，用於 SEO 與文章列表 |
| `pubDate` | 是 | 發布日期，格式：`MMM DD YYYY` |
| `updatedDate` | 否 | 最後更新日期 |
| `heroImage` | 否 | 封面圖片路徑（放在 `public/` 下） |

### 使用 MDX

若需要在文章中嵌入元件，將副檔名改為 `.mdx`，即可使用 Astro / React 元件。

---

## 修改網站資訊

編輯 `src/consts.ts`：

```ts
export const SITE_TITLE = "你的部落格名稱";
export const SITE_DESCRIPTION = "網站描述";
```

---

## 修改外觀

| 目標 | 檔案 |
|------|------|
| 全域樣式 | `src/styles/global.css` |
| 導覽列 | `src/components/Header.astro` |
| 頁尾 | `src/components/Footer.astro` |
| 文章版型 | `src/layouts/BlogPost.astro` |
| 首頁 | `src/pages/index.astro` |
| 關於頁面 | `src/pages/about.astro` |

---

## 常用指令

在專案根目錄執行：

| 指令 | 說明 |
|------|------|
| `npm install` | 安裝依賴套件 |
| `npm run dev` | 啟動本地開發伺服器（`localhost:4321`） |
| `npm run build` | 建置正式版到 `./dist/` |
| `npm run preview` | 本地預覽建置結果 |
| `npm run deploy` | 部署到 Cloudflare Workers |
| `npm wrangler tail` | 查看 Cloudflare Workers 即時 log |

---

## 部署流程

```bash
# 1. 本地預覽確認無誤
npm run dev

# 2. 建置並部署
npm run build && npm run deploy
```
