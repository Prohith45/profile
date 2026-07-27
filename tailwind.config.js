/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        secondary: "#0B0B0B",
        cardBg: "rgba(255, 255, 255, 0.04)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        electric: {
          blue: "#0070F3",
          light: "#00f0ff",
          cyan: "#00f3ff",
          purple: "#7928CA",
          pink: "#FF0080",
          copper: "#ff9d00",
          gold: "#e6ad00",
        },
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #7928CA 0%, #FF0080 100%)',
        'cyan-blue-gradient': 'linear-gradient(135deg, #00f3ff 0%, #0070F3 100%)',
        'pcb-trace': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 243, 255, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(0, 112, 243, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(121, 40, 202, 0.4)',
        'glow-copper': '0 0 20px -3px rgba(255, 157, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'trace-flow': 'traceFlow 2s linear infinite',
        'led-blink': 'ledBlink 1.5s ease-in-out infinite',
        'sparkle': 'sparkle 1s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        traceFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        ledBlink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.85)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      },
    },
  },
  plugins: [],
}
