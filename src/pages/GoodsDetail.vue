<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="产品编号">
      <el-input v-model="form.name" disabled="disabled"></el-input>
    </el-form-item>
    <el-form-item label="产品分类">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="审核状态">
      <el-radio-group v-model="form.radio">
        <el-radio label="1">通过</el-radio>
        <el-radio label="2">待审核</el-radio>
        <el-radio label="3">失效</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="上下架">
      <el-radio-group v-model="form.radio1">
        <el-radio label="1">上架</el-radio>
        <el-radio label="2">下架</el-radio>
        <el-radio label="3">过滤</el-radio>
        <el-radio label="4">侵权</el-radio>
        <el-radio label="5">屏蔽</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="产品类型">
      <el-radio-group v-model="form.radio2">
        <el-radio label="1">重点</el-radio>
        <el-radio label="2">原创</el-radio>
        <el-radio label="3">海外</el-radio>
        <el-radio label="4">抓取</el-radio>
        <el-radio label="5">其它</el-radio>
        <el-radio label="6">产品库</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="商家信息">
      <el-button type="primary">产品页</el-button>
    </el-form-item>
    <el-form-item label="产品信息">
      <el-input placeholder="厂商名称" v-model="form.detail.input1">
        <template slot="prepend">厂商名称</template>
      </el-input>
      <el-input placeholder="品牌名称" v-model="form.detail.input2">
        <template slot="prepend">品牌名称</template>
      </el-input>
      <el-input placeholder="厂商编号" v-model="form.detail.input3">
        <template slot="prepend">厂商编号</template>
      </el-input>
      <el-input placeholder="内部SKU" v-model="form.detail.input4">
        <template slot="prepend">内部SKU</template>
      </el-input>
      <el-input placeholder="-" v-model="form.detail.input5">
        <template slot="prepend">SKU修正</template>
        <template slot="append">可不填(建议两位英文字母)</template>
      </el-input>
      <el-input placeholder="产品来源" v-model="form.detail.input6">
        <template slot="prepend">产品来源</template>
      </el-input>
      <el-input placeholder="来源网址" v-model="form.detail.input7">
        <template slot="prepend">来源网址</template>
      </el-input>
    </el-form-item>
    <el-form-item label="产品码">
      <el-input placeholder="请输入内容" v-model="form.input10" class="input-with-select">
        <el-select v-model="form.select1" slot="prepend" placeholder="请选择">
          <el-option label="EAN" value="1">EAN</el-option>
          <el-option label="UPC" value="2">EAN</el-option>
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item label="产品信息">
      <el-input placeholder="采购价格" v-model="form.price.input1">
        <template slot="prepend">采购价格</template>
        <template slot="append">人民币(¥)</template>
      </el-input>
      <el-input placeholder="品牌名称" v-model="form.price.input2">
        <template slot="prepend">产品重量</template>
        <template slot="append">千克(kg)</template>
      </el-input>
      <el-input placeholder="厂商编号" v-model="form.price.input3">
        <template slot="prepend">尺寸:长</template>
        <template slot="append">厘米(cm)</template>
      </el-input>
      <el-input placeholder="内部SKU" v-model="form.price.input4">
        <template slot="prepend">宽</template>
        <template slot="append">厘米(cm)</template>
      </el-input>
      <el-input placeholder="-" v-model="form.price.input5">
        <template slot="prepend">国内运费:</template>
        <template slot="append">¥</template>
      </el-input>
      <el-input placeholder="产品来源" v-model="form.price.input6">
        <template slot="prepend">折扣:</template>
        <template slot="append">系数</template>
      </el-input>
    </el-form-item>
    <el-form-item label="产品信息">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          radio: '1',
          radio1: '1',
          radio2: '1',
          input10:'',
          select1:'',
          detail:{
            input1:'1',
            input2:'1',
            input3:'1',
            input4:'1',
            input5:'1',
            input6:'1',
            input7:'1',
            input8:'1',
          },
          price:{
            input1:'1',
            input2:'1',
            input3:'1',
            input4:'1',
            input5:'1',
            input6:'1',
            input7:'1',
            input8:'1',
          }
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
