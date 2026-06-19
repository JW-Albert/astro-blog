// Helpers for the two-locale routing: English at `/`, Chinese at `/zh/`.
// On a /zh/ page, Astro.url.pathname is the *neutral* path (the fallback
// rewrite strips the prefix), and Astro.currentLocale is "zh".

export type CurrentLocale = string | undefined;

/** Map Astro's locale code to the <html lang> value. */
export function htmlLang(currentLocale: CurrentLocale): "en" | "zh-TW" {
	return currentLocale === "zh" ? "zh-TW" : "en";
}

/** Given a neutral path (e.g. "/about/"), return the path for each locale. */
export function localePaths(neutralPath: string): { en: string; zh: string } {
	return {
		en: neutralPath,
		zh: "/zh" + (neutralPath === "/" ? "/" : neutralPath),
	};
}

/** Prefix an internal absolute path with the current locale (e.g. "/blog" → "/zh/blog"). */
export function localizedHref(
	currentLocale: CurrentLocale,
	path: string,
): string {
	if (currentLocale !== "zh") return path;
	return "/zh" + (path === "/" ? "/" : path);
}

/** The path for the *other* locale, used by the language toggle. */
export function altLocaleHref(
	currentLocale: CurrentLocale,
	neutralPath: string,
): string {
	const { en, zh } = localePaths(neutralPath);
	return currentLocale === "zh" ? en : zh;
}
