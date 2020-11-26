<template>
  <div class="home">
    <div class="hero">
      <h1 class="code">((...ಠ_ಠ) => `${ಠ_ಠ}`)(`kravse.dev`)</h1>
      <p>A work in progress by <a href="https://www.github.com/kravse">Jared&nbsp;Krause</a>.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
  },
});
</script>

<style lang="stylus">
.home
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

  .hero
    padding: 20px;

  h1
    margin-top: 0
  p
    margin-bottom: 0
</style>
