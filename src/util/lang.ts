export function getNow() {
  // window.performance 是W3C性能小组引入的新的API，支持 > IE9
  // window.performance.now() 是当前时间与performance.timing.navigationStart的时间差，以微秒（百万分之一秒）为单位的时间，与 Date.now()-performance.timing.navigationStart的区别是不受系统程序执行阻塞的影响，因此更加精准。
  // window.performance.timing.navigationStart 返回开始导航到当前页面的时间，即在地址栏输入地址后按下回车时的时间
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

export function extend(target, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    let source = rest[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

export function isUnder(v) {
  return v === undefined || v === null
}

export function getDistance(x, y) {
  // 计算平方根（勾股定理）
  return Math.sqrt(x * x + y * y)
}