<template lang="pug">
.page 
  app-search
  app-main
  app-background
</template>

<script>
import AppMain from './components/AppMain.vue'
import AppSearch from './components/AppSearch.vue'
import AppBackground from './components/AppBackground.vue'

export default {
  name: 'App',
  components: {
    AppSearch, AppBackground, AppMain
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.page{
  padding: 50px;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}
</style>
