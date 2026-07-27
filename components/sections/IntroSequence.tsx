'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Flame, Radio } from 'lucide-react';
import { soundFx } from '@/lib/audio';

export const IntroSequence: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStep(1); // Traces drawing
      soundFx.playHoverBeep();
    }, 800);

    const t2 = setTimeout(() => {
      setStep(2); // Soldering iron & sparks
      soundFx.playSpark();
    }, 2200);

    const t3 = setTimeout(() => {
      setStep(3); // Motherboard power up & completion
      soundFx.playPowerUp();
    }, 3800);

    const t4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-black overflow-hidden z-20"
    >
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 pcb-grid-bg opacity-30" />
      <div className="glow-orb-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* SVG PCB Assembly Storyboard Canvas */}
      <div className="relative w-full max-w-2xl aspect-[16/10] rounded-2xl bg-secondary/90 border border-electric-cyan/40 p-6 shadow-glow-cyan flex flex-col items-center justify-center">
        
        {/* Status HUD Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-gray-400 border-b border-cardBorder pb-2">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-electric-cyan animate-pulse" />
            <span>FABRICATION SEQUENCE: STEP {step + 1}/4</span>
          </div>
          <div className="text-electric-cyan">
            {step === 0 && "INITIALIZING COPPER BOARD..."}
            {step === 1 && "ROUTING COPPER TRACES..."}
            {step === 2 && "SOLDERING SMD COMPONENTS..."}
            {step === 3 && "POWERING MOTHERBOARD..."}
          </div>
        </div>

        {/* Central SVG Schematic Drawing */}
        <svg viewBox="0 0 500 300" className="w-full h-full">
          {/* Unpopulated Copper Clad Board */}
          <rect x="50" y="30" width="400" height="240" rx="12" fill="#06382b" stroke="#10b981" strokeWidth="2" />
          
          {/* Animated Circuit Traces */}
          {step >= 1 && (
            <g className="transition-all duration-1000">
              <path
                d="M80 80 H200 V150 H320 V220 H420"
                stroke="#ff9d00"
                strokeWidth="3"
                fill="none"
                className="circuit-trace-animated"
              />
              <path
                d="M420 80 H300 V150 H180 V220 H80"
                stroke="#00f3ff"
                strokeWidth="3"
                fill="none"
                className="circuit-trace-animated"
              />
              <path
                d="M250 50 V250"
                stroke="#0070F3"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
            </g>
          )}

          {/* Soldering Iron & Component Drop */}
          {step >= 2 && (
            <g className="transition-all duration-500">
              {/* Microcontroller IC Chip */}
              <rect x="210" y="110" width="80" height="80" rx="4" fill="#0b0b0b" stroke="#00f3ff" strokeWidth="2" />
              <text x="228" y="155" fill="#00f3ff" fontSize="14" fontFamily="monospace" fontWeight="bold">STM32</text>
              
              {/* Soldering Iron Pointer */}
              <motion.g
                initial={{ x: 100, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <path d="M280 100 L340 40" stroke="#ff9d00" strokeWidth="6" strokeLinecap="round" />
                <circle cx="280" cy="100" r="4" fill="#facc15" className="animate-ping" />
              </motion.g>
            </g>
          )}

          {/* Complete Circuit Power Up & Glowing Traces */}
          {step >= 3 && (
            <g>
              <circle cx="80" cy="80" r="6" fill="#00f3ff" className="pcb-node" />
              <circle cx="420" cy="80" r="6" fill="#ef4444" className="pcb-node" />
              <circle cx="420" cy="220" r="6" fill="#10b981" className="pcb-node" />
              <circle cx="80" cy="220" r="6" fill="#f59e0b" className="pcb-node" />
              <rect x="200" y="100" width="100" height="100" rx="8" fill="none" stroke="#00f3ff" strokeWidth="2" className="animate-pulse" />
            </g>
          )}
        </svg>

        {/* Electrical Sparks */}
        {step === 2 && (
          <div className="absolute bottom-10 right-12 flex items-center gap-1 text-amber-400 font-mono text-xs animate-bounce">
            <Flame className="w-4 h-4" />
            <span>SOLDERING SPARK • 350°C</span>
          </div>
        )}

        {/* Power Flow Activation */}
        {step === 3 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute bottom-6 flex items-center gap-2 px-4 py-2 rounded-full bg-electric-cyan/20 border border-electric-cyan text-electric-cyan font-mono text-xs shadow-glow-cyan"
          >
            <Zap className="w-4 h-4 animate-bounce" />
            <span>CIRCUIT ONLINE • ALL SYSTEMS NOMINAL</span>
          </motion.div>
        )}
      </div>

      <p className="text-gray-400 font-mono text-xs mt-6 tracking-widest uppercase animate-pulse">
        Scroll down to enter the electronics laboratory
      </p>
    </motion.section>
  );
};
