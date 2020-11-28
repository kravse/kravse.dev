<template>
  <div class="home">
    <div class="hero">
      <h1 class="code">
        {{typedTitle}}
        <span :class="[blink ? 'blink' : '', 'cursor']"></span>
        <span class="spacer">&nbsp;</span>
      </h1>
      <p>A work in progress by <a href="https://www.github.com/kravse">Jared&nbsp;Krause</a>.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      titleText: '((...ಠ_ಠ)=>`${ಠ_ಠ}`)("kravse.dev")',
      typingExperience: [
        '((siteName)=>',
        '((',
        '((ಠ_ಠ',
        '((',
        '((...ಠ_ಠ)=>`${ಠ_ಠ}`)("kravse.dev")'
      ],
      typedTitle: "",
      blink: true
    }
  },
  computed: {},
  created: function () {
    setTimeout(()=> {
      this.type()
    },1000)
  },
  methods: {
    type: function () {
      this.blink = false;
      let i = 0;
      let currentString = this.typingExperience[i];
      const interval = setInterval(() => {
        if (this.typedTitle.length < currentString.length) {
          this.typedTitle = currentString.slice(0, this.typedTitle.length + 1)
        } else if (this.typedTitle.length > currentString.length) {
          this.typedTitle = this.typedTitle.slice(0, this.typedTitle.length - 1)
        } else if (this.typedTitle.length === currentString.length) {
          if (this.typedTitle.length === this.titleText.length) {
            clearInterval(interval)
            this.blink = true;
          } else {
            i++
            currentString = this.typingExperience[i];
          }
        }
      }, 110)
    }
  }
});
</script>
<style src="@/assets/styles/home.styl" lang="stylus"></style>
