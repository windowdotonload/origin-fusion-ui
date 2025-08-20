import {
  isArray,
  isObject,
  isString,
} from '@vue/shared'
// 自定义 isNil 函数，替代 lodash-unified
const isNil = (value: any): value is null | undefined => value == null
export { isString, isObject, isArray }
export { isBoolean, isNumber } from '@vueuse/core'
export { isVNode } from 'vue'

export const isUndefined = (val: any): val is undefined => val === undefined

export const isEmpty = (val: unknown) =>
  (!val && val !== 0)
  || (isArray(val) && val.length === 0)
  || (isObject(val) && !Object.keys(val).length)

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined')
    return false
  return e instanceof Element
}

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop)
}

export const isStringNumber = (val: string): boolean => {
  if (!isString(val))
    return false

  return !Number.isNaN(Number(val))
}
