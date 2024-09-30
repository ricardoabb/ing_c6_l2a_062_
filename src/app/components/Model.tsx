import { useAnimations, useGLTF } from "@react-three/drei";

import { useEffect, useRef } from "react";
import { Group } from 'three';
import { useInfoStore } from "../store/useInfoStore";

import { ThreeEvent } from "@react-three/fiber";



export default function Model() {

  
  const { isAnimated } = useInfoStore();
  
  const group = useRef<Group>(null);
  const { animations, scene,  } = useGLTF('/doctor.glb');
  const { actions, mixer } = useAnimations(animations, scene);
  const animationTake1 = "Take 001";

  scene.traverseAncestors(function(node){
    if(node.children){
      node.castShadow = true;
    }

  })

  group.current?.traverse(function(node) {
    if(node.children){
      node.castShadow = true;
    }
  }) 
  
  

  //plane
  // const geometry = new PlaneGeometry(25, 20);
  // const material = new MeshStandardMaterial({ color: 0xccccc7 });
  // const plane = new Mesh(geometry, material)
  // plane.rotation.x = -Math.PI / 2.0;
  // plane.name = 'Floor';
  // plane.receiveShadow = true;
  // plane.position.setY(-3)
  // scene.add(plane);
  
  
  
  
  useEffect(() => {
    //@ts-ignore
    
    !isAnimated ? actions[animationTake1].play().paused = true : actions[animationTake1].play().paused = false;
    
    
  }, [isAnimated]);


  return (
    <group ref={group}>
      <primitive  object={scene} />
    </group>
  );
}