import {
  Monitor,
  Wifi,
  Coffee,
  Users,
  Zap,
  Shield,
  Printer,
  Calendar,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: Monitor,
    title: "Private Offices",
    desc: "Fully furnished private offices for focused teams",
  },
  {
    icon: Users,
    title: "Shared Desks",
    desc: "Hot desks in a vibrant open-plan environment",
  },
  {
    icon: Calendar,
    title: "Meeting Rooms",
    desc: "Book by the hour for client meetings & workshops",
  },
  {
    icon: Zap,
    title: "Event Hall",
    desc: "Host your next launch, summit, or networking event",
  },
  {
    icon: Coffee,
    title: "Lounge & Café",
    desc: "Premium coffee, snacks, and a place to unwind",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    desc: "Round-the-clock access with biometric entry",
  },
  {
    icon: Wifi,
    title: "Fibre Internet",
    desc: "Dedicated 1Gbps connection on all floors",
  },
  {
    icon: Printer,
    title: "Print & Scan",
    desc: "High-speed printing, scanning, and copying",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-accent/50 rounded-xl flex items-center justify-center mb-4">
        <Icon size={20} className="text-primary" />
      </div>
      <h4 className="font-semibold text-foreground mb-1 text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
            Our Spaces
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Built for the{" "}
            <span
              style={{ fontFamily: "'Caveat', cursive" }}
              className="text-primary text-4xl sm:text-5xl"
            >
              way you work
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm shadow-md flex items-center gap-2">
            Book your space today <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
