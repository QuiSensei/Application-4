import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Car2 = (callModel) => {
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "./Static/Models/Car_2/scene.gltf",
    (gltf) => {
      let car = gltf.scene;

      car.position.set(-23, 0, 30.8);
      car.rotation.set(0, -Math.PI * 1, 0);
      car.scale.set(0.07, 0.07, 0.07);

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

export default Car2;
