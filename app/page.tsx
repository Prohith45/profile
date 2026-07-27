'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { IntroSequence } from '@/components/sections/IntroSequence';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { LabWorkbenchSection } from '@/components/sections/LabWorkbenchSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterEnding } from '@/components/sections/FooterEnding';

// Dynamically import Three.js 3D canvas with SSR disabled
const LabCanvas = dynamic(
  () => import('@/components/3d/LabCanvas').then((mod) => mod.LabCanvas),
  { ssr: false }
);

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="relative bg-background min-h-screen text-white overflow-hidden">
      {/* 3D Background Electronics Laboratory Canvas */}
      <LabCanvas />

      {/* Intro Assembly Storytelling Sequence */}
      {!introDone ? (
        <IntroSequence onComplete={() => setIntroDone(true)} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <LabWorkbenchSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
          <FooterEnding />
        </>
      )}
    </main>
  );
}
