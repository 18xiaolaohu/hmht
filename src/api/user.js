import request from '@/utils/request'

/**
 * 登录
 * @param {*} param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'login',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户数据列表
 * @query 可选查询参数
 * @pagenum 当前页码
 * @pagesize 每页显示条数
 */
export const getUsers = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'users',
    params: { query, pagenum, pagesize }
  })
}
