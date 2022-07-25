<template>
  <div>
    <el-card>
      <el-table :data="rightdata" border>
        <el-table-column label="#" width="50px" type="index"> </el-table-column>
        <el-table-column label="权限名称" prop="authName"> </el-table-column>
        <el-table-column label="路径" prop="path"> </el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.level == '0'
                  ? ''
                  : scope.row.level == '1'
                  ? 'success'
                  : 'warning'
              "
              >{{
                scope.row.level == "0"
                  ? "等级一"
                  : scope.row.level == "1"
                  ? "等级二"
                  : "等级三"
              }}</el-tag
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRights } from '@/api/rights'
export default {
  created () {
    this.getRights()
  },
  data () {
    return {
      rightdata: []
    }
  },
  methods: {
    async getRights () {
      const res = await getRights()
      console.log(res)
      this.rightdata = res.data.data
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
