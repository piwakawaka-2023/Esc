import React from 'react'
import * as THREE from 'three'

function ESCLogo() {
  const scene = new THREE.Scene()

  // Create a new Perspective Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 25

  // Create a Full Screen WebGL Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor('#DDDDDD')
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  // Make sure the project is responsive based on window resizing
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix()
  })

  // Add a light
  const light = new THREE.PointLight(0xffffff, 1.4, 1000)
  light.position.set(0, 15, 15)
  scene.add(light)

  //Creates a material
  const mtLoader = new THREE.MaterialLoader()
  mtLoader.load('esclogo.mtl', function (materials){
    materials.preload();
  })

  return (
    <>
      <p>test</p>
    </>
  )
}

export default ESCLogo
