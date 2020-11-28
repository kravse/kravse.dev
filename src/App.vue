<template>
  <div id="app">
    <div class="app-inner" ref="appInner">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'App'
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

