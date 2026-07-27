'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText, CheckCircle2, Radio } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { PERSONAL_INFO } from '@/lib/data';
import { soundFx } from '@/lib/audio';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleMailtoFallback = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:papanarohith45@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSpark();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Server configuration issue' }));
        setErrorMessage(errorData.error || 'Failed to process signal');
      }
    } catch (error) {
      console.error('Failed to send message via API:', error);
      // Network failure / Server offline -> fallback to mailto link directly
      handleMailtoFallback(formData.name, formData.email, formData.message);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-electric-cyan" />
            <span>TRANSMIT DIRECT HARDWARE SIGNAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Contact Rohith Papana</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Open for hardware engineering roles, embedded internships, and AI research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glowColor="cyan" className="space-y-6">
              <h3 className="text-lg font-bold text-white font-mono border-b border-cardBorder pb-3">
                DIRECT CONTACT LINES
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-black/40 border border-cardBorder hover:border-electric-cyan transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-electric-cyan/10 text-electric-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">EMAIL ADDRESS</div>
                    <div className="font-mono text-white text-xs sm:text-sm font-semibold">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-black/40 border border-cardBorder hover:border-electric-cyan transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-electric-blue/10 text-electric-blue group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">PHONE NUMBER</div>
                    <div className="font-mono text-white text-xs sm:text-sm font-semibold">{PERSONAL_INFO.contact.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/40 border border-cardBorder">
                  <div className="p-2.5 rounded-lg bg-electric-purple/10 text-electric-pink">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">LOCATION</div>
                    <div className="font-mono text-white text-xs sm:text-sm font-semibold">{PERSONAL_INFO.contact.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Action Grid */}
              <div className="flex gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-cardBg border border-cardBorder text-xs font-mono hover:border-electric-cyan hover:text-electric-cyan transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-cardBg border border-cardBorder text-xs font-mono hover:border-electric-cyan hover:text-electric-cyan transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="purple">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 font-mono"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-white">SIGNAL TRANSMITTED SUCCESSFULLY</h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out! I will review your payload and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-white/10 text-xs text-electric-cyan hover:bg-white/20 transition-all"
                  >
                    Send Another Packet
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white font-mono border-b border-cardBorder pb-3">
                    TRANSMIT MESSAGE PAYLOAD
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cardBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">YOUR EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="hiring@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cardBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">PROJECT / ROLE INQUIRY</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify hardware role, PCB inquiry, or collaboration topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-cardBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-all font-mono"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono space-y-2">
                      <div className="text-red-400 font-semibold">⚠️ {errorMessage}</div>
                      <div className="text-gray-400">
                        No SMTP setup? You can dispatch directly via your default email app:
                      </div>
                      <button
                        type="button"
                        onClick={() => handleMailtoFallback(formData.name, formData.email, formData.message)}
                        className="inline-flex items-center gap-1.5 text-electric-cyan underline hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch Mail Client with Payload</span>
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-light text-black font-bold text-sm hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 font-mono ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>{isSubmitting ? 'Transmitting...' : 'Transmit Signal to Rohith'}</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
