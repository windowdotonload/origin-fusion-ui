简体中文 | [English](./README.en-CN.md)

<p align="center">
<img  width="120px" height="100px"  src="https://img-blog.csdnimg.cn/99f1d53fa0b244809eee1a8a359e3261.png#pic_center" >
</p>
<h1 align="center">Fusion Ui</h1>
<p align="center">Fusion Ui /ˈfjuːʒ(ə)n/ 是一个 Vue3 组件库，简洁、优雅、美观</p>
</p>

## 简介

由于它刚起步，还在慢慢完善中，因此不建议用于``生产``环境中

如果想学习Vue3+Ts+Vite组件库的搭建，那么它会是一个不错的选择

## 特性

- 🧜 组件设计-提供整洁和美丽的精心制作的 UI 组件。
- 🎡 按需引入-提供解析器以自动导入仅使用过的组件。
- 💪 支持 TypeScript-支持类型脚本和类型检查及类型推断。
- 🧪 Vitest 单元测试
- ⚡️ 全面基于 Vite，速度够快
- 📃 详细的中/英文档
- 🛠  More...

## 安装

```
# pnpm
$ pnpm add fusion-ui-vue

# npm
$ npm install fusion-ui-vue

# yarn
$ yarn add fusion-ui-vue

```

## 使用

```
import { createApp } from 'vue'
import fusionUi from 'fusion-ui-vue'
import 'fusion-ui-vue/dist/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(fusionUi).mount('#app')

```

## 配套文档

- [DOCS](https://tsinghua-lau.github.io/fusion-ui/)

## 仓库目录
```bash

├─ .github                  # 模块化配置
│  ├─ workflows             # 工作流 github actions
├─ .husky                   # 提交规则 git hooks
├─ .vscode                  # vscode 配置
├─ build                    # gulp打包 配置
│
├─ docs                     # 组件库文档
│  ├─ .vitepress            # 文档配置
│      ├─ components        # 组件库文档组件
│      ├─ configuration     # 文档页面结构
│      ├─ dist              # 文档打包后的文件
│      ├─ plugins           # 文档插件
│      ├─ theme             # 文档主题
│      ├─ config.ts         # VitePress 配置
│  ├─ examples              # 组件库示例代码
│  ├─ langs                 # 文档多语言
│  ├─ components.d          # 文档组件类型声明
│  ├─ package.json          # package.json
│  ├─ tsconfig.json         # tsconfig 配置
├─ ├─ unocss.config.ts      # unocss 配置
│
├─ packages                 # 组件库代码
│  ├─ components            # 组件库全部组件
│  ├─ hooks                 # 组件库hooks
│  ├─ constans              # 常量
│  ├─ styles                # 通用样式
│  ├─ utils                 # 通用工具
│
│─ playground               # 组件测试场
│
├─ scripts                  # 脚本
├─ .gitignore               # git 忽略
├─ LICENSE                  # 开源协议
├─ package.json             # package.json
├─ README.md                # 介绍
├─ tsconfig.base.json       # tsconfig 配置
├─ tsconfig.json            # tsconfig 配置
├─ vitest.config.ts         # vitest 测试配置

```

## 启动

  - 进入根目录安装依赖

  ```
    pnpm i
  ```
  - 生成 ```pakages/fusion-ui/dist```
  
  ```
    pnpm run build
  ```
  - 根目录启动组件库
  ```
    pnpm run docs:dev
  ```
  - 根目录启动组件库演练场
  ```
    pnpm run play:dev
  ```
