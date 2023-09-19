import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      publishDate: z.date(),
      image: z.string().optional(),
    })
    .strict(),
})

export const collections = {
  blog: blogCollection,
}
