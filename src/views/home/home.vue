<template>
  <div>
    <work-history v-if="workHistory"/>
    <div :class="['home', workHistory ? 'stuck': '']" :aria-hidden="workHistory ? 'true' : 'false'">
      <div class="inner">
        <div class="hero">
          <h1 class="h0">Jared Krause</h1>
          <code class="code h2">
            <notify-item msg="title">{{typedTitle}}</notify-item>
            <span :class="[blink ? 'blink' : '', 'cursor']"></span>
            <span class="spacer">&nbsp;</span>
          </code>
        </div>
        <section>
          <h3 class="h1">Hi!</h3>
          <p>I'm a web developer currently living in Toronto.</p>
          <p>I build modern, scalable web applications with <notify-item msg="vue">Vue.js</notify-item> & <notify-item msg="react">React</notify-item>. I tend to focus on writing component-based, reusable code.</p>
          <p>I &lt;3 <notify-item msg="js">JavaScript</notify-item>. Lately I've been building <notify-item msg="node">Node.js</notify-item> apps, <notify-item msg="slackbots">Slack bots</notify-item>, <notify-item msg="browserExtensions">browser extensions</notify-item>, <notify-item msg="cloudflareWorkers">CloudFlare workers</notify-item> and a bunch of other cool stuff.</p>
          <p>I have experience leading teams and mentoring developers.</p>
          <p>If you want to chat, email me at <a href="mailto:jared@kravse.dev">jared@kravse.dev</a></p>
        </section>
        <section>
          <h3 class="h1">Work</h3>
          <p>View my full <router-link class="btn" :to="{name: 'work-history'}">work history</router-link></p>
        </section>
        <section>
          <h3 class="h1">Recent Projects</h3>
          <div class="clump">
            <h4 class="h3">Work</h4>
            <h5 class="standard-color">
              <strong>TunnelBear Website</strong><br class="xs"> [<a href="https://www.tunnelbear.com">tunnelbear.com</a>]
            </h5>
            <p class="sm">
              I'm the tech lead for the team that built and maintains the TunnelBear website.
              This is built on <notify-item msg="vue">VueJS</notify-item>, <notify-item msg="webpack">Webpack</notify-item> and <notify-item msg="babel">Babel</notify-item>, hosted with <notify-item msg="netlify">Netlify</notify-item>, and serves millions
              of users a month.
            </p>
            <h5 class="standard-color">
              <strong>TunnelBear Browser Extension</strong><br class="xs"> [<a href="https://addons.mozilla.org/en-US/firefox/addon/tunnelbear-vpn-firefox/">Firefox</a>, <a href="https://chrome.google.com/webstore/detail/tunnelbear-vpn/omdakjcmkglenbhjadbccaookpfjihpa">Chrome</a>]
            </h5>
            <p class="sm">
              I'm the core developer for the TunnelBear browser client. Built with <notify-item msg="vue">VueJS</notify-item>, <notify-item msg="typescript">TypeScript</notify-item>, <notify-item msg="webpack">WebPack</notify-item>. Put a <notify-item msg="vpn">VPN</notify-item> in your browser! This extension is used by hundreds of thousands of users globally.
            </p>
          </div>
          <div class="clump">
            <h4 class="h3">Play</h4>
            <h5 class="standard-color">
              <strong>Slack Responder Bot</strong><br class="xs"> [<a href="https://github.com/kravse/slack-responder-bot">Github</a>]
            </h5>
            <p class="sm">
              A work in progress, this is a service based Slack app that responds to user input. Built with <notify-item msg="node">Node</notify-item>, <notify-item msg="webpack">Webpack</notify-item> and <notify-item msg="typescript">TypeScript</notify-item>.
            </p>
          </div>

          <div class="clump">
            <h5 class="standard-color">
              <strong>Sound Less Dumb</strong><br class="xs"> [<a href="https://soundlessdumb.com">soundlessdumb.com</a>, <a href="https://github.com/kravse/soundlessdumb.com">Github</a>]
            </h5>
            <p class="sm">
              This is a project that creates funny and nonsensical translations of sentences. I built it with <notify-item msg="react">React</notify-item> & <notify-item msg="webpack">Webpack</notify-item> and <notify-item msg="python">Python</notify-item>.
              Initially this project relied on the Merriam-Webster API, but due to daily usage limits,
              I used Python to generate chunked thesaurus files and lazy load them with Webpack.
            </p>
          </div>

          <div class="clump">
            <h5 class="standard-color">
              <strong>This website!</strong><br class="xs"> [<a href="https://github.com/kravse/kravse.dev">Github</a>]
            </h5>
            <p class="sm">
              I built and designed this website with <notify-item msg="vue">VueJS</notify-item> and <notify-item msg="webpack">Webpack</notify-item>.
              It's hosted, served and continuously deployed as a static bundle through <notify-item msg="netlify">Netlify</notify-item>.
              The background animation is done with <notify-item msg="threejs">Three.js</notify-item>.
            </p>
          </div>
        </section>
        <section>
          <h3 class="h1">Toolbox</h3>
          <div class="lists">
            <div v-for="(skills, key) in skillSets" :key="key" class="list">
              <h4 class="title">
                <span class="let">let <strong>{{key}}</strong></span> = [
              </h4>
              <ul><li v-for="skill in skills" :key="skill"><p>{{skill}},</p></li></ul>
              <h4 class="title">];</h4>
            </div>
          </div>
        </section>
        <section>
          <h3 class="h1">Hobbies</h3>
          <p>
            I love boardgames. My favourites are <notify-item msg="nemoswar">Nemo's War</notify-item> and <notify-item msg="spiritisland">Spirit Island</notify-item>. I write reviews of games on <a href="https://instagram.com/bored.gamer">Instagram</a>.
          </p>
          <p>
            I'm a <notify-item msg="street">street photographer</notify-item>. I love to take candid and documentary style photos. I've got a portfolio of my work up at <a href="https://www.kravse.com">kravse.com</a>
          </p>
          <p>I travel whenever I can. I've visited 33 countries (and counting!). Some of my favourite destinations have been Morocco, China, Sweden, and India.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import notify from '@/components/notify-item/notify-item.vue';
import workHistory from '@/views/work-history/work-history.vue';
import skills from './assets/skills'

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
      workHistory: this.$route.name === 'work-history',
      skillSets: skills
    }
  },
  components: {
    'notify-item': notify,
    'work-history': workHistory
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
  },
  watch:{
    $route (to){
      this.workHistory = to.name === 'work-history';
    }
  }

});
</script>
<style scoped src="./home.styl" lang="stylus"></style>
