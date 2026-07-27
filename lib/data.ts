export interface Project {
  id: string;
  title: string;
  category: 'IoT' | 'Robotics / AI' | 'Hardware / PCB' | 'Embedded Systems' | 'Software AI';
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  circuitDiagramUrl?: string;
  modalDetails: {
    architecture: string;
    workflow: string[];
    challenges: string;
    solutions: string;
    specs: Record<string, string>;
  };
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon: string;
    detail: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "ROHITH PAPANA",
  title: "Electronics & Communication Engineer",
  roles: [
    "Electronics Engineer",
    "Embedded Systems Developer",
    "PCB Designer",
    "IoT Developer",
    "AI Automation Engineer",
    "Hardware Innovator"
  ],
  contact: {
    email: "papanarohith45@gmail.com",
    phone: "+91 8309943166",
    location: "Andhra Pradesh, India",
    github: "https://github.com/Prohith45",
    linkedin: "https://www.linkedin.com/in/rohith-papana-3b0596425",
  },
  objective: "To gain practical experience in a real working environment where I can apply my knowledge of electronics, embedded systems, PCB design, and programming, while continuously learning and contributing to organizational growth.",
  about: `Passionate Electronics & Communication Engineer specializing in physical hardware design, custom PCB etching, microcontroller firmware development, and AI-powered robotics. Experienced in prototyping, high-frequency RF transmission, power electronics, and real-time embedded software.`,
  languages: ["English", "Telugu", "Hindi"],
  interests: ["Electronics Prototyping", "AI & Computer Vision Tools", "Cybersecurity Research", "Gym & Fitness", "Gaming & Outdoor Sports"]
};

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech) – Electronics & Communication Engineering",
    institution: "Prasada V. Potluri Siddhartha Institute of Technology (PVPSIT)",
    affiliation: "Autonomous, affiliated to JNTUK",
    status: "Pursuing",
    score: "Active B.Tech Scholar",
    year: "Present",
    color: "#00f0ff"
  },
  {
    degree: "Diploma – Electronics & Communication Engineering (ECE)",
    institution: "Dhanekula Institute of Engineering and Technology",
    affiliation: "State Board of Technical Education and Training (SBTET)",
    status: "Completed",
    score: "97% (Distinction)",
    year: "2025",
    color: "#7928CA"
  },
  {
    degree: "SSC (10th Class)",
    institution: "SLM Chaithanya High School",
    affiliation: "State Board (SSC)",
    status: "Completed",
    score: "84%",
    year: "2022",
    color: "#ff9d00"
  }
];

export const EXPERIENCE = [
  {
    company: "Avishkaran Industry Pvt. Ltd.",
    location: "Hyderabad, India",
    role: "Intern – Bluetooth Device Manufacturing",
    period: "Internship",
    description: "Hands-on industrial manufacturing experience in high-volume consumer electronics production, SMD component testing, and quality control.",
    highlights: [
      "Assembled and tested commercial Bluetooth devices including sound bars, mini speakers, TWS earbuds, and neckbands.",
      "Gained hands-on experience with electronic component inspection, production workflows, and SMD soldering quality control.",
      "Mastered functional debugging and line testing procedures for wireless audio products."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming & Software",
    icon: "code",
    description: "Core algorithms, micro-architecture control, & automation scripts",
    skills: [
      { name: "C / Embedded C", level: 92, icon: "cpu", detail: "Pointer arithmetic, register control, memory mapping" },
      { name: "Python", level: 88, icon: "terminal", detail: "Flask, OpenCV, gTTS, automation scripts" },
      { name: "Data Structures", level: 82, icon: "git-branch", detail: "Logic design & computational efficiency" }
    ]
  },
  {
    category: "Embedded Systems & MCUs",
    icon: "microchip",
    description: "Microcontroller programming & sensor-actuator interfacing",
    skills: [
      { name: "Arduino (UNO / Nano)", level: 95, icon: "cpu", detail: "PWM, SPI, I2C, UART protocol implementation" },
      { name: "Raspberry Pi (Zero W2)", level: 90, icon: "server", detail: "Linux kernel SBC setup, Headless Flask server" },
      { name: "ESP32 & STM32", level: 85, icon: "wifi", detail: "Dual-core processing, Wi-Fi/BLE IoT stack" }
    ]
  },
  {
    category: "PCB Design & Fabrication",
    icon: "layers",
    description: "Schematic design, trace routing, & physical copper etching",
    skills: [
      { name: "Schematic Capture", level: 92, icon: "file-code", detail: "Circuit topology & footprint design" },
      { name: "PCB Layout & Routing", level: 90, icon: "grid", detail: "Ground planes, power traces, signal integrity" },
      { name: "Copper Clad Fabrication", level: 95, icon: "zap", detail: "Etching, drilling, SMD & THT hand soldering" },
      { name: "Motor & PWM Drivers", level: 88, icon: "settings", detail: "MOSFET H-Bridges, optocouplers, speed control" }
    ]
  },
  {
    category: "Electronics & Hardware Lab",
    icon: "activity",
    description: "Component level testing, measurement, & prototyping",
    skills: [
      { name: "Circuit Analysis", level: 94, icon: "activity", detail: "Ohm's Law, Kirchhoff's Laws, transient analysis" },
      { name: "Assembly & Soldering", level: 96, icon: "flame", detail: "Soldering iron, hot air rework, solder flux" },
      { name: "Troubleshooting", level: 92, icon: "tool", detail: "Oscilloscope, Digital Multimeter signal trace" },
      { name: "Breadboard Prototyping", level: 96, icon: "layout", detail: "Rapid schematic validation & component testing" }
    ]
  },
  {
    category: "IoT & Wireless Modules",
    icon: "radio",
    description: "RF telemetry, Bluetooth audio, & cloud sensor nodes",
    skills: [
      { name: "RF Transceivers (433MHz)", level: 90, icon: "radio", detail: "HT12E/HT12D encoder/decoder IC pairs" },
      { name: "Bluetooth Audio & BLE", level: 88, icon: "bluetooth", detail: "TWS profiles, audio streaming, serial comms" },
      { name: "Sensors & Actuators", level: 92, icon: "disc", detail: "Ultrasonic, PIR, Camera, Motors, Relays" }
    ]
  },
  {
    category: "AI & Automation",
    icon: "bot",
    description: "Robotics computer vision, text-to-speech, & media pipelines",
    skills: [
      { name: "Computer Vision & gTTS", level: 85, icon: "eye", detail: "Visual medicine recognition & voice synthesis" },
      { name: "AI Automation Pipelines", level: 88, icon: "sparkles", detail: "Automated video reel generation & editing" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "battlebull-combat-robot",
    title: "BattleBull – Horizontal Spinner Combat Robot",
    category: "Robotics / AI",
    subtitle: "Custom 4WD Combat Robot with Belt-Driven Weapon",
    description: "Designed and fabricated a custom 4-wheel-drive combat robot featuring a belt-driven horizontal spinner weapon, welded steel chassis, 555 metal geared motors, and ESP32 wireless control.",
    techStack: ["ESP32", "Welded Steel Chassis", "Horizontal Spinner Weapon", "555 Geared Motors", "H-Bridge Drivers", "Belt & Pulley Transmission", "Wireless Control"],
    features: [
      "Welded steel square-tubing chassis with external bearing-supported belt-driven spinner weapon",
      "4WD drivetrain powered by 555 metal geared motors with isolated dual power architecture",
      "ESP32-based wireless remote control with high-current H-bridge motor drivers",
      "Integrated safety weapon arming system and emergency power disconnect"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_combat_robot.png",
    modalDetails: {
      architecture: "ESP32 Controller (Wireless Receiver) → H-Bridge Motor Drivers & High-Current FETs → 4WD Geared Motors & Belt-Driven Horizontal Spinner → External Bearing System & Dual Power Architecture",
      workflow: [
        "Designed and fabricated a custom steel chassis using welded square tubing for max structural rigidity",
        "Engineered a high-speed belt-driven horizontal spinner weapon with external bearing support to handle impact loads",
        "Implemented a 4-wheel-drive drivetrain using 555 metal geared motors and independent H-bridge drivers",
        "Configured dual isolated power rails for weapon and drive motors to eliminate MCU voltage sags",
        "Programmed ESP32 firmware for low-latency wireless control, safety arming switch, and emergency shutdown"
      ],
      challenges: "Vibration recoil from high-speed weapon impacts causing electrical power spikes and MCU resets.",
      solutions: "Designed dual isolated power buses, added external bearing blocks to absorb kinetic shock, and programmed soft-start throttle ramps.",
      specs: {
        "Chassis": "Welded Steel Square Tubing",
        "Drivetrain": "4WD with 555 Metal Geared Motors",
        "Weapon System": "Belt-Driven Horizontal Spinner",
        "Control MCU": "ESP32 Wireless Receiver",
        "Power Architecture": "Dual Isolated Battery & Rail System"
      }
    }
  },
  {
    id: "iot-audio-system",
    title: "IoT-Based Audio Announcement System",
    category: "IoT",
    subtitle: "Diploma Final Year Flagship Project",
    description: "A real-time smart institutional broadcast system powered by Raspberry Pi Zero W2, Flask backend, Google Text-to-Speech engine, and custom MIT App Inventor interface over Bluetooth.",
    techStack: ["Raspberry Pi Zero W2", "Python", "Flask", "gTTS Engine", "MIT App Inventor", "Bluetooth Audio"],
    features: [
      "Real-time voice announcement synthesis from mobile app text inputs",
      "Wireless Bluetooth audio streaming to high-output speakers",
      "Hosted Flask HTTP server handling zero-latency queue management",
      "Ideal for educational campus broadcasts and emergency alerts"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_iot_audio.png",
    modalDetails: {
      architecture: "Mobile App (Text Input) → Bluetooth / Local Network → Raspberry Pi Zero W2 (Flask Server + gTTS) → Audio DAC → Power Amplifier → Loudspeakers",
      workflow: [
        "User inputs announcement text or selects pre-stored template in mobile app",
        "App sends request packet over local network/Bluetooth to Raspberry Pi",
        "Flask API receives string and passes to gTTS to synthesize dynamic MP3 payload",
        "Pi routes digital audio stream to paired Bluetooth audio receiver for clear output"
      ],
      challenges: "Elimination of audio latency and network dropouts on headless single-board computer.",
      solutions: "Implemented local caching for frequent alerts and direct ALSA bluetooth driver binding.",
      specs: {
        "Microcontroller": "Raspberry Pi Zero W2 (Quad-core 64-bit ARM)",
        "Server Framework": "Flask / Python 3.10",
        "TTS Engine": "Google Text-to-Speech (gTTS)",
        "Audio Protocol": "A2DP Bluetooth Profile"
      }
    }
  },
  {
    id: "cnc-writing-machine",
    title: "Automatic Writing Machine",
    category: "Robotics / AI",
    subtitle: "Handwriting Replication System",
    description: "A 3-axis CNC pen plotter integrated with a custom font conversion pipeline that translates human handwriting samples (A-Z, 0-9) into physical written notes and diagrams.",
    techStack: ["CNC Shield", "Stepper Motors", "Arduino Nano", "GRBL / G-Code", "Custom Web Interface", "Python Font Generator"],
    features: [
      "Converts scanned handwriting samples into custom vector TTF fonts",
      "Web interface for drag-and-drop document upload",
      "High-precision dual NEMA stepper motors and servo pen lifter",
      "Automates note writing, signatures, and technical schematic drawing"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_writing_machine.png",
    modalDetails: {
      architecture: "User Text Upload → Web App Font Vectorizer → G-Code Converter → Serial Port → Arduino Nano (GRBL) → CNC Shield & A4988 Drivers → Stepper Motors & Pen Servo",
      workflow: [
        "User uploads text and selects target handwriting font profile",
        "Python backend vectorizes character strokes and calculates G-code coordinates",
        "G-code streamer feeds coordinate pulses to Arduino Nano running GRBL firmware",
        "Stepper motors move X/Y axes while micro servo actuates Z-axis pen height"
      ],
      challenges: "Achieving natural fluid stroke pressure and preventing paper tearing during fast vector turns.",
      solutions: "Calibrated micro-stepping timing, acceleration curves, and spring-loaded pen holder.",
      specs: {
        "Motors": "2x NEMA 17 Steppers + 1x SG90 Servo",
        "Driver Board": "CNC Shield v3 + A4988 Motor Drivers",
        "Controller": "Arduino Nano (ATmega328P)",
        "Firmware": "GRBL v1.1"
      }
    }
  },
  {
    id: "ai-healthcare-robot",
    title: "AI-Based Healthcare Assistance Robot",
    category: "Robotics / AI",
    subtitle: "Smart Automated Medical Assistant",
    description: "Autonomous healthcare robot equipped with a rotating medicine carousel, camera-based visual prescription identifier, obstacle navigation, and scheduled patient monitoring.",
    techStack: ["Raspberry Pi", "Arduino", "Camera Module", "OpenCV", "Stepper Motors", "Ultrasonic Sensors", "GSM / Voice Module"],
    features: [
      "Prescription-scheduled revolving compartment medicine dispenser",
      "Computer vision medicine packaging identification",
      "Autonomous room navigation and obstacle avoidance system",
      "Patient presence detection & emergency alert triggering"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_healthcare_robot.png",
    modalDetails: {
      architecture: "Prescription Timer & Camera Input → Raspberry Pi Vision Node → Arduino Motion Subsystem → Rotating Servo Dispenser → Speaker & GSM Alert Module",
      workflow: [
        "Internal RTC triggers scheduled medication alarm time",
        "Robot navigates to patient bed using ultrasonic array and floor line tracking",
        "Camera inspects pill package barcode/text via OpenCV to verify correct medicine",
        "Servo rotates container slot to drop medication pill and delivers audio instructions"
      ],
      challenges: "Ensuring 100% accuracy in medicine verification before patient delivery.",
      solutions: "Combined dual-step optical character recognition (OCR) with barcode match validation.",
      specs: {
        "Main Computer": "Raspberry Pi 4 / OpenCV",
        "Chassis Motor": "DC Gear Motors with L298N Driver",
        "Dispenser": "360° Continuous Servo Rotary Carousel",
        "Safety Sensors": "HC-SR04 Ultrasonic Array"
      }
    }
  },
  {
    id: "bench-power-supply",
    title: "Custom Variable Bench Power Supply",
    category: "Hardware / PCB",
    subtitle: "Precision Electronics Lab Equipment",
    description: "Custom-built dual-rail laboratory power supply incorporating industrial SMPS conversion, step-down buck modules, voltage/current limiters, and digital voltmeter telemetry.",
    techStack: ["Industrial SMPS", "Buck Converter Modules", "Digital Voltmeter / Ammeter", "Heat Sinks & Cooling Fan", "Potentiometers"],
    features: [
      "Adjustable voltage output (1.25V – 24V) with fine current limiting control",
      "Short-circuit and thermal overload protection circuits",
      "Dual digital LED display for real-time V/I monitoring",
      "Essential workshop tool for testing microcontrollers, ICs, and motor loads"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_power_supply.png",
    modalDetails: {
      architecture: "230V AC Mains → SMPS (24V 10A DC) → XL4016 High-Power Buck Converter → Fine Potentiometer Control → Dual V/A Meter → Banana Jack Outputs",
      workflow: [
        "AC mains converted to regulated high-amperage 24V DC bus via SMPS",
        "Buck converter steps down voltage precisely using multi-turn precision potentiometers",
        "Voltage and current sense shunts feed real-time digital panel meter",
        "Outputs wired through heavy-duty binding posts with active cooling fan thermal management"
      ],
      challenges: "Suppressing high-frequency switching ripple during sensitive RF and analog testing.",
      solutions: "Added secondary LC filter stages and high-capacity low-ESR electrolytic smoothing capacitors.",
      specs: {
        "Input": "230V AC / 50Hz",
        "Output Voltage": "1.25V – 24V DC Adjustable",
        "Output Current": "0A – 8A Max Limit",
        "Display": "0.28\" Dual LED Red/Blue Volt-Amp Meter"
      }
    }
  },
  {
    id: "rf-universal-remote",
    title: "8-Channel RF Universal Remote Control",
    category: "Embedded Systems",
    subtitle: "Long-Range Wireless Relay Controller",
    description: "8-channel wireless radio-frequency remote control transmitter and receiver circuit built using HT12E encoder, HT12D decoder pair, and 433 MHz RF ASK transceivers.",
    techStack: ["HT12E Encoder IC", "HT12D Decoder IC", "433 MHz RF Modules", "Relay Driver Board", "Push Buttons"],
    features: [
      "8 discrete command channels for remote load switching",
      "High reliability line-of-sight RF transmission up to 100 meters",
      "Hardware address pin matching to eliminate crosstalk interference",
      "Zero microcontroller reliance for ultra-fast instantaneous relay trigger"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_rf_remote.png",
    modalDetails: {
      architecture: "8-Channel Keypad → HT12E Encoder IC (Parallel-to-Serial Data) → 433MHz RF Transmitter → Airwave → 433MHz Receiver → HT12D Decoder IC → ULN2003 Relay Driver → Loads",
      workflow: [
        "Button press pulls HT12E input pin LOW",
        "HT12E combines 8-bit address and 4-bit data into serial RF frame",
        "Transmitter modulates 433MHz carrier wave",
        "Receiver demodulates signal, HT12D verifies address code and activates target relay output"
      ],
      challenges: "Interference from external 433MHz ambient noise causing relay jitter.",
      solutions: "Configured unique 8-bit DIP switch address codes and added decoupling capacitors across receiver IC VCC.",
      specs: {
        "Carrier Frequency": "433.92 MHz",
        "Encoder/Decoder": "Holtek HT12E & HT12D ICs",
        "Range": "Up to 100 Meters",
        "Channel Count": "8 Independent Digital Channels"
      }
    }
  },
  {
    id: "custom-pcb-design",
    title: "Custom PCB Design & Fabrication",
    category: "Hardware / PCB",
    subtitle: "Copper-Clad Etching & Motor Drivers",
    description: "Hands-on design, chemical etching, drilling, and testing of custom single and dual-layer printed circuit boards including H-Bridge MOSFET high-current motor drivers and PWM speed controllers.",
    techStack: ["KiCad Schematics", "Copper Clad Boards", "Ferric Chloride Etchant", "IRFZ44N MOSFETs", "555 Timer PWM", "Drill Press"],
    features: [
      "Custom single-sided copper PCB layout and routing",
      "Etched using Ferric Chloride (FeCl3) and toner transfer technique",
      "Built high-efficiency H-Bridge MOSFET drivers for heavy DC motor rotation",
      "Integrated 555-Timer based high-frequency PWM speed regulation"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_custom_pcb.png",
    modalDetails: {
      architecture: "Schematic Entry → PCB Layout & Track Sizing → Laser Print Toner Transfer → FeCl3 Chemical Bath Etching → Hand Drilling → Component Soldering → Load Test",
      workflow: [
        "Circuit designed in schematic editor with wide copper traces for motor current",
        "Artwork transferred onto polished copper-clad fiberglass board using thermal press",
        "Board immersed in ferric chloride solution to dissolve unmasked copper",
        "Drilled component holes, applied solder flux, and populated components with soldering iron"
      ],
      challenges: "Preventing trace bridging on tight-pitch IC pads during chemical etching.",
      solutions: "Optimized track clearances, toner transfer temperature, and post-etch microscope inspection.",
      specs: {
        "Board Substrate": "FR4 Single-Sided Copper Clad",
        "Etchant": "Ferric Chloride (FeCl3) Solution",
        "Key Components": "IRFZ44N Power MOSFETs, 555 Timer, Diodes",
        "Application": "High-Current Motor Driver & Speed Control"
      }
    }
  },
  {
    id: "ai-reel-generator",
    title: "Automated AI Short Reel Generator",
    category: "Software AI",
    subtitle: "Autonomous Video Creation Pipeline",
    description: "An automated media generation script that takes a single text topic input, generates a script, synthesizes voiceovers, fetches stock visual clips, and renders short 1-2 minute reels.",
    techStack: ["Python", "OpenAI / LLM API", "FFmpeg", "MoviePy", "TTS API"],
    features: [
      "Zero-touch short script writing tailored for engaging social clips",
      "Automatic audio voiceover generation and subtitle synchronization",
      "FFmpeg hardware-accelerated video rendering and vertical formatting (9:16)",
      "Automates content creation workflows for educational tech topics"
    ],
    githubUrl: "https://github.com/Prohith45",
    image: "/images/project_ai_reel.png",
    modalDetails: {
      architecture: "Topic Input → LLM Script Generator → Text-to-Speech API → Stock Asset Fetcher → FFmpeg Video Assembly Engine → Final MP4 Reel",
      workflow: [
        "User inputs core topic (e.g. 'How 555 Timer Works')",
        "Script generator outputs structured voiceover script and keyframe cues",
        "TTS synthesizes narration audio file while media engine gathers matching visual overlays",
        "FFmpeg overlays animated captions and exports 1080x1920 short video reel"
      ],
      challenges: "Synchronizing dynamic word-level subtitles perfectly with spoken audio timing.",
      solutions: "Utilized whisper timestamp output alignment to burn precise SRT subtitle tracks into video.",
      specs: {
        "Language": "Python 3.11",
        "Video Core": "FFmpeg / MoviePy",
        "Resolution": "1080x1920 (Vertical 9:16)",
        "Execution": "Automated CLI Batch Pipeline"
      }
    }
  }
];

export const LAB_TOOLS = [
  { name: "Soldering Station", icon: "flame", desc: "Temperature Controlled SMD/THT Iron" },
  { name: "Digital Oscilloscope", icon: "activity", desc: "Dual Channel Waveform Analyzer" },
  { name: "Bench Power Supply", icon: "zap", desc: "0-24V Variable Current Limited DC Source" },
  { name: "Digital Multimeter", icon: "gauge", desc: "True-RMS Voltage, Resistance & Continuity" },
  { name: "KiCad & Altium", icon: "layers", desc: "PCB Schematic Capture & Layout Design" },
  { name: "Arduino IDE & VS Code", icon: "code", desc: "Firmware Compilation & Python Toolchain" },
  { name: "Raspberry Pi & Linux", icon: "server", desc: "Single Board Computer OS & Server Setup" },
  { name: "Ferric Chloride Bath", icon: "droplet", desc: "Chemical Copper Etching & Drilling Station" }
];

export const ACHIEVEMENTS_STATS = [
  { label: "Diploma ECE Score", value: "97%", subtext: "SBTET Distinction", icon: "award" },
  { label: "Hardware Projects", value: "8+", subtext: "IoT, Combat Robots & AI Systems", icon: "cpu" },
  { label: "Custom PCBs Etched", value: "10+", subtext: "Single & Dual Layer Boards", icon: "layers" },
  { label: "Lab Prototyping Hours", value: "500+", subtext: "Soldering, Testing & Debugging", icon: "clock" },
];
