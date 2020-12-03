<template>
  <div id="app" :class="[overlay ? 'stuck' : '']">
    <div class="app-inner">
      <router-view/>
      <site-footer/>
    </div>
    <template v-if="!overlay">
      <site-notification/>
      <they-live/>
    </template>
  </div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue'
import notification from '@/components/notification/notification.vue'
import theylive from '@/components/theylive/theylive.vue'

export default Vue.extend({
  name: 'App',
  components: {
    'site-footer': footer,
    'site-notification': notification,
    'they-live': theylive
  },
  computed: {
    overlay: function () {
      return this.$route.name !== 'home'
    }
  }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

