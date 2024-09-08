import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { title, description } from '../../siteConfig.json'

export async function GET(context) {
  const blog = await getCollection('blog')

  return rss({
    title,
    description,
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
