<template>
  <div id="notification">
    <div class="notification-inner">
      <code class="code h2">
        {{typedTitle}}
        <span :class="[blink ? 'blink' : '', 'cursor']"></span>
        <span class="spacer">&nbsp;</span>
      </code>
      <!-- {{notification}} -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'notification',
  data () {
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
      interval: 110,
      introComplete: false
    }
  },
  computed: {
    notification: function () {
      return this.$store.state.notification
    }
  },
  created: function () {
    this.blink = true
    setTimeout(()=> {
      this.typeIntro()
    },1000)
  },
  methods: {
    reduceOne: function (str) {
      return str.slice(0, str.length - 1)
    },
    typeIntro: function () {
      this.blink = false;
      let i = 0;
      let currentString = this.typingExperience[i];
      const interval = setInterval(() => {
        if (this.typedTitle.length < currentString.length) {
          this.typedTitle = currentString.slice(0, this.typedTitle.length + 1)
        } else if (this.typedTitle.length > currentString.length) {
          this.typedTitle = this.reduceOne(this.typedTitle)
        } else if (this.typedTitle.length === currentString.length) {
          if (this.typedTitle.length === this.titleText.length) {
            clearInterval(interval)
            this.blink = true;
            this.introComplete = true;
            if (this.notification !== "") this.typeNotification()
          } else {
            i++
            currentString = this.typingExperience[i];
          }
        }
      }, this.interval)
    },
    typeNotification: function () {
      if (!this.introComplete) return;
      let deleted = false;
      this.blink = false
      const interval = setInterval(() => {
        if (!deleted) {
          this.typedTitle = this.reduceOne(this.typedTitle)
          if (this.typedTitle.length === 0) {
            deleted = true;
          }
        } else {
          this.typedTitle = this.notification.slice(0, this.typedTitle.length + 1)
          if (this.typedTitle.length === this.notification.length) {
            clearTimeout(interval)
            this.blink = true;
          }
        }
      }, this.interval);
    }
  },
  watch: {
    notification: function (was, is) {
      this.typeNotification();
    }
  }

});
</script>
<style scoped src="./notification.styl" lang="stylus"></style>

