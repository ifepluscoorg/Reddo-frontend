"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function useCountdown(targetMs: number) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = targetMs - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return timeLeft;
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl px-3 py-2 min-w-[52px] text-center shadow-sm border border-[#cce8f6]">
        <span className="text-2xl font-bold text-[#1a2444] font-mono leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] text-[#5a6a8a] mt-1 uppercase tracking-wide font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ targetMs }: { targetMs: number }) {
  const { days, hours, minutes, seconds } = useCountdown(targetMs);

  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-5 w-fit shadow-sm border border-white">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-2 py-0.5 bg-[#ff6b47] text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
          New
        </span>
        <span className="text-xs font-semibold text-[#1a2444] uppercase tracking-widest">
          Opening
        </span>
      </div>
      <div className="flex items-start gap-3">
        <CountdownBox value={days} label="Days" />
        <span className="text-2xl font-bold text-[#3b7dd8] mt-2">:</span>
        <CountdownBox value={hours} label="Hours" />
        <span className="text-2xl font-bold text-[#3b7dd8] mt-2">:</span>
        <CountdownBox value={minutes} label="Min" />
        <span className="text-2xl font-bold text-[#3b7dd8] mt-2">:</span>
        <CountdownBox value={seconds} label="Sec" />
      </div>
      <button className="mt-3 text-xs font-semibold text-[#3b7dd8] hover:underline flex items-center gap-1">
        Get Notified <ArrowRight size={12} />
      </button>
    </div>
  );
}
