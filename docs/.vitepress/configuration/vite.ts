import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'

export const vite = {
  resolve: {
    alias: [
      {
        find: /^.*\/VPNavBarMenu\.vue$/,
        replacement: fileURLToPath(
          new URL('../components/nav-bar-menu/index.vue', import.meta.url),
        ),
      },
      {
        find: 'fusion-ui-iconify',
        replacement: 'fusion-ui-iconify/dist/dist.mjs'
      }
    ],
  },
  plugins: [
    Unocss(),
  ],
  server: {
    fs: {
      allow: ['..'],
    },
  },
  ssr: {
    noExternal: ['fusion-ui-iconify'],
  },
  optimizeDeps: {
    include: ['fusion-ui-iconify'],
  },
}
