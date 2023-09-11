import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import siteConfig from './siteConfig.json'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: siteConfig.siteUrl,
})
