/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import { Html } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.50} />
      <directionalLight position={[0, 0, 0.10]} />
      <mesh castShadow receiveShadow scale={2.75} onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ededed" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
        />
        {hovered && (
          <Html distanceFactor={10}>
            <div className="text-[#A6B0C3] bg-[#141E3D] py-1 px-2 rounded text-xs inline-block " style={{ position: 'absolute', transform: 'translate(-50%, 50%)' }}>{props.techName}</div>
          </Html>
        )}
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, techName }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} techName={techName} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas