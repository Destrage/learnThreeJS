import * as Three from 'three';
import './style.css'

// Scene
const scene = new Three.Scene();

// Objects
// Plane

const planeGeometry = new Three.BoxGeometry(20, 20)
const planeMeterial = new Three.MeshStandardMaterial({});
const planeMesh = new Three.Mesh(planeGeometry, planeMeterial);
planeMesh.rotateX(90)
scene.add(planeMesh);

// Sphere
const sphere = new Three.SphereGeometry(1, 64, 64);
const sphereMeterial = new Three.MeshStandardMaterial({
    color: "#ff010f"
});
const sphereMesh = new Three.Mesh(sphere, sphereMeterial);
sphereMesh.position.set(0,0,4)
scene.add(sphereMesh);

// Light
const light = new Three.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
light.intensity = 1
scene.add(light);

// Size
const Size = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new Three.PerspectiveCamera(45, Size.width / Size.height);
camera.position.z = 30;
scene.add(camera);

const canvas = document.querySelector('.three');
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(Size.width, Size.height);
renderer.render(scene, camera);

window.addEventListener('resize', () => {
    Size.width = window.innerWidth;
    Size.height = window.innerHeight;

    camera.aspect = Size.width / Size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(Size.width, Size.height);
})

const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}

loop();