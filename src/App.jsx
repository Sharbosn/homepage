import { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
//import { Navbar } from "./navbar.jsx";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import SpriteText from "three-spritetext";
import { Fade } from "@chakra-ui/react";
import { ProjectPage } from "./projectpage.jsx";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x242a33);
scene.fog = new THREE.Fog(0x363d3d, -1, 1000);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(100, 60, 100);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

let rayCaster = new THREE.Raycaster();
let pointer = new THREE.Vector2();

var env = new THREE.Object3D();
let boat_mesh;

const loader = new GLTFLoader();

loader.load("models/boat/scene.gltf", (gltf) => {
  boat_mesh = gltf.scene;
  boat_mesh.scale.set(0.003, 0.003, 0.003);
  boat_mesh.position.set(17, -0.1, -36);
  //boat.material.color.set(0x000000);
  //scene.add(boat_mesh);
});
loader.load("models/env/scene.gltf", (gltf) => {
  gltf.scene.scale.set(200, 200, 200);
  gltf.scene.rotation.set(0, 2, 0);
  env.add(gltf.scene);

  scene.add(env);
});

//const hemisphereLight = new THREE.HemisphereLight(0xfffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
//const axesHelper = new THREE.AxesHelper(50);
//scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
//document
renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });

const geom = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geom, mat);
cube1.position.set(53, 20, 21);
const cube2 = new THREE.Mesh(geom, mat);
cube2.position.set(20, 20, -64);
const cube3 = new THREE.Mesh(geom, mat);
cube3.position.set(-67, 20, -13);

const label1 = new SpriteText(
  "Project 1: \n If ___ on campus were more user-friendly…"
);
label1.fontFace = "Courier New";
label1.textHeight = 2;
label1.fontWeight = "bold";
label1.position.set(53, 23, 21);
label1.userData.id = "label1";
const label2 = new SpriteText("Project 2: \n HRI for Wellbeing");
label2.fontFace = "Courier New";
label2.textHeight = 2;
label2.fontWeight = "bold";
label2.position.set(20, 23, -64);
label2.userData.id = "label2";

const label3 = new SpriteText(
  "Project 3: \n Social XR for 'Lifelong Learning'"
);
label3.fontFace = "Courier New";
label3.textHeight = 2;
label3.fontWeight = "bold";
label3.position.set(-67, 23, -13);
label3.userData.id = "label3";

env.add(cube1, cube2, cube3, label1, label2, label3);

let y_scroll = 0;
function handleWheel(e) {
  e.preventDefault();
  y_scroll = e.deltaY * 0.0009;
  if (e.target.tagName.toLowerCase() !== "canvas") {
    window.scrollTo(0, window.scrollY - e.wheelDeltaY);
  }
}

let value = Math.PI;
function animate() {
  camera.rotation.z = Math.PI / 2;
  env?.rotation._onChangeCallback((env.rotation.y -= y_scroll));
  y_scroll = 0;
  value == Math.PI ? Math.PI / 2 : Math.PI;
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

function App() {
  const canvasRef = useRef(null);
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.appendChild(renderer.domElement);
    window.addEventListener("resize", onWindowResize);

    return () => {
      canvas.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [label, setLabel] = useState("");

  document.addEventListener("click", handleClick);
  function handleClick(e) {
    e.preventDefault();
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    rayCaster.setFromCamera(pointer, camera);
    let intersects = rayCaster.intersectObjects([label1, label2, label3]);
    if (intersects?.length) {
      const obj = intersects[0].object;
      setIsModalOpen(true);
      setLabel(obj.userData.id);
    }
  }

  return (
    <Box ref={canvasRef}>
      <ProjectPage
        label={"self-intro"}
        isOpen={isIntroOpen}
        onClose={() => {
          setIsIntroOpen(false);
        }}
      ></ProjectPage>
      <ProjectPage
        label={label}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      ></ProjectPage>
      <div id="instructions">
        Press and drag <br />
        <span className="lightInstructions">to rotate the scene</span>
      </div>
    </Box>
  );
}
export default App;
