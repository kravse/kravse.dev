<template>
  <div id="app">
    <div class="app-inner" ref="appInner">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
// import THREELib from "three-js";
// const THREE = THREELib();

export default Vue.extend({
  name: 'App',
  // data () {
  //   return {
  //     scene: new THREE.Scene(),
  //     camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
  //     renderer: new THREE.WebGLRenderer()
  //   }
  // },
  // components: {
  // },
  // created: function () {
  //   Vue.nextTick(()=> {
  //     console.info(this.$refs.appInner.offsetWidth, this.$refs.appInner.offsetHeight)
  //     this.renderer.setSize( this.$refs.appInner.offsetWidth, this.$refs.appInner.offsetHeight );
  //     this.$refs.appInner.append( this.renderer.domElement );
  //     const geometry = new THREE.BoxGeometry();
  //     const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //     const cube = new THREE.Mesh( geometry, material );
  //     this.scene.add( cube );

  //     this.camera.position.z = 5;
  //     this.animate();
  //   });
  // },
  // methods: {
  //   animate: function () {
  //     requestAnimationFrame( this.animate );
  //     this.renderer.render( this.scene, this.camera );
  //   }
  // }
});
</script>
<style src="@/assets/styles/main.styl" lang="stylus"></style>

