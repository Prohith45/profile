'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, AlertTriangle, CheckCircle2, Layers, Wrench } from 'lucide-react';
import { Project } from '@/lib/data';
import { soundFx } from '@/lib/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleClose = () => {
    soundFx.playRelayClick();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 rounded-2xl bg-secondary/95 border border-electric-cyan/30 shadow-glow-cyan p-6 sm:p-8 text-white"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 border border-cardBorder text-gray-400 hover:text-white hover:border-electric-cyan transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE & HARDWARE SPECS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-cyan-blue">{project.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
          </div>

          {/* Image & Tech Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative rounded-xl overflow-hidden border border-cardBorder bg-black/60 aspect-video flex items-center justify-center p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  // Fallback vector representation if image loads
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect width="400" height="225" fill="%23050505"/><path d="M50 112H350M200 20V205" stroke="%2300f3ff" stroke-width="1" stroke-dasharray="4 4"/><circle cx="200" cy="112" r="50" fill="%230b0b0b" stroke="%230070F3" stroke-width="2"/><text x="145" y="117" fill="%2300f3ff" font-family="monospace" font-size="14">CIRCUIT BOARD</text></svg>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2 tracking-wider">Tech Stack Integrated</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-electric-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2 tracking-wider">Key Functional Capabilities</h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-electric-cyan font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="flex gap-3 mt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-medium hover:bg-white/20 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href={`#contact`}
                  onClick={handleClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-electric-blue to-electric-cyan text-black font-semibold text-xs hover:shadow-glow-cyan transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Inquire Hardware Specs</span>
                </a>
              </div>
            </div>
          </div>

          {/* Circuit Architecture Flow */}
          <div className="mb-6 p-4 rounded-xl bg-black/50 border border-cardBorder">
            <h3 className="text-sm font-mono text-electric-cyan flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4" />
              <span>CIRCUIT DATA ARCHITECTURE</span>
            </h3>
            <p className="text-xs font-mono text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10">
              {project.modalDetails.architecture}
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="mb-6">
            <h3 className="text-sm font-mono text-electric-cyan flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4" />
              <span>EXECUTION WORKFLOW</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.modalDetails.workflow.map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-cardBg border border-cardBorder text-xs text-gray-300 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-electric-blue/20 text-electric-cyan font-mono text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs">
              <h4 className="font-mono text-red-400 flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>Engineering Challenge</span>
              </h4>
              <p className="text-gray-300">{project.modalDetails.challenges}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs">
              <h4 className="font-mono text-emerald-400 flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Hardware Solution</span>
              </h4>
              <p className="text-gray-300">{project.modalDetails.solutions}</p>
            </div>
          </div>

          {/* Detailed Hardware Specs Table */}
          <div>
            <h3 className="text-sm font-mono text-electric-cyan mb-3">HARDWARE SPECS BENCH</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {Object.entries(project.modalDetails.specs).map(([key, val], idx) => (
                <div key={idx} className="p-3 rounded-lg bg-black/40 border border-cardBorder">
                  <div className="text-gray-400 font-mono text-[10px] uppercase">{key}</div>
                  <div className="text-white font-medium text-xs mt-0.5">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
