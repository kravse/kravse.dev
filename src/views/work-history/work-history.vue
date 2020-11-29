<template>
  <transition name="fade">
    <div id="work">
      <div class="work-content">
        <div class="copy">
          <h3>Web Team Lead at TunnelBear from 2017 - Present</h3>
          <ul>
            <li>Senior web developer and team lead for the TunnelBear and RememBear
            web team with a significant focus on UX and accessibility in order to serve
            millions of users each month.</li>
            <li>Hire and mentor junior developers and perform code reviews to help them
            create clean, organized and reusable code.</li>
            <li>Advocate for the needs of web users in cross-functional team meetings to
            ensure all initiatives are user focused.</li>
            <li>Responsible for architecting RememBear.com including choosing the
            JavaScript framework, creating the component-based codebase, and
            creating the global CSS architecture.</li>
            <li>Built entire RememBear.com website including user account portal, payment
            flows, payment card forms, support form and marketing landing pages.</li>
            <li>Architected the migration of the JavaScript codebase of TunnelBear.com from
            AngularJS to VueJS in order to duplicate the codebase for future products.</li>
            <li>Identified opportunity to collaborate with the support team to rebuild their
            internal support console, addressing pain points and designing a new optimized user experience.</li>
          </ul>
          <h3>Web Developer at TunnelBear from 2016 - 2017</h3>
          <ul>
            <li>Responsible for new features and maintenance of TunnelBear.com AngularJS
            web application.</li>
            <li>Collaborated with marketing lead to design and deploy UX and user flow
            experiments to optimize customer conversions on TunnelBear.com.</li>
            <li>Independently built BearsMyIP.com, a website that currently lets 50,000+
            customers each month verify their IP address.</li>
            <li>Designed and built a JavaScript framework for marketing landing pages that
            reduced the build time per campaign by 90%.</li>
          </ul>
          <h3>Web Developer at OneMethod from 2013 - 2016</h3>
          <ul>
            <li>Built 50+ responsive websites for clients including Nestlé, Nescafé, Kit Kat,
            Boost, Kijiji, CFL, Intuit, and Disney.</li>
            <li>Built websites using tools like Wordpress, Backbone.js, Drupal and others.</li>
            <li>Created custom themes for clients on Shopify, Squarespace, and Wordpress.</li>
            <li>Worked closely with senior developers, project managers and designers to
            scope, define and develop projects from start to finish.</li>
          </ul>
          <h3>IT Analyst at TD Bank Group from 2009 - 2011</h3>
          <ul>
            <li>Provided technical support and bug tested internal web applications.</li>
            <li>Facilitated associate onboarding to web applications.</li>
          </ul>
          <h3>Tech Support at City of Brampton in 2008</h3>
          <ul>
            <li>Upgraded all computer operating systems for City of Brampton employees.</li>
            <li>Installed and configured computer hardware for fire stations, police stations
            and community centers.</li>
            <li>Provided on-site technical support and quality assurance for City of</li>
          </ul>
          <!-- Education
          University of Guelph-Humber (2005 - 2010)
          Bachelor in Applied Computing & Diploma in Wireless Communication
          Languages
          JavaScript, TypeScript, CoffeeScript, HTML5, Jade, CSS, SASS, Stylus, PHP, Python, JSON
          Frameworks
          VueJs, ReactJS, ExpressJS, AngularJS, Backbone.js, Underscore, Foundation, Shopify, WordPress, Drupal, CakePHP
          Tools
          Unix, Git, RVM, NPM, WebPack, Gulp, Grunt, MAMP, Chrome & Firefox Dev Tools, Figma, Photoshop, Jira, MySQL
          Interests
          Photography, boardgames, backcountry camping, powerlifting.
                Brampton employees. -->
        </div>
      </div>
      <router-link class="home-button" :to="{name: 'home'}">✖</router-link>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'work-history',
  data() {
    return {}
  },
  components: {
  },
  mounted: function () {
     window.scrollTo(0, 0)
  },
  computed: {},
  // created: function () {},
  methods: {}

});
</script>
<style scoped src="./work-history.styl" lang="stylus"></style>
