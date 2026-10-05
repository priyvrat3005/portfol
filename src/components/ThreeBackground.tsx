import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.4, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed * 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[0.8, 0.3, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Torus>
    </Float>
  );
}

function AnimatedIcosahedron({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.8} floatIntensity={1.8}>
      <Icosahedron ref={meshRef} args={[0.7, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.7}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const meshRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, -5, -5]} intensity={0.5} color="#6366f1" />

        <AnimatedSphere position={[-3, 1.5, -2]} color="#6366f1" speed={0.8} distort={0.5} size={1.2} />
        <AnimatedSphere position={[3.5, -1, -1]} color="#8b5cf6" speed={1.2} distort={0.3} size={0.8} />
        <AnimatedTorus position={[2, 2, -3]} color="#a78bfa" speed={0.6} />
        <AnimatedTorus position={[-2.5, -2, -2]} color="#c084fc" speed={0.9} />
        <AnimatedIcosahedron position={[0, -1.5, -1]} color="#7c3aed" speed={0.7} />
        <AnimatedIcosahedron position={[-1, 2.5, -4]} color="#6366f1" speed={1.1} />
        
        <Particles />
      </Canvas>
    </div>
  );
}
