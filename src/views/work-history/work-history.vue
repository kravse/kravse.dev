<template>
  <transition name="fade">
    <div id="work">
      <router-link :to="{name: 'home'}" class="click-close"></router-link>
      <div class="work-content">
        <div class="slide">
          <div class="copy">
            <h2 class="h0">Work History</h2>
            <h3 class="h2">Web Tech Lead at TunnelBear</h3>
            <h5>2017 - Present</h5>
            <ul>
              <li><p>Web tech lead for TunnelBear and RememBear with a significant focus on UX and accessibility in order to serve
              millions of users each month.</p></li>
              <li><p>Core web developer and SME for CloudFlare workers, DNS configuration, reverse proxies
              and Netlify web hosting with CI/CD. </p></li>
              <li><p>Spearheaded the migration & refactor of web suite to JAM Stack using VueJS and Webpack.</p></li>
              <li><p>Lead developer of the TunnelBear Chrome & Firefox browser extensions.</p></li>
              <li><p>Responsible for hiring and mentoring junior developers, including code reviews with a focus on
              clean, scalable and reusable code.</p></li>
              <li><p>Provide leadership on key decisions regarding JavaScript frameworks, build tools, testing,
              site scalability and architecture.</p></li>
            </ul>
            <h3 class="h2">Web Developer at TunnelBear</h3>
            <h5>2016 - 2017</h5>
            <ul>
              <li><p>Responsible for new features and maintenance of TunnelBear.com AngularJS, Node.js and Express
              web application.</p></li>
              <li><p>Collaborated with marketing lead to design and deploy UX and user flow
              experiments to optimize customer conversions on TunnelBear.com.</p></li>
              <li><p>Built BearsMyIP.com, a website that currently lets 50,000+
              customers each month verify their IP address.</p></li>
              <li><p>Designed and built a JavaScript framework for marketing landing pages that
              reduced the build time per campaign by 90%.</p></li>
            </ul>
            <h3 class="h2">Web Developer at OneMethod</h3>
            <h5>2013 - 2016</h5>
            <ul>
              <li><p>Built 50+ responsive websites for clients including Nestlé, Nescafé, Kit Kat,
              Boost, Kijiji, CFL, Intuit, and Disney.</p></li>
              <li><p>Built websites using tools like Wordpress, Backbone.js, Drupal and others.</p></li>
              <li><p>Created custom themes for clients on Shopify, Squarespace, and Wordpress.</p></li>
              <li><p>Worked closely with senior developers, project managers and designers to
              scope, define and develop projects from start to finish.</p></li>
            </ul>
            <h3 class="h2">IT Analyst at TD Bank Group</h3>
            <h5>2009 - 2011</h5>
            <ul>
              <li><p>Provided technical support and bug tested internal web applications.</p></li>
              <li><p>Facilitated associate onboarding to web applications.</p></li>
            </ul>
            <h3 class="h2">Tech Support at City of Brampton</h3>
            <h5>2008</h5>
            <ul>
              <li><p>Upgraded all computer operating systems for City of Brampton employees.</p></li>
              <li><p>Installed and configured computer hardware for fire stations, police stations
              and community centers.</p></li>
              <li><p>Provided on-site technical support and quality assurance for City of Brampton Employees</p></li>
            </ul>
          </div>
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
  mounted: function ():void {
     window.scrollTo(0, 0)
  },

});
</script>
<style scoped src="./work-history.styl" lang="stylus"></style>
