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
    <div class="content-table">
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column
          v-for="(col, index) in tableColumn"
          :key="index"
          :prop="col.prop"
          :label="col.label"
          :width="col.width"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          value1: true,
          user: '',
          region: '',
        },
        tableColumn: [
          {
            prop: 'building',
            label: '楼栋',
            width: '120',
          },
          {
            prop: 'houseNo',
            label: '房号',
            width: '120',
          },
          {
            prop: 'area',
            label: '建筑面积',
            width: '120',
          },
          {
            prop: 'houseType',
            label: '户型',
            width: '180',
          },
          {
            prop: 'houseCode',
            label: '户型编码',
            width: '120',
          },
          {
            prop: 'houseChar',
            label: '房屋类型',
            width: '120',
          },
          {
            prop: 'noDecorationPrice',
            label: '清水挂牌价',
            width: '120',
          },
          {
            prop: 'decorationPrice',
            label: '装修均价',
            width: '120',
          },
          {
            prop: 'houseTotalPrice',
            label: '房屋总价',
            width: '120',
          },
          {
            prop: 'averagePrice',
            label: '总均价',
            width: '120',
          },
          {
            prop: 'direction',
            label: '朝向',
            width: '120',
          },
          {
            prop: 'sunshine',
            label: '大寒·日照',
            width: '',
          },
        ],
        tableData: [
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          },
          {
            building: '5',
            houseNo: '2801',
            area: 102.25,
            houseType: '2室2厅l卫3阳台',
            houseCode: 'G',
            houseChar: '住宅',
            noDecorationPrice: '1478842',
            decorationPrice: '2659',
            houseTotalPrice: '1750725',
            averagePrice: '17122',
            direction: '南',
            sunshine: '7-8小时',
          }
        ],
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .content_box {
    height: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    .conditon_box {
      border: 1px solid #ddd;
      border-bottom: none;
      height: 120px;
      padding: 10px;
      overflow-y: auto;
    }
    .content-table {
      flex: 1;
      border: 1px solid #ddd;
      padding: 5px;
      overflow-y: auto;
    }
  }
</style>
