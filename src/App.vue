<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: #756A7A;
}
a {
    color: #b2dde5;
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
