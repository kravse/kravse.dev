<template>
  <div class="home">
    <div class="hero">
      <h1 class="code">{{typedTitle}}<span :class="[typingDone ? 'blink' : '', 'cursor']"></span></h1>
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
      typingDone: false
    }
  },
  computed: {},
  created: function () {
    this.type()
  },
  methods: {
    type: function () {
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
            this.typingDone = true;
          } else {
            i++
            currentString = this.typingExperience[i];
          }
        }
        if (this.typingDone) clearInterval(interval)
      }, 110)
    }
  }
});
</script>
<style src="@/assets/styles/home.styl" lang="stylus"></style>
