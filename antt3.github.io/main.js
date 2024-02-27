import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// The scene contains all objects, cameras, & lights
const scene = new THREE.Scene();

// The camera is used to view the scene
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// The renderer renders the graphics to the scene
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30)
camera.position.setX(-3);

// Renders everything in the scene
renderer.render( scene, camera );

// Creates a torus knot object
const torusKnotGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16, 3, 4 );
const torusKnotMaterial = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torusKnot = new THREE.Mesh( torusKnotGeometry, torusKnotMaterial );

// Adds the new object to the scene
scene.add(torusKnot);

// Creates light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set( 5, 5, 5 );

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

// Helper functions for debugging
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper( 200, 50 );
scene.add(lightHelper, gridHelper);

// Controls the camera using the mouse
const controls = new OrbitControls(camera, renderer.domElement);

// Improves performance by defining outside addStar
  const starGeometry = new THREE.SphereGeometry( 0.25, 24, 24 );
  const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

// Helper function to create a star at a random position
const addStar = () => {
  const star = new THREE.Mesh( starGeometry, starMaterial );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

// Creates 200 randomly positioned stars
Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Helper function to rerender the scene for animations
const animate = () => {
  requestAnimationFrame( animate );

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

animate();