import type { Capability } from "./types";

const capabilities: Capability[] = [
  {
    id: "cap-01",
    code: "01",
    slug: "multilayer-pcb-fabrication",
    title: "Multilayer PCB Fabrication",
    description:
      "Up to 32 layers, HDI builds, blind & buried vias, controlled impedance for high-speed digital and RF.",
    icon: "ri-stack-line",
    tags: ["HDI", "Multilayer", "Impedance Control", "Blind Vias", "Buried Vias"],
  },
  {
    id: "cap-02",
    code: "02",
    slug: "smt-mixed-assembly",
    title: "SMT & Mixed Assembly",
    description:
      "Lead-free SMT, fine-pitch BGA, 01005 placement and selective wave soldering in a Class 7 cleanroom.",
    icon: "ri-cpu-line",
    tags: ["SMT", "BGA", "Lead-Free", "01005", "Wave Soldering"],
  },
  {
    id: "cap-03",
    code: "03",
    slug: "dfm-engineering",
    title: "DFM & Engineering",
    description:
      "Design for manufacturability and reliability with our in-house engineers — from netlist to flight-ready.",
    icon: "ri-compasses-2-line",
    tags: ["DFM", "DFR", "Engineering Support", "Netlist Review"],
  },
  {
    id: "cap-04",
    code: "04",
    slug: "inspection-testing",
    title: "Inspection & Testing",
    description:
      "AOI, X-ray, ICT, flying probe and functional testing — every panel traceable to the gram of solder paste.",
    icon: "ri-radar-line",
    tags: ["AOI", "X-ray", "ICT", "Flying Probe", "Functional Test"],
  },
  {
    id: "cap-05",
    code: "05",
    slug: "box-build-integration",
    title: "Box Build & Integration",
    description:
      "Cable harnesses, enclosures, firmware loading and full system integration shipped under one roof.",
    icon: "ri-tools-line",
    tags: ["Box Build", "Cable Harness", "Firmware Loading", "System Integration"],
  },
  {
    id: "cap-06",
    code: "06",
    slug: "sustainable-manufacturing",
    title: "Sustainable Manufacturing",
    description:
      "Closed-loop water systems, 100% renewable powered fab and RoHS / REACH compliant supply chain.",
    icon: "ri-leaf-line",
    tags: ["RoHS", "REACH", "Renewable Energy", "Closed-Loop Water"],
  },
];

// ─── Query helpers ──────────────────────────────────────────────────────────────

/** Returns all capabilities */
export async function getAllCapabilities(): Promise<Capability[]> {
  return Promise.resolve([...capabilities]);
}

/** Returns a single capability by id */
export async function getCapabilityById(id: string): Promise<Capability | undefined> {
  return Promise.resolve(capabilities.find((c) => c.id === id));
}

/** Returns a single capability by slug */
export async function getCapabilityBySlug(slug: string): Promise<Capability | undefined> {
  return Promise.resolve(capabilities.find((c) => c.slug === slug));
}

/** Returns capabilities matching one or more tags */
export async function getCapabilitiesByTag(tag: string): Promise<Capability[]> {
  return Promise.resolve(
    capabilities.filter((c) => c.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
  );
}