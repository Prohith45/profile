'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Layers, Clock, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { ACHIEVEMENTS_STATS } from '@/lib/data';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor={idx % 2 === 0 ? 'cyan' : 'purple'} className="text-center py-8">
                <div className="text-3xl sm:text-5xl font-extrabold font-mono text-gradient-cyan-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white font-mono">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.subtext}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
