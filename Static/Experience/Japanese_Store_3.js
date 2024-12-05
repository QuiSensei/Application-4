import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const japaneseStore3 = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Store_2/scene.gltf",
    (gltf) => {
      let store = gltf.scene;

      store.position.set(25, -1, -8);
      store.rotation.set(0, -1.57, 0);
      store.scale.set(2.5, 2.5, 2.5);

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

export default japaneseStore3;
