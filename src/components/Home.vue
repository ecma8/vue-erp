<template>
  <div class="box">
    <el-container>
      <el-header class="header">
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <left-nav class="aside"></left-nav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import headerNav from './public/Header';
  import leftNav from './public/LeftNav';
  export default {
    components: {
      headerNav,
      leftNav
    },
    data() {
      return {

      }
    },
  }
</script>
<style scoped>
  .aside{
    /*width:225px;
    float: left;*/
  }
  .box{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-aside{
    background-color: #222222;
  }
  .header{
    /*height: 8vh;*/
    background-color: #222222;
  }
</style>
