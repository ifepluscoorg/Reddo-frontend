// ─── Domain types ─────────────────────────────────────────────────────────────

export interface PricingTier {
  type: string; // "HOURLY" | "Monthly" | "Daily" | "Weekly"
  capacity?: string; // e.g. "5-7", optional per tier
  price: string; // e.g. "15,000"
}

export interface SpaceItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  amenities: string[];
  tiers: PricingTier[];
}

export interface LocationData {
  id: string;
  name: string;
  floors: number;
  workspaces: SpaceItem[];
}

export interface GymPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  cta: string;
  highlighted: boolean;
  features: string[];
}

export interface CafeCategory {
  id: string;
  label: string;
  icon: string;
}

export interface CafeMenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  categoryId: string;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  content: string[];  // array of paragraphs
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type NavPage = "workspace" | "gym" | "brew-cafe";

export interface NavItem {
  id: NavPage;
  label: string;
}
