import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Road = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Road/scene.gltf",
    (gltf) => {
      let road = gltf.scene;

      road.position.set(0, 0, 28);
      road.rotation.set(0, 1.57, 0);
      road.scale.set(5, 5, 6.7);

      road.traverse((node) => {
        if (node.isMesh) {
          node.receiveShadow = true; // Cast shadows
        }
      });

      // Pass the model to the callback
      if (callModel) {
        callModel(road);
      }
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );
};

export default Road;
