'use client';

import React, { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export const FloatingResistor: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.2;
    }
  });

  return (
    // @ts-ignore
    <group ref={meshRef} position={position}>
      {/* @ts-ignore */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        {/* @ts-ignore */}
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#3b82f6" metalness={0.2} roughness={0.3} />
      </mesh>
      {/* Color bands */}
      {/* @ts-ignore */}
      <mesh position={[-0.15, 0, 0]}>
        {/* @ts-ignore */}
        <cylinderGeometry args={[0.152, 0.152, 0.05, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* @ts-ignore */}
      <mesh position={[0, 0, 0]}>
        {/* @ts-ignore */}
        <cylinderGeometry args={[0.152, 0.152, 0.05, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#eab308" />
      </mesh>
      {/* @ts-ignore */}
      <mesh position={[0.15, 0, 0]}>
        {/* @ts-ignore */}
        <cylinderGeometry args={[0.152, 0.152, 0.05, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#00f3ff" />
      </mesh>
    </group>
  );
};

export const FloatingIcChip: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 0.8 + position[0]) * 0.25;
    }
  });

  return (
    // @ts-ignore
    <group ref={meshRef} position={position}>
      {/* @ts-ignore */}
      <mesh>
        {/* @ts-ignore */}
        <boxGeometry args={[1, 0.2, 0.6]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Pins */}
      {[-0.35, -0.12, 0.12, 0.35].map((x, i) => (
        <React.Fragment key={i}>
          {/* @ts-ignore */}
          <mesh position={[x, -0.1, 0.35]}>
            {/* @ts-ignore */}
            <boxGeometry args={[0.06, 0.2, 0.1]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
          </mesh>
          {/* @ts-ignore */}
          <mesh position={[x, -0.1, -0.35]}>
            {/* @ts-ignore */}
            <boxGeometry args={[0.06, 0.2, 0.1]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

export const FloatingOscillator: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.012;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.18;
    }
  });

  return (
    // @ts-ignore
    <group ref={meshRef} position={position}>
      {/* @ts-ignore */}
      <mesh>
        {/* @ts-ignore */}
        <boxGeometry args={[0.6, 0.8, 0.2]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.1} />
      </mesh>
    </group>
  );
};
