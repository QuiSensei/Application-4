import * as THREE from "three";

// Ambient light
const ambientLight = new THREE.AmbientLight("#b9d5ff", 1);

// Directional light
const sunLight = new THREE.DirectionalLight("#ffffff", 5); // Brighter directional light
sunLight.position.set(-30, 25, 50); // Simulate sun high in the sky
sunLight.castShadow = true; // Enable shadows
sunLight.shadow.mapSize.set(256, 256); // Improve shadow quality
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 150;
sunLight.shadow.camera.left = -50;
sunLight.shadow.camera.right = 50;
sunLight.shadow.camera.top = 50;
sunLight.shadow.camera.bottom = -50;

export default { sunLight, ambientLight };
