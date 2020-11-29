<template>
  <div class="home">
    <div class="hero">
      <!-- <code class="code h2">
        {{typedTitle}}
        <span :class="[blink ? 'blink' : '', 'cursor']"></span>
        <span class="spacer">&nbsp;</span>
      </code> -->
      <!-- <h2 class="subtitle h3">I write <a href="https://vuejs.org/">VueJS</a>, <a href="">React</a>, <a href="">NodeJS</a>, <a href="">Typescript</a></h2> -->
      <!-- <p class="sub">
        Make a subtitle
      </p> -->
    </div>
    <section>
      <!-- <h3 class="h1">Hi!</h3> -->
      <h1 class="h0">Jared Krause</h1>
      <p>I'm a web developer currently living in <strong>Toronto</strong>.</p>
      <p>I build modern, scalable web applications with <strong @mouseover="$store.dispatch('updateNotification', 'VueJS is a magical JavaScript Framework.')">VueJS</strong> & <strong>React</strong>. I tend to focus on writing component-based, reusable code.</p>
      <p>I &lt;3 <strong>JavaScript</strong>. Lately I've been building <strong>Node.js</strong> apps, <strong>Slack bots</strong>, <strong>browser extensions</strong>, <strong>CloudFlare workers</strong> and a bunch of other cool stuff.</p>
      <p>Oh, and I also have experience leading teams.</p>
      <!-- <p>I'm passionate about people, which is why I focus on creating accessible web experiences that anyone can use. I write modular, component-based, reusable code to build websites that are beautiful, responsive and scalable.</p> -->
    </section>
    <section>
      <h3 class="h1">Serious Projects</h3>
      <p><a href="https://www.tunnelbear.com">tunnelbear.com</a></p>
      <p>TunnelBear For Browser. [<a href="https://addons.mozilla.org/en-US/firefox/addon/tunnelbear-vpn-firefox/">Firefox</a>, <a href="https://chrome.google.com/webstore/detail/tunnelbear-vpn/omdakjcmkglenbhjadbccaookpfjihpa">Chrome</a>]</p>

    </section>
    <section>
      <h3 class="h1">Silly Projects</h3>
      <p><a href="https://soundlessdumb.com">soundlessdumb.com</a></p>

    </section>
    <section>
      <h3 class="h1">Toolbox.</h3>
      <!-- <p>This list isn't exhaustive, but I mostly just learn as I go anyway.</p> -->
      <div class="lists">
        <div v-for="(skills, key) in skillSets" :key="key" class="list">
          <!-- <h4 class="h5">let {{key}} = </h4> -->
          <ul>
            <span class="let">let {{key}}</span> = [<li v-for="skill in skills" :key="skill">{{skill}},</li>];
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
      // titleText: '((...ಠ_ಠ)=>`${ಠ_ಠ}`)("kravse.dev")',
      // typingExperience: [
      //   '((siteName)=>',
      //   '((',
      //   '((ಠ_ಠ',
      //   '((',
      //   '((...ಠ_ಠ)=>`${ಠ_ಠ}`)("kravse.dev")'
      // ],
      // typedTitle: "",
      // blink: false,
      skillSets: {
        "frameworks": [
          "VueJS",
          "React",
          "Angular",
          "Backbone",
          "WordPress",
          "Drupal",
          "TypeScript",
          "jQuery",
          "CoffeeScript"
        ],
        "dev": [
          "WebPack",
          "Babel",
          "Unix",
          "Git",
          "RVM",
          "npm",
          "Gulp",
          "Grunt",
          "MAMP",
        ],
        "frontEnd": [
          "HTML5",
          "Pug",
          "Stylus",
          "LESS",
          "SASS/SCSS",
          "Bootstrap",
          "Foundation",
        ],
        "backEnd": [
          "Node.js",
          "Express",
          "Nodemon",
          "SQL",
          "PHP",
          "Python",
          "Java"
        ],
        "services": [
          "Netlify",
          "Github",
          "Bitbucket",
          "Cloudflare",
          "AWS",
        ],

      }
    }
  },
  computed: {},
  // created: function () {
  //   this.blink = true
  //   setTimeout(()=> {
  //     this.type()
  //   },1000)
  // },
  // methods: {
  //   type: function () {
  //     this.blink = false;
  //     let i = 0;
  //     let currentString = this.typingExperience[i];
  //     const interval = setInterval(() => {
  //       if (this.typedTitle.length < currentString.length) {
  //         this.typedTitle = currentString.slice(0, this.typedTitle.length + 1)
  //       } else if (this.typedTitle.length > currentString.length) {
  //         this.typedTitle = this.typedTitle.slice(0, this.typedTitle.length - 1)
  //       } else if (this.typedTitle.length === currentString.length) {
  //         if (this.typedTitle.length === this.titleText.length) {
  //           clearInterval(interval)
  //           this.blink = true;
  //         } else {
  //           i++
  //           currentString = this.typingExperience[i];
  //         }
  //       }
  //     }, 110)
  //   }
  // }
});
</script>
<style scoped src="./home.styl" lang="stylus"></style>
