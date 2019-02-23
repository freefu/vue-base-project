import axios from './axios'
import { HOST } from './config'

// get
export const getSomeData1 = (params) =>
  axios.get(HOST + 'api/something1', {
    params
  })

// post
export const getSomeData2 = (params) => axios.post(HOST + 'api/something2', params)
