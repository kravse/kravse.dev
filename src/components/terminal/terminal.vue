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
            <a href="/prompt.html">prompt.html</a>
            <span>robots.txt</span>
          </p>
          <p class="line">
            <span class="path">kravse@dev:~$</span>
            <a href="/prompt.html">{{ typedCat }}</a
            ><span class="cursor" v-if="listed && !catted"></span>
          </p>
        </div>
        <div :class="['output', catted ? 'done' : '']">
          <p class="line comment"></p>
          <p class="line tag open"><span class="attr"></span></p>
          <p class="line indent">{{ message }}</p>
          <p class="line tag close"></p>
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
    // Prerendered as already run, so the commands frame the output for
    // anything reading the static HTML. type() rewinds them on open.
    const listCommand = "ls kravse.dev";
    const catCommand = "cat kravse.dev/prompt.html";
    return {
      message: message,
      listCommand: listCommand,
      catCommand: catCommand,
      typedList: listCommand,
      typedCat: catCommand,
      listed: true,
      catted: true,
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
