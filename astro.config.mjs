import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import siteConfig from './siteConfig.json'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: siteConfig.siteUrl,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
