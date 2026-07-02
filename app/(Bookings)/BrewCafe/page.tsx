"use client";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { CAFE_CATEGORIES, CAFE_MENU_ITEMS } from "../../lib/data";

interface BrewCafePageProps {
  locationName: string;
}

export default function BrewCafePage({ locationName }: BrewCafePageProps) {
  const [activeCatId, setActiveCatId] = useState(CAFE_CATEGORIES[0].id);

  const visibleItems = useMemo(
    () => CAFE_MENU_ITEMS.filter((item) => item.categoryId === activeCatId),
    [activeCatId],
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        {/* Title */}
        <h1
          className="text-5xl mb-3"
          style={{
            fontFamily: "'Caveat', cursive",
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          Brew <span style={{ color: "#1BA3DC" }}>Cafe</span>
        </h1>
        <p className="text-gray-500 text-sm mb-5 max-w-xl leading-relaxed">
          Our in-house café. Free to all members and guests. Fresh coffee, light
          bites and house specials.
        </p>

        {/* Location + hours */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors">
            <span>{locationName}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            Hours: Mon–Fri 7am–8pm · Sat 8am–4pm · Sun: Closed
          </span>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {CAFE_CATEGORIES.map((cat) => {
            const active = cat.id === activeCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCatId(cat.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0"
                style={
                  active
                    ? { background: "#1BA3DC", color: "#fff" }
                    : { background: "#f3f4f6", color: "#374151" }
                }
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-gray-900 text-base mb-1">
                {item.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="font-bold text-gray-800 text-sm">₦{item.price}</p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs text-gray-400 text-center mt-10 leading-relaxed">
          Menu items and prices subject to change. See our barista for today's
          specials. Oat milk available on request.
        </p>
      </div>
    </div>
  );
}
