// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Zen_Dots } from "next/font/google";
// import { useSession , signOut} from "next-auth/react";
// import Link from "next/link";

// const NAV_LINKS = [ "Virtual Tour","Workspaces", "Reddo Living", "Blog"];

// const zenDots = Zen_Dots({
//   variable: "--font-zen-dots",
//   weight: "400",
//   subsets: ["latin"],
// });

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { data : session } = useSession();
//   return (
//     <nav
//       className={`sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-sm ${zenDots.className}`}
//     >
//       <div className="max-w-6xl mx-auto max-[1100px]:px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Image
//             src="/images/logo.png"
//             alt="Reddo Logo"
//             width={120}
//             height={40}
//           />
//           {/* <div className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-sm">
//                 R
//               </span>
//             </div>
//             <span className="font-bold text-foreground text-lg tracking-tight">
//               Reddo
//             </span>
//           </div> */}

//           {/* Desktop nav */}
//           <div className="hidden md:flex items-center gap-7">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>

//           {/* Right actions */}
//           <div className="flex items-center gap-3">
//              {session?.user ?
//             (
//              <button  onClick={()=> signOut({
//                  callbackUrl: '/'
//              })} className=" px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]">
//               Logout
//             </button>
//             ) : (
//             <Link href="/Signup" className=" px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]">
//               SignUp
//             </Link>
//             )
//             }
//             <button
//               className="md:hidden p-2 rounded-lg text-foreground"
//               onClick={() => setMenuOpen((p) => !p)}
//               aria-label="Toggle menu"
//             >
//               <div className="w-5 h-0.5 bg-current mb-1" />
//               <div className="w-5 h-0.5 bg-current mb-1" />
//               <div className="w-5 h-0.5 bg-current" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {menuOpen && (
//           <div className="md:hidden border-t border-accent/50 py-4 flex flex-col gap-3">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="text-sm text-muted-foreground font-medium px-2 py-1"
//               >
//                 {link}
//               </a>
//             ))}
//             {session?.user ?
//             (
//              <button onClick={()=> signOut({
//                  callbackUrl: '/'
//              })} className="mt-2 px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]">
//               Logout
//             </button>
//             ) : (
//             <Link href="/Signup" className="mt-2 px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]">
//               SignUp
//             </Link>
//             )
//             }

//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { Zen_Dots } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Nav links — update href here when a page is ready ──────────────────────
const NAV_LINKS = [
  { label: "Virtual Tour", href: "#" }, // ← replace "#" when ready
  { label: "Workspaces", href: "/BookSpacePage" },
  { label: "Reddo Living", href: "/reddoliving" },
  { label: "Blog", href: "/blog" },
];

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav
      className={`sticky top-0 z-50 bg-card/90 backdrop-blur-md shadow-sm ${zenDots.className}`}
    >
      <div className="max-w-6xl mx-auto max-[1100px]:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Reddo Logo"
              width={120}
              height={40}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors pb-1"
                  style={{ color: isActive ? "#1BA3DC" : undefined }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "#1BA3DC" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
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

            {/* Mobile hamburger */}
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
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {session?.user ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="mt-2 px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/Signup"
                className="mt-2 px-5 py-2 bg-accent text-d-accent text-sm font-semibold rounded-sm w-fit shadow-[5px_4px_0px_#2AABE226]"
              >
                Sign Up
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
