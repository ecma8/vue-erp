<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <h1>公司员工</h1>
        <div class="line"></div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司">
              <el-select 
                v-model="value" 
                placeholder="请选择公司" 
                v-on:change="change(value)">
                <el-option
                    v-for ="item in form.company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <tree :companyname="companyname" :setTree="setTree" :cid="cid"></tree>
        
        
    </div>
</template>

<script>
    import tree from '../../components/tree';
    import router from "../../router";
    import Qs from 'qs';

    export default {
        components: {
            tree
        },
        data() {
            return {
                form: {
                   company: []
                },
                value: '',
                data:[],
                companyname:'',
                setTree:[],
                cid:''
            }
        },
        methods:{
            change(val){
                this.companyname = val;
                var tk = localStorage.getItem("token");
                var uid = localStorage.getItem("uid");

                this.$http({
                    url:'http://39.106.9.139/apis/restful/list/_account/user_company',
                    method:'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:Qs.stringify({
                      user_token:tk,
                      user_query:"user_id=='"+uid+"'"
                    })
                  }).then(
                    res =>{
                      // console.log(res);
                      if(res.data.is_success){
                        for(var i = 0;i < res.data.values.length; i++){
                          if(res.data.values[i].name == this.companyname){
                            this.cid = res.data.values[i].company_id;

                            this.$http({
                              url:'http://39.106.9.139/apis/restful/get/_company/company('+this.cid+')?',
                              method:'POST',
                              headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              },
                              data:Qs.stringify({
                                
                              })
                            }).then(
                              res =>{
                                // console.log(res);
                                if(res.data.value.ctree != null){
                                  this.setTree = JSON.parse(res.data.value.ctree);
                                }else{
                                  this.setTree = [];
                                }
                            })

                            return 
                          }
                        }
                      }
                    }
                  );
            },
            getcompanylist(){
                var tk = localStorage.getItem("token");
                var uid = localStorage.getItem("uid");
               

                this.$http({
                    url:'http://39.106.9.139/apis/restful/list/_account/user_company',
                    method:'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:Qs.stringify({
                      user_token:tk,
                      user_query:"user_id=='"+uid+"'"
                    })
                  }).then(
                    res =>{
                      // console.log(res);
                      // console.log(res.data.values.length);
                      if(res.data.values.length > 0){
                        for(var i = 0;i < res.data.values.length;i++){
                          this.form.company.push({
                            "value":res.data.values[i].name,
                            "label":res.data.values[i].name
                          });
                        }
                        this.value = res.data.values[0].name;
                        this.companyname = res.data.values[0].name;
                        this.cid = res.data.values[0].company_id;

                        this.$http({
                          url:'http://39.106.9.139/apis/restful/get/_company/company('+this.cid+')?',
                          method:'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                          },
                          data:Qs.stringify({
                            
                          })
                        }).then(
                          res =>{
                            console.log(res);
                            if(res.data.value.ctree != null){
                              this.setTree = JSON.parse(res.data.value.ctree);
                            }
                        })
                        
                      }
                      
                    }
                  );
            }
        },
        mounted(){
          this.getcompanylist();
        }

    }
</script>
<style scoped>
  .line{
    margin: 20px 0;
    border-top: 1px solid #dcdfe6;
  }

</style>