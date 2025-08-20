import type { Component, VNodeProps, h } from 'vue'
import { computed, defineComponent, mergeProps } from 'vue'
import { css } from '@emotion/css'

// 定义 CSSInterpolation 类型，支持 null 和 undefined
type CSSInterpolation =
  | string
  | number
  | object
  | null
  | undefined
  | Array<string | number | object | null | undefined>
import { useTheme } from '../hooks'
import type Theme from './theme'

type RenderTypes = Parameters<typeof h>

export const styled = (comp: Component | string, props?: RenderTypes[1]) => {
  return (
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation),
    ...args: CSSInterpolation[]
  ) => {
    const theme = useTheme()

    return defineComponent({
      setup(_, { slots }) {
        const cssClass = computed(() => {
          if (style instanceof Function) {
            const result = style(theme?.value)
            return css(result as any)
          } else {
            return css(style as any, ...(args as any[]))
          }
        })

        return () => {
          const Comp = comp as any
          return (
            <Comp
              {...mergeProps(props as VNodeProps, { class: cssClass.value })}
            >
              {slots?.default?.()}
            </Comp>
          )
        }
      },
    })
  }
}
