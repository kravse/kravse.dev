var scene = new THREE.Scene();
scene.background = new THREE.Color("#f9c74f");
var camera = new THREE.PerspectiveCamera(-40, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(4, 10, 10);
var material = new THREE.MeshBasicMaterial({
  color: "#ffffff",
  wireframe: true
});
var sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
camera.position.z = 6;
var colors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1"]

var index = 0;
var animate = function () {
  requestAnimationFrame(animate);
  var num = Math.floor(index / 400) % (colors.length - 1)
  material.color.set(colors[num]);
  index++;

  sphere.rotation.x += 0.0005; // * ((num / 8) + 0.5);
  sphere.rotation.y += 0.0005; // * ((num / 8) + 0.5);

  // sphere2.rotation.x += -0.001;
  // sphere2.rotation.y += -0.002;

  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
