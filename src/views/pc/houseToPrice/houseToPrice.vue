<template>
  <div class="content_box">
    <div class="conditon_box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="选择楼栋">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择楼栋"
          >
            <el-option label="1栋" value="1"></el-option>
            <el-option label="2栋" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择房号">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择房号"
          >
            <el-option label="1号" value="1"></el-option>
            <el-option label="2号" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择建筑面积">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择建筑面积"
          >
            <el-option label="100" value="94"></el-option>
            <el-option label="80" value="80"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择户型">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择户型"
          >
            <el-option label="A" value="A"></el-option>
            <el-option label="B" value="B"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择房屋类型">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择房屋类型"
          >
            <el-option label="住宅" value="1"></el-option>
            <el-option label="公寓" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择朝向">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择朝向"
          >
            <el-option label="南" value="s"></el-option>
            <el-option label="北" value="n"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择日照">
          <el-select
            size="small"
            v-model="formInline.region"
            placeholder="选择日照"
          >
            <el-option label="7-8小时" value="5"></el-option>
            <el-option label="5-6小时" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-switch
            v-model="value1"
            active-text="输入总价范围（元）"
            inactive-text="输入均价范围（元）"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="">
          <el-input
            size="small"
            v-model="formInline.user"
            placeholder="最低"
          ></el-input>
        </el-form-item>
        <el-form-item label="至">
          <el-input
            size="small"
            v-model="formInline.user"
            placeholder="最高"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        value1: true,
        user: '',
        region: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
.content_box {
  height: 100%;
  background: #ffffff;
  .conditon_box {
    height: 120px;
    padding: 10px;
  }
}
</style>
