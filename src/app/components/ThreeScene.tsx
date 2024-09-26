"use client"

import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Suspense } from 'react';
import { useProgress, Html, ScrollControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from './Floor';
import { Color } from 'three';



function Loader() {
  const { progress } = useProgress();

  return <Html className='flex text-center' center>{progress.toFixed(1)} % loaded</Html>
}

export default function ThreeScene() {


  return (
    <Canvas camera={{ position: [0, 4, .1],  }} shadows  className='h-svh !absolute bottom-0 z-[1]'  >
      

      <OrbitControls maxPolarAngle={Math.PI * 0.555} minPolarAngle={Math.PI * 0.555} enablePan={false} enableZoom={false} />
      <directionalLight position={[3, 1, 5]} intensity={4} color={0xFF81CC} castShadow />
      <directionalLight position={[-3, 1, 5]} intensity={2} castShadow  color={0xFF29FF98}/>
      <directionalLight position={[0, 3, -5]} intensity={1} castShadow />
      <ambientLight position={[0, 0, 0]} intensity={1} shadow={'#000'} />
      
      <Suspense fallback={<Loader />} >
        <ScrollControls damping={0.2} pages={0}>
          

            <Model />
            <Floor />
          
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}