'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Languages, Compass, Award, Cpu, BookOpen } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { PERSONAL_INFO, EDUCATION } from '@/lib/data';
import { ResistorIcon, IcChipIcon, CapacitorIcon } from '../ui/ElectronicsIcons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE & OBJECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">About My Journey</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Merging solid state electronic principles with embedded intelligence & AI robotics.
          </p>
        </div>

        {/* Main Glass Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Orbiting Floating Electronics Background Deco */}
          <div className="hidden lg:block absolute -top-8 -left-8 animate-float-slow">
            <ResistorIcon size={40} color="#ff9d00" glow />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-6 animate-float-medium">
            <IcChipIcon size={44} color="#00f3ff" glow />
          </div>

          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard glowColor="cyan" className="space-y-4">
              <div className="flex items-center gap-3 border-b border-cardBorder pb-4">
                <div className="p-2.5 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">CAREER OBJECTIVE</h3>
                  <div className="text-xs text-electric-cyan font-mono">HARDWARE & EMBEDDED SYSTEMS FOCUS</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {PERSONAL_INFO.objective}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {PERSONAL_INFO.about}
              </p>
            </GlassCard>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard glowColor="purple">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-electric-pink shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-gray-400">LOCATION</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.contact.location}</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard glowColor="blue">
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-electric-cyan shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-gray-400">LANGUAGES</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.languages.join(" • ")}</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Right Column: Education & Interests Summary */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glowColor="copper">
              <div className="flex items-center gap-3 border-b border-cardBorder pb-3 mb-4">
                <BookOpen className="w-5 h-5 text-electric-copper" />
                <h3 className="text-base font-bold text-white font-mono">ACADEMIC HIGHLIGHT</h3>
              </div>
              
              <div className="space-y-4">
                {EDUCATION.slice(0, 2).map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-cardBorder">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold text-electric-cyan">{edu.degree}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">{edu.score}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard glowColor="blue">
              <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">PERSONAL INTERESTS & HOBBIES</h3>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-electric-cyan/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
