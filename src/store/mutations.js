import * as types from './mutation-types'
// import * as Obj from '@/utils/object'

const mutations = {
  [types.SET_LOGIN] (state, login) {
    state.login = login
    localStorage.setItem('login', login)
  }
}
export default mutations
