"use client";

import {
  MapPin,
  Mail,
  Phone,
  //   Instagram,
  //   Facebook,
  //   Twitter,
  //   Linkedin,
  //   Youtube,
} from "lucide-react";
import Image from "next/image";

// const SOCIAL_ICONS = [Instagram, Twitter, Facebook, Linkedin, Youtube];

export default function Footer() {
  return (
    <footer className="bg-easer1 text-black py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Reddo Logo"
                width={120}
                height={40}
              />
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-5">
              Nigeria&apos;s most inspiring coworking and productivity space —
              built for the bold.
            </p>
            {/* <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Spaces */}
          <div>
            <p className="font-bold text-foreground text-sm mb-4">Spaces</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Hot Desks",
                "Private Offices",
                "Meeting Rooms",
                "Event Hall",
                "Lounge",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold text-foreground text-sm mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "Blog", "Careers", "Press", "Partners"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-foreground text-sm mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-primary"
                />
                <span>17 Kofo Abayomi St, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={14} className="text-primary" />
                <a
                  href="mailto:hello@reddo.ng"
                  className="hover:text-foreground transition-colors"
                >
                  hello@reddo.ng
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={14} className="text-primary" />
                <a
                  href="tel:+2341234567890"
                  className="hover:text-foreground transition-colors"
                >
                  +234 123 456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="font-bold text-foreground text-sm mb-4">Locations</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Victoria Island",
                "Lekki Phase 1",
                "Yaba Tech Hub",
                "Ikeja GRA",
                "Coming Soon: Abuja",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Reddo Workspaces. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground text-xs hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
