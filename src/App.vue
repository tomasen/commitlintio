<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  background-color: #756A7A !important;
}
a {
  color: #b2dde5 !important;;
}
#app {
  font-family: 'Lato', sans-serif;
  font-size: 12pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E7D3D3;
  margin-top: 0px;
}
</style>
