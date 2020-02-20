import ReactDOM from 'react-dom'
import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
import Debug from 'debug'
import { useThree, Canvas, useFrame, extend } from 'react-three-fiber'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'

const debug = Debug('rtf:main')

extend({ ShaderPass, UnrealBloomPass, EffectComposer, RenderPass })

function Effect () {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height), [size]
  )

  debug({
    aspect,
    gl
  })

  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, .8, .2, 0]} />
    </effectComposer>
  )
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  //
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>

      <dodecahedronBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        roughness={0.75}
        emissive="#404057"
        color={hovered ? 'hotpink' : '#222'} />
    </mesh>
  )
}

export default () => (
  <Canvas camera={{ fov: 100}} >
    <pointLight position={[100, 100, 10]} />
    <Box position={[0, 0, 0]} />
    <Effect />
  </Canvas>
)
