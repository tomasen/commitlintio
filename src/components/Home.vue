<template>
  <div class="fullscreen">
    <div class="navbar">
      <div class="title">
        CIMMITLINT
      </div>
      <div class="slogen">
        commit message linter online
      </div>
      <div class="rules">
      </div>
    </div>
    <div class="container">
      <Linter></Linter>
    </div>
    <div class="ads">

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import Linter from './Linter';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    Linter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
