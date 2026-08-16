import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      publishDate: z.coerce.date(),
      image: z.string().optional(),
      hackerNewsLink: z.url().optional(),
      tableOfContents: z.boolean().optional().default(true),
    })
    .strict(),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        description: z.string(),
        source_url: z.url().optional(),
        demo_url: z.url().optional(),
        image: image(),
        image_alt: z.string(),
      })
      .strict(),
})

export const collections = {
  blog,
  projects,
}
