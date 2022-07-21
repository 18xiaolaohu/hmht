<template>
  <div>
    <el-card>
      <!-- 输入框 -->
      <div>
        <el-input placeholder="请输入内容" v-model="input" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" class="tj-btn" @click="addclick = true"
          >添加按钮</el-button
        >
      </div>
      <!-- 表格 -->
      <div class="biaoge">
        <el-table :data="tableData" height="250" border style="width: 100%">
          <el-table-column prop="id" label="#" width="50"> </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="role_name" label="角色"> </el-table-column>
          <el-table-column label="状态">
            <el-switch
              v-model="value"
              active-color="#409eff"
              inactive-color="#dcdfe6"
            >
            </el-switch>
          </el-table-column>
          <el-table-column prop="operate" label="操作">
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="danger" icon="el-icon-delete"></el-button>
            <el-button type="warning" icon="el-icon-setting"></el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="100"
        >
        </el-pagination>
      </div>
    </el-card>
    <!-- 弹出-添加用户 -->
    <el-dialog title="添加用户" :visible.sync="addclick" width="50%">
      <el-form label-width="80px">
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
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUsers } from '@/api/user'
export default {
  created () {
    this.getUsers()
  },
  data () {
    return {
      input: '',
      userObj: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      tableData: [],
      total: 1,
      value: true,
      addclick: false, // 添加页面
      ruleForm: { // 添加页面内容
        username: '',
        password: '',
        email: '',
        mobile: ''
      }
    }
  },
  methods: {
    // // 获取用户列表
    async getUsers () {
      try {
        const res = await getUsers(this.userObj)
        console.log(res)
        this.total = res.data.total
        this.tableData = res.data.users
      } catch (error) {
        console.log(error)
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
.el-card {
  width: 100%;
  height: 440px;
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
