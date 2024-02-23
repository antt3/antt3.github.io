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

// Render everything in the scene
renderer.render( scene, camera );