import { ElMessage } from 'element-plus'
import screenfull from 'screenfull'

export function useToggleFull() {
  return () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    } else {
      ElMessage({
        type: 'warning',
        message: '你的浏览器不支持全屏模式！',
      })
      return false
    }
  }
}
