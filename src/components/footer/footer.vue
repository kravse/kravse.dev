<template>
  <div id="footer">
    <section>
      <p>
        <a href="https://www.github.com/kravse">Github</a>
        <a href="https://www.kravse.com">Photos</a>
        <a href="https://www.linkedin.com/in/jarednkrause/">LinkedIn</a>
        <a :href="`mailt`+`o:krav`+`se@`+`duc`+`k.c`+`om`">{{`krav`+`se@`+`duc`+`k.c`+`om`}}</a>
      </p>
      <p class="copyright">Jared Krause ©
        <span class="date">
          <span>{{new Date().getFullYear()}}</span>
          <span class="hov"> //&nbsp;<del>TODO: Make this dynamic</del> <span class="code">new Date().getFullYear();</span></span>
      </span></p>
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

