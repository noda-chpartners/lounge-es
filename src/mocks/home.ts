export const heroStats = [
  { value: "27+", label: "Years of precision manufacturing" },
  { value: "4.2M", label: "Boards shipped worldwide" },
  { value: "ISO 9001", label: "IATF 16949 · AS9100D certified" },
  { value: "<2ppm", label: "Field defect rate" },
];

export const capabilities = [
  {
    code: "01",
    title: "Multilayer PCB Fabrication",
    description:
      "Up to 32 layers, HDI builds, blind & buried vias, controlled impedance for high-speed digital and RF.",
    icon: "ri-stack-line",
  },
  {
    code: "02",
    title: "SMT & Mixed Assembly",
    description:
      "Lead-free SMT, fine-pitch BGA, 01005 placement and selective wave soldering in a Class 7 cleanroom.",
    icon: "ri-cpu-line",
  },
  {
    code: "03",
    title: "DFM & Engineering",
    description:
      "Design for manufacturability and reliability with our in-house engineers — from netlist to flight-ready.",
    icon: "ri-compasses-2-line",
  },
  {
    code: "04",
    title: "Inspection & Testing",
    description:
      "AOI, X-ray, ICT, flying probe and functional testing — every panel traceable to the gram of solder paste.",
    icon: "ri-radar-line",
  },
  {
    code: "05",
    title: "Box Build & Integration",
    description:
      "Cable harnesses, enclosures, firmware loading and full system integration shipped under one roof.",
    icon: "ri-tools-line",
  },
  {
    code: "06",
    title: "Sustainable Manufacturing",
    description:
      "Closed-loop water systems, 100% renewable powered fab and RoHS / REACH compliant supply chain.",
    icon: "ri-leaf-line",
  },
];

export const storyChapters = [
  {
    year: "1998",
    title: "A workshop in Stuttgart",
    body: "Two electrical engineers begin etching prototype boards on a single drill press — an obsession with tolerance below 25µm.",
  },
  {
    year: "2007",
    title: "First aerospace contract",
    body: "AS9100 certification opens the door to mission-critical avionics. Production scales to a 12-layer high-reliability line.",
  },
  {
    year: "2015",
    title: "Automated SMT cell",
    body: "We commission a 24/7 lights-out SMT line capable of 01005 placement and 200,000 components per hour.",
  },
  {
    year: "2022",
    title: "Carbon-neutral fab",
    body: "Our flagship facility is rebuilt on 100% renewables with closed-loop water — the cleanest PCB shop in the EU.",
  },
  {
    year: "Today",
    title: "Built for what's next",
    body: "From neural implants to orbital satellites, we now ship to 41 countries — every board still inspected by a human eye.",
  },
];

export const sectors = [
  {
    name: "Aerospace & Defense",
    icon: "ri-rocket-2-line",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20close-up%20of%20a%20satellite%20communications%20module%20PCB%20with%20gold%20plated%20connectors%20and%20radiation-hardened%20components%2C%20deep%20space%20black%20background%20with%20subtle%20blue%20earth%20glow%2C%20high-end%20product%20photography%20with%20dramatic%20rim%20lighting%2C%20warm%20copper%20accent%20highlights%20on%20circuit%20traces%2C%20moody%20editorial%20atmosphere%2C%20extremely%20detailed%20realistic%20textures&width=1200&height=800&seq=sector-aerospace&orientation=landscape",
    description:
      "Flight-grade multilayer and rigid-flex PCBs for avionics, satellite payloads, radar arrays and unmanned systems. Every panel is screened to IPC-A-610 Class 3 with full traceability.",
    applications: [
      { title: "Satellite Comms", desc: "Rad-hard 18-layer boards with impedance-matched differential pairs for L-band through Ku-band.", icon: "ri-rocket-2-line" },
      { title: "Flight Control", desc: "Triple-redundant flight-computer backplanes with buried capacitance for noise suppression.", icon: "ri-plane-line" },
      { title: "Radar Arrays", desc: "Phased-array antenna PCBs with embedded thermal vias and Rogers 4350B laminate.", icon: "ri-radar-line" },
      { title: "UAV Guidance", desc: "Miniaturized HDI builds under 0.8mm thick for SWaP-critical drone avionics.", icon: "ri-route-line" },
    ],
  },
  {
    name: "Medical Devices",
    icon: "ri-heart-pulse-line",
    image:
      "https://readdy.ai/api/search-image?query=Extreme%20macro%20photography%20of%20a%20medical%20device%20PCB%20inside%20an%20implantable%20pacemaker%20housing%2C%20biocompatible%20coating%20visible%20on%20traces%2C%20sterile%20white%20and%20soft%20blue%20medical%20lighting%2C%20deep%20shadows%20with%20clean%20clinical%20aesthetic%2C%20premium%20editorial%20product%20photography%20with%20moody%20warm%20copper%20accent%20highlights%2C%20hyper-realistic%20surface%20detail&width=1200&height=800&seq=sector-medical&orientation=landscape",
    description:
      "ISO 13485 certified fabrication for implantable, diagnostic and life-support electronics. Biocompatible finishes, hermetic sealing support and full DHR documentation.",
    applications: [
      { title: "Implantables", desc: "Ultra-thin 6-layer flex-rigid with ENIG finish for neurostimulators and cochlear implants.", icon: "ri-brain-line" },
      { title: "Diagnostics", desc: "High-density sensor arrays for CT, MRI and ultrasound front-end signal processing.", icon: "ri-stethoscope-line" },
      { title: "Wearables", desc: "Stretchable interconnects on polyimide for continuous glucose and cardiac monitors.", icon: "ri-heart-pulse-line" },
      { title: "Surgical Robotics", desc: "Redundant motor-driver boards with real-time force-feedback for da Vinci-class systems.", icon: "ri-robot-2-line" },
    ],
  },
  {
    name: "Industrial Robotics",
    icon: "ri-robot-2-line",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20close-up%20of%20an%20industrial%20robot%20arm%20control%20PCB%20with%20motor%20driver%20ICs%20and%20encoder%20connectors%2C%20dark%20factory%20floor%20background%20with%20warm%20amber%20safety%20light%20streaks%2C%20premium%20editorial%20product%20photography%20with%20moody%20industrial%20atmosphere%2C%20copper%20trace%20highlights%2C%20shallow%20depth%20of%20field%2C%20hyper-realistic%20machine%20textures&width=1200&height=800&seq=sector-robotics&orientation=landscape",
    description:
      "Motor-drive, encoder and safety-controller PCBs for collaborative robots, AGVs and CNC systems. Built to IEC 61508 with galvanic isolation and EMC-hardened layouts.",
    applications: [
      { title: "Cobot Controllers", desc: "Safety-certified dual-channel boards with Safe Torque Off and SIL-3 gate drivers.", icon: "ri-robot-3-line" },
      { title: "AGV Navigation", desc: "LiDAR and camera fusion PCBs with high-speed SERDES for warehouse automation.", icon: "ri-route-line" },
      { title: "Servo Drives", desc: "3-phase inverter boards with integrated current sensing up to 200A continuous.", icon: "ri-flashlight-line" },
      { title: "CNC Motion", desc: "Multi-axis interpolation controllers with 1µm encoder resolution support.", icon: "ri-settings-3-line" },
    ],
  },
  {
    name: "EV & Power Electronics",
    icon: "ri-charging-pile-2-line",
    image:
      "https://readdy.ai/api/search-image?query=Extreme%20close-up%20of%20a%20high-voltage%20electric%20vehicle%20inverter%20PCB%20with%20thick%20copper%20tracks%2C%20IGBT%20modules%20and%20bus%20bars%2C%20dramatic%20studio%20lighting%20with%20warm%20copper%20glow%20on%20heavy%20copper%20traces%2C%20dark%20moody%20industrial%20background%2C%20premium%20editorial%20photography%20with%20shallow%20depth%20of%20field%2C%20hyper-realistic%20metal%20and%20ceramic%20textures&width=1200&height=800&seq=sector-ev&orientation=landscape",
    description:
      "Heavy-copper, ceramic-substrate and IMS boards for traction inverters, onboard chargers and BMS. Thermal management is engineered into the stackup from day one.",
    applications: [
      { title: "Traction Inverters", desc: "4oz copper on ceramic DBC with 1200V SiC MOSFET compatibility and >98% efficiency.", icon: "ri-flashlight-fill" },
      { title: "Onboard Chargers", desc: "LLC resonant converter boards with planar magnetics for 22kW OBC designs.", icon: "ri-battery-charge-line" },
      { title: "BMS Modules", desc: "Cell-monitoring daisy-chain PCBs with isoSPI and passive balancing to 150mA.", icon: "ri-dashboard-line" },
      { title: "DC-DC Converters", desc: "Buck-boost stages with integrated gate drivers for 48V mild-hybrid architectures.", icon: "ri-arrow-left-right-line" },
    ],
  },
  {
    name: "Telecom & 5G",
    icon: "ri-signal-tower-line",
    image:
      "https://readdy.ai/api/search-image?query=Macro%20photography%20of%20a%205G%20mmWave%20antenna%20PCB%20array%20with%20precisely%20spaced%20patch%20elements%2C%20dark%20technical%20lab%20background%20with%20subtle%20blue%20glow%20from%20test%20equipment%2C%20premium%20editorial%20product%20photography%2C%20warm%20copper%20accent%20on%20gold-plated%20feedlines%2C%20moody%20industrial%20atmosphere%2C%20hyper-realistic%20dielectric%20and%20copper%20textures&width=1200&height=800&seq=sector-telecom&orientation=landscape",
    description:
      "High-frequency, low-loss and phased-array boards for macro cells, small cells and CPE. Rogers, Taconic and PTFE laminates with controlled Dk/Df across -55°C to +125°C.",
    applications: [
      { title: "mmWave Arrays", desc: "64-element patch arrays on Rogers 5880 for 28GHz and 39GHz 5G NR beamforming.", icon: "ri-signal-tower-line" },
      { title: "Baseband Units", desc: "High-speed digital backplanes with 56G PAM4 and full channel simulation.", icon: "ri-server-line" },
      { title: "Power Amplifiers", desc: "Doherty PA boards with thermal-via farms for GaN-on-SiC RF power stages.", icon: "ri-wifi-line" },
      { title: "Optical Transceivers", desc: "400G/800G OSFP-DD and QSFP-DD PCBs with precision BGA fanout.", icon: "ri-arrow-left-right-line" },
    ],
  },
  {
    name: "Scientific Instruments",
    icon: "ri-flask-line",
    image:
      "https://readdy.ai/api/search-image?query=Close-up%20of%20a%20precision%20scientific%20instrument%20PCB%20inside%20a%20mass%20spectrometer%20or%20electron%20microscope%20housing%2C%20clean%20white%20and%20silver%20laboratory%20lighting%20with%20deep%20shadows%2C%20premium%20editorial%20photography%2C%20moody%20warm%20copper%20trace%20highlights%2C%20clinical%20yet%20industrial%20atmosphere%2C%20hyper-realistic%20surface%20textures%20on%20components&width=1200&height=800&seq=sector-scientific&orientation=landscape",
    description:
      "Ultra-low-noise, cryogenic and high-vacuum compatible PCBs for particle detectors, mass spectrometers and quantum control systems. Designed for precision, not compromise.",
    applications: [
      { title: "Mass Spectrometry", desc: "Low-noise ion-detector boards with femtoamp electrometer front-ends.", icon: "ri-bar-chart-line" },
      { title: "Cryogenics", desc: "4-layer polyimide flex for dilution refrigerators operating below 10mK.", icon: "ri-temp-cold-line" },
      { title: "Quantum Control", desc: "GHz-range microwave control boards with ultra-low phase noise for qubit manipulation.", icon: "ri-pulse-line" },
      { title: "Particle Detectors", desc: "High-density strip-detector readout with 50µm pitch and sub-nanosecond timing.", icon: "ri-focus-3-line" },
    ],
  },
];

export const marqueeWords = [
  "Multilayer",
  "HDI",
  "Rigid-Flex",
  "Impedance Control",
  "Microvia",
  "BGA",
  "RF / Microwave",
  "Aerospace Grade",
  "ISO 9001",
  "AS9100D",
  "ITAR Registered",
];