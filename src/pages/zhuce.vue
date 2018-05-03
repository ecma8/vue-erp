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
      <el-form-item label="称呼">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.num"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
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
                  username:"",
                  password:"",
                  tel:"",
                  num:"",
                  name:"",
                  uid:""
                }
            }
        },
        methods:{  
            onSubmit(){
                this.$http({
                  url:'http://39.106.9.139/apis/v1806/user/add',
                  method:'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  },
                  data:Qs.stringify({
                    username:this.form.username,
                    password:this.form.password
                  })
                }).then(
                  res =>{
                    // console.log(res)
                    if(res.data.is_success){
                      // console.log("注册成功");
                      this.$http({
                          url:'http://39.106.9.139/apis/v1806/user/login',
                          method:'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                          },
                          data:Qs.stringify({
                            username:this.form.username,
                            password:this.form.password
                          })
                        }).then(
                        res =>{
                          console.log(res);
                          if(res.data.is_success){
                            // console.log("登录成功");
                            localStorage.token = res.data.token;
                            this.uid = res.data.user.id;
                            localStorage.uid = res.data.user.id;
                            this.$http({
                                url:'http://39.106.9.139/apis/restful/set/_account/user('+this.uid+')',
                                method:'POST',
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                },
                                data:Qs.stringify({
                                  user_token:res.data.token,
                                  name:this.form.name,
                                  tel:this.form.tel,
                                  idcardnum:this.form.num
                                })
                              }).then(
                                res =>{
                                  // console.log(res);
                                  if(res.data.is_success){
                                    // console.log("信息设置完毕");
                                    this.$message.success('注册成功,正在为您跳转');
                                    router.push({
                                      path:'/main/G_user_list'
                                    })
                                  }
                                }
                              );

                          }else{
                            console.log("登录失败");

                          }
                      })
                    }else{
                      this.$message.error(res.data.message);
                    }
                })
            }
        }
    }
</script>
<style scoped>
  .content{
    padding: 20px;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>