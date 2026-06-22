import { Building2, Leaf, Zap, Users, Clock, Coffee } from "lucide-react";
import { s } from "motion/react-client";
import Image from "next/image";

const BENEFITS = [
  {
    icon: Building2,
    title: "Uninterrupted Power",
    desc: "Reddo is an ecosystem. Every detail is designed to help you and your business grow.",
    bg: "bg-easer1",
    src: "/images/icons/image 13.png",
  },
  {
    icon: Leaf,
    title: "High-Speed Fiber",
    desc: "Blazing-Fast Connectivity where every connection is optimized to power productivity, collaboration, and growth.",
    bg: "bg-easer1",
    src: "/images/icons/image 14.png",
  },
  {
    icon: Zap,
    title: "24/7 Security",
    desc: "Multi-layered security. Every aspect is designed to keep your people, assets, and business secured.",
    bg: "bg-easer1",
    src: "/images/icons/image 15.png",
  },
  {
    icon: Users,
    title: "Living",
    desc: "Every space; the café, lounge, sleeping area, game room, is designed to help you work better, connect with others, and recharge throughout the day.",
    bg: "bg-easer1",
    src: "/images/icons/image 16.png",
  },
  {
    icon: Clock,
    title: "Business Printers",
    desc: "To support your daily operations.Every print is designed to help you work efficiently and present your business professionally.",
    bg: "bg-easer1",
    src: "/images/icons/image 17.png",
  },
  {
    icon: Coffee,
    title: "Admin Support",
    desc: "Expert Assistance, Every Day Helps your business run smoothly.Every task is handled with care so you can focus on growth and success.",
    bg: "bg-easer1",
    src: "/images/icons/image 18.png",
  },
];

export default function MoreThanDeskSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/40 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-d-accent mb-2 font-mono">
            Why Reddo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-mono">
            More than a{" "}
            <span
              style={{ fontFamily: "'Caveat', cursive" }}
              className="text-primary text-4xl sm:text-5xl"
            >
              desk
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed text-sm font-mono">
            Reddo is designed to supercharge your business. Every detail — from
            the ergonomic chairs to the fiber internet — serves your
            productivity and well-being.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-2xl p-6 hover:shadow-md transition-shadow font-mono`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                {/* <item.icon size={22} className="text-primary" /> */}
                <Image src={item.src} alt={item.title} width={40} height={40} />
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
