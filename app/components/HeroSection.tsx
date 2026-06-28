"use client";

// import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import BlueMascot from "./BlueMascot";
import { CountdownSection } from "./CountdownSection";
import { Zen_Dots, Red_Rose, Architects_Daughter } from "next/font/google";
// import Countdown from "./Countdown";

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  weight: "400",
  subsets: ["latin"],
});

const redRose = Red_Rose({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  // const targetMs =
  //   Date.now() + 10 * 86400000 + 22 * 3600000 + 7 * 60000 + 15000;
  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div
              className={`flex items-center gap-2 text-sm text-muted-foreground font-medium uppercase ${architectsDaughter.className}`}
            >
              <MapPin size={14} className="text-d-accent" />
              <span>Victoria Island, Lagos</span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl lg:text-6xl font-bold text-foreground leading-tight ${redRose.className}`}
            >
              Fueling Creative Minds,{" "}
              <span className="text-primary">Boosting</span> Productivity
            </h1>

            <p
              className={`text-muted-foreground text-base leading-relaxed max-w-md ${architectsDaughter.className}`}
            >
              Premium coworking spaces, private offices, think tank suites and
              event halls for bold minds and growing teams.
            </p>

            <div className={`flex flex-wrap gap-6 ${zenDots.className}`}>
              <button className="px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm hover:bg-accent/80 transition-colors shadow-[5px_4px_0px_#2AABE226]">
                Book Space
              </button>
              <button className="px-6 py-3 border-2 border-accent text-foreground font-semibold rounded-sm hover:bg-accent hover:text-d-accent transition-colors text-sm shadow-sm">
                Virtual Tour
              </button>
            </div>

            {/* <Countdown targetMs={targetMs} /> */}
          </div>

          {/* Right — mascot + floating stats */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <video
                className="inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/reddo-mascot.png"
              >
                <source src="/videos/Reddo-mascot-vid.mp4" type="video/mp4" />
              </video>
              {/* <Image
                src="/images/reddo-mascot.png"
                alt="Hero-mascot"
                width={224}
                height={224}
              /> */}
              {/* <BlueMascot className="w-56 h-auto drop-shadow-xl" /> */}
              <div className="absolute -top-4 -right-6 bg-d-accent text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg rotate-6">
                New Opening!
              </div>
              <div className="absolute bottom-10 -left-10 bg-card rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-muted-foreground">Active Members</p>
                <p className="text-xl font-bold text-foreground">1,200+</p>
              </div>
              <div className="absolute top-16 -right-10 bg-card rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-muted-foreground">
                  Spaces Available
                </p>
                <p className="text-xl font-bold text-primary">300</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CountdownSection />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
