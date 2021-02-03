<template>
  <el-container>
    <el-header>
      <div class="logo_box">
        <img src="../../assets/images/common/logo.png" alt="" />
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="menu_box">
        <h5>导航菜单</h5>
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#5ad4d1"
          text-color="#000"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>一房一价</template>
          </el-menu-item>
          <!-- <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </el-menu-item> -->
          <!-- <el-submenu index="5">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
#app .el-container {
  height: 100%;
  width: 100%;
  .el-header {
    background-color: #79d1d8;
    color: #333;
    text-align: left;
    line-height: 60px;
    .logo_box img {
      margin-top: 5px;
      height: 50px;
      width: 50px;
    }
  }

  .el-aside {
    background-color: #5ad4d1;
    color: #333;
    text-align: center;
    .menu_box {
      padding: 10px;
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    padding: 10px;
  }
}
</style>
