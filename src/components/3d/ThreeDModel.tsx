
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// A simple cube model for the portfolio
const Cube = ({ position = [0, 0, 0], color = '#9b87f5' }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time / 4) / 2;
    mesh.current.rotation.y = Math.sin(time / 2) / 2;
    mesh.current.position.y = Math.sin(time) / 10;
  });

  return (
    <mesh ref={mesh} position={position as [number, number, number]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color as THREE.ColorRepresentation} />
    </mesh>
  );
};

// A floating sphere for visual interest
const Sphere = ({ position = [0, 0, 0], color = '#7E69AB', size = 0.5 }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(time) / 5;
  });

  return (
    <mesh ref={mesh} position={position as [number, number, number]}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color as THREE.ColorRepresentation} />
    </mesh>
  );
};

// A rotating torus for additional interest
const Torus = ({ position = [0, 0, 0], color = '#D6BCFA' }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time / 2;
    mesh.current.rotation.y = time / 3;
  });

  return (
    <mesh ref={mesh} position={position as [number, number, number]}>
      <torusGeometry args={[0.7, 0.2, 16, 32]} />
      <meshStandardMaterial color={color as THREE.ColorRepresentation} />
    </mesh>
  );
};

// A component that follows the mouse cursor
const MouseFollower = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    if (group.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      group.current.position.x = x * 0.1;
      group.current.position.y = y * 0.1;
    }
  });

  return <group ref={group}>{children}</group>;
};

// The main 3D scene component
export const ThreeDScene = ({ modelType = 'cube', cameraPosition = [0, 0, 5] }) => {
  return (
    <Canvas className="h-full w-full">
      <PerspectiveCamera makeDefault position={cameraPosition as [number, number, number]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <pointLight position={[-10, -10, -10]} />
      
      <MouseFollower>
        {modelType === 'cube' && <Cube />}
        {modelType === 'sphere' && <Sphere />}
        {modelType === 'torus' && <Torus />}
        {modelType === 'combined' && (
          <>
            <Cube position={[-1.5, 0, 0]} />
            <Sphere position={[0, 0.5, 0]} />
            <Torus position={[1.5, 0, 0]} />
          </>
        )}
      </MouseFollower>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeDScene;
