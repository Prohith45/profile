'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, Activity, Radio, Bot, Wrench, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SKILL_CATEGORIES } from '@/lib/data';
import { soundFx } from '@/lib/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code className="w-5 h-5 text-electric-cyan" />;
      case 'microchip': return <Cpu className="w-5 h-5 text-electric-blue" />;
      case 'layers': return <Layers className="w-5 h-5 text-electric-copper" />;
      case 'activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'radio': return <Radio className="w-5 h-5 text-electric-purple" />;
      default: return <Bot className="w-5 h-5 text-electric-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & LAB TOOLSET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Engineering Skills</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Hardware prototyping, low-level firmware execution, and circuit layout mastery.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                glowColor={idx % 3 === 0 ? 'cyan' : idx % 3 === 1 ? 'purple' : 'copper'}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-cardBorder pb-3 mb-4">
                    <div className="p-2 rounded-xl bg-black/40 border border-cardBorder">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-mono">{cat.category}</h3>
                      <p className="text-[11px] text-gray-400">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Progress Ring & Bars */}
                  <div className="space-y-4 my-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono text-gray-200 font-semibold">{skill.name}</span>
                          <span className="font-mono text-electric-cyan font-bold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden border border-white/5 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple"
                          />
                        </div>
                        <p className="text-[10px] text-gray-400 font-mono italic">{skill.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-cardBorder/40 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>CATEGORY LEVEL: EXCELLENT</span>
                  <Sparkles className="w-3 h-3 text-electric-cyan animate-pulse" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
