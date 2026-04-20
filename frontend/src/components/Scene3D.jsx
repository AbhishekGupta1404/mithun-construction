import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Crane() {
  const craneRef = useRef();
  const armRef = useRef();
  const hookRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(time * 0.1) * 0.3;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    }
    if (hookRef.current) {
      hookRef.current.position.y = -8 - Math.sin(time * 0.5) * 1;
    }
  });

  return (
    <group ref={craneRef} position={[0, 2, 0]}>
      {/* Tower */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[1, 12, 1]} />
        <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cab */}
      <mesh position={[0, 10, 0]}>
        <boxGeometry args={[2, 1.5, 1.5]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Arm */}
      <group ref={armRef} position={[0, 10, 0]}>
        <mesh position={[4, 0, 0]}>
          <boxGeometry args={[8, 0.8, 0.8]} />
          <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-2, 0.5, 0]}>
          <boxGeometry args={[4, 0.6, 0.6]} />
          <meshStandardMaterial color="#fb923c" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Cable and Hook */}
      <group ref={hookRef} position={[6, 8, 0]}>
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 4]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
        <mesh position={[0, -4, 0]}>
          <boxGeometry args={[0.8, 0.4, 0.4]} />
          <meshStandardMaterial color="#f97316" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

function Building({ position, height, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.05 + position[0]) * 0.02;
    }
  });

  const windows = useMemo(() => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < Math.floor(height / 2); j++) {
        items.push(
          <mesh key={`${i}-${j}`} position={[(i - 1.5) * 1.5, (j - height / 4) * 2, 1.6]}>
            <planeGeometry args={[0.8, 1.2]} />
            <meshStandardMaterial 
              color={Math.random() > 0.3 ? '#fbbf24' : '#1e293b'} 
              emissive={Math.random() > 0.3 ? '#f59e0b' : '#000000'}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      }
    }
    return items;
  }, [height]);

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[6, height, 3]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
      </mesh>
      {windows}
    </group>
  );
}

function Ground() {
  return (
    <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#1e293b" roughness={0.8} />
    </mesh>
  );
}

function Particles() {
  const particlesRef = useRef();
  const count = 50;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = Math.random() * 30 - 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#f97316"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 25]} fov={60} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
        />
        
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 20, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#f97316" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={1} />
        
        <Crane />
        <Building position={[-12, 0, -8]} height={12} color="#334155" />
        <Building position={[12, -1, -10]} height={16} color="#475569" />
        <Building position={[-8, -2, -15]} height={10} color="#1e293b" />
        <Building position={[8, -1, -12]} height={14} color="#334155" />
        
        <Ground />
        <Particles />
      </Canvas>
    </div>
  );
}
