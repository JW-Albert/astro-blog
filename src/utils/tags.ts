import { getCollection } from "astro:content";

/** URL-safe slug for a tag, e.g. "Spring Boot" -> "spring-boot". */
export function tagSlug(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export interface TagInfo {
	tag: string;
	slug: string;
	count: number;
}

/** Aggregate all tags across published posts, sorted by frequency then name. */
export async function getAllTags(): Promise<TagInfo[]> {
	const posts = await getCollection("blog");
	const map = new Map<string, TagInfo>();
	for (const post of posts) {
		for (const tag of post.data.tags ?? []) {
			const slug = tagSlug(tag);
			const existing = map.get(slug);
			if (existing) existing.count++;
			else map.set(slug, { tag, slug, count: 1 });
		}
	}
	return [...map.values()].sort(
		(a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
	);
}
