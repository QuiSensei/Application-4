import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const trashCans = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Trash_can/scene.gltf",
    (gltf) => {
      let cans = gltf.scene;

      cans.position.set(25, 0, -18);
      cans.rotation.set(0, 1.56, 0);
      cans.scale.set(0.035, 0.035, 0.035);

      cans.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true; // Cast shadows
          node.receiveShadow = true; // Receive shadows
        }
      });

      // Pass the model to the callback
      if (callModel) {
        callModel(cans);
      }
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );
};

export default trashCans;
