'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '@/lib/audio';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'blue' | 'purple' | 'copper';
  tilt?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  tilt = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [reflection, setReflection] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`);
    setReflection({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setReflection({ x: 50, y: 50, opacity: 0 });
  };

  const handleMouseEnter = () => {
    soundFx.playHoverBeep();
  };

  const handleClick = () => {
    soundFx.playRelayClick();
    if (onClick) onClick();
  };

  const glowClasses = {
    cyan: 'hover:border-electric-cyan/40 hover:shadow-glow-cyan',
    blue: 'hover:border-electric-blue/40 hover:shadow-glow-blue',
    purple: 'hover:border-electric-purple/40 hover:shadow-glow-purple',
    copper: 'hover:border-electric-copper/40 hover:shadow-glow-copper',
  }[glowColor];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{ transform, transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease' }}
      className={`relative rounded-2xl bg-cardBg backdrop-blur-xl border border-cardBorder p-6 shadow-glass glass-card-interactive ${glowClasses} ${className}`}
    >
      {/* Light gloss reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${reflection.x}% ${reflection.y}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
          opacity: reflection.opacity,
        }}
      />
      {children}
    </motion.div>
  );
};
