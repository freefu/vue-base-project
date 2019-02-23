export const MAX_TIME_OUT = 5000

export const SUCCESS_CODE = 200

export const DEV = process.env.NODE_ENV !== 'production'

export const HOST = !DEV ? '' : ''
