<template>
  <div class="login_box">
    <div class="login_dialog">
      <div class="login_title">麻辣选房</div>
      <el-form
        label-position="right"
        label-width="80px"
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_btn"
            @click="submitForm('loginForm')"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import router from '../../router/index';
import { reactive, ref } from 'vue';
export default {
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  setup() {
    // const loginForm = reactive({
    //   name: '',
    //   password: '',
    // });
    // const rules = reactive({
    //   name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    //   password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    // });
    // return {
    //   loginForm,
    //   rules,
    // };
  },
  methods: {
    submitForm(formName: string) {
      this.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          router.push('/houseToPrice');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_box {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  background-image: url('../../assets/images/pc/bg.svg');
  position: relative;
  .login_dialog {
    left: 50%;
    top: 20%;
    height: 300px;
    width: 400px;
    position: absolute;
    transform: translate(-50%);
    .login_title {
      padding: 30px 0;
      font-size: 24px;
      font-weight: 600;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
