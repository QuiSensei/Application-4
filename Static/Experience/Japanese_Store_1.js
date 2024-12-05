import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const japaneseStore = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Store_3/scene.gltf",
    (gltf) => {
      let store = gltf.scene;

      store.position.set(-18.5, 0, -6);

      store.scale.set(1.5, 1.5, 1.5);

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

export default japaneseStore;
