var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.set(20, 30, 40);
camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer({});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(0, 0, 0);
  scene.add(light);
  scene.add(light.target);
}

var material = new THREE.MeshLambertMaterial({ color: "ashgrey" });
var geometry = new THREE.PlaneGeometry(200, 200);
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
//-90 rotation given in radians
mesh.rotation.x = -Math.PI / 2;
// mesh.rotation.z += 0.1;
scene.add(mesh);

// let cube = new myCube("blue").getCube();
// const loader = new THREE.CubeTextureLoader();
// loader.setPath( 'textures/cube/pisa/' );
// const textureCube = loader.load( [
// 	'px.png', 'nx.png',
// 	'py.png', 'ny.png',
// 	'pz.png', 'nz.png's
// ] );
// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
// scene.add(cube);

function drawCity() {
  cube_arr = [];

  for (let j = -30; j < 30; j++) {
    for (let i = -30; i < 30; i++) {
      let cube = new myCube("grey").getCube();
      // let cube2 = new myCube("grey").getCube();

      // cube_arr.push(new myCube("blue").getCube().position.set(i+3,0,0))
      // scene.add(new myCube("blue").getCube().position.set(i+3,0,0));
      scene.add(cube);
      // scene.add(cube2);
      cube.position.set(i * 3, 0, j*3);
      cube.scale.set(1,getRndInteger(-5, 10),1)
      // cube2.position.set(i*3,0,-3);
    }
  }
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
drawCity();
function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
