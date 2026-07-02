import type { BlogPost } from "./types";

// ══════════════════════════════════════════════════════════════════════════════
// BLOG IMAGE REGISTRY
// Import a photo and map it to a post id here.
// Example:
//   import myPhoto from "@/imports/my-photo.jpg";
//   "my-post-id": myPhoto,
// ══════════════════════════════════════════════════════════════════════════════
export const BLOG_PHOTOS: Record<string, string> = {
  "work-life-balance":   "/images/breakthrough.png",
  "workspace-ecosystem": "/images/workspace-ecosystem.png",
};

// ══════════════════════════════════════════════════════════════════════════════
// BLOG TAG CONFIG
// Add new tags here. Each tag gets a display label and a colour pair.
// Colours: { bg, text } using hex or Tailwind-compatible values.
// ══════════════════════════════════════════════════════════════════════════════
export interface TagConfig {
  label: string;
  bg: string;
  text: string;
}

export const BLOG_TAGS: Record<string, TagConfig> = {
  Lifestyle:    { label: "Lifestyle",    bg: "#fff7ed", text: "#c2410c" },
  Workspace:    { label: "Workspace",    bg: "#eff6ff", text: "#1d4ed8" },
  Networking:   { label: "Networking",   bg: "#f0fdf4", text: "#15803d" },
  Productivity: { label: "Productivity", bg: "#faf5ff", text: "#7e22ce" },
  Community:    { label: "Community",    bg: "#fff1f2", text: "#be123c" },
  // → add more tags here
};

// Gradient palette for posts without a photo
const BLOG_GRADIENTS: Record<string, string> = {
  "networking-shared-spaces":   "linear-gradient(160deg,#0d1b2a 0%,#1b4332 100%)",
  "power-naps-productivity":    "linear-gradient(160deg,#1e1b4b 0%,#312e81 100%)",
  "coworking-lagos":            "linear-gradient(160deg,#431307 0%,#7c2d12 100%)",
  "perfect-meeting-room":       "linear-gradient(160deg,#052e16 0%,#14532d 100%)",
  "5-habits-work-week":         "linear-gradient(160deg,#1a1a2e 0%,#16213e 100%)",
  "future-of-office-space":     "linear-gradient(160deg,#1a0533 0%,#2d1b69 100%)",
};

export function blogPlaceholderGradient(id: string): string {
  return BLOG_GRADIENTS[id] ?? "linear-gradient(160deg,#1a1a2e 0%,#2d3748 100%)";
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOG POSTS
// ══════════════════════════════════════════════════════════════════════════════
export const BLOG_POSTS: BlogPost[] = [
  // ── Featured (hero) post ──────────────────────────────────────────────────
  {
    id: "work-life-balance",
    featured: true,
    tag: "Lifestyle",
    title: "Work-Life Balance Starts at Work: Inside the Reddo Lifestyle Experience",
    excerpt:
      "Imagine finishing a meeting, grabbing coffee, hitting the gym, relaxing in the lounge, playing a quick game, and getting your laundry done, all without leaving your workspace.",
    date: "June 12, 2025",
    author: "Reddo Editorial",
    readTime: "5 min read",
    content: [
      "For most professionals, balance has always meant something you pursue outside of work — a yoga class before sunrise, a gym session after a long commute, evenings carved out for family or friends. But at Reddo Workspace, we built the environment around a different idea: what if balance could start the moment you sat down at your desk?",
      "Our facility at PL8T 97 Ahmadu Bello Way isn't just a collection of desks and meeting rooms. It's a complete ecosystem designed to support the whole person who shows up to work every day. The lounge is alive with colour — murals, soft seating, a games area — because we believe creative rest and play are as important to productivity as focused work.",
      "Members can grab a freshly brewed Americano from Brew Café at the start of the day, step away for a spin class during lunch, and close out the afternoon in a quiet private office. Every transition is seamless, every space intentional.",
      "The outcome isn't just a happier workday. Studies consistently show that employees with access to on-site wellness amenities report higher job satisfaction, better focus, and significantly lower burnout rates. When you remove the friction of commuting to the gym or hunting for a decent coffee nearby, you reclaim hours — and mental bandwidth — that compound over a week, a month, a career.",
      "At Reddo, work-life balance isn't a perk we advertise. It's something we've built into the architecture of how you spend your day. Come in, settle in, and experience the difference.",
    ],
  },

  // ── Grid posts ────────────────────────────────────────────────────────────
  {
    id: "workspace-ecosystem",
    featured: false,
    tag: "Workspace",
    title: "Why the Best Businesses Grow in a Workspace Ecosystem",
    excerpt:
      "Modern businesses need more than a desk. Discover how high-speed internet, meeting rooms, networking opportunities, business support, and more are quietly driving growth.",
    date: "May 28, 2025",
    author: "Chioma Okafor",
    readTime: "4 min read",
    content: [
      "The solo desk has its appeal — affordable, flexible, no-frills. But when founders and small teams are asked why their businesses accelerated in a coworking environment, the desk is almost never what they credit. It's everything around it.",
      "A well-designed workspace ecosystem provides the invisible infrastructure that early-stage businesses simply can't afford to build alone. Reliable gigabit internet. A professionally staffed reception. On-demand meeting rooms equipped for client presentations. A community of operators, creatives, and specialists who become informal advisors, partners, and clients.",
      "At Reddo, we've watched this pattern repeat consistently. A startup books a Hot Desk for one month. By month three they've taken a Private Office. By month six, they've hired two people they met in the café. The workspace didn't just house their growth — it catalysed it.",
      "The most important asset a growing business has is momentum. A thoughtfully structured workspace ecosystem protects that momentum by removing operational friction and replacing it with connection, focus, and community.",
    ],
  },
  {
    id: "networking-shared-spaces",
    featured: false,
    tag: "Networking",
    title: "Networking Happens Naturally in Shared Spaces",
    excerpt:
      "The best professional connections aren't made at formal events — they happen over coffee, in corridors, and at the printer queue. Here's why proximity still matters.",
    date: "May 15, 2025",
    author: "Emeka Nwosu",
    readTime: "3 min read",
    content: [
      "There's a persistent myth in the remote-work era that networking is something you schedule — a LinkedIn request, a virtual coffee, a conference badge. But most of the relationships that actually change careers and businesses begin without agenda, in moments of shared physical space.",
      "When you work in a shared environment, serendipity is baked into the day. You overhear a conversation at the café counter that relates to a problem you've been stuck on. You hold the lift for someone who turns out to run a company you've been trying to reach for six months. You share a table during a busy afternoon and leave with a referral.",
      "This isn't accidental. Reddo's design philosophy deliberately creates collision points — the café, the lounge, the reception area — where members from different industries and disciplines naturally encounter each other. Unlike a formal networking event, these interactions have no pressure and no agenda. They're simply human.",
      "The result is a community that grows organically, anchored by trust, proximity, and genuine mutual interest. The connections you make at your desk building might turn out to be more valuable than your LinkedIn network has ever been.",
    ],
  },
  {
    id: "power-naps-productivity",
    featured: false,
    tag: "Productivity",
    title: "Why Power Naps Make You More Productive at Work",
    excerpt:
      "A 20-minute power nap can improve focus, memory, and decision-making by up to 34%. Here's what the science says, and how Reddo's Dream Zone makes it possible.",
    date: "April 30, 2025",
    author: "Dr. Adaeze Eze",
    readTime: "4 min read",
    content: [
      "NASA researchers discovered it in the 1990s. Google built nap pods in their offices. The science has been settled for decades: a short, well-timed nap during the workday is one of the most effective cognitive performance tools available — and it costs nothing.",
      "The ideal power nap lasts between 10 and 20 minutes. Long enough to restore alertness and enter light sleep, short enough to avoid sleep inertia — the groggy disorientation that follows deeper sleep cycles. In that narrow window, cortisol drops, neural pathways consolidate, and reaction time, memory recall, and creative problem-solving all measurably improve.",
      "At Reddo, we built the Dream Zone precisely because we take productivity seriously enough to acknowledge its biological limits. Members can step away from their screens, close their eyes in a quiet, comfortable space, and return to their desk sharper than caffeine alone would leave them.",
      "The most productive people in the world aren't the ones who push through exhaustion. They're the ones who manage their energy as deliberately as they manage their time. A power nap isn't laziness. It's strategy.",
    ],
  },
  {
    id: "coworking-lagos",
    featured: false,
    tag: "Community",
    title: "How Coworking Spaces Are Changing the Lagos Startup Scene",
    excerpt:
      "Lagos has always had hustle. Now it has infrastructure. A new generation of coworking spaces is giving startups what they previously had to build themselves.",
    date: "April 12, 2025",
    author: "Reddo Editorial",
    readTime: "6 min read",
    content: [
      "Five years ago, most Lagos startups operated out of a founder's living room, a rented shop in an unlikely corner of the city, or an overcrowded tech hub with painfully slow wifi. The ambition was always there. The infrastructure wasn't.",
      "That has changed. The emergence of professionally managed coworking spaces across Victoria Island, Lekki, and Yaba has quietly transformed the baseline conditions for early-stage companies in Nigeria's commercial capital. For the first time, a two-person team can walk into a space on day one that looks and functions like the office a 50-person company would have.",
      "Beyond physical infrastructure, the impact of community is even harder to quantify and more important. Lagos coworking spaces have become informal incubators — places where a founder struggling with fundraising can meet a venture scout, where a developer looking for a co-founder can find one between meetings, where the invisible barriers between industries collapse over a shared lunch table.",
      "Reddo was built with this ecosystem role in mind. We're not just providing desks. We're providing conditions under which the next generation of Nigerian businesses can grow faster, connect better, and last longer.",
    ],
  },
  {
    id: "perfect-meeting-room",
    featured: false,
    tag: "Workspace",
    title: "How to Pick the Perfect Meeting Room for Your Team",
    excerpt:
      "Not all meeting rooms are equal. Choosing the wrong size, setup, or location for your session can quietly undermine your outcomes before anyone says a word.",
    date: "March 25, 2025",
    author: "Tolu Adeyemi",
    readTime: "3 min read",
    content: [
      "The default move is to book the biggest room available. It feels safer — no one gets turned away, no one is squeezed. But research on meeting effectiveness consistently shows that room size relative to group size has a measurable effect on participation, energy, and decision quality.",
      "A team of four in a room built for thirty will unconsciously spread out, lose focus, and avoid the kind of close, energetic collaboration that drives good outcomes. A group of twenty in a room meant for twelve will feel cramped and distracted. The ideal room fills roughly 70–80% of its capacity.",
      "Beyond size, consider layout. Boardroom-style tables favour hierarchical presentations. Lounge seating favours creative workshops. Hollow-square configurations favour consensus-building discussions. At Reddo, every meeting room has been designed with a specific interaction style in mind — and our team can help you match the right space to the right session.",
      "The best meetings don't happen by accident. They start with an intentional choice of environment. Book wisely.",
    ],
  },
  {
    id: "5-habits-work-week",
    featured: false,
    tag: "Productivity",
    title: "5 Habits That Will Transform Your Work Week",
    excerpt:
      "Discipline isn't about doing more. It's about protecting the conditions under which your best work naturally emerges. These five habits are a solid starting point.",
    date: "March 10, 2025",
    author: "Sade Bello",
    readTime: "5 min read",
    content: [
      "The most productive professionals share something in common: they don't rely on willpower. They build systems that make the right behaviour the path of least resistance. Here are five habits worth building into your work week.",
      "First, protect your first ninety minutes. Before email, before Slack, before the day's interruptions take hold, spend the first hour and a half of your working day on the task that matters most. Everything else is negotiable. This window is not.",
      "Second, end every day by writing tomorrow's three priorities. Not a to-do list. Three things. The act of writing them the night before activates the brain's default mode network — you'll be partially problem-solving overnight and ready to begin the moment you sit down.",
      "Third, schedule recovery. A blocked calendar slot in the middle of the afternoon — even fifteen minutes in the Dream Zone — signals to your brain that restoration is as important as output. It usually is.",
      "Fourth, curate your environment ruthlessly. The workspace you inhabit shapes your behaviour more than you realise. At Reddo, members consistently report that moving to a dedicated private office or a focused workstation dramatically improves their output compared to working from home.",
      "Fifth, do a weekly review. Every Friday, spend twenty minutes reviewing what you shipped, what slipped, and what you want to be different next week. The compound effect of this habit is extraordinary.",
    ],
  },
];
