// 简化的构建脚本，直接调用构建任务
import { execSync } from 'child_process'
import { resolve } from 'path'

async function runBuild() {
  try {
    console.log('开始构建...')

    // 设置工作目录
    const cwd = resolve(__dirname, '..')

    // 执行 gulp 任务，使用 esno 来处理 TypeScript
    console.log('执行 gulp 构建任务...')
    execSync('npx esno node_modules/gulp/bin/gulp.js -f gulpfile.ts', {
      cwd,
      stdio: 'inherit'
    })

    console.log('构建完成!')
  } catch (error) {
    console.error('构建失败:', error)
    process.exit(1)
  }
}

runBuild()
