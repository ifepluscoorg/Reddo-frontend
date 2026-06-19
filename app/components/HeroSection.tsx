// import { useRef } from "react";
import { MapPin } from "lucide-react";
import BlueMascot from "./BlueMascot";
import { CountdownSection } from "./CountdownSection";
// import Countdown from "./Countdown";

export default function HeroSection() {
  // const targetMs =
  //   Date.now() + 10 * 86400000 + 22 * 3600000 + 7 * 60000 + 15000;
  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <MapPin size={14} className="text-highlight" />
              <span>Victoria Island, Lagos</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-foreground leading-tight">
              Fueling Creative Minds,{" "}
              <span className="text-primary">Boosting</span> Productivity
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md ">
              Premium coworking spaces, private offices, think tank suites and
              event halls for bold minds and growing teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm shadow-md">
                Book Space
              </button>
              <button className="px-6 py-3 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-white transition-colors text-sm">
                Virtual Tour
              </button>
            </div>

            {/* <Countdown targetMs={targetMs} /> */}
          </div>

          {/* Right — mascot + floating stats */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <BlueMascot className="w-56 h-auto drop-shadow-xl" />
              <div className="absolute -top-4 -right-6 bg-highlight text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg rotate-6">
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
                <p className="text-xl font-bold text-primary">48</p>
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
