import request from '@/utils/request'

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

/**
 * 删除用户
 * @param {*} id
 * @returns
 */
export const delUsers = id => {
  return request({
    method: 'DELETE',
    url: `users/${id}`
  })
}

/**
 * 修改用户状态
 * @param {*} param0
 * @returns
 */
export const putState = (uId, type) => {
  return request({
    method: 'PUT',
    url: `users/${uId}/state/${type}`
  })
}

/**
 * 添加用户
 * @param {*} param0
 * @returns
 */
export const addUsers = ({ username, password, email, mobile }) => {
  return request({
    method: 'POST',
    url: 'users',
    data: { username, password, email, mobile }
  })
}

/**
 * 编辑用户提交
 * @param {*} param0
 * @returns
 */
export const putUsers = (id) => {
  return request({
    method: 'PUT',
    url: `users/${id}`
  })
}
