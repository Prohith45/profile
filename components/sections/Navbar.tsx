'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, FileText, Github, Linkedin, Mail, Radio } from 'lucide-react';
import { AudioControl } from '../ui/AudioControl';
import { PERSONAL_INFO } from '@/lib/data';
import { soundFx } from '@/lib/audio';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'workbench', 'education', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'workbench', label: 'LAB BENCH' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md border-b border-cardBorder py-3 shadow-glass' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo HUD */}
        <a
          href="#hero"
          onClick={() => soundFx.playRelayClick()}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary border border-electric-cyan/50 flex items-center justify-center group-hover:border-electric-cyan group-hover:shadow-glow-cyan transition-all">
            <Cpu className="w-4 h-4 text-electric-cyan" />
          </div>
          <div>
            <div className="font-mono text-sm font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>ROHITH PAPANA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
            </div>
            <div className="text-[9px] font-mono text-gray-400 flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 text-emerald-400 animate-ping" />
              <span>SYSTEM ONLINE • 5.0V BUS</span>
            </div>
          </div>
        </a>

        {/* Center Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-cardBg backdrop-blur-xl border border-cardBorder">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => soundFx.playRelayClick()}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-glow-cyan'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls & Resume Download */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AudioControl />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playSpark()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-electric-blue to-electric-cyan text-black font-semibold text-xs hover:shadow-glow-cyan transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESUME</span>
          </a>
        </div>
      </div>
    </header>
  );
};
