import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'

// 创建虚拟模块插件来处理 fusion-ui-iconify
const fusionIconifyPlugin = () => {
  return {
    name: 'fusion-iconify-virtual',
    resolveId(id: string) {
      if (id === 'fusion-ui-iconify') {
        return 'virtual:fusion-ui-iconify'
      }
    },
    load(id: string) {
      if (id === 'virtual:fusion-ui-iconify') {
        // 返回 fallback 模块的内容
        return `export * from '@fusion-ui-vue/utils/fusion-ui-iconify-fallback'`
      }
    }
  }
}

export const vite = {
  resolve: {
    alias: [
      {
        find: /^.*\/VPNavBarMenu\.vue$/,
        replacement: fileURLToPath(
          new URL('../components/nav-bar-menu/index.vue', import.meta.url),
        ),
      },
    ],
  },
  plugins: [
    Unocss(),
    fusionIconifyPlugin(),
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
