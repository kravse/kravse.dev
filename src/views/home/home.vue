<template>
  <div class="home">
    <div class="hero">
      <h1 class="h0">Jared Krause</h1>
      <code class="code h2">
        <notify-item msg="ಠ_ಠ is a valid identifier according to ECMAScript 6.">{{typedTitle}}</notify-item>
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
      <p>I'm a web developer currently living in <strong>Toronto</strong>.</p>
      <p>I build modern, scalable web applications with <notify-item msg="Vue (pronounced /vjuː/, like view) is a progressive JavaScript framework for building user interfaces.">Vue.js</notify-item> & <notify-item msg="React is a JavaScript library for building component based UIs.">React</notify-item>. I tend to focus on writing component-based, reusable code.</p>
      <p>I &lt;3 <notify-item msg="💻 && 🌐 === 😍">JavaScript</notify-item>. Lately I've been building <notify-item msg="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.">Node.js</notify-item> apps, <notify-item msg="Slackbots are interactive apps built with the Slack's Event & Web APIs.">Slack bots</notify-item>, <notify-item msg="Browser extensions are small programs that add new features to your browser and personalize your browsing experience.">browser extensions</notify-item>, <notify-item msg="CloudFlare workers are snippets of serverless code that run in between the browser and webhost.">CloudFlare workers</notify-item> and a bunch of other cool stuff.</p>
      <p>I also have experience leading teams.</p>
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
            <span class="let">let <strong>{{key}}</strong></span> = [<li v-for="skill in skills" :key="skill">{{skill}},</li>];
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import notify from '@/components/notify-item/notify-item.vue';
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
      blink: false,
      skillSets: {
        "frameworks": [
          "Vue.js",
          "React",
          "Angular",
          "Backbone",
          "WordPress",
          "Drupal",
          "TypeScript",
          "jQuery",
          "CoffeeScript"
        ],
        "buildTools": [
          "WebPack",
          "Babel",
          "Unix",
          "Git",
          "RVM",
          "npm",
          "Bower",
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
          "SQL",
          "PHP",
          "Python",
          "Java"
        ],
        "WebHosting": [
          "Netlify",
          "Cloudflare",
          "AWS",
          "Ghost",
          "Shopify"
        ],
        "design": [
          "Sketch",
          "Photoshop",
          "Zeplin",
        ],

      }
    }
  },
  components: {
    'notify-item': notify
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
