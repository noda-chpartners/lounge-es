// ─── Capability ────────────────────────────────────────────────────────────────
export interface Capability {
  id: string;          // e.g. "cap-01"
  code: string;        // e.g. "01"
  title: string;
  description: string;
  icon: string;        // Remix Icon class
  slug: string;        // URL-friendly identifier
  tags: string[];
}

// ─── Sector ────────────────────────────────────────────────────────────────────
export interface SectorApplication {
  title: string;
  desc: string;
  icon: string;
}

export interface Sector {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  applications: SectorApplication[];
}

// ─── About ─────────────────────────────────────────────────────────────────────
export interface AboutValue {
  id: string;
  code: string;
  title: string;
  body: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  img: string;
  bio?: string;
}

export interface Certification {
  id: string;
  label: string;
  icon?: string;
}

// ─── Story ─────────────────────────────────────────────────────────────────────
export interface StoryChapter {
  id: string;
  year: string;
  title: string;
  body: string;
}