import type { BackendWorkspace, SpaceItem } from "./types";
import { BACKEND_TO_CATEGORY } from "./data";

// ─── Gradient palette for placeholder card images ────────────────────────────
// Each gradient simulates a room photo tone. Add more entries to vary them.

const GRADIENTS = [
  "linear-gradient(160deg,#0d2137 0%,#1a3a5c 100%)",
  "linear-gradient(160deg,#1a1a3e 0%,#2d2d5c 100%)",
  "linear-gradient(160deg,#0f2d1a 0%,#1e5c36 100%)",
  "linear-gradient(160deg,#1e1a00 0%,#4a3c00 100%)",
  "linear-gradient(160deg,#1a0d0d 0%,#3d1c1c 100%)",
  "linear-gradient(160deg,#0d1a2d 0%,#1a3d5c 100%)",
  "linear-gradient(160deg,#1a0d2d 0%,#3d1a5c 100%)",
];

/** Returns a deterministic gradient for a given space id. */
export function placeholderGradient(id: string): string {
  const hash = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return GRADIENTS[hash % GRADIENTS.length];
}

// ─── Price utilities ──────────────────────────────────────────────────────────

/** Format a number as a Nigerian locale string, e.g. 75000 → "75,000" */
export const fmt = (n: number): string => n.toLocaleString("en-NG");

/** Parse a price string like "15,000" into the integer 15000 */
export const parsePx = (s: string): number => parseInt(s.replace(/,/g, ""), 10);

// ─── Set toggle helper ────────────────────────────────────────────────────────

/** Immutably add or remove `id` from a Set, returning a new Set. */
export function toggleSet(prev: Set<string>, id: string): Set<string> {
  const next = new Set(prev);
  next.has(id) ? next.delete(id) : next.add(id);
  return next;
}

// ─── Booking panel time slots ─────────────────────────────────────────────────

export const START_TIMES = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
];

// ─── Backend workspace mapping ─────────────────────────────────────────────────

/** Maps a reddo-backend Workspace into the frontend's SpaceItem shape. */
export function mapWorkspaceToSpaceItem(w: BackendWorkspace): SpaceItem {
  const firstImage = [...w.images].sort((a, b) => a.order - b.order)[0];

  return {
    id: w.id,
    name: w.name,
    category: BACKEND_TO_CATEGORY[w.category] ?? w.category,
    capacity: w.capacity,
    amenities: w.amenities,
    tiers: w.tiers.map((t) => ({
      type: t.type,
      capacity: t.capacity || undefined,
      price: fmt(Math.round(parseFloat(t.price))),
    })),
    photo: firstImage?.image,
  };
}
