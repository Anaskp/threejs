// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene()

// const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 )
// const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red", wireframe: true })
// const cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial )
// scene.add( cubeMesh )

// // cubeMesh.rotation.y = Math.PI 

// const aspectRatio = window.innerWidth / window.innerHeight

// const camera = new THREE.PerspectiveCamera( 50, aspectRatio, 0.1, 30 )
// // const camera = new THREE.OrthographicCamera(
// //   -1 * aspectRatio, 
// //   1 * aspectRatio, 
// //   1, 
// //   -1, 
// //   0.1, 
// //   200
// // )

// // Axis hepler, changing axis
// // cubeMesh.position.x = 1
// // cubeMesh.position.y = 1
// // cubeMesh.position.z = 1

// const axisHelper = new THREE.AxesHelper(2)
// // scene.add(axisHelper)
// // cubeMesh.add(axisHelper)

// camera.position.z = 5

// const canvas = document.querySelector('canvas.threejs')

// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   antialias: true //Antialiasing software solution
// })
// renderer.setSize( window.innerWidth, window.innerHeight )
// renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) ) //Antialiasing hardware solution

// const controls = new OrbitControls( camera, canvas );
// controls.enableDamping = true
// // controls.autoRotate = true

// window.addEventListener( 'resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix()

//   renderer.setSize( window.innerWidth, window.innerHeight )
// })

// const clock = new THREE.Clock()
// let previousTime = 0

// const renderLoop = () => {

//   const currentTime = clock.getElapsedTime()
//   const delta = currentTime - previousTime
//   previousTime = currentTime
//   cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20 /** Rotation */

//   cubeMesh.scale.x = Math.sin( currentTime )

//   controls.update()
//   renderer.render( scene, camera )
//   window.requestAnimationFrame( renderLoop )
// }

// renderLoop()


// Buffer geometry custom triangle
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene()

// const vertices = new Float32Array([
//   0, 0, 0, 
//   0, 2, 0,
//   2, 0, 0
// ])
// const bufferAttribute = new THREE.BufferAttribute( vertices, 3 )
// const geometry = new THREE.BufferGeometry()
// geometry.setAttribute( 'position', bufferAttribute )
// const bufferMaterial = new THREE.MeshBasicMaterial({ color: "red", wireframe: true })
// const bufferMesh = new THREE.Mesh( geometry, bufferMaterial )
// scene.add( bufferMesh )

// const aspectRatio = window.innerWidth / window.innerHeight

// const camera = new THREE.PerspectiveCamera( 50, aspectRatio, 0.1, 30 )

// camera.position.z = 5

// const canvas = document.querySelector('canvas.threejs')

// const renderer = new THREE.WebGLRenderer({
//   canvas,
//   antialias: true //Antialiasing software solution
// })
// renderer.setSize( window.innerWidth, window.innerHeight )
// renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) ) //Antialiasing hardware solution

// const controls = new OrbitControls( camera, canvas );
// controls.enableDamping = true
// controls.autoRotate = true

// window.addEventListener( 'resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix()

//   renderer.setSize( window.innerWidth, window.innerHeight )
// })

// const renderLoop = () => {

//   controls.update()
//   renderer.render( scene, camera )
//   window.requestAnimationFrame( renderLoop )
// }

// renderLoop()

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Pane } from 'tweakpane';

// const pane = new Pane()

const scene = new THREE.Scene()

const group = new THREE.Group()

const textureLoader = new THREE.TextureLoader()

const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 )
const cubeUv2 = new THREE.BufferAttribute( cubeGeometry.attributes.uv.array, 2 )
cubeGeometry.setAttribute( 'uv2', cubeUv2 )

const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16)
const torusUv2 = new THREE.BufferAttribute( torusKnotGeometry.attributes.uv.array, 2 )
torusKnotGeometry.setAttribute( 'uv2', torusUv2 )

const planeGeometry = new THREE.PlaneGeometry(1, 1)
const planeUv2 = new THREE.BufferAttribute( planeGeometry.attributes.uv.array, 2 )
planeGeometry.setAttribute( 'uv2', planeUv2 )

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const sphereUv2 = new THREE.BufferAttribute( sphereGeometry.attributes.uv.array, 2 )
sphereGeometry.setAttribute( 'uv2', sphereUv2 )

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32)
const cylinderUv2 = new THREE.BufferAttribute( cylinderGeometry.attributes.uv.array, 2 )
cylinderGeometry.setAttribute( 'uv2', cylinderUv2 )

const grassAlbedo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png')
const grassAo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png')
const grassHeight = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png')
const grassMetallic = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png')
const grassNormal = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png')
const grassRoughness = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png')

// grassTexture.repeat.set(100, 100)
// grassTexture.wrapS = THREE.RepeatWrapping
// grassTexture.wrapT = THREE.RepeatWrapping

// grassTexture.wrapS = THREE.MirroredRepeatWrapping
// grassTexture.wrapT = THREE.MirroredRepeatWrapping

const material = new THREE.MeshStandardMaterial()
material.map = grassAlbedo

material.roughnessMap = grassRoughness
material.roughness = 1

material.metalnessMap = grassMetallic
material.metalness = 1

material.normalMap = grassNormal

material.displacementMap = grassHeight
material.displacementScale = 0.1

material.aoMap = grassAo

// const material = new THREE.MeshLambertMaterial()
// const material = new THREE.MeshPhongMaterial()
// const material = new THREE.MeshStandardMaterial()
// const material = new THREE.MeshPhysicalMaterial()
// material.color = new THREE.Color('green')
// material.shininess= 90

// pane.addBinding( material, 'metalness', {
//   min: 0,
//   max: 1,
//   step: 0.01
// } )

// pane.addBinding( material, 'roughness', {
//   min: 0,
//   max: 1,
//   step: 0.01
// } )

// pane.addBinding( material, 'reflectivity', {
//   min: 0,
//   max: 1,
//   step: 0.01
// } )

// pane.addBinding( material, 'clearcoat', {
//   min: 0,
//   max: 1,
//   step: 0.01
// } )

// pane.addBinding( material, 'shininess', {
//   min: 1,
//   max: 100,
//   step: 1
// } )

const cubeMesh = new THREE.Mesh( cubeGeometry, material )

const knot = new THREE.Mesh( torusKnotGeometry, material )
knot.position.x = 1.5

const plane = new THREE.Mesh( planeGeometry, material )
plane.position.x = -1.5
plane.material.side = THREE.DoubleSide

const sphere = new THREE.Mesh( sphereGeometry, material )
sphere.position.y = 1.5

const cylinder = new THREE.Mesh( cylinderGeometry, material )
cylinder.position.y = -1.5

group.add( cubeMesh, knot, plane, sphere, cylinder )
// group.add( plane )
scene.add( group )

const light = new THREE.AmbientLight( 0xffffff, 0.6 )
scene.add(light)

const pointLight = new THREE.PointLight( 0xffffff, 100 )
pointLight.position.set( 6, 6, 6 )
scene.add( pointLight )

const aspectRatio = window.innerWidth / window.innerHeight

const camera = new THREE.PerspectiveCamera( 35, aspectRatio, 0.1, 100 )

camera.position.z = 10

export const canvas = document.querySelector('canvas.threejs')

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true //Antialiasing software solution
})
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) ) //Antialiasing hardware solution

const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true

window.addEventListener( 'resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()

  renderer.setSize( window.innerWidth, window.innerHeight )
})

const renderLoop = () => {

  // group.children.forEach( (child) => {
  //   if( child instanceof THREE.Mesh ){
  //     child.rotation.y += 0.01
  //   }
  // })

  controls.update()
  renderer.render( scene, camera )
  window.requestAnimationFrame( renderLoop )
}

renderLoop()