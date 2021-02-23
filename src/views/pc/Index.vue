<template>
  <el-container>
    <el-header>
      <div class="logo_box">
        <img src="../../assets/images/common/logo.png" alt="" />
      </div>
      <div class="user_center">
        <span class="login_out" @Click="loginOut">
          <img src="../../assets/images/common/loginOut.png" alt="" />
        </span>
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
  <el-dialog
    title="提示"
    v-model="loginOutVisible"
    width="30%"
  >
    <span>确认是要退出么？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="loginOutVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginOutConfirm"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      loginOutVisible: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut () {
      this.loginOutVisible = true
    },
    loginOutConfirm () {
      this.loginOutVisible = false
      this.$router.push('/login')
    },
  },
};
</script>

<style lang="scss" scoped>
#app .el-container {
  .el-header {
    // background-color: #79d1d8;
    background: url('../../assets/images/pc/headerBg.png') no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
    text-align: left;
    display: flex;
    .logo_box {
      width: 50%;
      img {
        margin-top: 5px;
        height: 50px;
        width: 50px;
        border-radius: 10px;
      }
    }
    .user_center {
      width: 50%;
      text-align: right;
      height: 100%;
      .login_out {
        margin-top: 14px;
        display: inline-block;
        height: 32px;
        width: 32px;
        cursor: pointer;
      }
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
