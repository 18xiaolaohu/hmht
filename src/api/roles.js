import request from '@/utils/request'

/**
 * 获取商品列表数据
 * 第一层为角色信息
 * 第二层开始为权限说明，权限一共有 3 层权限
 * 最后一层权限，不包含 children 属性
 */
export const getRoles = () => {
  return request({
    url: 'roles'
  })
}

// 根据角色id获取权限
export const getRolesById = id => {
  return request({
    url: `/roles/${id}`
  })
}

/** 角色授权
 * @:roleId
 * @rids 权限列表（字符串）以 , 分割的权限 ID 列表（获取所有被选中、叶子节点的 key 和半选中节点的 key, 包括 1，2，3 级节点）
 */
export const putRoles = (roleId, rids) => {
  return request({
    method: 'POST',
    url: `roles/${roleId}/rights`,
    data: { rids }
  })
}
