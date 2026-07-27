'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Factory, Radio, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCE } from '@/lib/data';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRIAL EXPERIENCE & MANUFACTURING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Work Experience</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Practical hands-on electronics assembly, testing, and production workflows.
          </p>
        </div>

        {/* Vertical PCB Trace Timeline */}
        <div className="relative border-l-2 border-dashed border-electric-cyan/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glowing PCB Node Joint on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-black border-2 border-electric-cyan flex items-center justify-center shadow-glow-cyan">
                <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping" />
              </div>

              <GlassCard glowColor="cyan" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cardBorder pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-cyan text-xs font-mono mb-2">
                      <Factory className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-sm font-mono text-electric-cyan mt-0.5">{exp.company} • {exp.location}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Internship Contributions</div>
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
