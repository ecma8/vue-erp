<template>
  <div id="app">
    <!--<input :type="textType">-->
    <!--<input type="button" value="点击切换" @click="changeStatus()">-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      textType:'text'
    }
  },
  // mounted(){
  //   this.$http.post(this.api.nav,{catid:6}).then((res)=>{
  //     console.log(res);
  //   })
  // },
  methods:{
    changeStatus(){
      if(this.textType === 'text'){
        this.textType = 'password'
      }else{
        this.textType = 'text'
      }
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
