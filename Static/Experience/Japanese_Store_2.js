import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const japaneseStore2 = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Store/scene.gltf",
    (gltf) => {
      let store = gltf.scene;

      store.position.set(7.5, 0, -9);
      store.rotation.set(0, 0.53, 0);
      store.scale.set(8.5, 8.5, 8.5);

      store.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true; // Cast shadows
          node.receiveShadow = true; // Receive shadows
        }
      });

      // Pass the model to the callback
      if (callModel) {
        callModel(store);
      }
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );
};

export default japaneseStore2;
