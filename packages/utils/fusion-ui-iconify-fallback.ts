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

// 添加所有项目中使用的图标
export const ContentCopyFilled = createIconComponent('ContentCopyFilled')
export const ContentCutFilled = createIconComponent('ContentCutFilled')
export const ContentPasteFilled = createIconComponent('ContentPasteFilled')
export const UndoFilled = createIconComponent('UndoFilled')
export const DeleteOutlined = createIconComponent('DeleteOutlined')
export const DeleteRound = createIconComponent('DeleteRound')
export const DeleteSharp = createIconComponent('DeleteSharp')
export const DeleteTwotone = createIconComponent('DeleteTwotone')
export const VerifiedRound = createIconComponent('VerifiedRound')
export const MoreVertFilled = createIconComponent('MoreVertFilled')
export const FavoriteFilled = createIconComponent('FavoriteFilled')
export const ShareFilled = createIconComponent('ShareFilled')
export const MoreOutlined = createIconComponent('MoreOutlined')
export const ExpandMoreFilled = createIconComponent('ExpandMoreFilled')
export const StarBorderOutlined = createIconComponent('StarBorderOutlined')
export const SendFilled = createIconComponent('SendFilled')
export const InboxFilled = createIconComponent('InboxFilled')
export const ArrowRightFilled = createIconComponent('ArrowRightFilled')
export const BedtimeFilled = createIconComponent('BedtimeFilled')
export const BedtimeOutlined = createIconComponent('BedtimeOutlined')
export const StarFilled = createIconComponent('StarFilled')
export const StarOutlineFilled = createIconComponent('StarOutlineFilled')

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
  ContentCopyFilled,
  ContentCutFilled,
  ContentPasteFilled,
  UndoFilled,
  DeleteOutlined,
  DeleteRound,
  DeleteSharp,
  DeleteTwotone,
  VerifiedRound,
  MoreVertFilled,
  FavoriteFilled,
  ShareFilled,
  MoreOutlined,
  ExpandMoreFilled,
  StarBorderOutlined,
  SendFilled,
  InboxFilled,
  ArrowRightFilled,
  BedtimeFilled,
  BedtimeOutlined,
  StarFilled,
  StarOutlineFilled,
}
