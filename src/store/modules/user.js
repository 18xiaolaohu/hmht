// import { login } from '@/api/user'
// import { setToken } from '@/utils/auth'
const state = {
  // 存放token
  token: ''
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  // async login (context, data) {
  //   const res = await login(data)
  //   console.log(res)
  //   context.commit('setToken', res)
  //   setToken(res)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
