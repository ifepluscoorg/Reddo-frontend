"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { ChevronDown, Search, Bookmark, X } from "lucide-react";
import SpaceCard from "./components/SpaceCard";
import BookingPanel from "./components/BookingPanel";
import { getWorkspaces } from "../../actions/spaces";
import { mapWorkspaceToSpaceItem } from "../../lib/utils";
import { LOCATIONS, SPACE_CATEGORIES, CATEGORY_TO_BACKEND, INITIAL_NEW } from "../../lib/data";
import type { SpaceItem } from "../../lib/types";
import { toast } from "sonner";


interface BookSpaceClientProps {
  initialSpaces: SpaceItem[];
  initialOccupiedIds: string[];
}

const SEARCH_DEBOUNCE_MS = 350;

export default function BookSpaceClient({
  initialSpaces,
  initialOccupiedIds,
}: BookSpaceClientProps) {
  // ── Live workspace data (fetched via server action) ──
  const [spaces, setSpaces] = useState<SpaceItem[]>(initialSpaces);
  const [occupiedIds, setOccupiedIds] = useState<Set<string>>(
    new Set(initialOccupiedIds)
  );
  

  // ── Favourite / New state (no backend equivalent — stays client-only) ──
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [newIds, setNewIds] = useState<Set<string>>(INITIAL_NEW);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleNew = (id: string) => {
    setNewIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // ── Location (pure frontend UI — backend is single-location) ──
  const [selectedLocationId, setSelectedLocationId] = useState(LOCATIONS[0].id);
  const [locationOpen, setLocationOpen] = useState(false);

  // ── Filters ──
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [availFilter, setAvailFilter] = useState<"all" | "available" | "taken">(
    "all",
  );
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // ── Booking panel ──
  const [selectedSpace, setSelectedSpace] = useState<SpaceItem | null>(null);

  const location =
    LOCATIONS.find((l) => l.id === selectedLocationId) ?? LOCATIONS[0];

  // ── Debounce the search input before it drives a re-fetch ──
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedSearch(searchQuery),
      SEARCH_DEBOUNCE_MS,
    );
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // ── Re-query the backend whenever a server-driven filter changes ──
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      // Skip the run that would just re-fetch what the server already sent.
      isFirstRun.current = false;
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const workspaces = await getWorkspaces({
          search: debouncedSearch || undefined,
          category:
            categoryFilter !== "All"
              ? CATEGORY_TO_BACKEND[categoryFilter]
              : undefined,
          is_available:
            availFilter === "all" ? undefined : availFilter === "available",
        });
        if (cancelled) return;
        setSpaces(workspaces.map(mapWorkspaceToSpaceItem));
         toast.success("Filter successful", {
         position : "top-right"
         });
        setOccupiedIds(
          new Set(workspaces.filter((w) => !w.is_available).map((w) => w.id)),
        );
      } catch (err) {
        console.error("Failed to refresh workspaces:", err);
        toast.error("Failed to refresh workspaces", {
          position : "top-right"
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [debouncedSearch, categoryFilter, availFilter]);

  // ── Favourites is the only filter left to apply client-side ──
  const filteredSpaces = useMemo(() => {
    if (!showFavoritesOnly) return spaces;
    return spaces.filter((s) => favoriteIds.has(s.id));
  }, [spaces, showFavoritesOnly, favoriteIds]);

  const handleCardClick = (space: SpaceItem) => {
    setSelectedSpace((prev) => (prev?.id === space.id ? null : space));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setAvailFilter("all");
    setShowFavoritesOnly(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="px-6 pt-8 pb-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-sky-500 mb-2">
            FIND . FILTER . BOOK
          </p>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 tracking-wide mb-5">
            Choose&nbsp;your&nbsp;
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                color: "#1BA3DC",
                fontWeight: 600,
                fontSize: "1.05em",
              }}
            >
              space
            </span>
          </h1>

          {/* Location selector */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <div className="relative">
              <button
                onClick={() => setLocationOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 bg-white transition-colors"
              >
                <span className="max-w-52 truncate">{location.name}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${locationOpen ? "rotate-180" : ""}`}
                />
              </button>

              {locationOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-10">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setSelectedLocationId(loc.id);
                        setLocationOpen(false);
                        setSelectedSpace(null);
                        setCategoryFilter("All");
                        setSearchQuery("");
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        loc.id === selectedLocationId
                          ? "bg-sky-50 text-sky-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-sm text-gray-500">
              {spaces.length} spaces across {location.floors}{" "}
              {location.floors !== 1 ? "floors" : "floor"}
            </span>
          </div>

          {/* ── Filter bar ── */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-52">
              <Search
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Category dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoryOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>{categoryFilter}</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {categoryOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-10">
                  {["All", ...SPACE_CATEGORIES].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategoryFilter(cat);
                        setCategoryOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        cat === categoryFilter
                          ? "bg-sky-50 text-sky-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Favourites toggle */}
            <button
              onClick={() => setShowFavoritesOnly((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                showFavoritesOnly
                  ? "bg-amber-50 border-amber-300 text-amber-700"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Bookmark
                size={13}
                className={
                  showFavoritesOnly
                    ? "fill-amber-500 text-amber-500"
                    : "text-gray-500"
                }
              />
              <span>Favourite</span>
              {favoriteIds.size > 0 && (
                <span
                  className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: "#F5C842", color: "#7a5300" }}
                >
                  {favoriteIds.size}
                </span>
              )}
            </button>

            {/* All / Available / Taken */}
            <div className="flex items-center rounded-full border border-gray-200 bg-gray-100 p-0.5 text-sm">
              {(["all", "available", "taken"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setAvailFilter(v)}
                  className={`px-3 py-1.5 rounded-full capitalize font-medium transition-all duration-200 ${
                    availFilter === v
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {v === "all"
                    ? "All"
                    : v === "available"
                      ? "Available"
                      : "Taken"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Card grid + booking panel ── */}
      <div className="relative">
        <main
          className="px-6 py-6 bg-gray-50 min-h-96 transition-all duration-300"
          style={{
            paddingRight: selectedSpace ? "calc(1.5rem + 400px)" : "1.5rem",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs text-gray-400 mb-4 font-medium">
              {filteredSpaces.length} space
              {filteredSpaces.length !== 1 ? "s" : ""} found
            </p>

            {filteredSpaces.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Search size={22} className="text-gray-300" />
                </div>
                <p className="text-gray-500 font-medium">
                  No spaces match your filters
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-sky-500 hover:text-sky-600 font-medium underline underline-offset-2"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSpaces.map((space) => (
                  <SpaceCard
                    key={space.id}
                    space={space}
                    isOccupied={occupiedIds.has(space.id)}
                    isNew={newIds.has(space.id)}
                    isFavorite={favoriteIds.has(space.id)}
                    isSelected={selectedSpace?.id === space.id}
                    onToggleFavorite={() => toggleFavorite(space.id)}
                    onToggleNew={() => toggleNew(space.id)}
                    onClick={() => handleCardClick(space)}
                  />
                ))}
              </div>
            )}
          </div>
        </main>

        {selectedSpace && (
          <BookingPanel
            space={selectedSpace}
            onClose={() => setSelectedSpace(null)}
          />
        )}
      </div>
    </div>
  );
}
