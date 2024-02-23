import './style.css'

import * as THREE from 'three';

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

// Creates an object
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16, 3, 4 );
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torusKnot = new THREE.Mesh( geometry, material );

// Adds the new object to the scene
scene.add(torusKnot);

// Creates light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set( 5, 5, 5 );

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

// Helper function to rerender the scene for animations
animate = () => {
  requestAnimationFrame( animate );

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.005;
  torusKnot.rotation.z += 0.01;

  rerender.render( scene, camera );
}

animate();