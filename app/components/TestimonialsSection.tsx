import { Star } from "lucide-react";
import Image from "next/image";
import SocialBtn from "./socialBtn";

const TESTIMONIALS = [
  {
    name: "Amara Okonkwo",
    handle: "@amaradesigns",
    text: "Reddo completely transformed my work-life balance. The vibe is unmatched in Lagos — I signed a client deal in the lounge on my first week.",
  },
  {
    name: "Femi Adeyemi",
    handle: "@femicodes",
    text: "As a developer, the internet speed alone was worth it. But the community made me stay. The network I've built here is priceless.",
  },
  {
    name: "Zara Bello",
    handle: "@zarabello",
    text: "Clean, modern and inspiring. The private offices are perfect for my agency's client calls. Worth every naira.",
  },
  {
    name: "Tobi Lawson",
    handle: "@tobilawson",
    text: "The 24/7 access is a game changer. I often work late and Reddo always feels safe, professional, and fully resourced.",
  },
];

function TestimonialCard({
  name,
  handle,
  text,
}: {
  name: string;
  handle: string;
  text: string;
}) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm flex flex-col gap-3">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={12} className="fill-d-accent text-d-accent" />
        ))}
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
        {text}
      </p>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{handle}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-d-accent mb-2 font-mono">
            Member Stories
          </p>
          <h2 className="text-3xl font-bold text-foreground font-mono">
            What they say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.handle}
              name={t.name}
              handle={t.handle}
              text={t.text}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8 font-mono">
          <SocialBtn
            icon="/images/icons/substack.png"
            label="Follow on Substack"
          />
          <SocialBtn
            icon="/images/icons/instagram.png"
            label="Follow on Instagram"
          />
        </div>
      </div>
    </section>
  );
}
