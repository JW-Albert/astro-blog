# AGENTS.md

This file provides guidance for AI coding agents working in this repository.

## Project Overview

An Astro 5 blog deployed on **Cloudflare Workers** as a static site. Supports bilingual content (English / Traditional Chinese) through a client-side language toggle stored in `localStorage`.

## Environment Requirements

- Node.js >= 22
- Dependencies: `npm install`

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server (`localhost:4321`) |
| `npm run build` | Production build to `./dist/` |
| `npm run check` | Full validation: build + tsc + wrangler dry-run |
| `npm run deploy` | Deploy to Cloudflare Workers |

**Always run `npm run build` to validate changes before finishing a task.** A successful build is required — fix any errors before marking work complete.

## Repository Layout

```
src/
├── components/
│   ├── BaseHead.astro      # <head> + inline lang-init script
│   ├── Header.astro        # Site nav + LangToggle
│   ├── LangToggle.astro    # EN ↔ ZH button
│   ├── HeaderLink.astro
│   ├── Footer.astro
│   └── FormattedDate.astro
├── content/
│   └── blog/               # Blog posts (.mdx)
├── content.config.ts       # Zod schema for blog collection
├── layouts/
│   └── BlogPost.astro      # Article page layout
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── blog/index.astro
│   ├── blog/[...slug].astro
│   └── rss.xml.js
├── styles/global.css
└── consts.ts
public/                     # Static assets (images, fonts)
wrangler.json               # Cloudflare Workers config
astro.config.mjs            # Astro config (mdx, sitemap, cloudflare adapter)
```

## Bilingual System

Language is toggled via the `<html lang>` attribute (`"en"` or `"zh-TW"`), persisted in `localStorage` under the key `lang`. CSS hides elements based on this attribute:

```css
html[lang="zh-TW"] [data-en] { display: none; }
html[lang="en"]    [data-zh] { display: none; }
```

### Bilingual markup patterns

**Astro pages:**
```html
<span data-en>English text</span>
<span data-zh>中文文字</span>
```

**MDX blog posts** (blank lines inside the divs are required for Markdown parsing):
```mdx
<div data-en>

English paragraph.

</div>

<div data-zh>

中文段落。

</div>
```

### Blog post frontmatter schema

```yaml
title: string           # English — used for SEO/meta
titleZh?: string        # Chinese display title
description: string     # English — used for SEO/meta
descriptionZh?: string  # Chinese description
pubDate: date
updatedDate?: date
heroImage?: string      # Path relative to public/
```

## Rules and Constraints

1. **Only `.mdx` for blog posts.** Never create `.md` files under `src/content/blog/`.
2. **MDX void elements must self-close:** `<br/>`, `<hr/>`, `<img/>`. A bare `<br>` will break the MDX build.
3. **`title` stays in English.** It feeds `<title>` and OpenGraph tags. Put the Chinese title in `titleZh`.
4. **Do not touch `dist/`** (build output) or `worker-configuration.d.ts` (auto-generated).
5. **Verify the build passes** with `npm run build` before completing any task.
