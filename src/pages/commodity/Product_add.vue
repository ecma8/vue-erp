<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <div class="title">
    <h1 class="left">添加产品</h1>
    <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div>

  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="130px">
    <el-form-item label="商品名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-input v-model="form.class"></el-input>
    </el-form-item>
    <el-form-item label="品牌">
      <el-input v-model="form.brand"></el-input>
    </el-form-item>
    <el-form-item label="重量/kg">
      <el-input v-model="form.weight"></el-input>
    </el-form-item>
    <el-form-item label="体积/m³">
      <el-input v-model="form.bulk"></el-input>
    </el-form-item>
    
    <el-form-item label="关键字">
      <el-input v-model="form.keyword"></el-input>
    </el-form-item>
    <el-form-item label="简介">
      <el-input v-model="form.intro"></el-input>
    </el-form-item>
    <!-- <el-form-item label="商品条码EAN">
      <el-input v-model="form.EAN"></el-input>
    </el-form-item>
    <el-form-item label="商品统一代码UPC">
      <el-input v-model="form.UPC"></el-input>
    </el-form-item> -->
    <el-form-item label="商品编码SKU">
      <el-input v-model="form.SKU"></el-input>
    </el-form-item>
    <el-form-item label="变体">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-form-item>
    <el-form-item label="商品图片">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="form.dialogVisible">
        <img width="100%" :src="form.dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            form: {
              name: '',
              class: '',
              brand: '',
              weight: '',
              bulk: '',
              keyword: '',
              intro: '',
              EAN: '',
              UPC: '',
              SKU: '',
              dialogImageUrl: '',
              dialogVisible: false
            },
            dynamicTags: [],
            inputVisible: false,
            inputValue: ''
          }
        },
        methods: {
          handleClose(tag) {
           this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
         },

         showInput() {
           this.inputVisible = true;
           this.$nextTick(_ => {
             this.$refs.saveTagInput.$refs.input.focus();
           });
         },

         handleInputConfirm() {
           let inputValue = this.inputValue;
           if (inputValue) {
             this.dynamicTags.push(inputValue);
           }
           this.inputVisible = false;
           this.inputValue = '';
         },
          onSubmit() {
            console.log('submit!');
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.form.dialogVisible = true;
          }
        }
      }
</script>
<style scoped>
    .line{
      margin: 20px 0;
      border-top: 1px solid #dcdfe6;
    }
    .title{
      overflow: hidden;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }

    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
</style>