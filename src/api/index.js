import axios from './axios'
import { HOST } from './config'

// wxLogin
export const orderCreate = (email, variantId, quantity, source, shop) =>
  axios.post(HOST + 'order/create', {
    email,
    items: {
      variant_id: variantId,
      quantity
    },
    source,
    shop
  })
