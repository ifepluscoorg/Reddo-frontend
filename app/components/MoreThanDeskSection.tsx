import { Building2, Leaf, Zap, Users, Clock, Coffee } from "lucide-react";

const BENEFITS = [
  {
    icon: Building2,
    title: "Prime Location",
    desc: "Nestled in the heart of Victoria Island, minutes from major banks, restaurants, and attractions.",
    bg: "bg-easer1",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    desc: "Sustainable materials, energy-efficient lighting throughout, and indoor plants that refresh the air.",
    bg: "bg-easer1",
  },
  {
    icon: Zap,
    title: "High-Speed Internet",
    desc: "Dedicated gigabit fiber ensures you stay connected at all times, with zero downtime guarantees.",
    bg: "bg-easer1",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    desc: "Join a network of 1,200+ entrepreneurs, creatives, and professionals pushing boundaries.",
    bg: "bg-easer1",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    desc: "Whether you're a night owl or an early riser, our doors are always open when you need to hustle.",
    bg: "bg-easer1",
  },
  {
    icon: Coffee,
    title: "Premium Amenities",
    desc: "Artisan coffee, healthy snacks, showers, phone booths, and rooftop access included.",
    bg: "bg-easer1",
  },
];

export default function MoreThanDeskSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/40 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
            Why Reddo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            More than a{" "}
            <span
              style={{ fontFamily: "'Caveat', cursive" }}
              className="text-primary text-4xl sm:text-5xl"
            >
              desk
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed">
            Reddo is designed to supercharge your business. Every detail — from
            the ergonomic chairs to the fiber internet — serves your
            productivity and well-being.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-2xl p-6 hover:shadow-md transition-shadow`}
            >
              <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
