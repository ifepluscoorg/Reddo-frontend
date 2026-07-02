import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { Plus } from "lucide-react";

const partners = [
  {
    id: "partner-1",
    label: "Partner 1",
    src: "/images/Indrive.png",
  },
  {
    id: "partner-2",
    label: "Partner 2",
    src: "/images/iiris.png",
  },
  {
    id: "partner-3",
    label: "Partner 3",
    src: "/images/pbr.png",
  },
  {
    id: "partner-4",
    label: "Partner 4",
    src: "/images/monitor24.png",
  },
  {
    id: "partner-5",
    label: "Partner 5",
    src: "/images/champs-finance.png",
  },
  {
    id: "partner-6",
    label: "Partner 6",
    src: "/images/breega.png",
  },
  {
    id: "partner-7",
    label: "Partner 7",
    src: "/images/Docu.png",
  },
  {
    id: "partner-8",
    label: "Partner 8",
    src: "/images/norrsken22.png",
  },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

export default function CommunitySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-easer1 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-d-accent mb-2">
              Community
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Inside{" "}
              <span
                style={{ fontFamily: "'Caveat', cursive" }}
                className="text-primary text-4xl sm:text-5xl"
              >
                Reddo
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start">
            <p className="text-sm text-muted-foreground max-w-xs">
              Be Part of the community{" "}
            </p>
            <div className="w-8 h-8 bg-card rounded-2xl flex items-center justify-center">
              <ArrowRight size={22} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="w-full py-10 sm:py-12 overflow-hidden">
          {/* Header row */}
          {/* <div className="px-4 sm:px-8 md:px-12 max-w-5xl mx-auto flex items-start justify-between mb-6">
            <div>
              <p className="font-bold text-gray-900 text-sm mb-2">Community</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                Inside <span className="text-sky-400 font-normal">Reddo</span>
              </h2>
            </div>

            <button className="flex items-center gap-2 text-gray-800 font-mono text-sm mt-1 group hover:opacity-70 transition-opacity flex-shrink-0">
              <span className="hidden sm:inline">Be part of the community</span>
              <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-colors">
                <Plus size={14} />
              </div>
            </button>
          </div> */}

          {/* Marquee */}
          <div className="relative w-full overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #faf8f2, transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, #faf8f2, transparent)",
              }}
            />

            <div className="flex items-center marquee-track gap-0">
              {allPartners.map((partner, i) => (
                <div
                  key={`${partner.id}-${i}`}
                  className="shrink-0 flex items-center px-8 py-3 border-gray-200"
                >
                  <Image
                    src={partner.src}
                    alt={partner.label}
                    width={112}
                    height={40}
                    className="object-contain h-10 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="px-5 py-2.5 bg-card rounded-xl shadow-sm text-sm font-bold text-muted-foreground border border-accent/60 hover:border-primary transition-colors"
            >
              {p}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
