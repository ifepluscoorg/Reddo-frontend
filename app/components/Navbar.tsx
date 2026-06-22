"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = ["Locations", "Virtual Tour", "Reddo Living", "Blog"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Reddo Logo"
            width={120}
            height={40}
          />
          {/* <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                R
              </span>
            </div>
            <span className="font-bold text-foreground text-lg tracking-tight">
              Reddo
            </span>
          </div> */}

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2 bg-d-accent text-white text-sm font-semibold rounded-full hover:bg-d-accent/80 transition-colors">
              Book Space
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-foreground"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-accent/50 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground font-medium px-2 py-1"
              >
                {link}
              </a>
            ))}
            <button className="mt-2 px-5 py-2 bg-d-accent text-white text-sm font-semibold rounded-full w-fit">
              Book Space
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
