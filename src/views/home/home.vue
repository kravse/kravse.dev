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
          <h2>Hi!</h2>
          <p>I'm a web developer currently living in Toronto.</p>
          <p>I build modern, scalable websites and <notify-item msg="browserExtensions">browser extensions</notify-item> with <notify-item msg="vue">Vue.js</notify-item>, <notify-item msg="react">React</notify-item> and <notify-item msg="node">Node.js</notify-item> that serve millions of users a month.</p>
          <p>I &lt;3 <notify-item msg="js">JavaScript</notify-item>, so I tend to tinker with open source projects in my spare time, building fun little tools, games, or even just websites that make me laugh. </p>
          <p>I have experience leading teams and mentoring developers.</p>
          <p>If you want to chat, you can email me at <a :href="`mailto:ja` + `red@k` + `ravs` + `e.dev`">{{`jar` + `ed@` + `krav` + `se.dev`}}</a>.</p>
        </section>
        <section>
          <h2>Work</h2>
          <p>View my full <router-link class="btn work-history" :to="{name: 'work-history'}">work history</router-link>.</p>
        </section>
        <section>
          <h2>Recent Projects</h2>
          <div class="clump">
            <h3>Work</h3>
            <h5 class="standard-color">
              <strong>TunnelBear Website</strong><br class="xs"> [<a target="_blank" href="https://www.tunnelbear.com">tunnelbear.com</a>]
            </h5>
            <p class="sm">
               I'm the tech lead for the web team at TunnelBear. Our suite of websites serve millions of users a month,
               so it’s important for them to be fast, lightweight, accessible and scalable. Through my time at TunnelBear
               I’ve spearheaded the adoption of <notify-item msg="jamstack">JAM Stack</notify-item> and offloaded DNS and network complexity to Cloudflare’s edge.
               Our frontend websites are now efficiently distributed globally as tiny bundles of static code using a fully
               serverless architecture. Our deploys and testing are automated, so my team and I can focus all of our effort
               into coding new features instead of struggling with environments or deploys. I’m really proud of what I’ve built
               here, and I’ve learned a lot by testing the limits of JavaScript frameworks, <notify-item msg="cloudflareWorkers">edge workers</notify-item>,
               serverless architecture, automation, and testing.
            </p>
            <h5 class="standard-color">
              <strong>TunnelBear Browser Extension</strong><br class="xs"> [<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/tunnelbear-vpn-firefox/">Firefox</a>, <a target="_blank" href="https://chrome.google.com/webstore/detail/tunnelbear-vpn/omdakjcmkglenbhjadbccaookpfjihpa">Chrome</a>]
            </h5>
            <p class="sm">
              I'm the core developer for the TunnelBear browser client. It's a <notify-item msg="vpn">VPN</notify-item> that runs in Chrome, Firefox and Opera and serves hundreds of thousands of users globally.
              It's built with <notify-item msg="vue">Vue.js</notify-item>, <notify-item msg="typescript">TypeScript</notify-item> and <notify-item msg="webpack">Webpack</notify-item>, with a focus on security, privacy and accessibility.
            </p>
          </div>
          <div class="clump">
            <h3>Projects & Open Source</h3>
            <h5 class="standard-color">
              <strong>Fantasy Falcon</strong><br class="xs"> [<a target="_blank" href="https://www.fantasyfalcon.com">Website</a>]
            </h5>
            <p class="sm">
              Fantasy Falcon is a analytics tool that organizes and displays data to fantasy sports fans. It's an ongoing project I'm working on with some friends. It's built with <notify-item msg="typescript">TypeScript</notify-item> and <notify-item msg="firebase">FireBase</notify-item>.
            </p>
            <h5 class="standard-color">
              <strong>js-type-text</strong><br class="xs"> [<a target="_blank" href="https://npmjs.com/package/js-type-text">npm</a>, <a target="_blank" href="https://github.com/kravse/js-type-text">Github</a>]
            </h5>
            <p class="sm">
              This is an <notify-item msg="npm">npm package</notify-item> that generates a typing animation. I decided to turn the animated title of this website into an open sourced npm package so other people can use it. It's a tiny little JavaScript API that generates a typing animation through a callback function. It's a framework agnostic typing animation package built with vanilla JavaScript. Works with Vue.js, React, and everything else.
            </p>
            <h5 class="standard-color">
              <strong>Sound Less Dumb</strong><br class="xs"> [<a target="_blank" href="https://soundlessdumb.com">soundlessdumb.com</a>, <a target="_blank" href="https://github.com/kravse/soundlessdumb.com">Github</a>]
            </h5>
            <p class="sm">
              This website was a joke that evolved into something cool. It's a little <notify-item msg="react">React</notify-item> project that transforms user inputs into funny and nonsensical sentences.
              Initially I used the Merriam-Webster API to translate inputs, but after <a target="_blank" href="https://twitter.com/kravse/status/1185320735964880897">tweeting about it</a> I found the requests were surpassing their daily usage limits, so I
              used <notify-item msg="python">Python</notify-item> to generate chunked thesaurus files and lazy load them with <notify-item msg="react">Webpack</notify-item>.
              Even though this project is ridiculous, I learned a lot about how to efficiently serve data.
            </p>
            <h5 class="standard-color">
              <strong>Let It Snow &#10052;</strong><br class="xs"> [<a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/let-it-snow-addon/">Firefox</a>, <a target="_blank" href="https://chrome.google.com/webstore/detail/let-it-snow/himjfahoodiglodlcapifigneoepnkbk">Chrome</a>, <a target="_blank" href="https://github.com/kravse/let-it-snow">Github</a>]
            </h5>
            <p class="sm">
              This is a silly lightweight browser extension that adds a snow animation overlay to Firefox or Chrome. I was feeling particularly festive one evening and built it, and keep coming back to it to add features.
            </p>
            <h5 class="standard-color">
              <strong>Slack Responder Bot</strong><br class="xs"> [<a target="_blank" href="https://github.com/kravse/slack-responder-bot">Github</a>]
            </h5>
            <p class="sm">
              This is a <notify-item msg="slackbots">Slack App</notify-item> that asks users questions. It's a work in progress. It's going to be a bot that asks users about their day, because I think it might encourage people to think through some of the heaviness of the workday. It's built with <notify-item msg="node">Node.js</notify-item>, <notify-item msg="webpack">Webpack</notify-item> and <notify-item msg="typescript">TypeScript</notify-item>.
            </p>
            <h5 class="standard-color">
              <strong>This website!</strong><br class="xs"> [<a target="_blank" href="https://github.com/kravse/kravse.dev">Github</a>]
            </h5>
            <p class="sm">
              I built and designed this website with <notify-item msg="vue">Vue.js</notify-item> and <notify-item msg="webpack">Webpack</notify-item> because I feel like it's weird when web developers don't have... websites.
              It's hosted, served and continuously deployed as a static bundle through <notify-item msg="netlify">Netlify</notify-item>. It's scalable so if it ever gets popular, I'll be ready.
              The background animation something I whipped up with <notify-item msg="threejs">Three.js</notify-item>. I care about privacy so this website doesnt track you or set cookies, it doesn't
              request any third party assets or libraries, it makes no API requests, and it's fully functional with or without JavaScript.
            </p>
          </div>
        </section>
        <section>
          <h2>Toolbox</h2>
          <div class="lists">
            <div v-for="(skills, key) in skillSets" :key="key" class="list">
              <h4 class="title">
                <span class="let"><strong>{{key}}</strong> = [</span>
              </h4>
              <ul><li v-for="skill in skills" :key="skill"><p>{{skill}},</p></li></ul>
              <h4 class="title">];</h4>
            </div>
          </div>
        </section>
        <section>
          <h2>Hobbies</h2>
          <p>
            I love boardgames so much that I play them solo in addition to playing with friends. My favourites are <notify-item msg="nemoswar">Nemo's War</notify-item> and <notify-item msg="spiritisland">Spirit Island</notify-item>. I write reviews of games on <a target="_blank" href="https://instagram.com/bored.gamer">Instagram</a>.
          </p>
          <p>
            I'm a <notify-item msg="street">street photographer</notify-item>. I love to take candid and documentary photos. I've got a portfolio of my work up at <a target="_blank" href="https://www.kravse.com">kravse.com</a>.
          </p>
          <p>I travel whenever I can. I've visited 33 countries (and counting!). Some of my favourite destinations have been Morocco, China, Sweden, and India.</p>
          <p>I really enjoy hiking. This year I've been exploring Tommy Thompson, Algonquin Park, and the Bruce Trail.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
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
  created: function (){
    this.blink = true
    setTimeout(()=> {
      this.type()
    },1000)
  },
  methods: {
    type: function (){
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
