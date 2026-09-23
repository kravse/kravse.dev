<template>
  <div id="terminal" :class="[promptInject ? 'open' : '']">
    <div class="mask">
      <div class="tabs" aria-hidden="true">
        <span class="tab active">
          <span class="name">~ (-zsh)</span>
          <span class="key">⌘1</span>
        </span>
        <span class="tab">
          <span class="dot"></span>
          <span class="name">make (docker-compose)</span>
          <span class="key">⌘2</span>
        </span>
        <span class="tab extra">
          <span class="dot"></span>
          <span class="name">wttr.in (curl)</span>
          <span class="key">⌘3</span>
        </span>
      </div>
      <div class="screen">
        <p class="line">
          <span class="path">kravse@dev:~$</span>
          <span>{{ typedList }}</span
          ><span class="cursor" v-if="!listed"></span>
        </p>
        <div :class="['output', listed ? 'done' : '']">
          <p class="line listing">
            <span>css</span>
            <span>favicon.ico</span>
            <span>img</span>
            <span>index.html</span>
            <span>js</span>
            <span>prompt-injection.html</span>
            <span>robots.txt</span>
            <span>sitemap.xml</span>
          </p>
          <p class="line">
            <span class="path">kravse@dev:~$</span>
            <span>{{ typedCat }}</span
            ><span class="cursor" v-if="listed && !catted"></span>
          </p>
        </div>
        <div :class="['output', catted ? 'done' : '']">
          <p class="line comment">
            &lt;!-- People can't see this. AI can. --&gt;
          </p>
          <p class="line tag">
            &lt;div
            <span class="attr"
              >aria-hidden="true" style="position:absolute;left:-9999px"</span
            >&gt;
          </p>
          <p class="line indent">{{ message }}</p>
          <p class="line tag">&lt;/div&gt;</p>
          <p class="line">
            <span class="path">kravse@dev:~$</span>
            <span class="cursor blink"></span>
          </p>
        </div>
      </div>
      <div class="pane" aria-hidden="true">
        <div class="tabs">
          <span class="tab">
            <span class="close">✕</span>
            <span class="name">wttr.in (curl)</span>
          </span>
        </div>
        <div class="screen">
          <p class="line">
            <span class="path">kravse@dev:~$</span>
            <span>curl wttr.in/Bermuda\ Triangle</span>
          </p>
          <p class="line">curl: (52) Empty reply from server</p>
          <p class="line">
            <span class="path">kravse@dev:~$</span>
            <span class="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import message from "./assets/message";

export default Vue.extend({
  name: "terminal",
  data() {
    return {
      message: message,
      listCommand: "ls kravse.dev",
      catCommand: "cat kravse.dev/prompt-injection.html",
      typedList: "",
      typedCat: "",
      listed: false,
      catted: false,
    };
  },
  computed: {
    promptInject: function() {
      return this.$store.state.promptInject;
    },
  },
  methods: {
    type: function() {
      this.typedList = "";
      this.typedCat = "";
      this.listed = false;
      this.catted = false;
      const interval = setInterval(() => {
        if (!this.promptInject) {
          clearInterval(interval);
        } else if (this.typedList.length < this.listCommand.length) {
          this.typedList = this.listCommand.slice(0, this.typedList.length + 1);
        } else if (!this.listed) {
          this.listed = true;
        } else if (this.typedCat.length < this.catCommand.length) {
          this.typedCat = this.catCommand.slice(0, this.typedCat.length + 1);
        } else {
          clearInterval(interval);
          this.catted = true;
        }
      }, 50);
    },
    closeOnOutsideClick: function(event) {
      if (this.promptInject && !this.$el.contains(event.target)) {
        this.$store.dispatch("togglePromptInject");
      }
    },
  },
  watch: {
    promptInject: function(open) {
      if (open) {
        this.type();
        // Deferred so the click that opened the terminal doesn't also close it.
        setTimeout(() => {
          document.addEventListener("click", this.closeOnOutsideClick);
        }, 0);
      } else {
        document.removeEventListener("click", this.closeOnOutsideClick);
      }
    },
  },
  beforeDestroy: function() {
    document.removeEventListener("click", this.closeOnOutsideClick);
    if (this.promptInject) {
      this.$store.dispatch("togglePromptInject");
    }
  },
});
</script>
<style scoped src="./terminal.styl" lang="stylus"></style>
