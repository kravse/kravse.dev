<template>
  <div id="footer">
    <section>
      <p>
        <a href="https://www.github.com/kravse">Github</a>
        <a href="https://www.twitter.com/kravse">Tweets</a>
        <a href="https://www.kravse.com">Photos</a>
        <a :href="`mailt`+`o:jare`+`d@k`+`ravs`+`e.de`+`v`">{{`jare`+`d@k`+`rav`+`se.`+`de`+`v`}}</a>
      </p>
      <p class="copyright">Jared Krause © {{new Date().getFullYear()}}</p>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'site-footer',
});
</script>
<style scoped src="./footer.styl" lang="stylus"></style>

