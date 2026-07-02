import { useState, useEffect } from "react";
import { X, Users, Calendar, Plus, Minus } from "lucide-react";
import { fmt, parsePx, START_TIMES } from "../../../lib/utils";
import type { SpaceItem } from "../../../lib/types";

interface BookingPanelProps {
  space: SpaceItem;
  onClose: () => void;
}

export default function BookingPanel({ space, onClose }: BookingPanelProps) {
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);
  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1);

  // Reset panel state whenever the selected space changes
  useEffect(() => {
    setSelectedTierIdx(0);
    setStartTime("");
    setDuration(1);
  }, [space.id]);

  const selectedTier = space.tiers[selectedTierIdx];
  const isMonthly = selectedTier?.type === "Monthly";
  const unitPrice = parsePx(selectedTier?.price ?? "0");
  const totalPrice = unitPrice * duration;
  const durationUnit = isMonthly ? "month" : "hr";
  const maxDuration = isMonthly ? 12 : 24;

  return (
    <div
      className="fixed right-0 top-16 bottom-0 w-full sm:w-[400px] z-30 overflow-y-auto flex flex-col"
      style={{ background: "#111e35" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
        <span className="text-white font-semibold text-sm tracking-widest">
          BOOKING
        </span>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
          style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
        >
          <X size={15} className="text-white/80" />
        </button>
      </div>

      {/* Room info header */}
      <div
        className="mx-5 mb-5 rounded-xl p-4"
        style={{ background: "#1e3a5c" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <Users size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">
              {space.name}
            </h2>
            <p className="text-white/55 text-xs mt-0.5">
              {space.category} · Coworking · {space.capacity} people
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 pb-8">
        {/* Rate Type */}
        <div>
          <p className="text-white/40 text-[10px] font-bold tracking-widest mb-2.5">
            RATE TYPE
          </p>
          <div className="flex flex-col gap-2">
            {space.tiers.map((tier, i) => {
              const active = i === selectedTierIdx;
              const label = tier.capacity
                ? `${tier.capacity} · ${tier.type} · ₦${tier.price}`
                : `${tier.type} · ₦${tier.price}`;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedTierIdx(i);
                    setDuration(1);
                  }}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{
                    background: active ? "rgba(56,189,248,0.15)" : "#1a2d50",
                    border: active
                      ? "1.5px solid #38bdf8"
                      : "1.5px solid transparent",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Date */}
        <div>
          <p className="text-white/40 text-[10px] font-bold tracking-widest mb-2.5">
            DATE
          </p>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "#1a2d50" }}
          >
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none"
              style={{ colorScheme: "dark" }}
            />
            <Calendar size={16} className="text-white/40 flex-shrink-0" />
          </div>
        </div>

        {/* Start Time — only for non-Monthly */}
        {!isMonthly && (
          <div>
            <p className="text-white/40 text-[10px] font-bold tracking-widest mb-2.5">
              START TIME
            </p>
            <div className="grid grid-cols-3 gap-2">
              {START_TIMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setStartTime(t)}
                  className="py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
                  style={{
                    background:
                      startTime === t ? "rgba(56,189,248,0.2)" : "#1a2d50",
                    border:
                      startTime === t
                        ? "1.5px solid #38bdf8"
                        : "1.5px solid transparent",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Duration stepper */}
        <div>
          <p className="text-white/40 text-[10px] font-bold tracking-widest mb-2.5">
            DURATION ({durationUnit.toUpperCase()}S)
          </p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setDuration((d) => Math.max(1, d - 1))}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
              style={{ background: "#1a2d50" }}
            >
              <Minus size={16} />
            </button>
            <span className="text-sky-400 font-bold text-3xl w-10 text-center">
              {duration}
            </span>
            <button
              onClick={() => setDuration((d) => Math.min(maxDuration, d + 1))}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
              style={{ background: "#1a2d50" }}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Price summary */}
        <div
          className="flex items-center justify-between px-4 py-3.5 rounded-xl"
          style={{ background: "#1a2d50" }}
        >
          <span className="text-white/60 text-sm">
            ₦{fmt(unitPrice)} × {duration} {durationUnit}
          </span>
          <span className="text-sky-400 font-bold text-base">
            ₦{fmt(totalPrice)}
          </span>
        </div>

        {/* Continue */}
        <button
          className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-widest transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1a2d50" }}
        >
          CONTINUE →
        </button>
      </div>
    </div>
  );
}
