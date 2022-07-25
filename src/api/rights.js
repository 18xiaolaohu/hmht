import request from '@/utils/request'

// 获取权限列表
export const getRights = () => {
  return request({
    url: 'rights/list'
  })
}
