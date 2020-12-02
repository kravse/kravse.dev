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
<script lang="ts">
import Vue from 'vue';
import footer from '@/components/footer/footer.vue'
import notification from '@/components/notification/notification.vue'
import theylive from '@/components/theylive/theylive.vue'

export default Vue.extend({
  data() {
    return {
      // strings: [
      //   "Hello there",
      //   "HEllo there",
      //   "HELlo there",
      //   "HELLo there",
      //   "HELLO there"
      // ]
    }
  },
  name: 'App',
  components: {
    'site-footer': footer,
    'site-notification': notification,
    'they-live': theylive
  },
  created: function () {
    // this.consoleArt()
  },
  methods: {
    // consoleArt: function () {
    //   let i = 0;
    //   setInterval(() => {
    //     i = (i+1) % this.strings.length
    //     console.clear();
    //     console.log(`%c${this.strings[i]}`, `
    //       background: #f7f6f1;
    //       border: 3px solid #e07a5f;
    //       color: #4d7963;
    //       font-size: 50px;
    //       margin: 40px;
    //       padding: 20px;
    //     `);
    //   }, 500)
    // }
  },
  computed: {
    overlay: function (): boolean {
      return this.$route.name !== 'home'
    }
  }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

