<template>
  <div id="app" :class="[overlay ? 'stuck' : '']">
    <div class="app-inner">
      <router-view/>
      <site-footer/>
    </div>
    <site-notification/>
  </div>
</template>
<script lang="ts">
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
    overlay: function (): boolean {
      return this.$route.name !== 'home'
    }
  }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

