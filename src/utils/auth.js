/**
 * 此模块封装了token的获取、设置、清除、根据token判断是否登录
 */
const HMHT_TOKEN = 'hmnt_token'

// 获取token
export const getToken = () => {
  return localStorage.getItem(HMHT_TOKEN)
}
// 设置token
export const setToken = (token) => {
  return localStorage.setItem(HMHT_TOKEN, token)
}
// 清除token
export const removeToken = (token) => {
  return localStorage.removeItem(HMHT_TOKEN, token)
}
