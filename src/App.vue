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
    <site-notification/>
  </div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue'
import notification from '@/components/notification/notification.vue'

export default Vue.extend({
  name: 'App',
  components: {
    'site-footer': footer,
    'site-notification': notification
  },
  computed: {
  }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

