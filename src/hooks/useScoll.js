import { onUnmounted,onMounted,ref } from 'vue'
import { throttle } from 'underscore'

export default function useScoll(elRef) {
  let el = window

  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 100)
  
  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  })
  
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
// export default function useScoll() {
//   const isReachBottom = ref(false)
//   const clientHeight = ref(0)
//   const scrollTop = ref(0)
//   const scrollHeight = ref(0)
//   const scrollListenerHandler = () => {
//      clientHeight.value = document.documentElement.clientHeight
//      scrollTop.value = document.documentElement.scrollTop
//      scrollHeight.value = document.documentElement.scrollHeight
//     if ((clientHeight.value + scrollTop.value + 1) >= scrollHeight.value) {
//       // if(reachBottomCB) reachBottomCB()
//       isReachBottom.value = true
//     }
//   }
//   onMounted(() => {
//     window.addEventListener('scroll', scrollListenerHandler)
//   })
  
//   onUnmounted(() => {
//     window.removeEventListener('scroll', scrollListenerHandler)
//   })
//   return {isReachBottom , scrollTop}
// }