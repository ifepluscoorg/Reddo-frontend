import Link from "next/link";

const AMENITIES = [
  {
    id: "gym",
    title: "Gym",
    description:
      "Stay active and energized with a fully equipped fitness space designed to help you maintain a healthy work-life balance. Available through a flexible monthly membership.",
    color: "#F5A623",
    shadowColor: "#c47d0e",
    href: "/Gym",
  },
  {
    id: "brew-cafe",
    title: "Brew Cafe",
    description:
      "Enjoy freshly brewed coffee, light meals, and refreshing beverages in a relaxed atmosphere, perfect for informal meetings or a midday recharge.",
    color: "#6B8F5E",
    shadowColor: "#4a6340",
    href: "/BrewCafe",
  },
  {
    id: "dream-zone",
    title: "Nap/Dream Zone",
    description:
      "Escape the day's hustle in a quiet, comfortable space designed for power naps, relaxation, and mental recovery so you can return refreshed and focused.",
    color: "#9B8EC4",
    shadowColor: "#6f62a0",
    href: null,
  },
  {
    id: "laundry",
    title: "Laundry",
    description:
      "Make the most of your workday by letting our team assist with your laundry needs, giving you one less task to worry about.",
    color: "#A8D5C2",
    shadowColor: "#6fada8",
    href: null,
  },
  {
    id: "lounge",
    title: "Lounge/ Game Room",
    description:
      "Unwind, socialize, or take a well-deserved break in our comfortable lounge featuring games and entertainment that encourage creativity and connection.",
    color: "#F4A7B9",
    shadowColor: "#c9708a",
    href: null,
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description:
      "Access a clean, fully equipped shared kitchen where you can prepare meals, store food, or enjoy a quick break throughout your workday.",
    color: "#A8D8EA",
    shadowColor: "#6aaabf",
    href: null,
  },
];

// Star rating component
function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-lg">
          ⭐
        </span>
      ))}
    </div>
  );
}

// The decorative sparkle SVG used in the design
function Sparkle({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface AmenityCardProps {
  title: string;
  description: string;
  color: string;
  shadowColor: string;
  href: string | null;
}

function AmenityCard({
  title,
  description,
  color,
  shadowColor,
  href,
}: AmenityCardProps) {
  return (
    <div
      className="relative"
      style={{ paddingBottom: "12px", paddingRight: "12px" }}
    >
      {/* Shadow layer */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: shadowColor,
          transform: "translate(10px, 10px)",
          borderRadius: "16px",
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-6 flex flex-col justify-between"
        style={{
          background: color,
          minHeight: "260px",
          borderRadius: "16px",
        }}
      >
        {/* Sparkle top right */}
        <Sparkle size={20} className="absolute top-4 right-4 text-white/60" />

        <div>
          <Stars />
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "monospace",
              color: "rgba(0,0,0,0.75)",
              fontSize: "13px",
            }}
          >
            {description}
          </p>
        </div>

        <div className="mt-6">
          <div
            className="mb-3"
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.2)",
              width: "80px",
            }}
          />
          {href ? (
            <Link
              href={href}
              className="font-bold text-base hover:underline"
              style={{ fontFamily: "monospace", color: "rgba(0,0,0,0.85)" }}
            >
              {title}
            </Link>
          ) : (
            <p
              className="font-bold text-base"
              style={{ fontFamily: "monospace", color: "rgba(0,0,0,0.85)" }}
            >
              {title}
            </p>
          )}
        </div>

        {/* Bottom sparkle for some cards */}
        <Sparkle size={20} className="absolute bottom-4 left-4 text-white/50" />
      </div>
    </div>
  );
}

export default function ReddoLivingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page title */}
        <h1 className="text-4xl font-light text-gray-900 mb-2">
          Reddo{" "}
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              color: "#1BA3DC",
              fontWeight: 600,
              fontSize: "1.1em",
            }}
          >
            Living
          </span>
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Everything you need to work well and live well — all in one place.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              title={amenity.title}
              description={amenity.description}
              color={amenity.color}
              shadowColor={amenity.shadowColor}
              href={amenity.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
