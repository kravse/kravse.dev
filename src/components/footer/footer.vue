<template>
  <div id="footer">
    <section>
      <p>
        <a href="https://www.github.com/kravse">Code</a>
        <a href="https://www.twitter.com/kravse">Tweets</a>
        <a href="https://www.kravse.com">Photos</a>
        <a href="mailto:jared@kravse.dev">jared@kravse.dev</a>
      </p>
      <p class="copyright">Jared Krause © {{new Date().getFullYear()}}</p>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'site-footer',
});
</script>
<style scoped src="./footer.styl" lang="stylus"></style>

