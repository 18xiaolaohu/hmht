<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header>
      <div class="my">
        <img src="@/assets/touxiang.jpg" alt="" />
        <h3>后台</h3>
      </div>
      <el-button @click="retreat">退出</el-button>
    </el-header>
    <el-container>
      <!-- 导航栏 -->
      <el-aside width="">
        <el-button @click="isCollapse = !isCollapse">
          <div v-if="isCollapse" class="zhankai">
            <i class="el-icon-s-unfold"></i>
          </div>
          <div v-else class="shouqi">
            <i class="el-icon-s-fold"></i>
          </div>
        </el-button>
        <el-menu :collapse="isCollapse" unique-opened :router="true">
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userlist">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-s-check"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/roles">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </el-menu-item>
              <el-menu-item index="/rights">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/goods">
                <i class="el-icon-menu"></i>
                <span>商品列表</span>
              </el-menu-item>
              <el-menu-item index="/classification">
                <i class="el-icon-menu"></i>
                <span>分类参数</span>
              </el-menu-item>
              <el-menu-item index="/categories">
                <i class="el-icon-menu"></i>
                <span>商品分类</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/orders">
                <i class="el-icon-menu"></i>
                <span>订单列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-s-marketing"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <i class="el-icon-menu"></i>
                <span>数据报表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 一级 el-menu -> el-menu-item
// 二级 el-menu -> el-submenu -> el-menu
// 组件名就是类名
export default {
  created () { },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    async retreat () {
      try {
        this.$router.push('/login')
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
.container {
  height: 100vh;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #06263b;
    color: #fff;
    font-size: 20px;
    .el-button {
      width: 100px;
    }
  }
  .el-aside {
    background-color: #fff;
  }
  .el-main {
    background-color: #eaedf1;
  }
}
.el-menu {
  border-right: none;
}
.el-aside {
  .el-button {
    border-radius: 0;
    padding: unset;
    border: none;
    display: flex;
    .zhankai {
      width: 64px;
      height: 40px;
      line-height: 40px;
      transition: all 0.5s;
    }
    .shouqi {
      width: 200px;
      height: 40px;
      line-height: 40px;
      transition: all 0.3s;
    }
  }
}
.my {
  display: flex;
  align-items: center;
  width: 200px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 15px;
  }
}
</style>
