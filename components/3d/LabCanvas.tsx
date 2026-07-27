'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const LabCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Realistic Multi-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Electric Cyan Key Light
    const cyanLight = new THREE.PointLight(0x00f3ff, 3, 25);
    cyanLight.position.set(4, 4, 6);
    scene.add(cyanLight);

    // Purple Fill Light
    const purpleLight = new THREE.PointLight(0x7928ca, 2.5, 25);
    purpleLight.position.set(-5, -4, 4);
    scene.add(purpleLight);

    // Copper Metallic Rim Light
    const copperLight = new THREE.PointLight(0xff9d00, 2, 20);
    copperLight.position.set(0, 5, 3);
    scene.add(copperLight);

    // 3. Central Ultra-Realistic 3D PCB & Microcontroller Assembly Group
    const pcbGroup = new THREE.Group();

    // High Quality Dark Emerald FR4 Substrate
    const pcbGeo = new THREE.BoxGeometry(6.8, 4.2, 0.16);
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x052e24,
      roughness: 0.25,
      metalness: 0.55,
    });
    const pcbBoard = new THREE.Mesh(pcbGeo, pcbMat);
    pcbGroup.add(pcbBoard);

    // Copper Clad Trace Ring Frame
    const copperGeo = new THREE.RingGeometry(2.3, 2.36, 64);
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xff9d00,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0xff9d00,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide,
    });
    const copperRing = new THREE.Mesh(copperGeo, copperMat);
    copperRing.position.z = 0.09;
    pcbGroup.add(copperRing);

    // --- ATMEGA32U4 TEXTURE GENERATOR ---
    const createAtmegaTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d')!;

      // Dark matte epoxy resin background with fine surface grain
      ctx.fillStyle = '#121316';
      ctx.fillRect(0, 0, 1024, 1024);

      // Fine epoxy texture noise
      for (let i = 0; i < 35000; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const val = Math.floor(Math.random() * 22) + 12;
        ctx.fillStyle = `rgba(${val}, ${val}, ${val}, 0.18)`;
        ctx.fillRect(x, y, 2, 2);
      }

      // Beveled top margin line
      ctx.strokeStyle = '#252930';
      ctx.lineWidth = 14;
      ctx.strokeRect(35, 35, 954, 954);

      // Pin-1 Circular Indentation Dot (Top-Left)
      ctx.fillStyle = '#08090b';
      ctx.beginPath();
      ctx.arc(135, 135, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#323742';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Laser Etched Silver/Grey Text Markings
      ctx.fillStyle = '#c0c7d0';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
      ctx.shadowBlur = 5;

      // ATMEL Logo + Icon
      ctx.lineWidth = 16;
      ctx.strokeStyle = '#c0c7d0';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(230, 220);
      ctx.lineTo(270, 160);
      ctx.lineTo(310, 220);
      ctx.lineTo(350, 160);
      ctx.stroke();

      ctx.font = 'bold 85px "Courier New", monospace, sans-serif';
      ctx.fillText('AIMEL', 380, 215);

      // MEGA32U4
      ctx.font = '900 125px "Courier New", monospace, sans-serif';
      ctx.fillText('MEGA32U4', 220, 380);

      // -AU
      ctx.font = 'bold 105px "Courier New", monospace, sans-serif';
      ctx.fillText('-AU', 390, 520);

      // 1035E KR
      ctx.font = 'bold 95px "Courier New", monospace, sans-serif';
      ctx.fillText('1035E KR', 270, 650);

      // 0G3455
      ctx.font = 'bold 95px "Courier New", monospace, sans-serif';
      ctx.fillText('0G3455', 300, 780);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    // --- REALISTIC ATMEGA32U4 QFP-44 MICROCONTROLLER CHIP ---
    const mcuGroup = new THREE.Group();
    mcuGroup.position.z = 0.2;

    const atmegaTexture = createAtmegaTexture();

    // 6-sided materials array for the chip body (Top face gets ATmega32U4 laser etch texture)
    const bodySideMat = new THREE.MeshStandardMaterial({
      color: 0x16181d,
      roughness: 0.35,
      metalness: 0.6,
    });
    const bodyTopMat = new THREE.MeshStandardMaterial({
      map: atmegaTexture,
      roughness: 0.28,
      metalness: 0.45,
    });

    const mcuMaterials = [
      bodySideMat, // right
      bodySideMat, // left
      bodySideMat, // top
      bodySideMat, // bottom
      bodyTopMat,  // front (+z top face)
      bodySideMat  // back (-z bottom face)
    ];

    // Black Epoxy Resin IC Body (2.2 x 2.2 x 0.28)
    const mcuBodyGeo = new THREE.BoxGeometry(2.2, 2.2, 0.28);
    const mcuBody = new THREE.Mesh(mcuBodyGeo, mcuMaterials);
    mcuGroup.add(mcuBody);

    // Glowing Subtle Electric Cyan Under-Glow (Futuristic Edge Accent)
    const glowGeo = new THREE.PlaneGeometry(2.1, 2.1);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.15,
    });
    const glowSurface = new THREE.Mesh(glowGeo, glowMat);
    glowSurface.position.z = 0.145;
    mcuGroup.add(glowSurface);

    // QFP-44 Gull-Wing Metallic Gold Pins (11 Pins per side = 44 total - Highly Visible Gold!)
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700, // Vibrant Gold
      metalness: 0.95,
      roughness: 0.12,
      emissive: 0xd97706, // Warm Gold Emissive Highlight
      emissiveIntensity: 0.45,
    });

    // Generate 11 pin offsets across 2.0 width
    const pinCountPerSide = 11;
    const pinPitch = 0.175; // Spacing
    const startOffset = -((pinCountPerSide - 1) * pinPitch) / 2;

    for (let i = 0; i < pinCountPerSide; i++) {
      const offset = startOffset + i * pinPitch;

      // Helper function to build a 3-part gull-wing gold pin (Stem, Angle, Foot)
      const createGullWingPin = (x: number, y: number, rotZ: number) => {
        const pinGroup = new THREE.Group();
        pinGroup.position.set(x, y, 0);
        pinGroup.rotation.z = rotZ;

        // 1. Horizontal lead stem out of body (Thicker & wider for maximum visibility)
        const stemGeo = new THREE.BoxGeometry(0.085, 0.22, 0.06);
        const stem = new THREE.Mesh(stemGeo, pinMat);
        stem.position.set(0, 0.11, 0.03);
        pinGroup.add(stem);

        // 2. Angled leg stepping down
        const legGeo = new THREE.BoxGeometry(0.085, 0.15, 0.06);
        const leg = new THREE.Mesh(legGeo, pinMat);
        leg.position.set(0, 0.20, -0.03);
        leg.rotation.x = -Math.PI / 6;
        pinGroup.add(leg);

        // 3. Lead foot resting on copper PCB pad
        const footGeo = new THREE.BoxGeometry(0.085, 0.18, 0.05);
        const foot = new THREE.Mesh(footGeo, pinMat);
        foot.position.set(0, 0.28, -0.08);
        pinGroup.add(foot);

        return pinGroup;
      };

      // Top Side Pins (y = +1.1)
      mcuGroup.add(createGullWingPin(offset, 1.1, 0));

      // Bottom Side Pins (y = -1.1)
      mcuGroup.add(createGullWingPin(offset, -1.1, Math.PI));

      // Right Side Pins (x = +1.1)
      mcuGroup.add(createGullWingPin(1.1, offset, -Math.PI / 2));

      // Left Side Pins (x = -1.1)
      mcuGroup.add(createGullWingPin(-1.1, offset, Math.PI / 2));
    }

    pcbGroup.add(mcuGroup);

    // --- REALISTIC ELECTROLYTIC CAPACITORS ---
    const capBodyMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 });
    const capTopMat = new THREE.MeshStandardMaterial({ color: 0xc0c4cc, metalness: 0.95, roughness: 0.05 });

    [-2.3, 2.3].forEach((x) => {
      const capGroup = new THREE.Group();
      const cylGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.65, 32);
      const cyl = new THREE.Mesh(cylGeo, capBodyMat);
      cyl.rotation.x = Math.PI / 2;
      capGroup.add(cyl);

      const topCircleGeo = new THREE.CircleGeometry(0.31, 32);
      const topCircle = new THREE.Mesh(topCircleGeo, capTopMat);
      topCircle.position.z = 0.33;
      capGroup.add(topCircle);

      capGroup.position.set(x, 1.25, 0.4);
      pcbGroup.add(capGroup);
    });

    // --- TOROIDAL POWER INDUCTOR ---
    const toroidGeo = new THREE.TorusGeometry(0.35, 0.12, 16, 32);
    const toroidMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.9, roughness: 0.1 });
    const toroid = new THREE.Mesh(toroidGeo, toroidMat);
    toroid.position.set(-2.3, -1.2, 0.3);
    pcbGroup.add(toroid);

    // --- CRYSTAL OSCILLATOR CAN ---
    const xtalGeo = new THREE.BoxGeometry(0.5, 0.7, 0.25);
    const xtalMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.98, roughness: 0.05 });
    const xtal = new THREE.Mesh(xtalGeo, xtalMat);
    xtal.position.set(2.3, -1.2, 0.3);
    pcbGroup.add(xtal);

    // --- BLINKING STATUS LEDS ---
    const ledCyanGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const ledCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const ledCyan = new THREE.Mesh(ledCyanGeo, ledCyanMat);
    ledCyan.position.set(-3.0, -1.6, 0.2);
    pcbGroup.add(ledCyan);

    const ledRedMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const ledRed = new THREE.Mesh(ledCyanGeo, ledRedMat);
    ledRed.position.set(3.0, -1.6, 0.2);
    pcbGroup.add(ledRed);

    scene.add(pcbGroup);

    // 4. Orbiting Electron Particle Cloud
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 14;
      particlePos[i + 1] = (Math.random() - 0.5) * 9;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Floating Resistors
    const floatResistorGroup = new THREE.Group();
    const resGeo = new THREE.CapsuleGeometry(0.14, 0.55, 8, 16);
    const resMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.3 });
    const floatResistor = new THREE.Mesh(resGeo, resMat);
    floatResistor.rotation.z = Math.PI / 3;
    floatResistorGroup.add(floatResistor);
    floatResistorGroup.position.set(-4.2, 2.3, -1);
    scene.add(floatResistorGroup);

    // Mouse Movement Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // PCB Smooth Floating & Rotation
      pcbGroup.rotation.y = Math.sin(elapsedTime * 0.35) * 0.18 + mouseX * 0.5;
      pcbGroup.rotation.x = Math.cos(elapsedTime * 0.25) * 0.09 + mouseY * 0.5;
      pcbGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.12;

      // Particle system rotation
      particleSystem.rotation.y = elapsedTime * 0.02;

      // Floating Resistor Rotation
      floatResistorGroup.rotation.x = elapsedTime * 0.4;
      floatResistorGroup.rotation.y = elapsedTime * 0.3;
      floatResistorGroup.position.y = 2.3 + Math.sin(elapsedTime * 0.8) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60 transition-opacity duration-1000"
    />
  );
};
