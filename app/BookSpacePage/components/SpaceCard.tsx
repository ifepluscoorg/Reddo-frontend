import { Bookmark, Users, Building2 } from "lucide-react";
// import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Image from "next/image";
import { SPACE_PHOTOS } from "../../lib/data";
import { placeholderGradient } from "../../lib/utils";
import type { SpaceItem } from "../../lib/types";

interface SpaceCardProps {
  space: SpaceItem;
  isOccupied: boolean;
  isNew: boolean;
  isFavorite: boolean;
  isSelected: boolean;
  onToggleFavorite: () => void;
  onToggleNew: () => void;
  onClick: () => void;
}

export default function SpaceCard({
  space,
  isOccupied,
  isNew,
  isFavorite,
  isSelected,
  onToggleFavorite,
  onToggleNew,
  onClick,
}: SpaceCardProps) {
  const photo = SPACE_PHOTOS[space.id] ?? null;
  const cardBg = isNew && !isOccupied ? "#0a2918" : "#0f1a35";
  const gradientTo = isNew && !isOccupied ? "#0a2918" : "#0f1a35";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer ${
        isSelected ? "ring-2 ring-sky-400 ring-offset-2" : ""
      }`}
      style={{ background: cardBg }}
    >
      {/* ── Photo area ── */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: 200 }}
      >
        {photo ? (
          //   <ImageWithFallback
          //     src={photo}
          //     alt={space.name}
          //     className="w-full h-full object-cover object-top"
          //   />

          <Image
            src={photo}
            alt={space.name}
            fill
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: placeholderGradient(space.id) }}
          >
            <Building2 size={36} className="text-white/10" />
          </div>
        )}

        {/* Occupied dim overlay */}
        {isOccupied && <div className="absolute inset-0 bg-slate-900/45" />}

        {/* New green tint overlay */}
        {isNew && !isOccupied && (
          <div
            className="absolute inset-0"
            style={{ background: "rgba(34,197,94,0.38)" }}
          />
        )}

        {/* Gradient fade into info section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent, ${gradientTo})`,
          }}
        />

        {/* Top-left: Favourite toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10"
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
          }}
          title={isFavorite ? "Remove from favourites" : "Add to favourites"}
        >
          <Bookmark
            size={14}
            className={
              isFavorite ? "fill-amber-400 text-amber-400" : "text-white"
            }
            strokeWidth={2}
          />
        </button>

        {/* Top-right: "New" badge (click to remove new status) */}
        {isNew && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleNew();
            }}
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white z-10"
            style={{ background: "#16a34a" }}
            title="Remove New status"
          >
            New
          </button>
        )}

        {/* Bottom-left: Category pill */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-slate-800">
            {space.category}
          </span>
        </div>

        {/* Occupied badge — centred */}
        {isOccupied && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span
              className="text-sm font-bold px-5 py-2 rounded-full"
              style={{
                border: "2px solid #f87171",
                color: "#f87171",
                background: "rgba(15,26,53,0.65)",
                backdropFilter: "blur(4px)",
              }}
            >
              Occupied
            </span>
          </div>
        )}
      </div>

      {/* ── Info section ── */}
      <div
        className="flex flex-col gap-3 px-4 py-4"
        style={{ background: cardBg }}
      >
        {/* Name + capacity */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-bold text-xl leading-tight">
            {space.name}
          </h3>
          <span
            className="flex items-center gap-1 text-xs text-white/80 px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <Users size={11} />
            {space.capacity}
          </span>
        </div>

        {/* Pricing tiers */}
        <div className="flex flex-wrap gap-2">
          {space.tiers.map((tier, i) => (
            <div
              key={i}
              className="flex flex-col gap-0.5 px-3 py-2 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold tracking-wider text-white/50 uppercase">
                  {tier.type}
                </span>
                {tier.capacity && (
                  <>
                    <span className="text-white/25">·</span>
                    <span className="flex items-center gap-0.5 text-[10px] text-white/55">
                      <Users size={9} />
                      {tier.capacity}
                    </span>
                  </>
                )}
              </div>
              <span className="text-sm font-bold text-white">
                ₦ {tier.price}
              </span>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {space.amenities.map((a) => (
            <span
              key={a}
              className="text-[11px] text-white/65 px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
