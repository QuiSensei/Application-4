import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Car = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Car/scene.gltf",
    (gltf) => {
      let car = gltf.scene;

      car.position.set(23, 2.4, 25.5);
      car.rotation.set(0, -1.57, 0);
      car.scale.set(0.8, 0.8, 0.8);

      car.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true; // Cast shadows
          node.receiveShadow = true; // Receive shadows
        }
      });

      // Pass the model to the callback
      if (callModel) {
        callModel(car);
      }
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );
};

export default Car;
