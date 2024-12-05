import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const floorTexture = {
  ao: textureLoader.load(
    "./Static/Textures/Floor/Stone_Floor_006_ambientOcclusion.jpg"
  ),
  baseColor: textureLoader.load(
    "./Static/Textures/Floor/Stone_Floor_006_basecolor.jpg"
  ),
  normal: textureLoader.load(
    "./Static/Textures/Floor/Stone_Floor_006_normal.jpg"
  ),
  roughness: textureLoader.load(
    "./Static/Textures/Floor/Stone_Floor_006_roughness.jpg"
  ),
};

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(65, 40),
  new THREE.MeshStandardMaterial({
    map: floorTexture.baseColor,
    aoMap: floorTexture.ao,
    normalMap: floorTexture.normal,
    roughnessMap: floorTexture.roughness,
  })
);
floor.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
);
floor.rotation.set(-Math.PI * 0.5, 0, 0);
// floor.scale.set(50, 2, 50)
floor.position.set(0, 0, 0);
floor.receiveShadow = true;

export default floor;
