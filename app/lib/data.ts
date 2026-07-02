import type {
  SpaceItem,
  LocationData,
  GymPlan,
  CafeCategory,
  CafeMenuItem,
  NavItem,
  NavPage,
  BackendCategory,
} from "./types";

// ══════════════════════════════════════════════════════════════════════════════
// CARD IMAGE REGISTRY
// Import a room photo at the top of this file and add the mapping below.
//
// Example:
//   import myRoom from "@/imports/my-room.jpg";
//   "my-space-id": myRoom,
// ══════════════════════════════════════════════════════════════════════════════
export const SPACE_PHOTOS: Record<string, string> = {
  "conference-room": "/images/conference-room.png",
  breakthrough: "/images/breakthrough.png",
};

// ══════════════════════════════════════════════════════════════════════════════
// SPACE CATEGORIES CONFIG
// Add new category strings here to extend the filter dropdown and card tags.
// ══════════════════════════════════════════════════════════════════════════════
export const SPACE_CATEGORIES: string[] = [
  "Meeting",
  "Workstation",
  "Private Office",
  "Executive Suite",
  // → add more categories here
];

// ══════════════════════════════════════════════════════════════════════════════
// FRONTEND ↔ BACKEND CATEGORY MAPPING
// reddo-backend's category enum doesn't match the frontend labels above,
// so requests/responses are translated at the boundary.
// ══════════════════════════════════════════════════════════════════════════════
export const CATEGORY_TO_BACKEND: Record<string, BackendCategory> = {
  Meeting: "Meeting",
  Workstation: "Hot Desk",
  "Private Office": "Private Office",
  "Executive Suite": "Training Room",
};

export const BACKEND_TO_CATEGORY: Record<BackendCategory, string> = {
  Meeting: "Meeting",
  "Hot Desk": "Workstation",
  "Private Office": "Private Office",
  "Training Room": "Executive Suite",
};

// ══════════════════════════════════════════════════════════════════════════════
// NAVIGATION ITEMS
// Add new pages here to extend the top nav.
// ══════════════════════════════════════════════════════════════════════════════
export const NAV_ITEMS: NavItem[] = [
  { id: "workspace", label: "Book space" },
  { id: "gym", label: "Gym" },
  { id: "brew-cafe", label: "Brew Cafe" },
] satisfies NavItem[];

// ══════════════════════════════════════════════════════════════════════════════
// DEMO STATE SEED
// "New" badge has no backend equivalent — stays a frontend-only concept.
// ══════════════════════════════════════════════════════════════════════════════
export const INITIAL_NEW = new Set<string>(["zion", "lb-innovation-lab"]);

// ══════════════════════════════════════════════════════════════════════════════
// GYM PLANS
// ══════════════════════════════════════════════════════════════════════════════
export const GYM_PLANS: GymPlan[] = [
  {
    id: "beginner",
    name: "Beginner Plan",
    price: "50,000",
    period: "per user, per month",
    cta: "Subscribe",
    highlighted: false,
    features: [
      "Covers ₦35k subscription",
      "₦10k registration fee",
      "₦5k refundable deposit",
    ],
  },
  {
    id: "subsequent",
    name: "Subsequent Plan",
    price: "35,000",
    period: "per user, per month",
    cta: "Renew",
    highlighted: true,
    features: [],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// BREW CAFE — Categories
// Add new categories here; they appear as tabs automatically.
// ══════════════════════════════════════════════════════════════════════════════
export const CAFE_CATEGORIES: CafeCategory[] = [
  { id: "coffee", label: "Coffee Drinks", icon: "☕" },
  { id: "hot-tea", label: "Hot Teas", icon: "🫖" },
  { id: "cakes", label: "Cakes", icon: "🎂" },
  { id: "pastries", label: "Pastries", icon: "🥐" },
  { id: "soda", label: "Soda Drinks", icon: "🥤" },
  { id: "fruit", label: "Fruit Drinks", icon: "🍹" },
];

// ══════════════════════════════════════════════════════════════════════════════
// BREW CAFE — Menu items
// ══════════════════════════════════════════════════════════════════════════════
export const CAFE_MENU_ITEMS: CafeMenuItem[] = [
  // Coffee
  {
    id: "c1",
    categoryId: "coffee",
    name: "Americano",
    price: "3,000",
    description:
      "A smooth espresso enjoyed black with a hint of warmth and low bitterness.",
  },
  {
    id: "c2",
    categoryId: "coffee",
    name: "Latte",
    price: "3,500",
    description:
      "Velvety espresso and steamed milk, served hot or iced — cold and refreshing.",
  },
  {
    id: "c3",
    categoryId: "coffee",
    name: "Mocha",
    price: "4,000",
    description:
      "A delicious combination of espresso, milk and chocolate. Iced and smooth or enjoyed hot.",
  },
  {
    id: "c4",
    categoryId: "coffee",
    name: "Macchiato",
    price: "4,000",
    description:
      "Composition of espresso and milk foam, iced and smooth or enjoyed hot.",
  },
  {
    id: "c5",
    categoryId: "coffee",
    name: "Cappuccino Medium",
    price: "2,000",
    description:
      "Classic coffee with espresso and steamed milk foam — rich and creamy with every sip.",
  },
  {
    id: "c6",
    categoryId: "coffee",
    name: "Cappuccino Large",
    price: "2,700",
    description:
      "Double espresso with steamed milk and milk foam, offering a rich and creamy flavour.",
  },
  {
    id: "c7",
    categoryId: "coffee",
    name: "Espresso Single",
    price: "2,500",
    description:
      "Made with a dash of boldness, rich in aroma and smooth to the last sip.",
  },
  {
    id: "c8",
    categoryId: "coffee",
    name: "Espresso Double",
    price: "4,000",
    description:
      "Made with a double dose of boldness, rich in aroma and smooth to the last sip.",
  },
  // Hot Teas
  {
    id: "t1",
    categoryId: "hot-tea",
    name: "Green Tea",
    price: "1,800",
    description:
      "Light, clean and refreshing — a smooth antioxidant-rich classic.",
  },
  {
    id: "t2",
    categoryId: "hot-tea",
    name: "Black Tea",
    price: "1,800",
    description:
      "Strong and full-bodied, brewed to perfection with your choice of milk or honey.",
  },
  {
    id: "t3",
    categoryId: "hot-tea",
    name: "Chamomile",
    price: "2,000",
    description:
      "Gentle floral notes and a calming warmth — perfect any time of day.",
  },
  {
    id: "t4",
    categoryId: "hot-tea",
    name: "Ginger Lemon",
    price: "2,200",
    description:
      "Zesty ginger with a squeeze of lemon, warming and invigorating.",
  },
  {
    id: "t5",
    categoryId: "hot-tea",
    name: "Mint Tea",
    price: "2,000",
    description:
      "Fresh spearmint steeped to bring you a cool, refreshing herbal brew.",
  },
  // Cakes
  {
    id: "k1",
    categoryId: "cakes",
    name: "Chocolate Cake",
    price: "3,500",
    description:
      "Rich, moist layers of dark chocolate and ganache — a timeless indulgence.",
  },
  {
    id: "k2",
    categoryId: "cakes",
    name: "Red Velvet",
    price: "3,500",
    description:
      "Soft velvety layers with cream cheese frosting — a café favourite.",
  },
  {
    id: "k3",
    categoryId: "cakes",
    name: "Cheesecake",
    price: "4,000",
    description:
      "Creamy New York-style cheesecake on a buttery graham cracker base.",
  },
  {
    id: "k4",
    categoryId: "cakes",
    name: "Lemon Drizzle",
    price: "3,200",
    description:
      "Light sponge soaked in sharp lemon syrup and dusted with powdered sugar.",
  },
  // Pastries
  {
    id: "p1",
    categoryId: "pastries",
    name: "Croissant",
    price: "1,500",
    description:
      "Buttery, flaky and golden — a French classic baked fresh daily.",
  },
  {
    id: "p2",
    categoryId: "pastries",
    name: "Danish Pastry",
    price: "1,800",
    description:
      "Layers of laminated dough folded with a fruity or cream cheese centre.",
  },
  {
    id: "p3",
    categoryId: "pastries",
    name: "Blueberry Muffin",
    price: "1,600",
    description:
      "Soft moist muffin packed with plump blueberries and a crunchy sugar top.",
  },
  {
    id: "p4",
    categoryId: "pastries",
    name: "Chocolate Twist",
    price: "1,700",
    description:
      "Twisted pastry dough with rich chocolate filling, lightly glazed.",
  },
  // Soda
  {
    id: "s1",
    categoryId: "soda",
    name: "Coca-Cola",
    price: "1,000",
    description:
      "The original ice-cold classic. Crisp, bubbly and always refreshing.",
  },
  {
    id: "s2",
    categoryId: "soda",
    name: "Sprite",
    price: "1,000",
    description: "Lemon-lime carbonated goodness — clean and crisp every time.",
  },
  {
    id: "s3",
    categoryId: "soda",
    name: "Fanta Orange",
    price: "1,000",
    description: "Bubbly, bright and sweet. A fruity fizz that hits the spot.",
  },
  {
    id: "s4",
    categoryId: "soda",
    name: "Ginger Ale",
    price: "1,200",
    description:
      "Lightly spiced ginger carbonated drink — great on its own or as a mixer.",
  },
  // Fruit Drinks
  {
    id: "f1",
    categoryId: "fruit",
    name: "Orange Juice",
    price: "2,000",
    description: "Freshly squeezed oranges — pure, pulpy and vitamin-packed.",
  },
  {
    id: "f2",
    categoryId: "fruit",
    name: "Pineapple Juice",
    price: "2,200",
    description:
      "Sweet tropical pineapple blended smooth and chilled to perfection.",
  },
  {
    id: "f3",
    categoryId: "fruit",
    name: "Watermelon Juice",
    price: "2,000",
    description: "Cool, hydrating and naturally sweet — summer in a glass.",
  },
  {
    id: "f4",
    categoryId: "fruit",
    name: "Mixed Fruit Blend",
    price: "2,500",
    description:
      "Seasonal fruits blended together for a refreshing and nutritious boost.",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// WORKSPACE DATA — Location A
// ══════════════════════════════════════════════════════════════════════════════
const LOC_A_WORKSPACES: SpaceItem[] = [
  {
    id: "conference-room",
    name: "Conference Room",
    category: "Meeting",
    capacity: "5-35",
    amenities: [
      "Projector",
      "Wifi",
      "AC",
      "Lounge",
      "Kitchen",
      "Dream Zone",
      "Printer",
    ],
    tiers: [
      { type: "HOURLY", capacity: "5-7", price: "15,000" },
      { type: "HOURLY", capacity: "10-15", price: "25,000" },
      { type: "HOURLY", capacity: "20-35", price: "50,000" },
    ],
  },
  {
    id: "hot-desk",
    name: "Hot Desk",
    category: "Workstation",
    capacity: "1-4",
    amenities: ["Wifi", "AC", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "1", price: "3,500" },
      { type: "HOURLY", capacity: "2-4", price: "6,000" },
    ],
  },
  {
    id: "breakthrough",
    name: "Breakthrough",
    category: "Private Office",
    capacity: "4",
    amenities: ["Printer", "Wifi", "AC", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "1,500,000" }],
  },
  {
    id: "wisdom",
    name: "Wisdom",
    category: "Private Office",
    capacity: "6",
    amenities: ["Printer", "Wifi", "AC", "Lounge", "Kitchen"],
    tiers: [{ type: "Monthly", price: "1,800,000" }],
  },
  {
    id: "blessing",
    name: "Blessing",
    category: "Meeting",
    capacity: "8-20",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "8-12", price: "20,000" },
      { type: "HOURLY", capacity: "13-20", price: "35,000" },
    ],
  },
  {
    id: "increase",
    name: "Increase",
    category: "Meeting",
    capacity: "10-25",
    amenities: ["Projector", "Wifi", "AC", "Lounge", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "10-15", price: "24,000" },
      { type: "HOURLY", capacity: "16-25", price: "42,000" },
    ],
  },
  {
    id: "multiply",
    name: "Multiply",
    category: "Executive Suite",
    capacity: "8",
    amenities: ["Wifi", "AC", "Printer", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "2,200,000" }],
  },
  {
    id: "grace",
    name: "Grace",
    category: "Meeting",
    capacity: "5-20",
    amenities: ["Projector", "Wifi", "AC", "Kitchen", "Dream Zone"],
    tiers: [
      { type: "HOURLY", capacity: "5-10", price: "18,000" },
      { type: "HOURLY", capacity: "11-20", price: "35,000" },
    ],
  },
  {
    id: "gift",
    name: "Gift",
    category: "Private Office",
    capacity: "2",
    amenities: ["Wifi", "AC", "Printer"],
    tiers: [{ type: "Monthly", price: "900,000" }],
  },
  {
    id: "reoboth",
    name: "Reoboth",
    category: "Meeting",
    capacity: "5-30",
    amenities: ["Projector", "Wifi", "AC", "Lounge", "Kitchen", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "5-10", price: "18,000" },
      { type: "HOURLY", capacity: "11-20", price: "30,000" },
      { type: "HOURLY", capacity: "21-30", price: "52,000" },
    ],
  },
  {
    id: "uheed",
    name: "Uheed",
    category: "Private Office",
    capacity: "4",
    amenities: ["Wifi", "AC", "Printer", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "1,200,000" }],
  },
  {
    id: "selah",
    name: "Selah",
    category: "Meeting",
    capacity: "8-20",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard"],
    tiers: [
      { type: "HOURLY", capacity: "8-14", price: "22,000" },
      { type: "HOURLY", capacity: "15-20", price: "38,000" },
    ],
  },
  {
    id: "bethel",
    name: "Bethel",
    category: "Meeting",
    capacity: "10-30",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "10-20", price: "28,000" },
      { type: "HOURLY", capacity: "21-30", price: "48,000" },
    ],
  },
  {
    id: "hebrew",
    name: "Hebrew",
    category: "Private Office",
    capacity: "6",
    amenities: ["Wifi", "AC", "Printer", "Lounge"],
    tiers: [{ type: "Monthly", price: "1,700,000" }],
  },
  {
    id: "joel",
    name: "Joel",
    category: "Meeting",
    capacity: "5-15",
    amenities: ["Projector", "Wifi", "AC", "Kitchen"],
    tiers: [
      { type: "HOURLY", capacity: "5-8", price: "16,000" },
      { type: "HOURLY", capacity: "9-15", price: "28,000" },
    ],
  },
  {
    id: "outbreak",
    name: "Outbreak",
    category: "Meeting",
    capacity: "10-35",
    amenities: ["Projector", "Wifi", "AC", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [
      { type: "HOURLY", capacity: "10-20", price: "30,000" },
      { type: "HOURLY", capacity: "21-35", price: "50,000" },
    ],
  },
  {
    id: "isaiah",
    name: "Isaiah",
    category: "Workstation",
    capacity: "3",
    amenities: ["Wifi", "AC", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "1", price: "4,000" },
      { type: "Daily", capacity: "1-3", price: "20,000" },
    ],
  },
  {
    id: "david",
    name: "David",
    category: "Meeting",
    capacity: "5-20",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "5-10", price: "17,000" },
      { type: "HOURLY", capacity: "11-20", price: "32,000" },
    ],
  },
  {
    id: "abigail",
    name: "Abigail",
    category: "Meeting",
    capacity: "8-25",
    amenities: ["Projector", "Wifi", "AC", "Kitchen", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "8-15", price: "22,000" },
      { type: "HOURLY", capacity: "16-25", price: "40,000" },
    ],
  },
  {
    id: "gozhen",
    name: "Gozhen",
    category: "Executive Suite",
    capacity: "8",
    amenities: ["Wifi", "AC", "Printer", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "2,000,000" }],
  },
  {
    id: "gozan",
    name: "Gozan",
    category: "Meeting",
    capacity: "10-25",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "10-18", price: "26,000" },
      { type: "HOURLY", capacity: "19-25", price: "44,000" },
    ],
  },
  {
    id: "understanding",
    name: "Understanding",
    category: "Meeting",
    capacity: "5-20",
    amenities: ["Projector", "Wifi", "AC", "Dream Zone", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "5-10", price: "18,000" },
      { type: "HOURLY", capacity: "11-20", price: "33,000" },
    ],
  },
  {
    id: "elevation",
    name: "Elevation",
    category: "Private Office",
    capacity: "4",
    amenities: ["Wifi", "AC", "Printer"],
    tiers: [{ type: "Monthly", price: "1,300,000" }],
  },
  {
    id: "vision",
    name: "Vision",
    category: "Executive Suite",
    capacity: "8-30",
    amenities: [
      "Projector",
      "Wifi",
      "AC",
      "Lounge",
      "Kitchen",
      "Printer",
      "Dream Zone",
    ],
    tiers: [
      { type: "HOURLY", capacity: "8-15", price: "23,000" },
      { type: "HOURLY", capacity: "16-30", price: "46,000" },
    ],
  },
  {
    id: "ruel",
    name: "Ruel",
    category: "Private Office",
    capacity: "5",
    amenities: ["Wifi", "AC", "Printer", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "1,600,000" }],
  },
  {
    id: "new-wine",
    name: "New Wine",
    category: "Meeting",
    capacity: "10-30",
    amenities: ["Projector", "Wifi", "AC", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [
      { type: "HOURLY", capacity: "10-18", price: "28,000" },
      { type: "HOURLY", capacity: "19-30", price: "48,000" },
    ],
  },
  {
    id: "overflow",
    name: "Overflow",
    category: "Executive Suite",
    capacity: "15-40",
    amenities: [
      "Projector",
      "Wifi",
      "AC",
      "Lounge",
      "Kitchen",
      "Dream Zone",
      "Printer",
    ],
    tiers: [
      { type: "HOURLY", capacity: "15-25", price: "40,000" },
      { type: "HOURLY", capacity: "26-40", price: "65,000" },
    ],
  },
  {
    id: "zion",
    name: "Zion",
    category: "Private Office",
    capacity: "12",
    amenities: ["Printer", "Wifi", "AC", "Lounge", "Kitchen", "Dream Zone"],
    tiers: [{ type: "Monthly", price: "900,000" }],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// WORKSPACE DATA — Location B
// ══════════════════════════════════════════════════════════════════════════════
const LOC_B_WORKSPACES: SpaceItem[] = [
  {
    id: "lb-innovation-lab",
    name: "Innovation Lab",
    category: "Meeting",
    capacity: "8-20",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "3D Printer"],
    tiers: [
      { type: "HOURLY", capacity: "8-12", price: "22,000" },
      { type: "HOURLY", capacity: "13-20", price: "38,000" },
    ],
  },
  {
    id: "lb-creative-suite",
    name: "Creative Suite",
    category: "Executive Suite",
    capacity: "6",
    amenities: ["Wifi", "AC", "Printer", "Standing Desk", "Lounge"],
    tiers: [{ type: "Monthly", price: "1,900,000" }],
  },
  {
    id: "lb-focus-pod",
    name: "Focus Pod",
    category: "Workstation",
    capacity: "1-3",
    amenities: ["Wifi", "AC", "Power Outlets"],
    tiers: [
      { type: "HOURLY", capacity: "1", price: "4,000" },
      { type: "Daily", capacity: "1-3", price: "18,000" },
    ],
  },
  {
    id: "lb-sprint-room",
    name: "Sprint Room",
    category: "Meeting",
    capacity: "6-18",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard", "Printer"],
    tiers: [
      { type: "HOURLY", capacity: "6-10", price: "20,000" },
      { type: "HOURLY", capacity: "11-18", price: "35,000" },
    ],
  },
  {
    id: "lb-deep-work-den",
    name: "Deep Work Den",
    category: "Workstation",
    capacity: "1-6",
    amenities: ["Wifi", "AC", "Noise Cancelling", "Power Outlets"],
    tiers: [
      { type: "HOURLY", capacity: "1-3", price: "5,000" },
      { type: "Daily", capacity: "1-6", price: "22,000" },
    ],
  },
  {
    id: "lb-boardroom-prime",
    name: "Boardroom Prime",
    category: "Executive Suite",
    capacity: "15-40",
    amenities: [
      "Projector",
      "Wifi",
      "AC",
      "Lounge",
      "Kitchen",
      "Printer",
      "Dream Zone",
    ],
    tiers: [
      { type: "HOURLY", capacity: "15-25", price: "45,000" },
      { type: "HOURLY", capacity: "26-40", price: "70,000" },
    ],
  },
  {
    id: "lb-private-haven",
    name: "Private Haven",
    category: "Private Office",
    capacity: "4",
    amenities: ["Wifi", "AC", "Printer", "Lounge"],
    tiers: [{ type: "Monthly", price: "1,400,000" }],
  },
  {
    id: "lb-collab-zone",
    name: "Collab Zone",
    category: "Meeting",
    capacity: "8-15",
    amenities: ["Projector", "Wifi", "AC", "Whiteboard"],
    tiers: [
      { type: "HOURLY", capacity: "8-12", price: "20,000" },
      { type: "HOURLY", capacity: "13-15", price: "30,000" },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// LOCATIONS REGISTRY
// Add new locations here following the same structure.
// ══════════════════════════════════════════════════════════════════════════════
export const LOCATIONS: LocationData[] = [
  {
    id: "plot97",
    name: "PL8T 97 Ahmadu Bello Wa...",
    floors: 2,
    workspaces: LOC_A_WORKSPACES,
  },
  {
    id: "tech-hub",
    name: "Tech Hub, Victoria Island",
    floors: 3,
    workspaces: LOC_B_WORKSPACES,
  },
];
