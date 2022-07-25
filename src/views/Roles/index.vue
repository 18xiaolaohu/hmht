<template>
  <div>
    <!-- 添加 -->
    <el-card>
      <el-button type="primary">添加角色</el-button>
      <!-- 表单 -->
      <el-table :data="tableData" border>
        <el-table-column type="expand"> </el-table-column>
        <el-table-column label="#" width="30" type="index"> </el-table-column>
        <el-table-column label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作" width="350px" align="center">
          <template v-slot="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="putclick = true"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="putRoles(scope.row.id)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="rightVisible" width="20%">
      <el-tree v-if="rightVisible"></el-tree>
      <template #footer>
        <el-button type="primary">确认</el-button>
        <el-button @click="rightVisible = false">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getRoles, putRoles } from '@/api/roles'
export default {
  name: 'Roles',
  created () {
    this.getRoles()
  },
  data () {
    return {
      tableData: [],
      rightVisible: false
    }
  },
  methods: {
    // 获取角色列表
    async getRoles () {
      try {
        const res = await getRoles()
        console.log(res)
        this.tableData = res.data.data
      } catch (err) {
        console.log(err)
      }
    },
    // 分配权限
    async putRoles (id) {
      try {
        const res = await putRoles(this.roleId)
        console.log(res)
        this.rightVisible = true
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.el-table {
  margin-top: 30px;
}
</style>
