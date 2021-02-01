<template>
  <van-nav-bar
    title="登陆"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-form @submit="onSubmit">
    <van-field
      v-model="state.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="state.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div class="submit_btn_box">
      <van-button round block type="primary" native-type="submit"
        >提交</van-button
      >
    </div>
  </van-form>
</template>

<script>
  import { reactive } from 'vue';
  import { Toast } from 'vant';

  export default {
    setup() {
      const onClickLeft = () => Toast('返回');
      const state = reactive({
        username: '',
        password: '',
      });
      const onSubmit = (values) => {
        console.log('submit', values);
        this.$router.push({ path: '/' });
      };

      return {
        onClickLeft,
        state,
        onSubmit,
      };
    },
  };
</script>

<style scoped>
  .submit_btn_box {
    margin: 16px;
  }
</style>
