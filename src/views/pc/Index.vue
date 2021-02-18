<template>
  <el-container>
    <el-header>
      <div class="logo_box">
        <img src="../../assets/images/common/logo.png" alt="" />
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="menu_box">
        <h3>导航菜单</h3>
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#6fabd6"
          text-color="#ffffff"
          active-text-color="#ffffff"
        >
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>一房一价</template>
          </el-menu-item>
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style lang="scss" scoped>
  #app .el-container {
    height: 100%;
    width: 100%;
    .el-header {
      // background-color: #79d1d8;
      background: url('../../assets/images/pc/headerBg.png') no-repeat;
      background-size: 100% 100%;
      color: #ffffff;
      text-align: left;
      height: 60px;
      .logo_box img {
        margin-top: 5px;
        height: 50px;
        width: 50px;
        border-radius: 10px;
      }
    }

    .el-aside {
      // background-color: #5ad4d1;
      background: url('../../assets/images/pc/leftBg.png') no-repeat;
      background-size: 100%;
      color: #ffffff;
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
