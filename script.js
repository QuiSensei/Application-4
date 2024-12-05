// My name
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { gsap } from "https://cdn.skypack.dev/gsap@3.12.5";
import * as dat from "https://cdn.jsdelivr.net/npm/lil-gui@0.16.0/dist/lil-gui.esm.min.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

// import Experience from "./Experience/Experience.js";

// const experience = new Experience(document.querySelector("canvas.webgl"));

import textandPLatForm from './Static/Experience/text_and_box.js'
import floor from "./Static/Experience/Floor.js";
import Lights from "./Static/Experience/Lights.js";
import japaneseStore1 from "./Static/Experience/Japanese_Store_1.js";
import japaneseStore2 from "./Static/Experience/Japanese_Store_2.js";
import japaneseStore3 from "./Static/Experience/Japanese_Store_3.js";
import trashCans from "./Static/Experience/Trash_can.js";
import Road from "./Static/Experience/Road.js";
import Car from "./Static/Experience/Car.js";
import Car2 from "./Static/Experience/Car2.js";

let canvas, scene, sizes, camera, controls, renderer;

let clock = new THREE.Clock();

init();

function init() {
  canvas = document.querySelector("canvas.webgl");

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xbfe3dd);

  // Add floor
  scene.add(floor);

  // Store 1
  japaneseStore1((store) => {
    scene.add(store);
  });

  // Store 2
  japaneseStore2((store) => {
    scene.add(store);
  });

  // Store 3
  japaneseStore3((store) => {
    scene.add(store);
  });

  // Trash can
  trashCans((cans) => {
    scene.add(cans);
  });

  // Road
  Road((raod) => {
    scene.add(raod);
  });

  // Car
  Car((car) => {
    scene.add(car);
  });

  // Car 2
  Car2((car) => {
    scene.add(car);
  });

  textandPLatForm.Text((text) => {
    text.position.set(0, 7, 16);
    scene.add(text)
  })

  scene.add(textandPLatForm.cube);

  // Lights
  scene.add(Lights.ambientLight);
  scene.add(Lights.sunLight);

  // Light helper
  const directionalLightCameraHelper = new THREE.CameraHelper(
    Lights.sunLight.shadow.camera
  );
  directionalLightCameraHelper.visible = true;
  // scene.add(directionalLightCameraHelper);

  // Sizes
  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Resize
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(0, 20, 50);
  scene.add(camera);

  // Orbit Control
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setAnimationLoop(animate);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function animate() {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
}
