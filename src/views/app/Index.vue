<template>
  <van-nav-bar
    title="一房一价"
    left-text="返回"
    right-text="条件筛选"
    left-arrow
    @click-left="onClickLeft"
    @click-right="showPopup"
  />
  <div class="condition">
    <van-collapse v-model="activeNames" is-link=false>
      <van-collapse-item title="选择楼栋" name="1">
        <van-checkbox-group v-model="checked" direction="horizontal">
          <van-checkbox name="a">复选框 a</van-checkbox>
          <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
      </van-collapse-item>
    </van-collapse>
  </div>
  <van-popup
    v-model:show="show"
    round
    position="right"
    :style="{
      height: '98%',
      width: '60%',
      padding: '10px 0 5px 10px',
    }"
  >
    <div class="condition_box">
      <div class="condition">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="选择楼栋" name="1">
            <van-checkbox-group v-model="checked" direction="horizontal">
              <van-checkbox name="a">复选框 a</van-checkbox>
              <van-checkbox name="b">复选框 b</van-checkbox>
            </van-checkbox-group>
          </van-collapse-item>
          <van-collapse-item title="选择房号" name="2">内容</van-collapse-item>
          <van-collapse-item title="选择建筑面积" name="3"
            >内容</van-collapse-item
          >
          <van-collapse-item title="选择户型" name="4">内容</van-collapse-item>
          <van-collapse-item title="选择房屋类型" name="5"
            >内容</van-collapse-item
          >
          <van-collapse-item title="选择朝向" name="6">内容</van-collapse-item>
          <van-collapse-item title="选择日照" name="7">内容</van-collapse-item>
          <van-collapse-item title="输入均价范围" name="8"
            >内容</van-collapse-item
          >
          <van-collapse-item title="输入总价范围" name="9"
            >内容</van-collapse-item
          >
        </van-collapse>
      </div>
      <div class="condition_btn">
        <van-button type="primary" round block>确定</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
  import { Toast } from 'vant';
  import { ref } from 'vue';
  export default {
    setup() {
      const onClickLeft = () => Toast('返回');
      const show = ref(false);
      const showPopup = () => {
        show.value = true;
      };
      const activeNames = ref(['1']);
      const checked = ref([]);
      return { onClickLeft, show, showPopup, checked, activeNames };
    },
  };
</script>

<style scoped>
  .condition_box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .condition {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 5px;
  }
  .condition_btn {
    height: 50px;
    padding-top: 6px;
    padding-right: 10px;
  }
</style>
