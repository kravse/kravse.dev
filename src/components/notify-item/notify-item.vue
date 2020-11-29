<template>
  <button @mouseenter="msg && setMessage()" @mouseleave="eraseMessage()">
    <slot></slot>
  </button>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'notify-item',
  data () {
    return {
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
      this.$store.dispatch('updateNotification', this.msg)
    },
    eraseMessage: function () {
      this.$store.dispatch('updateNotification', '')
    }
  }
});
</script>
<style scoped src="./notify-item.styl" lang="stylus"></style>

