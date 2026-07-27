'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Download, Github, Linkedin, Mail, ArrowDown, Sparkles, Terminal, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { soundFx } from '@/lib/audio';

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation loop
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-cyan top-1/4 left-1/4" />
      <div className="glow-orb-purple bottom-1/4 right-1/4" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Engineer Profile Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Hardware Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cardBg backdrop-blur-md border border-electric-cyan/40 text-electric-cyan text-xs font-mono shadow-glow-cyan">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            <span>ELECTRONICS & COMMUNICATION SCHOLAR</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Main Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-white block">ROHITH</span>
            <span className="text-gradient-cyan-blue block mt-1">PAPANA</span>
          </h1>

          {/* Dynamic Typist Subtitle */}
          <div className="h-10 flex items-center font-mono text-lg sm:text-2xl text-gray-300">
            <Terminal className="w-5 h-5 text-electric-cyan mr-2" />
            <span className="text-electric-cyan font-bold">{displayText}</span>
            <span className="w-2.5 h-6 bg-electric-cyan ml-1 animate-pulse" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {PERSONAL_INFO.objective}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playSpark()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-light text-black font-bold text-sm hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playRelayClick()}
              className="p-3 rounded-xl bg-cardBg border border-cardBorder text-gray-300 hover:text-white hover:border-electric-cyan hover:shadow-glow-cyan transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playRelayClick()}
              className="p-3 rounded-xl bg-cardBg border border-cardBorder text-gray-300 hover:text-white hover:border-electric-cyan hover:shadow-glow-cyan transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              onClick={() => soundFx.playRelayClick()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cardBg border border-cardBorder text-gray-300 text-sm font-medium hover:text-white hover:border-electric-cyan transition-all"
            >
              <Mail className="w-4 h-4 text-electric-cyan" />
              <span>Contact Lab</span>
            </a>
          </div>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cardBorder max-w-lg">
            <div>
              <div className="text-xl font-bold font-mono text-electric-cyan">97%</div>
              <div className="text-xs text-gray-400 font-mono">Diploma ECE Score</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-electric-blue">8+</div>
              <div className="text-xs text-gray-400 font-mono">Built Projects</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-electric-copper">10+</div>
              <div className="text-xs text-gray-400 font-mono">Etched PCBs</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Holographic Glass Lab Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-3xl p-1 bg-gradient-to-b from-electric-cyan/40 via-electric-blue/20 to-electric-purple/40 shadow-glow-cyan">
            <div className="w-full h-full rounded-[22px] bg-secondary/90 backdrop-blur-xl border border-cardBorder overflow-hidden relative flex flex-col items-center justify-between p-6">
              
              {/* Corner Sci-Fi PCB Markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-electric-cyan" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-electric-cyan" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-electric-cyan" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-electric-cyan" />

              {/* Avatar Headshot Visual */}
              <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-electric-blue to-electric-cyan p-1 shadow-glow-cyan mt-4">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-pcb-trace opacity-40 animate-pulse" />
                  <span className="text-4xl font-extrabold font-mono text-electric-cyan">RP</span>
                </div>
              </div>

              {/* Holographic Signal Telemetry */}
              <div className="w-full text-center space-y-2 mb-2 font-mono">
                <div className="text-xs font-bold text-white tracking-wider">ROHITH PAPANA</div>
                <div className="text-[10px] text-electric-cyan bg-electric-cyan/10 py-1 px-3 rounded-full border border-electric-cyan/30">
                  HARDWARE & EMBEDDED LAB
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>3.3V / 5.0V PWM CONTROLLER ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={() => soundFx.playRelayClick()}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-electric-cyan transition-colors group z-10"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">DISCOVER JOURNEY</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-electric-cyan" />
      </a>
    </section>
  );
};
