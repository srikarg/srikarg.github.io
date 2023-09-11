import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import siteConfig from './siteConfig.json'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: siteConfig.siteUrl,
})
