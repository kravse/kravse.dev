var scene = new THREE.Scene();
scene.background = new THREE.Color("#e6eaff");
var camera = new THREE.PerspectiveCamera(-40, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(3.5, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: "#ffffff", wireframe: true });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 6;

var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.001;
  cube.rotation.y += 0.002;

  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}