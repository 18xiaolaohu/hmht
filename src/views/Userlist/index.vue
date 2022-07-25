<template>
  <div>
    <!-- 用户列表 -->
    <el-card>
      <!-- 输入框 -->
      <div class="ssk">
        <SearchBox></SearchBox>
        <el-button type="primary" class="tj-btn" @click="addclick = true"
          >添加按钮</el-button
        >
      </div>
      <!-- 表格 -->
      <el-card style="margin: 20px 0">
        <el-table :data="tableData" border>
          <el-table-column type="index" label="#" width="50"> </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="role_name" label="角色"> </el-table-column>
          <el-table-column label="状态" prop="mg_state">
            <template v-slot="scope">
              <el-switch
                v-model="scope.row.mg_state"
                @change="putState(scope.row.id, scope.row.mg_state)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <!-- 操作按钮 -->
          <el-table-column label="操作" width="250px" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="putclick = true"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="del(scope.row.id)"
              ></el-button>
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <!-- 分页 -->
      <el-row type="flex">
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :current-page="userObj.pagenum"
          :page-size="userObj.pagesize"
          :page-sizes="[2, 3, 4, 5, 6]"
          @current-change="handelCurrentChange"
          @size-change="handelSizeChange"
        >
        </el-pagination>
      </el-row>
    </el-card>
    <!-- 弹出-添加用户 -->
    <el-dialog
      ref="myForm"
      title="添加用户"
      :visible.sync="addclick"
      width="50%"
    >
      <el-form label-width="80px" :model="ruleForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <!-- 更多表单项 -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addclick = false">取 消</el-button>
        <el-button type="primary" @click="onClick">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 弹出-编辑用户 -->
    <el-dialog title="添加用户" :visible.sync="putclick" width="50%">
      <el-form label-width="80px" :model="putForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input disabled v-model="putForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="putForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="putForm.mobile"></el-input>
        </el-form-item>
        <!-- 更多表单项 -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="putclick = false">取 消</el-button>
        <el-button type="primary" @click="putUsers">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUsers, delUsers, putState, addUsers, putUsers } from '@/api/userlist'
import SearchBox from '@/components/SearchBox'
export default {
  name: 'UserList',
  created () {
    this.getUsers()
  },
  data () {
    return {
      userObj: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      tableData: [],
      total: 1,
      addclick: false, // 添加页面 :隐藏
      putclick: false, // 编辑添加页面 :隐藏
      ruleForm: { // 添加页面内容
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: { // 添加判断
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        email: [{ pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确邮箱', trigger: 'blur' }],
        mobile: [{ pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '请输入正确手机号', trigger: 'blur' }]
      },
      isEdit: false, // 用来判断当前是在做添加还是删除
      putForm: {
        username: this.currentName,
        email: this.currentEmail,
        mobile: this.currentMobile
      }
    }
  },
  methods: {
    // // 获取用户列表
    async getUsers () {
      try {
        const res = await getUsers(this.userObj)
        console.log(res)
        this.total = res.data.data.total
        this.tableData = res.data.data.users
      } catch (error) {
        console.log(error)
      }
    },
    // 分页页码
    handelCurrentChange (pagenum) {
      this.userObj.pagenum = pagenum
      this.getUsers()
    },
    // 每页显示条数
    handelSizeChange (pagesize) {
      this.userObj.pagesize = pagesize
      this.getUsers()
    },
    // 删除
    del (id) {
      this.$confirm('确定删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // 删除当前页最后一条信息，就应该跳转到上一页
        if (this.tableData.length === 1 && this.userObj.pagenum > 1) {
          this.userObj.pagenum--
        }
        await delUsers(id)
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getUsers()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 修改状态
    async putState (id, state) {
      console.log(id)
      console.log(state)
      console.log(id, state)
      try {
        await putState(id, state)
        this.$message.success('修改成功')
      } catch (error) {
        this.$message.error('修改失败')
      }
    },
    // 添加用户
    async onClick () {
      // this.$refs.myForm.validate()
      try {
        await addUsers(this.ruleForm)
        this.getUsers()
        this.addclick = false
        this.$message.success('添加用户成功')
      } catch (error) {
        this.$message.error('添加用户失败')
      }
    },
    // 修改用户
    async putUsers () {
      // this.$refs.editForm.validate()
      try {
        await putUsers()
        this.getUsers()
        this.putclick = false
        this.$message.success('修改成功')
      } catch (error) {
        this.$message.error('修改失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { SearchBox }
}

</script>

<style scoped lang='less'>
.ssk{
  display: flex;
}
.el-card {
  width: 100%;
  padding: 20px;
}
.el-input {
  width: 230px;
  height: 40px;
}
.biaoge {
  margin-top: 20px;
  margin-bottom: 20px;
}
.tj-btn {
  margin-left: 50px;
}
.el-dialog {
  .el-input[data-v-95561634] {
    width: 100%;
  }
}
</style>
