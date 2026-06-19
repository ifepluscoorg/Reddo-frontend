"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, LayoutGrid, Image } from "lucide-react";

const spaces = [
  { number: "01.", name: "Brew Cafe" },
  { number: "02.", name: "Gym" },
  { number: "03.", name: "Coworking Space" },
  { number: "04.", name: "Meeting Rooms" },
  { number: "05.", name: "Private Offices" },
];

function FolderCard({ number, name }: { number: string; name: string }) {
  return (
    <div className="folder-card-wrapper flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] px-1.5">
      <div
        className="relative rounded-2xl overflow-visible"
        style={{
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.10))",
        }}
      >
        {/* Folder tab */}
        <div
          className="absolute -top-[18px] left-6 h-[18px] w-[60px] rounded-t-lg"
          style={{
            background: "rgba(245, 240, 228, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />

        {/* Card body */}
        <div
          className="relative rounded-2xl rounded-tl-none p-6 pt-8 pb-8 flex flex-col gap-6"
          style={{
            background: "rgba(245, 240, 228, 0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.55)",
            minHeight: "160px",
          }}
        >
          {/* Icon placeholder */}
          <div className="flex items-center gap-1.5 self-end opacity-60">
            <LayoutGrid size={20} strokeWidth={1.5} className="text-gray-700" />
            <span className="text-gray-400 text-lg leading-none">/</span>
            <Image size={20} strokeWidth={1.5} className="text-gray-700" />
          </div>

          {/* Number + Name */}
          <div className="mt-auto">
            <p className="font-mono text-gray-700 text-sm mb-1">{number}</p>
            <p className="font-mono text-base" style={{ color: "#4bbfdb" }}>
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpacesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: false,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 1 },
    },
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 overflow-hidden bg-accent">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <p
          className="font-mono text-sm mb-3 inline-block border-b-2"
          style={{ color: "#4bbfdb", borderColor: "#4bbfdb" }}
        >
          Our Spaces
        </p>
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight mb-3">
          Built for the{" "}
          <span
            style={{
              fontFamily: "'Dancing Script', 'Pacifico', cursive",
              color: "#4bbfdb",
              fontWeight: 400,
            }}
          >
            way you work
          </span>
        </h2>
        <p className="font-mono text-gray-600 text-sm max-w-xs leading-relaxed">
          From hot desks to fully private offices, every space designed for
          focus and growth
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto relative">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full text-white shadow-lg transition-opacity hover:opacity-80"
          style={{ background: "#1a1f2e" }}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="overflow-hidden bg-transparent" ref={emblaRef}>
          <div className="flex pt-6 pb-4 gap-0 bg-transparent">
            {spaces.map((space) => (
              <FolderCard key={space.number} {...space} />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full text-white shadow-lg transition-opacity hover:opacity-80"
          style={{ background: "#1a1f2e" }}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button
          className="flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-white text-sm shadow-lg transition-opacity hover:opacity-90"
          style={{ background: "#1a1f2e" }}
        >
          Book your space today
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full"
            style={{ background: "#4bbfdb" }}
          >
            <ChevronRight size={14} />
          </span>
        </button>
      </div>
    </section>
  );
}
