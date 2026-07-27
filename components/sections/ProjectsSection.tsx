'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ExternalLink, Github, Layers, Sparkles, Eye } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { ProjectModal } from '../ui/ProjectModal';
import { PROJECTS, Project } from '@/lib/data';
import { soundFx } from '@/lib/audio';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'IoT', 'Robotics / AI', 'Hardware / PCB', 'Embedded Systems', 'Software AI'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleOpenModal = (project: Project) => {
    soundFx.playRelayClick();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Featured Hardware & AI Projects</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Custom PCB designs, CNC robotics, IoT broadcast nodes, and smart assistants.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playHoverBeep();
                setActiveFilter(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-electric-cyan text-black font-bold shadow-glow-cyan'
                  : 'bg-cardBg border border-cardBorder text-gray-400 hover:text-white hover:border-electric-cyan/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor={idx % 2 === 0 ? 'cyan' : 'purple'} className="group h-full flex flex-col justify-between">
                <div>
                  {/* Image & Circuit Transition Card */}
                  <div className="relative rounded-xl overflow-hidden border border-cardBorder bg-black/60 aspect-video mb-6 group-hover:border-electric-cyan/50 transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="400" height="225" fill="%23050505"/><path d="M50 112H350M200 20V205" stroke="%2300f3ff" stroke-width="1" stroke-dasharray="4 4"/><circle cx="200" cy="112" r="50" fill="%230b0b0b" stroke="%230070F3" stroke-width="2"/><text x="145" y="117" fill="%2300f3ff" font-family="monospace" font-size="14">CIRCUIT BOARD</text></svg>';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-electric-cyan/30 text-electric-cyan text-[10px] font-mono">
                      {project.category}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-electric-cyan/80 mb-3">{project.subtitle}</div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-cardBorder">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono font-bold hover:bg-electric-cyan/20 hover:border-electric-cyan transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Circuit & Specs</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFx.playRelayClick()}
                      className="p-2.5 rounded-xl bg-cardBg border border-cardBorder text-gray-300 hover:text-white hover:border-electric-cyan transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Modal Window Container */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>
  );
};
