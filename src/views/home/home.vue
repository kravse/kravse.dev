<template>
  <div class="home">
    <div class="hero">
      <h1 class="h0">Jared Krause</h1>
      <code class="code h2">
        {{typedTitle}}
        <span :class="[blink ? 'blink' : '', 'cursor']"></span>
        <span class="spacer">&nbsp;</span>
      </code>
      <!-- <h2 class="subtitle h3">I write <a href="https://vuejs.org/">VueJS</a>, <a href="">React</a>, <a href="">NodeJS</a>, <a href="">Typescript</a></h2> -->
      <!-- <p class="sub">
        Make a subtitle
      </p> -->
    </div>
    <section>
      <h3 class="h1">Hi!</h3>
      <p>My name is Jared. I'm a web developer. I use javascript to build websites, browser extensions, slack apps, and other stuff. I'm passionate about people, acccessibility, and design. </p>
    </section>
    <section>
      <h3 class="h1">Tools I use.</h3>
      <div class="lists">
        <div>
          <h4>JavaScript</h4>
          <ul>
            <li>VueJS</li>
            <li>React</li>
            <li>Node</li>
            <li>Backbone</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>CoffeeScript</li>
            <li>Backbone</li>
          </ul>
        </div>
        <div>
          <h4>CSS</h4>
          <ul>
            <li>Stylus</li>
            <li>LESS</li>
            <li>SASS/SCSS</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
          </ul>
        </div>
        <div>
          <h4>Versioning</h4>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Bitbucket</li>
          </ul>
        </div>
      </div>
    </section>
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
      blink: false
    }
  },
  computed: {},
  created: function () {
    this.blink = true
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
<style scoped src="./home.styl" lang="stylus"></style>
