import { Star } from "lucide-react";

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
          <Star key={i} size={12} className="fill-highlight text-highlight" />
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
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
            Member Stories
          </p>
          <h2 className="text-3xl font-bold text-foreground">What they say</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.handle}
              name={t.name}
              handle={t.handle}
              text={t.text}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <button className="px-5 py-2.5 bg-highlight text-white font-semibold rounded-full text-sm hover:bg-highlight/90 transition-colors flex items-center gap-2">
            <span className="w-4 h-4 bg-white/30 rounded-full inline-block" />
            Follow on Substack
          </button>
          <button className="px-5 py-2.5 bg-highlight text-white font-semibold rounded-full text-sm hover:bg-highlight/90 transition-colors flex items-center gap-2">
            {/* <Instagram size={14} /> */}
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
