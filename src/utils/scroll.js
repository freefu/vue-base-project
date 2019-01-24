/***************************
处理vue scroll 动画相关的一些常规方法
****************************/

/**
 * scrollTo somewhere linear
 */
export const scrollLinearTo = (duration, target) => {
  let scrollStep = -window.scrollY / (duration / 15)
  let scrollInterval = setInterval(() => {
    if (window.scrollY !== target) {
      window.scrollBy(0, scrollStep)
    } else {
      clearInterval(scrollInterval)
    }
  }, 15)
}
