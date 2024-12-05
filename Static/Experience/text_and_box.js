import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

const fontLoader = new FontLoader();
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load("./Static/Textures/Mat_cap/Matcap1.png");

let textMesh = null;

const Text = (callText) => {
  fontLoader.load(
    "./Static/Fonts/The Last Shuriken_Regular.json",
    (font) => {
      let text = "I LOVE JAPAN";
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 3.5,
        depth: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      textGeometry.center();
      const textMaterial = new THREE.MeshMatcapMaterial({
        matcap: matcapTexture,
      });
      textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Pass the text to the callback
      if (callText) {
        callText(textMesh);
      }
    },
    undefined,
    (error) => {
      console.error("Error loading text:", error);
    }
  );
};

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(45, 5, 2.5),
  new THREE.MeshBasicMaterial({
    color: 0x080808,
  })
);

cube.position.set(0, 2.5, 16);

export default { Text, cube };
