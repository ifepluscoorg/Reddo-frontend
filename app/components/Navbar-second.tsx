
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const NAV_ITEMS = [
  { label: "Book Space", href: "/BookSpacePage" },
  { label: "Gym", href: "/Gym" },
  { label: "Brew Cafe", href: "/BrewCafe" },
];

export default function NavbarSecond() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center pr-6">
          <Image
            src="/images/logo.png"
            alt="Reddo Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 mr-4" />

        {/* Page tabs */}
        <div className="flex items-center gap-1 flex-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 pb-1"
                style={{ color: isActive ? "#1BA3DC" : undefined }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ background: "#1BA3DC" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Sign in / Logout */}
        <div className="flex items-center gap-3 ml-4">
          {session?.user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/Signup"
              className="px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
