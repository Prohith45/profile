'use client';

import React, { useState } from 'react';
import { Activity, Gauge, Sliders, Zap, Radio, Play, Pause } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { OscilloscopeWaveIcon, MultimeterIcon } from '../ui/ElectronicsIcons';
import { soundFx } from '@/lib/audio';

export const LabWorkbenchSection: React.FC = () => {
  const [waveType, setWaveType] = useState<'sine' | 'square' | 'pwm'>('sine');
  const [frequency, setFrequency] = useState<number>(5); // Hz
  const [amplitude, setAmplitude] = useState<number>(12); // Volts
  const [psuVoltage, setPsuVoltage] = useState<number>(5.0); // 1.25V - 24V DC

  // Generate SVG path points based on active wave parameters
  const generateWavePath = () => {
    const width = 400;
    const height = 180;
    const midY = height / 2;
    const points: string[] = [];

    const numPoints = 200;
    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * width;
      let y = midY;

      const normX = (i / numPoints) * Math.PI * 2 * frequency;

      if (waveType === 'sine') {
        y = midY - Math.sin(normX) * (amplitude * 4);
      } else if (waveType === 'square') {
        y = midY - (Math.sin(normX) >= 0 ? 1 : -1) * (amplitude * 3.5);
      } else if (waveType === 'pwm') {
        const val = Math.sin(normX) > 0.3 ? 1 : -1;
        y = midY - val * (amplitude * 3.5);
      }

      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }

    return points.join(' ');
  };

  return (
    <section id="workbench" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>VIRTUAL ELECTRONICS MEASUREMENT BENCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Interactive Test Bench</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 font-mono">
            Test signal frequency, voltage rails, and waveform telemetry in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Digital Oscilloscope */}
          <div className="lg:col-span-8">
            <GlassCard glowColor="cyan" className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cardBorder pb-4">
                <div className="flex items-center gap-3">
                  <OscilloscopeWaveIcon size={32} color="#00f3ff" glow />
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">DIGITAL OSCILLOSCOPE (RIGOL/TEKTRONIX)</h3>
                    <div className="text-xs text-electric-cyan font-mono">CHANNEL 1: 50 Ohm • 100MHz BANDWIDTH</div>
                  </div>
                </div>

                {/* Waveform Selector Buttons */}
                <div className="flex gap-2">
                  {(['sine', 'square', 'pwm'] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => {
                        soundFx.playHoverBeep();
                        setWaveType(w);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-all ${
                        waveType === w
                          ? 'bg-electric-cyan text-black font-bold shadow-glow-cyan'
                          : 'bg-black/50 border border-cardBorder text-gray-400 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* CRT / LCD Display Screen */}
              <div className="relative rounded-xl bg-black border border-electric-cyan/40 p-4 aspect-[16/9] flex items-center justify-center overflow-hidden shadow-inner">
                {/* Background Grid Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <defs>
                    <pattern id="scope-grid" width="40" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#00f3ff" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#scope-grid)" />
                </svg>

                {/* Animated Waveform SVG Path */}
                <svg viewBox="0 0 400 180" className="w-full h-full relative z-10">
                  <path
                    d={generateWavePath()}
                    fill="none"
                    stroke="#00f3ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_#00f3ff]"
                  />
                </svg>

                {/* Telemetry Overlay Text */}
                <div className="absolute top-3 left-4 font-mono text-[11px] text-emerald-400 space-y-0.5">
                  <div>Vpp: {(amplitude * 2).toFixed(1)} V</div>
                  <div>FREQ: {(frequency * 100).toFixed(0)} Hz</div>
                  <div>TIME/DIV: 2.0 ms</div>
                </div>
                <div className="absolute bottom-3 right-4 font-mono text-[10px] text-electric-cyan bg-black/80 px-2 py-1 rounded border border-electric-cyan/30">
                  TRIGGER: AUTO (CH1)
                </div>
              </div>

              {/* Oscilloscope Control Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span>SIGNAL FREQUENCY</span>
                    <span className="text-electric-cyan font-bold">{(frequency * 100)} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={frequency}
                    onChange={(e) => setFrequency(parseFloat(e.target.value))}
                    className="w-full accent-electric-cyan bg-secondary rounded-lg h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-300">
                    <span>VOLTAGE AMPLITUDE</span>
                    <span className="text-electric-cyan font-bold">{amplitude.toFixed(1)} V</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="1"
                    value={amplitude}
                    onChange={(e) => setAmplitude(parseFloat(e.target.value))}
                    className="w-full accent-electric-cyan bg-secondary rounded-lg h-2"
                  />
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Custom Variable Bench Power Supply & Multimeter */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard glowColor="copper" className="space-y-4">
              <div className="flex items-center gap-3 border-b border-cardBorder pb-3">
                <MultimeterIcon size={28} color="#ef4444" />
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">BENCH POWER SUPPLY</h3>
                  <div className="text-[10px] text-gray-400 font-mono">SMPS + BUCK CONVERTER NODE</div>
                </div>
              </div>

              {/* Digital LED Display */}
              <div className="p-4 rounded-xl bg-black border border-electric-copper/40 flex items-center justify-between font-mono">
                <div>
                  <div className="text-[10px] text-gray-500">VOLTAGE OUT</div>
                  <div className="text-2xl font-extrabold text-red-500 tracking-wider">
                    {psuVoltage.toFixed(2)} <span className="text-xs">V</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">CURRENT DRAW</div>
                  <div className="text-2xl font-extrabold text-blue-400 tracking-wider">
                    {(psuVoltage * 0.12).toFixed(2)} <span className="text-xs">A</span>
                  </div>
                </div>
              </div>

              {/* PSU Voltage Regulator Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono text-gray-300">
                  <span>POTENTIOMETER TRIM</span>
                  <span className="text-electric-copper font-bold">{psuVoltage.toFixed(1)}V DC</span>
                </div>
                <input
                  type="range"
                  min="1.25"
                  max="24.0"
                  step="0.25"
                  value={psuVoltage}
                  onChange={(e) => setPsuVoltage(parseFloat(e.target.value))}
                  className="w-full accent-electric-copper bg-secondary rounded-lg h-2"
                />
              </div>

              {/* Live Virtual Circuit Load Simulation */}
              <div className="p-3 rounded-xl bg-black/40 border border-cardBorder text-xs space-y-2 font-mono">
                <div className="flex justify-between items-center text-gray-400">
                  <span>VIRTUAL BENCH LOAD:</span>
                  <span className="text-emerald-400">NORMAL</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-300">
                  <Zap className={`w-4 h-4 ${psuVoltage > 12 ? 'text-amber-400 animate-bounce' : 'text-electric-cyan'}`} />
                  <span>POWER DELIVERED: {(psuVoltage * psuVoltage * 0.12).toFixed(2)} WATTS</span>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
