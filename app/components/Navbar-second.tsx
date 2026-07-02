// "use client";

// import { useSession } from "next-auth/react";
// import { NAV_ITEMS } from "../lib/data";
// import type { NavPage } from "../lib/types";

// interface NavbarProps {
//   activePage: NavPage;
//   setActivePage: (page: NavPage) => void;
// }

// export default function NavbarSecond({
//   activePage,
//   setActivePage,
// }: NavbarProps) {

//   const { data : session } = useSession();
//   return (
//     <nav className="w-full bg-white border-b border-gray-100 px-6 sticky top-0 z-20">
//       <div className="max-w-7xl mx-auto flex items-center h-16">
//         {/* Logo */}
//         <div className="flex items-center gap-2 pr-6">
//           <div
//             className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
//             style={{ background: "linear-gradient(135deg,#1BA3DC,#0f8ab8)" }}
//           >
//             R
//           </div>
//           <div className="leading-none">
//             <div className="font-bold text-sm text-gray-900">Reddo</div>
//             <div className="font-bold text-sm text-gray-900">Workspace</div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-px h-8 bg-gray-200 mr-4" />

//         {/* Page tabs */}
//         <div className="flex items-center gap-1">
//           {NAV_ITEMS.map((item) => {
//             const active = item.id === activePage;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActivePage(item.id)}
//                 className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
//                   active
//                     ? "border border-sky-400 text-sky-600"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }

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
