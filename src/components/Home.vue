<template>
  <b-container fluid>
    <b-navbar variant="faded" class="navbar">
      <b-navbar-brand class="title">
        COMMIT<span class="lighter">LINT</span>
      </b-navbar-brand>
        <b-navbar-nav class="d-none d-sm-block">
          <b-nav-text>
            <span class="slogan">
              lint commit messages online
            </span>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class="rules ml-auto">
          <b-nav-item-dropdown :text="activeRule() + ' ' " right>
            <b-dropdown-item href="#Angular">Angular</b-dropdown-item>
            <b-dropdown-item href="#Conventional">Conventional</b-dropdown-item>
            <b-dropdown-item href="#Patternplate">Patternplate</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
    <b-row class="mainContainer">
      <b-col>
        <Linter :ruleName="this.rule"></Linter>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-left">
        <b-container class="footer" v-html="compiledMarkdown">
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {marked} from 'marked';
import Linter from './Linter';
import msg from '@/configs/messages';
import lintOpts from '@/configs/lintOpts'

export default {
  name: 'Home',
  data() {
    return {
      rule: ''
    }
  },
  components: {
    Linter
  },
  methods: {
    activeRule() {
      for (const [key] of Object.entries(lintOpts)) {
        if ('#' + key == this.$route.hash) {
          this.rule = key
          return key
        }
      }
      this.rule = 'Angular'
      return 'Rules'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(msg, {sanitize: true});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  min-height: 4.1667em;
  height: 5.4167em;
}
.title {
  color: #f1f8fd !important;
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
}
.title .lighter {
  color: #b2dde5;
}
.slogan{
  color: #E7D3D3;
}
::v-deep .dropdown .nav-link {
  color: #e7d3d3!important;
}
::v-deep .dropdown-menu {
  background-color: #786C7C!important;
}
::v-deep .dropdown-item {
  color: #e7d3d3!important;
}
::v-deep .dropdown-item:hover {
  background-color: #706474!important;
}
.mainContainer {
  background-color: #453E48;
  padding: 4em 0;
}
.footer {
  color: #fefeff;
  padding: 0.8em;
  max-width: 40em;
}
</style>
