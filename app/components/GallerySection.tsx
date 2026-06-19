import BookTourForm from "./BookTourForm";

const TILES = [
  { bg: "bg-primary", label: "Open Area" },
  { bg: "bg-primary/90", label: "Private Office" },
  { bg: "bg-primary/70", label: "Meeting Room" },
  { bg: "bg-primary/80", label: "Lounge" },
  { bg: "bg-primary/75", label: "Café" },
  { bg: "bg-primary/85", label: "Rooftop" },
];

export default function GallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col  justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-2">
              Inside Reddo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Come see it{" "}
              <span
                style={{ fontFamily: "'Caveat', cursive" }}
                className="text-primary text-4xl sm:text-5xl"
              >
                for yourself
              </span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground ">
            Take a walk through our space — every corner is designed to inspire.
          </p>
        </div>

        <BookTourForm />
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TILES.map((tile, i) => (
            <div
              key={tile.label}
              className={`${tile.bg} rounded-2xl overflow-hidden ${i === 0 ? "row-span-2" : ""} min-h-[140px] sm:min-h-[180px] relative group`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
