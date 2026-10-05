import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      wireRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#1e1b4b"
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.55, 24, 24]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -Math.PI / 3, 0]}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.3} />
      </mesh>

      {/* Orbiting dots */}
      <Float speed={3} floatIntensity={0.5}>
        <mesh position={[2.2, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={0.5}>
        <mesh position={[0, 2.5, 0.5]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1} />
        </mesh>
      </Float>
      <Float speed={4} floatIntensity={0.5}>
        <mesh position={[-1.5, -1.5, 1.5]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeGlobe() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}
