<template>
  <button class="unstyled" @mouseenter="msg && msgs[msg] && setMessage()" @mouseleave="eraseMessage()">
    <slot></slot>
  </button>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'notify-item',
  data () {
    return {
      msgs: {
        vue: `Vue (pronounced /vjuː/, like view) is a progressive JavaScript framework for building user interfaces.`,
        react: `React is a JavaScript library for building component based UIs.`,
        js: `💻 && 🌐 === 😍`,
        node: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.`,
        slackbots: `Slackbots are interactive apps built with Slack's Event & Web APIs.`,
        browserExtensions: `Browser extensions are small programs that add new features to your browser and personalize your browsing experience.`,
        cloudflareWorkers: `CloudFlare workers are snippets of serverless code that run in between the browser and webhost.`,
        webpack: `Webpack is a static module bundler for modern JavaScript applications.`,
        netlify: `Netlify is a service that automates the deployment of static bundles. It's great for sites built using the JAM Stack (JavaScript, APIs and Markup).`,
        babel: `Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.`,
        vpn: `A simple tool to encrypt your internet traffic and keep your online activity private.`,
        typescript: `TypeScript is an open-source language that builds on JavaScript by adding static type definitions.`,
        python: `Python is an interpreted, high-level and general-purpose programming language.`,
        threejs: `Three.js allows the creation of GPU-accelerated 3D animations using JavaScript.`,
        street: `Street photography, also sometimes called candid photography, is photography conducted for art or enquiry that features unmediated chance encounters and random incidents within public places.`,
        title: `ಠ_ಠ is a valid identifier according to ECMAScript 6.`,
        nemoswar: `A solitaire game set in the world of Jules Verne's classic novel Twenty Thousand Leagues Under the Sea.`,
        spiritisland: `Spirit Island is a complex and thematic cooperative game set on an island full of spirits.`
      }
    }
  },
  props: {
    msg: String
  },
  computed: {
  },
  // created: function () {
  // },
  methods: {
    setMessage: function () {
      this.$store.dispatch('updateNotification', this.msgs[this.msg])
    },
    eraseMessage: function () {
      this.$store.dispatch('updateNotification', '')
    }
  }
});
</script>
<style scoped src="./notify-item.styl" lang="stylus"></style>

