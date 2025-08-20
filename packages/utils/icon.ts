// 临时使用 fallback 图标，避免构建时的模块解析问题
import {
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  InfoOutlined,
  WarningOutlined,
} from './fusion-ui-iconify-fallback'

export const TypeComponents = {
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  WarningOutlined,
  InfoOutlined,
}

export const TypeComponentsMap = {
  success: CheckCircleOutlineOutlined,
  warning: WarningOutlined,
  error: ErrorOutlineOutlined,
  info: InfoOutlined,
}
