// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://blog.jw-albert.dev",
	i18n: {
		locales: ["en", "zh"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
			fallbackType: "rewrite",
		},
		fallback: {
			zh: "en",
		},
	},
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
