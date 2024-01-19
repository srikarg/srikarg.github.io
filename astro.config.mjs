import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import siteConfig from './siteConfig.json'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  site: siteConfig.siteUrl,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
