<template>
  <div id="notification">
    <transition name="fade">
      <div :class="['notification-inner', centered ? 'centered': '']" v-if="notification">
        <p class="text">{{notification}}</p>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'notification',
  data () {
    return {
    }
  },
  computed: {
    centered: function () {
      return this.notification && this.notification.length < 20
    },
    notification: function () {
      return this.$store.state.notification
    }
  }
});
</script>
<style scoped src="./notification.styl" lang="stylus"></style>

