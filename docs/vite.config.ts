import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => {
  return {
    base: './',
    plugins: [vueJsx()],
    // ssr: {
    //   noExternal: ['fusion-ui-iconify'],
    // },
    // optimizeDeps: {
    //   include: ['fusion-ui-iconify'],
    // },
  }
})
