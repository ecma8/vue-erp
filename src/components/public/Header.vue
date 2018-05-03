<template>
  <div>
    <el-menu

      class="el-menu-demo"
      mode="horizontal"

      background-color="#222"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">海逊ERP</el-menu-item>
      <el-submenu index="2" class="user">
        <template slot="title">{{name}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import Qs from 'qs';

  export default {
    data() {
      return {
        name:''
      }
    },
    methods:{
      getName(){
        var tk = localStorage.getItem("token");
        var uid = localStorage.getItem("uid");
        this.$http({
          url:'http://39.106.9.139/apis/restful/get/_account/user('+uid+')',
          method:'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data:Qs.stringify({
            user_token:tk
          })
        }).then(
          res =>{
            // console.log(res)
            this.name = res.data.value.name
          })
      }
    },
    mounted() {
      this.getName();
    }
  }
</script>
<style scoped>
  .user{
    float: right;
  }
</style>
