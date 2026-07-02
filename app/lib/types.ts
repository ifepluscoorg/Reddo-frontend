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
  photo?: string;
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

// ─── Backend (reddo-backend) workspace shapes ──────────────────────────────────

export type BackendCategory =
  | "Hot Desk"
  | "Meeting"
  | "Private Office"
  | "Training Room";

export interface BackendWorkspaceTier {
  id: number;
  type: string;
  capacity: string;
  price: string;
  currency: string;
}

export interface BackendWorkspaceImage {
  id: string;
  image: string;
  order: number;
}

export interface BackendWorkspace {
  id: string;
  name: string;
  category: BackendCategory;
  capacity: string;
  amenities: string[];
  tiers: BackendWorkspaceTier[];
  images: BackendWorkspaceImage[];
  is_available: boolean;
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
