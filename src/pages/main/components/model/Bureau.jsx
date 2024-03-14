import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bureau(props) {
  const { nodes, materials } = useGLTF("/bureau.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.mat_bureau}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.mat_lamp}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bureau.glb");
