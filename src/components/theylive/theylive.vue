<template>
  <div id="theylive" aria-hidden="true">
    <button @click="theylive()" class="theylive">They Live</button>
    <img alt="" :src="require('./assets/theylive.gif') + '?t=' + new Date().getTime()" v-if="theylivegif">
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'they-live',
  data() {
    return {
      theylivegif: ''
    }
  },
  methods: {
    theylive: function () {
      // background: url('./assets/theylive2.gif')
      this.theylivegif = true; // = `./assets/theylive.gif?t='+ new Date().getTime())}")`;
      setTimeout(() => {
        this.theylivegif = false;
      }, 1500)
    }
  }
});
</script>
<style scoped src="./theylive.styl" lang="stylus"></style>

