'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Heart, ArrowUp } from 'lucide-react';
import { soundFx } from '@/lib/audio';

export const FooterEnding: React.FC = () => {
  const [powerOverload, setPowerOverload] = useState(false);

  const triggerPowerSequence = () => {
    soundFx.playPowerUp();
    setPowerOverload(true);
    setTimeout(() => setPowerOverload(false), 3000);
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 sm:px-6 overflow-hidden border-t border-cardBorder bg-black">
      
      {/* PCB Trace Illumination Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-40 pointer-events-none" />
      <div className="glow-orb-cyan bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        
        {/* Master Processor Core Illumination Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={triggerPowerSequence}
          className={`cursor-pointer p-8 sm:p-12 rounded-3xl bg-secondary/90 border transition-all duration-700 ${
            powerOverload
              ? 'border-electric-cyan shadow-glow-cyan scale-105'
              : 'border-cardBorder hover:border-electric-cyan/40 hover:shadow-glass'
          }`}
        >
          {/* Microcontroller CPU Graphic */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-black border border-electric-cyan/50 flex items-center justify-center shadow-glow-cyan mb-6 relative">
            <Cpu className="w-10 h-10 text-electric-cyan animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-gradient-cyan-blue tracking-tight">
            ROHITH PAPANA
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-gray-400 mt-3">
            <span>Electronics Engineer</span>
            <span>•</span>
            <span>Embedded Systems</span>
            <span>•</span>
            <span>PCB Designer</span>
            <span>•</span>
            <span>AI Automation Engineer</span>
          </div>

          {/* Grand Finale Message */}
          <div className="pt-8 border-t border-cardBorder/60 max-w-xl mx-auto">
            <p className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide">
              "Let's Build Something Amazing Together."
            </p>
            <p className="text-xs font-mono text-electric-cyan mt-2">
              Click CPU core to trigger high-voltage PCB motherboard illumination
            </p>
          </div>
        </motion.div>

        {/* Scroll Back to Top & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500 pt-6 border-t border-cardBorder/40">
          <div>
            © {new Date().getFullYear()} ROHITH PAPANA • ALL RIGHTS RESERVED
          </div>

          <a
            href="#hero"
            onClick={() => soundFx.playRelayClick()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cardBg border border-cardBorder text-gray-400 hover:text-white hover:border-electric-cyan transition-all"
          >
            <span>RETURN TO HERO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-cyan animate-bounce" />
          </a>
        </div>

      </div>
    </footer>
  );
};
