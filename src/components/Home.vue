<template>
  <b-container fluid>
    <b-row class="navbar">
      <b-col class="title">
        CIMMIT<span class="lighter">LINT</span>
      </b-col>
      <b-col class="slogen" cols="5">
        lint commit messages online
      </b-col>
      <b-col class="rules">
        rules: Angular
      </b-col>
    </b-row>
    <b-row class="mainContainer">
      <Linter></Linter>
    </b-row>
    <b-row class="ads">
      <script2>
       (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-3236699304584559",
            enable_page_level_ads: true
       });
      </script2>
    </b-row>
    <b-row class="footer">
        <b-col v-html="compiledMarkdown" class="text-left">
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import marked from 'marked';
import Linter from './Linter';
import msg from '../helper/messages';

export default {
  name: 'Home',
  components: {
    Linter,
  },
  computed: {
    compiledMarkdown() {
      return marked(msg, { sanitize: true });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  min-height: 4.1667em;
  height: 5.4167em;
}
.title {
  color: #f1f8fd;
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
}
.title .lighter {
  color: #b2dde5;
}
.mainContainer {
  background-color: #453E48;
  padding: 4em 0;
}
.footer {
  color: #fefeff;
}
</style>
