<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button class="right" type="text" @click="zhuce">注册</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import router from "../router";
    import Qs from 'qs'; 

    export default {
        data() {
            return {
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            onSubmit(){
              this.$http({
                  url:'http://39.106.9.139/apis/v1806/user/login',
                  method:'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  },
                  data:Qs.stringify({username:this.form.username,password:this.form.password})
                }).then(
                res =>{
                  // console.log(res)
                  if(res.data.is_success){
                    localStorage.token = res.data.token;
                    localStorage.uid = res.data.user.id;
                    // console.log(res.data);
                    this.$message({
                      message: '登录成功',
                      type: 'success'
                    });
                    router.push({
                      path:'/main/G_user_list'
                    })
                  }else{
                    this.$message.error(res.data.message);
                  }
                })
            },
            zhuce(){
              router.push({
                path:'/registered'
              })
            }
        }
    }
</script>
<style scoped>
    .right{
      float: right;
      padding: 12px 20px;
    }
    .content{
      padding: 20px;
      border-radius: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
</style>