# ⚡ Rohith Papana – Portfolio & Virtual Electronics Laboratory

> **A cutting-edge, cyber-hardware-themed interactive 3D portfolio and digital electronics laboratory built with Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js, and Framer Motion.**

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Key Architecture & Tech Stack](#-key-architecture--tech-stack)
3. [Repository Directory & File Structure](#-repository-directory--file-structure)
4. [Comprehensive File-by-File Analysis](#-comprehensive-file-by-file-analysis)
   - [Root Configuration Files](#1-root-configuration-files)
   - [Application Shell (`app/`)](#2-application-shell-app)
   - [Data & Audio Logic (`lib/`)](#3-data--audio-logic-lib)
   - [3D Canvas & WebGL Components (`components/3d/`)](#4-3d-canvas--webgl-components-components3d)
   - [Page Sections (`components/sections/`)](#5-page-sections-componentssections)
   - [UI Components & Utilities (`components/ui/`)](#6-ui-components--utilities-componentsui)
   - [Static Assets (`public/`)](#7-static-assets-public)
   - [Type Definitions (`types/`)](#8-type-definitions-types)
5. [Feature Highlights & Engineering Mechanics](#-feature-highlights--engineering-mechanics)
   - [Procedural 3D PCB & ATmega32U4 Microcontroller](#procedural-3d-pcb--atmega32u4-microcontroller)
   - [Zero-Asset Web Audio API Sound Synthesizer](#zero-asset-web-audio-api-sound-synthesizer)
   - [Interactive Virtual Test Bench (Oscilloscope & PSU)](#interactive-virtual-test-bench-oscilloscope--psu)
   - [Dynamic Glassmorphic Cards with 3D Tilt Physics](#dynamic-glassmorphic-cards-with-3d-tilt-physics)
   - [Dual-Layer Contact Transmission Engine](#dual-layer-contact-transmission-engine)
6. [Setup, Run & Development Guide](#-setup-run--development-guide)
7. [Environment Variables](#-environment-variables)

---

## 🌟 Project Overview

This repository hosts the personal portfolio of **Rohith Papana**, an **Electronics & Communication Engineer**, **Embedded Systems Specialist**, and **Hardware Innovator**.

Unlike generic web portfolios, this application is engineered as an interactive **Virtual Electronics Laboratory**. It captures the aesthetics and technical rigor of physical hardware engineering through:
- **Dark PCB aesthetics**: Deep emerald greens (`#06382b`, `#052e24`), copper traces (`#ff9d00`), electric cyan glows (`#00f3ff`), and rich gold IC pins (`#ffd700`).
- **Real-time 3D graphics**: Interactive rendering of PCBs, QFP-44 microcontrollers, gull-wing pins, electrolytic capacitors, toroid coils, and crystal oscillators using Three.js.
- **Synthesized hardware audio**: Pure Web Audio API synthesis generating mechanical relay clicks, soldering sparks, high-frequency hover beeps, and power-up sweeps without relying on external `.mp3` or `.wav` files.
- **Interactive engineering instruments**: A fully functioning virtual oscilloscope supporting Sine, Square, and PWM waveforms with variable frequency/amplitude, plus a variable DC bench power supply simulator.
- **Deep technical project breakdowns**: In-depth architecture flowcharts, hardware schematics, engineering challenges, solutions, and component specifications.

---

## 🛠️ Key Architecture & Tech Stack

| Domain | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js** (App Router) | `^15.1.7` | Hybrid rendering, routing, API routes, asset optimization |
| **UI Library** | **React** | `^19.0.0` | Declarative UI, state management, hooks |
| **Language** | **TypeScript** | `^5.7.3` | End-to-end type safety, interfaces, strict checking |
| **3D & WebGL** | **Three.js** | `^0.173.0` | Core WebGL 3D rendering engine, shaders, lighting |
| **3D React Fiber** | `@react-three/fiber` & `@react-three/drei` | `^8.18` / `^9.121` | Declarative Three.js component tree in React |
| **Styling** | **Tailwind CSS** + PostCSS | `^3.4.17` | Utility-first styling, custom keyframe animations, glow shadows |
| **Animations** | **Framer Motion** | `^12.4.7` | Page transitions, spring physics, layout animations |
| **Icons** | **Lucide React** + Custom SVG | `^0.475.0` | Clean vector icons + hand-crafted electronic component SVGs |
| **Audio Engine** | **Web Audio API** | Native Browser | Zero-asset mathematical sound synthesis (oscillators, noise buffers) |
| **Backend / Mail** | **Nodemailer** | `^9.0.3` | Serverless contact signal transmission via Gmail SMTP |

---

## 📂 Repository Directory & File Structure

```
profile/
├── .gitignore                          # Git ignored patterns (node_modules, .next, etc.)
├── next-env.d.ts                       # Next.js TypeScript declarations
├── next.config.js                      # Next.js bundler config & Three.js transpile rules
├── package.json                        # Project dependencies, metadata, and build scripts
├── package-lock.json                   # Dependency lockfile
├── postcss.config.js                   # PostCSS pipeline for Tailwind CSS
├── README.md                           # Comprehensive documentation (this file)
├── reel project.png                    # Project preview image
├── resume.pdf                          # Downloadable resume document
├── resume.txt                          # Raw resume plain text data source
├── tailwind.config.js                  # Custom theme, electric palette, glow shadows, animations
├── tsconfig.json                       # TypeScript compiler options and alias paths
│
├── app/                                # Next.js 15 App Router directory
│   ├── api/
│   │   └── contact/
│   │       └── route.ts                # Nodemailer SMTP POST endpoint for contact form
│   ├── globals.css                     # Global styles, scrollbars, glowing orbs, PCB grid
│   ├── layout.tsx                      # Root HTML layout, SEO metadata, viewport, cursor glow
│   └── page.tsx                        # Main landing page assembling 3D canvas and sections
│
├── components/                         # Modular React components
│   ├── 3d/                             # Three.js 3D WebGL scenes & procedural objects
│   │   ├── ElectronicsObjects.tsx      # Floating 3D Resistor, IC chip, and Oscillator meshes
│   │   ├── InteractivePcb.tsx          # Standalone 3D PCB board scene using React Three Fiber
│   │   └── LabCanvas.tsx               # Master background 3D canvas with ATmega32U4 & components
│   │
│   ├── sections/                       # High-level portfolio page sections
│   │   ├── AboutSection.tsx            # Career objective, bio, languages, academic highlights
│   │   ├── AchievementsSection.tsx     # Metrics grid (scores, project counts, lab hours)
│   │   ├── ContactSection.tsx          # Direct contact cards, signal transmission form
│   │   ├── EducationSection.tsx        # Vertical copper-trace timeline of academic credentials
│   │   ├── ExperienceSection.tsx       # Industrial internship history at Avishkaran Industry
│   │   ├── FooterEnding.tsx            # Master CPU core with clickable high-voltage power sequence
│   │   ├── HeroSection.tsx             # Typist role loop, resume download, hero presentation
│   │   ├── IntroSequence.tsx           # 4-stage PCB etching & soldering animation sequence
│   │   ├── LabWorkbenchSection.tsx     # Interactive digital oscilloscope & power supply bench
│   │   ├── Navbar.tsx                  # Fixed HUD navigation bar, system status indicator
│   │   ├── ProjectsSection.tsx         # Filterable hardware/IoT/AI project cards
│   │   └── SkillsSection.tsx           # Categorized technical skills with animated progress bars
│   │
│   └── ui/                             # Reusable design elements & interactive UI primitives
│       ├── AudioControl.tsx            # Mute/unmute toggle button with visual active pulse
│       ├── CursorGlow.tsx              # Mouse-following radial cyan lighting effect
│       ├── ElectronicsIcons.tsx        # Custom SVG icons: Resistor, Capacitor, IC, Transistor, etc.
│       ├── GlassCard.tsx               # 3D interactive tilt card with gloss reflection highlight
│       └── ProjectModal.tsx            # Deep-dive modal window for hardware architectural specs
│
├── lib/                                # Utility modules, data sources, and services
│   ├── audio.ts                        # Web Audio API sound synthesizer (relays, sparks, beeps)
│   └── data.ts                         # Static typed datasets (Personal info, projects, skills, edu)
│
├── public/                             # Public static assets served at root
│   ├── resume.pdf                      # Static copy of Rohith's resume for direct browser view
│   └── images/                         # Project photography and schematic renders
│       ├── project_ai_reel.png         # AI Reel Generator interface
│       ├── project_combat_robot.png    # BattleBull combat robot chassis
│       ├── project_custom_pcb.png      # Etched copper-clad PCB prototype
│       ├── project_healthcare_robot.png# Healthcare assistance robot prototype
│       ├── project_iot_audio.png       # IoT audio broadcast system
│       ├── project_power_supply.png    # Variable bench power supply unit
│       ├── project_rf_remote.png       # 8-channel 433MHz RF remote transmitter
│       └── project_writing_machine.png # Automatic writing CNC pen plotter
│
└── types/                              # Custom TypeScript ambient declaration files
    └── react-three-fiber.d.ts          # JSX.IntrinsicElements typings for Three.js elements
```

---

## 🔍 Comprehensive File-by-File Analysis

### 1. Root Configuration Files

#### `package.json`
- **Application Identification**: `rohith-papana-portfolio` (version `1.0.0`).
- **Scripts**:
  - `npm run dev`: Runs Next.js development server at `http://localhost:3000`.
  - `npm run build`: Compiles production build with optimizations.
  - `npm run start`: Runs production server.
  - `npm run lint`: Executes Next.js ESLint linting rules.
- **Key Dependencies**:
  - Next.js 15, React 19, TypeScript 5.
  - `@react-three/fiber` & `@react-three/drei` & `three`: 3D rendering pipeline.
  - `framer-motion`: Smooth layout transitions and element reveals.
  - `nodemailer`: Backend SMTP message dispatching.
  - `lucide-react`: Modern SVG iconography.

#### `next.config.js`
- Enables `reactStrictMode: true`.
- Transpiles ESM packages (`three`, `@react-three/fiber`, `@react-three/drei`) to avoid SSR/ESM module mismatch.
- Disables Next.js image optimization (`images.unoptimized: true`) for lightweight, direct asset serving.

#### `tailwind.config.js`
- Custom extended color palette:
  - `background`: `#050505` (Deep space black)
  - `secondary`: `#0B0B0B` (Dark obsidian card surface)
  - `cardBg`: `rgba(255, 255, 255, 0.04)` (Frosted glass)
  - `cardBorder`: `rgba(255, 255, 255, 0.08)` (Subtle glass boundary)
  - `electric.*`: Blue (`#0070F3`), Light Cyan (`#00f0ff`), Cyan (`#00f3ff`), Purple (`#7928CA`), Pink (`#FF0080`), Copper (`#ff9d00`), Gold (`#e6ad00`).
- Custom keyframe animations: `pulseGlow`, `float`, `traceFlow`, `ledBlink`, and `sparkle`.
- Specialized box shadows: `glow-cyan`, `glow-blue`, `glow-purple`, `glow-copper`, and `glass`.

#### `tsconfig.json`
- Configured for strict mode TypeScript checking.
- Sets `@/*` path alias pointing to the workspace root (`./*`) for clean, relative-free imports.

#### `resume.txt`
- Contains Rohith's foundational resume text: academic percentages, project architectures, technical skill taxonomy, and industrial internship duties used to populate `lib/data.ts`.

---

### 2. Application Shell (`app/`)

#### `app/layout.tsx`
- Serves as the HTML document root with `<html lang="en" className="dark scroll-smooth">`.
- Defines comprehensive SEO metadata (`title`, `description`, `keywords`, `openGraph`) reflecting Rohith's engineering focus.
- Injects global client-side visual enhancement `<CursorGlow />`.
- Imports `globals.css`.

#### `app/page.tsx`
- The client-side entry page (`'use client'`).
- Dynamically imports the 3D WebGL background canvas (`LabCanvas`) with `{ ssr: false }` to prevent SSR errors on browser-only WebGL APIs.
- Features stateful storytelling transition:
  - If `introDone === false`: Mounts `<IntroSequence onComplete={() => setIntroDone(true)} />`.
  - Once the fabrication intro completes, unrolls the full portfolio experience in structured sequence:
    1. `<Navbar />`
    2. `<HeroSection />`
    3. `<AboutSection />`
    4. `<SkillsSection />`
    5. `<ExperienceSection />`
    6. `<ProjectsSection />`
    7. `<LabWorkbenchSection />`
    8. `<EducationSection />`
    9. `<AchievementsSection />`
    10. `<ContactSection />`
    11. `<FooterEnding />`

#### `app/globals.css`
- Sets up Tailwind directives (`base`, `components`, `utilities`).
- Custom cyber-themed scrollbar styling with electric cyan/blue gradients.
- Background grid pattern `.pcb-grid-bg` simulating a physical circuit board substrate with 40px coordinates.
- Radial ambient lighting classes (`.glow-orb-cyan`, `.glow-orb-purple`).
- Glassmorphism rules (`.glass-panel`, `.glass-card-interactive`) including hover light sheen overlays.
- Keyframe animation rules for circuit trace SVG path dash offsets.

#### `app/api/contact/route.ts`
- Server-side Next.js Route Handler handling `POST /api/contact`.
- Validates payload containing `name`, `email`, and `message`.
- Authenticates with Gmail SMTP via `nodemailer.createTransport` using environment credentials (`EMAIL_USER`, `EMAIL_PASS`).
- Formats outgoing emails into a styled cyber-themed HTML transmission template delivered directly to `papanarohith45@gmail.com`.
- Sets sender's email as `replyTo` for one-click email replies.
- Handles error boundaries gracefully, returning status `400` or `500` with JSON diagnostics.

---

### 3. Data & Audio Logic (`lib/`)

#### `lib/data.ts`
The single source of truth for all content across the application. Fully typed with TypeScript interfaces:
- **`PERSONAL_INFO`**: Name, roles array for the hero typing loop, contact details, career objective, bio narrative, languages spoken, and hobbies.
- **`EDUCATION`**: Array of credentials:
  - B.Tech in Electronics & Communication Engineering at PVPSIT (Autonomous, affiliated to JNTUK) – *Pursuing*.
  - Diploma in ECE at Dhanekula Institute of Engineering and Technology (SBTET) – *97% Distinction (2025)*.
  - SSC at SLM Chaithanya High School – *84% (2022)*.
- **`EXPERIENCE`**: Detailed industrial manufacturing internship at **Avishkaran Industry Pvt. Ltd.** (Hyderabad) assembling sound bars, mini speakers, TWS earbuds, and learning quality control workflows.
- **`SKILL_CATEGORIES`**: 6 distinct engineering skill categories with quantitative proficiency percentages (0–100%) and micro-level descriptions:
  1. *Programming & Software* (C, Python, Data Structures)
  2. *Embedded Systems & MCUs* (Arduino UNO/Nano, Raspberry Pi Zero W2, ESP32/STM32)
  3. *PCB Design & Fabrication* (Schematic Capture, Trace Routing, Copper Clad Etching, Motor Drivers)
  4. *Electronics & Hardware Lab* (Circuit Analysis, Assembly/Soldering, Oscilloscope Troubleshooting, Breadboarding)
  5. *IoT & Wireless Modules* (433MHz RF, Bluetooth Audio/BLE, Sensors & Actuators)
  6. *AI & Automation* (Computer Vision/OpenCV, gTTS Voice Synthesis, AI Reel Pipelines)
- **`PROJECTS`**: 8 deeply detailed hardware and software projects:
  1. **BattleBull – Horizontal Spinner Combat Robot** (ESP32, welded steel chassis, 555 geared motors, high-current MOSFETs, belt-driven horizontal spinner).
  2. **IoT-Based Audio Announcement System** (Diploma Final Year Project: Raspberry Pi Zero W2, Flask, gTTS, MIT App Inventor, Bluetooth A2DP).
  3. **Automatic Writing Machine** (3-axis CNC plotter, Arduino Nano, GRBL, NEMA 17 steppers, custom TTF font generation).
  4. **AI-Based Healthcare Assistance Robot** (Raspberry Pi, OpenCV pill identification, continuous servo rotary dispenser, ultrasonic obstacle avoidance).
  5. **Custom Variable Bench Power Supply** (SMPS 24V 10A, XL4016 buck converter, dual LED V/A meter, LC ripple filtering).
  6. **8-Channel RF Universal Remote Control** (HT12E/HT12D encoder/decoder ICs, 433MHz ASK RF modules, ULN2003 relay drivers).
  7. **Custom PCB Design & Fabrication** (Ferric Chloride FeCl3 chemical bath etching, toner transfer, IRFZ44N MOSFET H-bridge motor drivers, 555 PWM).
  8. **Automated AI Short Reel Generator** (Python, LLM script generation, gTTS audio, FFmpeg vertical video rendering).
- **`LAB_TOOLS`**: Lab equipment list (Soldering Station, Digital Oscilloscope, Bench Power Supply, Multimeter, KiCad, Raspberry Pi, etc.).
- **`ACHIEVEMENTS_STATS`**: Highlights (97% Diploma score, 8+ Hardware projects, 10+ PCBs etched, 500+ Lab prototyping hours).

#### `lib/audio.ts`
- Implements a pure Web Audio API sound synthesis class: `SoundManager`.
- Initialized lazily on first user interaction to comply with modern browser autoplay policies.
- Synthesizes 4 distinct procedural hardware sound effects:
  1. **`playRelayClick()`**: Creates a 30ms mechanical relay click using a square oscillator frequency-swept from 800Hz down to 120Hz with an exponential gain falloff.
  2. **`playHoverBeep()`**: Creates a crisp 50ms sci-fi hover chirp using a sine oscillator rising from 1200Hz to 2400Hz.
  3. **`playSpark()`**: Synthesizes a realistic electrical soldering spark by generating an in-memory random white noise buffer passed through a high-pass filter at 3000Hz.
  4. **`playPowerUp()`**: Simulates a motherboard booting up with a 600ms sawtooth wave ascending from 80Hz to 880Hz.
- Includes global mute state toggle (`toggleMute()` / `getMuted()`) remembered across interactions.

---

### 4. 3D Canvas & WebGL Components (`components/3d/`)

#### `components/3d/LabCanvas.tsx`
- The centerpiece WebGL engine running full-screen in the background (`fixed inset-0 z-0 pointer-events-none opacity-60`).
- Built directly with native Three.js for maximum performance, procedural flexibility, and zero overhead:
  - **Camera & Lighting**: Perspective camera, ambient light, electric cyan key light, deep purple fill light, and copper metallic rim light.
  - **FR4 PCB Substrate**: Realistic dark emerald green substrate (`0x052e24`) with metallic copper trace rings.
  - **Procedural ATmega32U4 QFP-44 Texture**: Dynamically draws a 1024x1024 canvas texture with matte epoxy resin grain, Pin-1 circular orientation indentation, ATMEL logo, and laser-etched markings (`MEGA32U4 -AU`, `1035E KR`, `0G3455`).
  - **44 Gull-Wing Gold Pins**: Programmatically constructs 44 individual 3-part gull-wing pins (stem, angled leg, and foot resting on PCB pads) with metallic gold materials (`0xffd700`) and emissive accents.
  - **Passives & Active Silicon**: Dual electrolytic capacitors with aluminum top discs, a toroidal copper inductor coil, a metallic crystal oscillator can, and pulsing status LEDs.
  - **Electron Particle Cloud**: 180 floating electron particles drifting in 3D coordinate space.
  - **Interactive Dynamics**: Real-time mouse parallax smoothing, gentle sinusoidal floating motion, and window resize listeners.

#### `components/3d/InteractivePcb.tsx`
- An alternative React Three Fiber (`@react-three/fiber`) implementation of an interactive PCB board with particle traces and capacitors for modular canvas rendering.

#### `components/3d/ElectronicsObjects.tsx`
- Provides individual reusable React Three Fiber 3D meshes:
  - `<FloatingResistor />`: Capsule body with color-coded resistor bands (red, yellow, cyan) revolving smoothly.
  - `<FloatingIcChip />`: DIP IC chip with metallic pins on both flanks.
  - `<FloatingOscillator />`: Metallic HC-49 style crystal oscillator mesh.

---

### 5. Page Sections (`components/sections/`)

#### `components/sections/IntroSequence.tsx`
- An engaging 4-stage interactive assembly storyboard welcoming the visitor:
  1. *Step 1*: Initializing copper-clad board & circuit outline.
  2. *Step 2*: Routing animated SVG copper traces with hover beeps.
  3. *Step 3*: Soldering iron descent with animated ping spark effects at 350°C.
  4. *Step 4*: Full motherboard power-up with audio sweep and status signal (`CIRCUIT ONLINE • ALL SYSTEMS NOMINAL`).
- Auto-advances or transitions smoothly into the main website upon completion.

#### `components/sections/Navbar.tsx`
- Sticky HUD header (`fixed top-0 left-0 right-0 z-40`).
- Changes from transparent to glassmorphic dark backdrop (`bg-black/70 backdrop-blur-md`) upon scrolling past 40px.
- Highlights active section based on scroll position (`about`, `skills`, `experience`, `projects`, `workbench`, `education`, `contact`).
- Contains:
  - System status readout (`SYSTEM ONLINE • 5.0V BUS`).
  - Sound effect toggle button `<AudioControl />`.
  - Direct resume download button triggering spark sound effects.

#### `components/sections/HeroSection.tsx`
- Dual-column hero layout with radial cyan and purple glow orbs.
- **Dynamic Typist Subtitle**: Automatically cycles character-by-character through Rohith's roles (*Electronics Engineer*, *Embedded Systems Developer*, *PCB Designer*, *IoT Developer*, *AI Automation Engineer*, *Hardware Innovator*).
- Direct call-to-actions: "Download Resume", GitHub link, and LinkedIn profile link.
- Hardware scholar badge with animated spinning CPU icon.

#### `components/sections/AboutSection.tsx`
- Breaks down Rohith's core engineering philosophy: merging solid-state electronics with embedded intelligence.
- Displays career objective, personal bio, geographic location badge, and multilingual proficiency (English, Telugu, Hindi).
- Includes academic quick-glance cards and personal interests (Gym, Gaming, AI tools, Cybersecurity).
- Decorated with floating custom resistor and IC chip SVGs.

#### `components/sections/SkillsSection.tsx`
- Renders the 6 skill categories from `lib/data.ts` in an intuitive 3-column responsive grid.
- Each skill features an animated Framer Motion progress bar with percentage indicator and detailed subtitle (e.g. pointer arithmetic, memory mapping, ground planes, LC filters).
- Color-coded glowing borders (cyan, purple, copper).

#### `components/sections/ExperienceSection.tsx`
- Features a vertical dashed PCB trace timeline with glowing circular solder nodes.
- Highlights Rohith's industrial manufacturing internship at **Avishkaran Industry Pvt. Ltd.** in Hyderabad.
- Details hands-on contributions: Bluetooth sound bars, TWS earbuds, SMD soldering inspection, production line workflows, and functional testing.

#### `components/sections/ProjectsSection.tsx`
- Presents the 8 hardware, robotics, IoT, and AI projects.
- **Category Filter Bar**: Filter by *ALL*, *IoT*, *Robotics / AI*, *Hardware / PCB*, *Embedded Systems*, and *Software AI*.
- Each project card features:
  - Real project image preview with fallback SVG circuit artwork.
  - Category badge tag.
  - Subtitle and descriptive summary.
  - Interactive "View Schematics & Specs" button that opens `<ProjectModal />`.

#### `components/sections/LabWorkbenchSection.tsx`
- **Interactive Digital Oscilloscope**:
  - Live SVG waveform rendering.
  - Toggle between **Sine**, **Square**, and **PWM** waveforms.
  - Real-time sliders for **Frequency** (1 Hz to 20 Hz) and **Amplitude** (1V to 24V).
  - Authentic CRT grid overlay, frequency counter, Vpp telemetry, and channel indicators.
- **Variable Bench Power Supply Simulator**:
  - Interactive voltage control slider adjusting from 1.25V to 24.0V DC.
  - Real-time calculation of output current (Amperes) and active power (Watts) based on simulated load impedance.
  - Real-time digital dual 7-segment volt/amp display simulation.

#### `components/sections/EducationSection.tsx`
- Copper-trace timeline connecting Rohith's academic history.
- Displays B.Tech Scholar status at PVPSIT, the 97% distinction at Dhanekula Institute of Engineering and Technology, and high school credentials with distinction badges.

#### `components/sections/AchievementsSection.tsx`
- High-impact numerical stat cards:
  - `97%` – Diploma ECE Score (SBTET Distinction)
  - `8+` – Hardware Projects Completed
  - `10+` – Custom PCBs Etched
  - `500+` – Prototyping & Soldering Lab Hours

#### `components/sections/ContactSection.tsx`
- Direct contact cards for Email (`papanarohith45@gmail.com`), Phone (`+91 8309943166`), Location, and Socials.
- Interactive signal transmission form (Name, Email, Message):
  - Sends a `POST` request to `/api/contact`.
  - Features an automatic `mailto:` protocol fallback if the server is offline or unconfigured, ensuring no message is ever lost.
  - Triggers soldering spark sound effect on submit.

#### `components/sections/FooterEnding.tsx`
- Closes the application with an interactive Master Processor Core card.
- Clicking the central CPU triggers a high-voltage motherboard power-up sequence with cyan overload illumination and sound effects.
- Includes copyright notice and an animated "Return to Hero Top" smooth-scroll button.

---

### 6. UI Components & Utilities (`components/ui/`)

#### `components/ui/GlassCard.tsx`
- Core building block for cards across all sections.
- Computes real-time 3D perspective mouse tilt (`rotateX`, `rotateY`) and dynamically shifts a glossy radial sheen reflecting light based on mouse position.
- Emits hover audio chirps and mechanical relay click audio upon selection.
- Accepts configurable glow borders: `'cyan' | 'blue' | 'purple' | 'copper'`.

#### `components/ui/ProjectModal.tsx`
- Deep-dive popup modal displaying full engineering specifications for a selected project:
  - Architectural flowchart block diagram.
  - Step-by-step engineering workflow.
  - Engineering hurdles encountered and solutions applied.
  - Complete technical specifications table (Microcontrollers, sensors, motors, chassis material, communication protocols).
  - Direct links to project code repository.

#### `components/ui/ElectronicsIcons.tsx`
- Hand-crafted SVG electronic component icons with glowing drop-shadow filters:
  - `<ResistorIcon />`: Axial lead resistor with color bands.
  - `<CapacitorIcon />`: Dual-plate capacitor symbol.
  - `<IcChipIcon />`: Quad IC chip package with notch and pins.
  - `<TransistorIcon />`: NPN bipolar junction transistor diagram.
  - `<OscilloscopeWaveIcon />`: Oscilloscope screen with grid and sine cycle.
  - `<SolderingIronIcon />`: Soldering iron tip with spark ping.

#### `components/ui/AudioControl.tsx`
- Floating button allowing users to mute or unmute the Web Audio synthesizer.
- Shows dynamic animated state (`AUDIO: ACTIVE` with pulsing icon vs `AUDIO: OFF`).

#### `components/ui/CursorGlow.tsx`
- Subtle, high-performance mouse-following ambient cyan illumination (`radial-gradient`) giving depth to the dark UI.

---

### 7. Static Assets (`public/`)

- **`public/resume.pdf`**: Direct copy of Rohith Papana's resume for in-browser PDF viewing and instant downloads.
- **`public/images/`**: High-resolution photography and graphic illustrations for each portfolio project:
  - `project_combat_robot.png`: BattleBull combat robot.
  - `project_writing_machine.png`: Automatic writing machine plotter.
  - `project_healthcare_robot.png`: AI Healthcare assistance robot.
  - `project_iot_audio.png`: IoT announcement system.
  - `project_power_supply.png`: Bench power supply.
  - `project_rf_remote.png`: 8-channel RF remote.
  - `project_custom_pcb.png`: Etched copper-clad PCB board.
  - `project_ai_reel.png`: Automated reel pipeline output.

---

### 8. Type Definitions (`types/`)

#### `types/react-three-fiber.d.ts`
- Augments TypeScript's `JSX.IntrinsicElements` and React's namespace with Three.js elements (`mesh`, `boxGeometry`, `group`, `meshStandardMaterial`, etc.) ensuring seamless compilation with React 19 and `@react-three/fiber`.

---

## ⚡ Feature Highlights & Engineering Mechanics

### Procedural 3D PCB & ATmega32U4 Microcontroller
Rather than loading heavy, slow-loading external GLTF/OBJ 3D files (which can cause texture pop-in or 404 network errors), the entire 3D PCB scene in `LabCanvas.tsx` is **procedurally constructed** using pure Three.js primitives:
1. An HTML Canvas element generates the 1024x1024 high-resolution top texture with procedural epoxy noise, Atmel brand typography, and orientation dots.
2. 44 individual gull-wing pin assemblies are computed trigonometrically with metallic gold material shaders.
3. Capacitors, toroidal coils, and crystal oscillators are constructed using cylinder, torus, and box geometries.
4. The scene responds dynamically to mouse movement using smooth mathematical lerping.

### Zero-Asset Web Audio API Sound Synthesizer
The portfolio contains an embedded synthesizer in `lib/audio.ts`:
- **No external audio files needed**: Zero HTTP requests, zero loading lag, and zero broken links.
- Uses browser-native `AudioContext` with square, sine, and sawtooth `OscillatorNode` instances, exponential gain automation ramps, and filtered white noise buffers.
- Synthesizes realistic hardware audio: mechanical relays, electrical sparks, and power-up sweeps.

### Interactive Virtual Test Bench (Oscilloscope & PSU)
Visitors can interact directly with simulated test instruments in `LabWorkbenchSection.tsx`:
- Change waveform types (Sine, Square, Pulse Width Modulation).
- Adjust frequency and amplitude to see the SVG vector waveform update in real time.
- Simulate an adjustable bench power supply from 1.25V to 24V DC, watching voltage, current, and wattage meters respond to the selected rail.

### Dynamic Glassmorphic Cards with 3D Tilt Physics
Every card wrapped in `<GlassCard />` computes the pointer offset from the card's center:
$$\text{rotateX} = \frac{y - y_{\text{center}}}{y_{\text{center}}} \times (-6^\circ)$$
$$\text{rotateY} = \frac{x - x_{\text{center}}}{x_{\text{center}}} \times (6^\circ)$$
This creates a realistic 3D tactile card tilt accompanied by a moving radial gloss reflection.

### Dual-Layer Contact Transmission Engine
The contact form in `ContactSection.tsx` employs a resilient two-tier architecture:
1. **Tier 1 (Nodemailer API)**: Submits form data to `/api/contact` via HTTP POST, delivering a formatted email directly to Rohith's inbox.
2. **Tier 2 (Mailto Fallback)**: If the server is in a static hosting environment or environment variables are not yet configured, the system automatically redirects to an encoded `mailto:` link pre-filled with the user's name, email, and payload. This guarantees that messages are never lost.

---

## 🚀 Setup, Run & Development Guide

### Prerequisites
- **Node.js**: Version `18.18.0` or higher (Node 20+ recommended).
- **Package Manager**: `npm` (comes with Node.js) or `pnpm` / `yarn`.

### 1. Clone or Open Workspace
```bash
cd c:\Users\papan\Downloads\profile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive application.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 🔐 Environment Variables

To enable the direct SMTP email feature in the contact form, create a `.env.local` file in the root directory:

```env
# Gmail SMTP Configuration for Contact Form
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **Note**: For Gmail, generate an **App Password** from your Google Account settings (*Security > 2-Step Verification > App passwords*). If these environment variables are omitted, the contact form will automatically utilize the client-side `mailto:` fallback.

---

## 📄 License & Attribution

- **Creator & Owner**: Rohith Papana
- **Email**: `papanarohith45@gmail.com`
- **Portfolio Repository**: Private / Personal Use
- **All Rights Reserved** © 2026 Rohith Papana
