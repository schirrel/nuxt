import { createResolver, defineNuxtModule, useNuxt } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'page-extend',
  },
  setup () {
    const nuxt = useNuxt()
    const resolver = createResolver(import.meta.url)

    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'page-extend',
        path: '/page-extend',
        file: resolver.resolve('../runtime/page.vue'),
      })
    })

    nuxt.hook('pages:resolved', (pages) => {
      pages.push({
        path: '/big-page-1',
        file: resolver.resolve('./pages/big-page.vue'),
        meta: {
          layout: false,
        },
      },
      {
        path: '/big-page-2',
        file: resolver.resolve('./pages/big-page.vue'),
        meta: {
          layout: false,
        },
      })
    })
  },
})
