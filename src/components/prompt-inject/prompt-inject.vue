<template>
  <button
    class="unstyled bug"
    :class="[promptInject ? 'active' : '']"
    aria-hidden="true"
    tabindex="-1"
    @click="togglePromptInject()"
  ></button>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "prompt-inject",
  computed: {
    promptInject: function() {
      return this.$store.state.promptInject;
    },
  },
  methods: {
    togglePromptInject: function() {
      if (!this.promptInject) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      this.$store.dispatch("togglePromptInject");
    },
  },
});
</script>
<style scoped src="./prompt-inject.styl" lang="stylus"></style>
