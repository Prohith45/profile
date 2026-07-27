'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const InteractivePcbScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sparkRef = useRef<THREE.Points>(null);

  // Generate particle positions for electrons moving along PCB traces
  const particleCount = 120;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
    if (sparkRef.current) {
      sparkRef.current.rotation.z += 0.002;
    }
  });

  return (
    // @ts-ignore
    <group ref={groupRef} scale={[0.85, 0.85, 0.85]}>
      {/* PCB Board Substrate */}
      {/* @ts-ignore */}
      <mesh position={[0, 0, 0]}>
        {/* @ts-ignore */}
        <boxGeometry args={[7, 4.5, 0.15]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#06382b" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Copper Outer Trace Frame */}
      {/* @ts-ignore */}
      <mesh position={[0, 0, 0.08]}>
        {/* @ts-ignore */}
        <ringGeometry args={[2.5, 2.55, 32]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#ff9d00" emissive="#ff9d00" emissiveIntensity={0.6} />
      </mesh>

      {/* Central Microcontroller Chip (MCU) */}
      {/* @ts-ignore */}
      <group position={[0, 0, 0.2]}>
        {/* @ts-ignore */}
        <mesh>
          {/* @ts-ignore */}
          <boxGeometry args={[1.6, 1.6, 0.25]} />
          {/* @ts-ignore */}
          <meshStandardMaterial color="#0b0b0b" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Shiny Gold Core Surface */}
        {/* @ts-ignore */}
        <mesh position={[0, 0, 0.13]}>
          {/* @ts-ignore */}
          <planeGeometry args={[1.2, 1.2]} />
          {/* @ts-ignore */}
          <meshStandardMaterial color="#00f3ff" emissive="#0070F3" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* IC Pins */}
      {[-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9].map((x, idx) => (
        <React.Fragment key={idx}>
          {/* @ts-ignore */}
          <mesh position={[x, 0.95, 0.1]}>
            {/* @ts-ignore */}
            <boxGeometry args={[0.08, 0.3, 0.05]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
          {/* @ts-ignore */}
          <mesh position={[x, -0.95, 0.1]}>
            {/* @ts-ignore */}
            <boxGeometry args={[0.08, 0.3, 0.05]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#d1d5db" metalness={0.9} />
          </mesh>
        </React.Fragment>
      ))}

      {/* Electrolytic Capacitors */}
      {[-2.2, 2.2].map((x, idx) => (
        // @ts-ignore
        <group key={idx} position={[x, 1.3, 0.4]}>
          {/* @ts-ignore */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            {/* @ts-ignore */}
            <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#1e293b" metalness={0.7} />
          </mesh>
          {/* Silver Cap */}
          {/* @ts-ignore */}
          <mesh position={[0, 0, 0.31]}>
            {/* @ts-ignore */}
            <circleGeometry args={[0.29, 16]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#e2e8f0" metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Resistor Array */}
      {[-2.2, -1.8, 1.8, 2.2].map((x, idx) => (
        // @ts-ignore
        <mesh key={idx} position={[x, -1.3, 0.25]} rotation={[0, 0, Math.PI / 2]}>
          {/* @ts-ignore */}
          <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
          {/* @ts-ignore */}
          <meshStandardMaterial color="#ff9d00" />
        </mesh>
      ))}

      {/* Blinking Status LEDs */}
      {/* @ts-ignore */}
      <mesh position={[-2.8, -1.8, 0.2]}>
        {/* @ts-ignore */}
        <sphereGeometry args={[0.12, 16, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
      </mesh>
      {/* @ts-ignore */}
      <mesh position={[2.8, -1.8, 0.2]}>
        {/* @ts-ignore */}
        <sphereGeometry args={[0.12, 16, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
      </mesh>
      {/* @ts-ignore */}
      <mesh position={[2.8, 1.8, 0.2]}>
        {/* @ts-ignore */}
        <sphereGeometry args={[0.12, 16, 16]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
      </mesh>

      {/* Electron Particle Stream */}
      {/* @ts-ignore */}
      <points ref={sparkRef}>
        {/* @ts-ignore */}
        <bufferGeometry>
          {/* @ts-ignore */}
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        {/* @ts-ignore */}
        <pointsMaterial size={0.05} color="#00f3ff" transparent opacity={0.8} />
      </points>
    </group>
  );
};
