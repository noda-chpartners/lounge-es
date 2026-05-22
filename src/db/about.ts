import type { AboutValue, TeamMember, Certification, StoryChapter } from "./types";

// ─── Values ────────────────────────────────────────────────────────────────────
const aboutValues: AboutValue[] = [
  {
    id: "val-01",
    code: "01",
    title: "Tolerance is a discipline",
    body: "Every team member is trained to think in microns. Five-figure measurements, six-figure consequences.",
  },
  {
    id: "val-02",
    code: "02",
    title: "Engineers, not order-takers",
    body: "Our DFM engineers redesign 14% of incoming boards before fabrication — for free. Better boards, lower yields lost.",
  },
  {
    id: "val-03",
    code: "03",
    title: "Traceability for 25 years",
    body: "Every panel, every reel of components, every reflow profile — archived for a quarter century of audit-ready history.",
  },
];

// ─── Team ──────────────────────────────────────────────────────────────────────
const team: TeamMember[] = [
  {
    id: "team-01",
    name: "Dr. Lena Vogel",
    role: "Chief Engineer",
    bio: "PhD in materials science from TU Munich. Joined the workshop in 2001 and led the AS9100D certification programme in 2007.",
    img: "https://readdy.ai/api/search-image?query=Black%20and%20white%20editorial%20portrait%20of%20a%20professional%20female%20engineer%20in%20her%20fifties%20with%20short%20gray%20hair%20wearing%20a%20dark%20technical%20jacket%2C%20shoulders%20up%2C%20looking%20slightly%20to%20the%20side%2C%20pure%20deep%20black%20studio%20background%2C%20dramatic%20rim%20lighting%2C%20premium%20documentary%20photography%20style%20with%20a%20moody%20industrial%20feel&width=600&height=750&seq=team-01&orientation=portrait",
  },
  {
    id: "team-02",
    name: "Marco Henriksen",
    role: "Head of SMT",
    bio: "20 years running high-volume SMT lines across Germany and Norway. Brought the 01005 placement programme online in 2019.",
    img: "https://readdy.ai/api/search-image?query=Black%20and%20white%20editorial%20portrait%20of%20a%20bearded%20man%20in%20his%20forties%20wearing%20a%20technical%20work%20jacket%2C%20shoulders%20up%2C%20looking%20directly%20into%20camera%20with%20a%20confident%20expression%2C%20pure%20deep%20black%20studio%20background%2C%20dramatic%20side%20lighting%2C%20premium%20documentary%20photography%20style%20with%20a%20moody%20industrial%20feel&width=600&height=750&seq=team-02&orientation=portrait",
  },
  {
    id: "team-03",
    name: "Yuki Tamura",
    role: "DFM Lead",
    bio: "Former Murata design engineer. Leads a team of six DFM specialists who review every incoming netlist before a single drill is cut.",
    img: "https://readdy.ai/api/search-image?query=Black%20and%20white%20editorial%20portrait%20of%20a%20Japanese%20female%20engineer%20in%20her%20thirties%20with%20straight%20dark%20hair%20wearing%20a%20minimalist%20technical%20jacket%2C%20shoulders%20up%2C%20looking%20slightly%20to%20the%20side%2C%20pure%20deep%20black%20studio%20background%2C%20dramatic%20rim%20lighting%2C%20premium%20documentary%20photography%20with%20a%20moody%20industrial%20feel&width=600&height=750&seq=team-03&orientation=portrait",
  },
  {
    id: "team-04",
    name: "Aaron Okafor",
    role: "Quality Director",
    bio: "IPC Certified Interconnect Designer and Six Sigma Black Belt. Drove field defect rate below 2ppm over a three-year programme.",
    img: "https://readdy.ai/api/search-image?query=Black%20and%20white%20editorial%20portrait%20of%20a%20Black%20male%20engineer%20in%20his%20forties%20with%20short%20hair%20wearing%20a%20technical%20dark%20jacket%2C%20shoulders%20up%2C%20looking%20directly%20into%20camera%20with%20a%20serious%20expression%2C%20pure%20deep%20black%20studio%20background%2C%20dramatic%20rim%20lighting%2C%20premium%20documentary%20photography%20with%20a%20moody%20industrial%20feel&width=600&height=750&seq=team-04&orientation=portrait",
  },
];

// ─── Certifications ────────────────────────────────────────────────────────────
const certifications: Certification[] = [
  { id: "cert-01", label: "ISO 9001 : 2015" },
  { id: "cert-02", label: "IATF 16949" },
  { id: "cert-03", label: "AS9100D Aerospace" },
  { id: "cert-04", label: "ISO 13485 Medical" },
  { id: "cert-05", label: "IPC-A-610 Class 3" },
  { id: "cert-06", label: "UL Listed" },
  { id: "cert-07", label: "RoHS / REACH" },
  { id: "cert-08", label: "ITAR Registered" },
];

// ─── Story chapters ────────────────────────────────────────────────────────────
const storyChapters: StoryChapter[] = [
  {
    id: "story-01",
    year: "1998",
    title: "A workshop in Stuttgart",
    body: "Two electrical engineers begin etching prototype boards on a single drill press — an obsession with tolerance below 25µm.",
  },
  {
    id: "story-02",
    year: "2007",
    title: "First aerospace contract",
    body: "AS9100 certification opens the door to mission-critical avionics. Production scales to a 12-layer high-reliability line.",
  },
  {
    id: "story-03",
    year: "2015",
    title: "Automated SMT cell",
    body: "We commission a 24/7 lights-out SMT line capable of 01005 placement and 200,000 components per hour.",
  },
  {
    id: "story-04",
    year: "2022",
    title: "Carbon-neutral fab",
    body: "Our flagship facility is rebuilt on 100% renewables with closed-loop water — the cleanest PCB shop in the EU.",
  },
  {
    id: "story-05",
    year: "Today",
    title: "Built for what's next",
    body: "From neural implants to orbital satellites, we now ship to 41 countries — every board still inspected by a human eye.",
  },
];

// ─── Query helpers ──────────────────────────────────────────────────────────────

export async function getAllAboutValues(): Promise<AboutValue[]> {
  return Promise.resolve([...aboutValues]);
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return Promise.resolve([...team]);
}

export async function getTeamMemberById(id: string): Promise<TeamMember | undefined> {
  return Promise.resolve(team.find((m) => m.id === id));
}

export async function getAllCertifications(): Promise<Certification[]> {
  return Promise.resolve([...certifications]);
}

export async function getAllStoryChapters(): Promise<StoryChapter[]> {
  return Promise.resolve([...storyChapters]);
}