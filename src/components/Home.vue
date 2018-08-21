<template>
  <b-container fluid>
    <b-row class="navbar">
      <b-col class="title">
        CIMMITLINT
      </b-col>
      <b-col class="slogen" cols="5">
        commit message linter online
      </b-col>
      <b-col class="rules">
      </b-col>
    </b-row>
    <b-row class="mainContainer">
      <Linter></Linter>
    </b-row>
    <b-row class="ads">

    </b-row>
    <b-row class="footer">
      About
      Usage
      Tips
      FAQ
      Contact
      Term
      Home
    </b-row>
  </b-container>
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
.navbar {
  min-height: 6em;
}
.title {
  font-size: 2.5em;
}
.mainContainer {
  background-color: #453E48;
  padding: 4em 0;
}
</style>
