declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// JSX 类型定义
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
