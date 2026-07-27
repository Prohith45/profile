'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { EDUCATION } from '@/lib/data';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC MILESTONES & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Education Timeline</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Vertical PCB copper traces connecting academic excellence.
          </p>
        </div>

        {/* Vertical Copper Trace Timeline */}
        <div className="relative border-l-2 border-electric-copper/50 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glowing Copper Trace Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-black border-2 border-electric-copper flex items-center justify-center shadow-glow-copper">
                <span className="w-2 h-2 rounded-full bg-electric-copper animate-ping" />
              </div>

              <GlassCard glowColor={idx === 1 ? 'purple' : 'cyan'}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-cardBorder pb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-1">
                      {edu.year} • {edu.status}
                    </span>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  </div>

                  {/* Score Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan text-black font-extrabold text-xs font-mono shadow-glow-cyan shrink-0">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.score}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-gray-200">{edu.institution}</div>
                <div className="text-xs text-gray-400 font-mono mt-0.5">{edu.affiliation}</div>
              </GlassCard>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
