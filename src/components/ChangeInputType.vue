<template>
  <el-form-item label="活动形式" :prop="prop">
    <el-input :type="inputType" v-model="password"></el-input>
  </el-form-item>
</template>
<script>
  export default {
    data(){
      return {
        password:'',
        inputType:'text',
      }
    },
    watch:{
      'password'(newVal,oldVal){
        this.model.desc=newVal
      }
    },
    methods:{

    },
    props:['prop','model'],
  }
</script>
