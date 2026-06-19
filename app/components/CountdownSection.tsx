"use client";

import { useEffect, useState } from "react";
import { GetNotified } from "./GetNotified";

// Target date: 10 days from now for demo purposes
const TARGET = new Date(
  Date.now() +
    10 * 24 * 60 * 60 * 1000 +
    22 * 60 * 60 * 1000 +
    7 * 60 * 1000 +
    15 * 1000,
);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function CountUnit({
  value,
  label,
  italic,
}: {
  value: number;
  label: string;
  italic?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-5xl sm:text-6xl md:text-7xl leading-none select-none"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 700,
          fontStyle: italic ? "italic" : "normal",
          color: "#1a1f2e",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span className="font-mono text-xs sm:text-sm text-gray-600 mt-1">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="text-4xl sm:text-5xl md:text-6xl pb-5 select-none"
      style={{ color: "#1a1f2e", fontWeight: 700 }}
    >
      :
    </span>
  );
}

export function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET);

  return (
    <section
      className="relative w-full py-10 sm:py-14 px-4 sm:px-8 md:px-12 overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* Background ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="whitespace-nowrap font-black tracking-tight leading-none"
          style={{
            fontSize: "clamp(20px, 5vw, 120px)",
            // fontSize: "52px",
            color: "rgba(180, 214, 235, 0.55)",
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          New Location: Grand Opening
        </span>
      </div>

      {/* Countdown */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        <div className="flex items-end gap-4 sm:gap-6 md:gap-8">
          <CountUnit value={days} label="Days" />
          <Colon />
          <CountUnit value={hours} label="Hours" />
          <Colon />
          <CountUnit value={minutes} label="Minutes" italic />
          <Colon />
          <CountUnit value={seconds} label="Seconds" italic />
        </div>

        <GetNotified />
      </div>
    </section>
  );
}
