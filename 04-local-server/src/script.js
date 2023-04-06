import * as THREE from 'three';




// We need four elements to create a minimum scene
// A Scene that will contain objects
// Some objects
// A camera
// A renderer

// SCENE:
//  Like a container
// We put objects, models, lights, etc. init
// At some point we ask Three.js to render it.

const scene = new THREE.Scene();

// OBJECTS:
//  Can be many things:
//      Primitive geometriez
//      Imported models
//      Particles
//      Lights
//      etc.
//  We need to create a mesh (combination of a geometry and a material[BoxGeometry and a MeshBasicMaterial])

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// CAMERA:
// Not visible
// Serve as a point of view when doing a render
// Can have multiple and switch between them
// Different types
// We are going to use PerspectiveCamera

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

// RENDERER:
// Render the scene from the camera point of view
// Result drawn into a canvas
// A canvas is a HTML element in which you can draw stuff
// Three.js will use WebGL to draw the render inside this canvas
// You can create it or you can let Three.js do it

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);