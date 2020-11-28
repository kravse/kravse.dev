<template>
  <div id="app">
    <div class="app-inner">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>
      <site-footer/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    'site-footer': footer
  }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

