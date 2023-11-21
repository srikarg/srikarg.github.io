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
      'hacker-news': z.string().url().optional(),
    })
    .strict(),
})

const projectsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        description: z.string(),
        source_url: z.string().url().optional(),
        demo_url: z.string().url().optional(),
        image: image(),
        image_alt: z.string(),
      })
      .strict(),
})

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
}
