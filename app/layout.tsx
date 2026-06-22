import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Red_Rose,
  Zen_Dots,
  Architects_Daughter,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// My fonts

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  weight: "400",
  subsets: ["latin"],
});

const redRose = Red_Rose({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-red-rose",
  // display: 'swap',
  // You can specify weights if needed, e.g., weight: ['300', '400', '700']
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects-daughter",
});

// My fonts ends here
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coworking Space in VI | Flexible Workspaces & Meeting Rooms",
  description:
    "Book premium coworking spaces, private offices, meeting rooms and lifestyle in Victoria Island. Enjoy high-speed internet, a gym, cafe, relaxation lounge, laundry services, shared kitchen, co-living suite, and a vibrant professional community all in one location.",
  keywords: [
    // Primary keywords
    "coworking space in Victoria Island",
    "coworking space Lagos",
    "shared office space Lagos",
    "flexible workspace VI",
    "meeting rooms Victoria Island",
    "private office Lagos",
    "co-living space Lagos",
    "virtual office Victoria Island",
    "business hub Lagos",
    "coworking community Nigeria",
    "coworking space Victoria Island",
    "coworking space VI",
    "coworking space Lagos",
    "shared office Victoria Island",
    "office space Victoria Island",
    "serviced office Victoria Island",
    "serviced office Lagos",
    "workspace rental Victoria Island",
    "office space for rent Victoria Island",
    "business hub Victoria Island",

    // Commercial Intent Keywords
    "affordable coworking space Victoria Island",
    " cheap coworking space Lagos",
    "affordable office space VI",
    "office rent Victoria Island",
    "workspace near me",
    "meeting room Victoria Island",
    "meeting room rental VI",
    "conference room Victoria Island",
    "private office Victoria Island",
    "flexible workspace Lagos",

    // Competitor Keywords
    "Regus Victoria Island",
    "Regus Lagos",
    "Regus alternative Lagos",
    "coworking space like Regus",
    "serviced office like Regus",

    //Amenity Keywords
    "coworking space with fast internet",
    "office with high speed internet Lagos",
    "workspace with accommodation Lagos",
    "coworking space with gym",
    "coworking space with cafe",
    "serviced accommodation Victoria Island",
    "co-living space Lagos",
  ],
  // openGraph: {
  //   title: "Coworking Space in VI | Flexible Workspaces & Meeting Rooms",
  //   description:
  //     "Book premium coworking spaces, private offices, meeting rooms and lifestyle in Victoria Island.",
  //   url: "https://yourwebsite.com",
  //   siteName: "Reddo Workspace",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Coworking Space in Victoria Island",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${redRose.variable} ${zenDots.variable} ${architectsDaughter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
