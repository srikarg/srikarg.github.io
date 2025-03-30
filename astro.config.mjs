import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { siteUrl } from './siteConfig.json'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: siteUrl,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
