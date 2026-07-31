import { defineCollection, z } from "astro:content";

/**
 * News — dated updates. One .mdx file per item in src/content/news/.
 */
const newsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      thumbnail: image().optional(),
      tags: z.array(z.string()).default([]),
      links: z
        .array(
          z.object({
            text: z.string(),
            url: z.string(),
            icon: z.string().optional(),
          })
        )
        .default([]),
      draft: z.boolean().default(false),
    }),
});

/**
 * Prose pages — About, AI policy, License.
 *
 * Drop a new .md file in src/content/pages/ and it becomes a page at
 * /<filename>/ automatically, rendered by src/pages/[slug].astro.
 * No Astro component needed.
 */
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** Small uppercase label above the title. */
    eyebrow: z.string().optional(),
    /** Optional intro paragraph, set in larger muted type. */
    lede: z.string().optional(),
    description: z.string().optional(),
    /** Photo shown alongside the prose (About page). */
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  pages: pagesCollection,
};
