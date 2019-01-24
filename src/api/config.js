export const MAX_TIME_OUT = 5000

export const DEV = process.env.NODE_ENV !== 'production'

export const HOST = !DEV ? 'http://zlc-dev.helloshi.com/index.php/' : 'http://zhulichou.helloshi.com/index.php/'
