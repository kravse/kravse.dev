<template>
  <div id="theyLive" aria-hidden="true">
    <button @click="theyLive()" class="theyLive">They Live</button>
    <img alt="" @load="closeTheyLive()" :src="require('./assets/they-live.gif') + '?t=' + new Date().getTime()" v-if="theyLiveGif">
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'they-live',
  data() {
    return {
      theyLiveGif: ''
    }
  },
  methods: {
    theyLive: function () {
      this.theyLiveGif = true
    },
    closeTheyLive: function () {
      setTimeout(() => {
        this.theyLiveGif = false
      }, 1500)
    }
  }
});
</script>
<style scoped src="./theylive.styl" lang="stylus"></style>

