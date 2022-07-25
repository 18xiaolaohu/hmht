import request from '@/utils/request'

/**
 * 获取商品列表数据
 * @query 可选查询参数
 * @pagenum 当前页码
 * @pagesize 每页显示条数
 */
export const getGoods = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'goods',
    params: { query, pagenum, pagesize }
  })
}
