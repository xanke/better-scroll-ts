// ssr support
export const inBrowser = typeof window !== 'undefined'
export const ua = inBrowser && navigator.userAgent.toLowerCase()
export const isWechatDevTools = ua && /wechatdevtools/.test(ua)
export const isAndroid = ua && ua.indexOf('android') > 0