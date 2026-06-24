import { defineCollection, z } from "astro:content";

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

export const collections = {
  news: newsCollection,
};
