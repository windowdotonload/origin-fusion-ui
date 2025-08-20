/// <reference types="vite/client" />
declare module 'fusion-ui-iconify/dist/dist.mjs'

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
