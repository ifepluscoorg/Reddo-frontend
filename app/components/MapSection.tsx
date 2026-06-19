import { MapPin, Leaf, Wifi, Shield, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: MapPin,
    title: "Prime AI Location",
    desc: "Close to gyms, offline events and restaurants",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    desc: "Sustainable materials and energy-efficient lighting throughout",
  },
  {
    icon: Wifi,
    title: "Ultra-Fast Internet",
    desc: "Dedicated 1Gbps fibre with zero downtime guarantee",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    desc: "Biometric access, CCTV and on-site security personnel",
  },
];

function MapPlaceholder() {
  return (
    <div className="w-full bg-accent/60 rounded-2xl overflow-hidden relative flex items-center justify-center min-h-[280px]">
      {/* SVG illustration colours are intentionally left as literals — they're part of the map art */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="map-grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="#b8d8e8"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="40%"
          x2="100%"
          y2="40%"
          stroke="#c5dce8"
          strokeWidth="8"
        />
        <line
          x1="0"
          y1="65%"
          x2="100%"
          y2="65%"
          stroke="#c5dce8"
          strokeWidth="5"
        />
        <line
          x1="35%"
          y1="0"
          x2="35%"
          y2="100%"
          stroke="#c5dce8"
          strokeWidth="8"
        />
        <line
          x1="65%"
          y1="0"
          x2="65%"
          y2="100%"
          stroke="#c5dce8"
          strokeWidth="5"
        />
        <rect x="36%" y="25%" width="28%" height="14%" rx="4" fill="#b8d4e4" />
        <rect x="36%" y="42%" width="28%" height="22%" rx="4" fill="#b8d4e4" />
        <rect x="10%" y="25%" width="22%" height="38%" rx="4" fill="#b8d4e4" />
        <rect x="67%" y="25%" width="20%" height="20%" rx="4" fill="#b8d4e4" />
      </svg>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-10 h-10 bg-highlight rounded-full flex items-center justify-center shadow-lg">
          <MapPin size={20} className="text-white" />
        </div>
        <div className="mt-2 bg-card rounded-xl px-3 py-1 shadow-md text-xs font-semibold text-foreground">
          Reddo Coworking
        </div>
      </div>
    </div>
  );
}

export default function MapSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#CFE1F4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <MapPlaceholder />

          <div className="flex flex-col gap-6">
            {/* <div>
              <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
                Find Us
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Perfectly positioned for success
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Strategically located in Victoria Island, Lagos — the commercial
                heartbeat of Nigeria.
              </p>
            </div> */}

            <ul className="flex flex-col gap-4">
              {POINTS.map((pt) => (
                <li key={pt.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-card rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <pt.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {pt.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* <button className="w-fit px-6 py-3 bg-highlight text-white font-semibold rounded-full hover:bg-highlight/90 transition-colors text-sm shadow-md flex items-center gap-2">
              Get Directions <ArrowRight size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
