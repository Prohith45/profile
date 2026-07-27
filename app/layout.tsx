import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CursorGlow } from '@/components/ui/CursorGlow';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Rohith Papana | Futuristic Electronics Engineer & Embedded Systems Specialist',
  description: 'Personal portfolio website of Rohith Papana. Electronics & Communication Engineer specializing in Embedded Systems, PCB Design, IoT, AI Robotics, and Hardware Innovation.',
  keywords: [
    'Rohith Papana',
    'Electronics Engineer',
    'Embedded Systems Developer',
    'PCB Designer',
    'IoT Developer',
    'AI Automation Engineer',
    'PVPSIT',
    'Arduino',
    'Raspberry Pi',
    'STM32'
  ],
  authors: [{ name: 'Rohith Papana' }],
  openGraph: {
    title: 'Rohith Papana | Electronics & Embedded Systems Laboratory',
    description: 'Cinematic interactive portfolio showcasing custom PCB etching, microcontrollers, IoT, and AI robotics.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-white antialiased selection:bg-electric-cyan selection:text-black">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
