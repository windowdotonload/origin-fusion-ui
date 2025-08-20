/// <reference types="vite/client" />

// fusion-ui-iconify 模块声明
declare module 'fusion-ui-iconify' {
  const content: any
  export = content
}

declare module 'fusion-ui-iconify/dist/dist.mjs' {
  const content: any
  export = content
}

// Vue JSX 全局类型定义
import type { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      key?: string | number | symbol
    }
  }
}
