<template>
  <div>
    <el-input placeholder="请输入内容" v-model="input" clearable>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      input: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.el-input {
  width: 230px;
  height: 40px;
}
</style>
