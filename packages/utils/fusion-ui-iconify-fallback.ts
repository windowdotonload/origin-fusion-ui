// fusion-ui-iconify fallback 模块
// 当 fusion-ui-iconify 包无法正确解析时使用

import { defineComponent, h } from 'vue'

// 创建一个简单的图标组件作为 fallback
const createIconComponent = (name: string) => {
  return defineComponent({
    name,
    setup() {
      return () => h('span', { class: 'fusion-icon-fallback' }, name)
    }
  })
}

// 导出常用的图标组件
export const DeleteFilled = createIconComponent('DeleteFilled')
export const SaveFilled = createIconComponent('SaveFilled')
export const CakeFilled = createIconComponent('CakeFilled')
export const Filter3Filled = createIconComponent('Filter3Filled')
export const AccountCircleFilled = createIconComponent('AccountCircleFilled')
export const CheckCircleOutlineOutlined = createIconComponent('CheckCircleOutlineOutlined')
export const ErrorOutlineOutlined = createIconComponent('ErrorOutlineOutlined')
export const InfoOutlined = createIconComponent('InfoOutlined')
export const WarningOutlined = createIconComponent('WarningOutlined')

// 默认导出所有图标
export default {
  DeleteFilled,
  SaveFilled,
  CakeFilled,
  Filter3Filled,
  AccountCircleFilled,
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  InfoOutlined,
  WarningOutlined,
}
