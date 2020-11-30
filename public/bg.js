var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(-40, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0); // the default
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(4, 10, 10);
var material = new THREE.MeshBasicMaterial({
  color: "#f9844a",
  wireframe: true
});
var sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);
camera.position.z = 6;

var animate = function () {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.0005;
  sphere.rotation.y += 0.0005;
  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
