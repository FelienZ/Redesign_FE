import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { gamesData, type Game } from "@/assets/data/games";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Footer from "@/layout/footer";

type RatingFilter = "all" | "3" | "7" | "13" | "15" | "18";

const ratingThemes: Record<RatingFilter, { label: string; badge: string; chip: string; text: string }> = {
  all: {
    label: "Semua Rating",
    badge: "bg-slate-700",
    chip: "bg-slate-800 text-slate-100 border-slate-700",
    text: "Semua rating",
  },
  "3": {
    label: "3+ Semua Umur",
    badge: "bg-[oklch(0.65_0.20_145)]",
    chip: "bg-[oklch(0.65_0.20_145)]/15 text-[oklch(0.85_0.22_145)] border-[oklch(0.65_0.20_145)]/30",
    text: "Semua Umur",
  },
  "7": {
    label: "7+ Anak",
    badge: "bg-[oklch(0.72_0.18_125)]",
    chip: "bg-[oklch(0.72_0.18_125)]/15 text-[oklch(0.88_0.20_125)] border-[oklch(0.72_0.18_125)]/30",
    text: "Anak",
  },
  "13": {
    label: "13+ Remaja",
    badge: "bg-[oklch(0.68_0.19_75)]",
    chip: "bg-[oklch(0.68_0.19_75)]/15 text-[oklch(0.85_0.18_75)] border-[oklch(0.68_0.19_75)]/30",
    text: "Remaja",
  },
  "15": {
    label: "15+ Dewasa Muda",
    badge: "bg-[oklch(0.58_0.21_50)]",
    chip: "bg-[oklch(0.58_0.21_50)]/15 text-[oklch(0.82_0.20_50)] border-[oklch(0.58_0.21_50)]/30",
    text: "Dewasa Muda",
  },
  "18": {
    label: "18+ Dewasa",
    badge: "bg-[oklch(0.52_0.22_25)]",
    chip: "bg-[oklch(0.52_0.22_25)]/15 text-[oklch(0.80_0.22_25)] border-[oklch(0.52_0.22_25)]/30",
    text: "Dewasa",
  },
};

const ratingFilters = Object.entries(ratingThemes).map(([value, theme]) => ({
  value: value as RatingFilter,
  ...theme,
}));

function getGameRatingTheme(rating: Game["rating"]) {
  return ratingThemes[String(rating) as RatingFilter];
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const ratingParam = (searchParams.get("rating") || "all") as RatingFilter;

  const selectedRating: RatingFilter = ratingParam in ratingThemes ? ratingParam : "all";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  const updateParams = (nextQuery: string, nextRating: RatingFilter) => {
    const nextParams = new URLSearchParams();

    if (nextQuery.trim()) {
      nextParams.set("q", nextQuery.trim());
    }

    if (nextRating !== "all") {
      nextParams.set("rating", nextRating);
    }

    setSearchParams(nextParams);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams(searchQuery, selectedRating);
  };

  const handleRatingFilter = (ratingValue: RatingFilter) => {
    updateParams(searchQuery, ratingValue);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setSearchParams(new URLSearchParams());
  };

  const filteredGames = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return gamesData.filter((game) => {
      const matchesQuery =
        normalizedQuery === "" ||
        [game.title, game.publisher, game.genre, game.description]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesRating =
        selectedRating === "all" || game.rating.toString() === selectedRating;

      return matchesQuery && matchesRating;
    });
  }, [searchQuery, selectedRating]);

  return (
    <section className="flex min-h-screen flex-col justify-between bg-background text-slate-100">
      <div className="bg-linear-to-b from-blue-950/35 to-transparent px-4 pb-8 pt-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <nav className="flex items-center gap-2 text-xs text-slate-400 md:text-sm">
            <Link to="/" className="flex items-center gap-1 transition hover:text-white">
              <ArrowLeft className="size-3" /> Beranda
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-200">Hasil Pencarian</span>
          </nav>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-heading">
              Direktori Gim IGRS
            </span>
            <h1 className="text-3xl font-extrabold text-white font-heading md:text-5xl">
              Temukan rating gim sebelum bermain
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Cari berdasarkan judul, publisher, genre, atau gunakan filter rating usia.
            </p>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full max-w-3xl overflow-hidden rounded-lg border border-slate-700/70 bg-slate-950/80 shadow-lg"
          >
            <div className="relative flex flex-1 items-center">
              <Search className="absolute left-4 size-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari nama gim, publisher, genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-none bg-transparent py-6 pl-12 pr-10 text-white placeholder-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Bersihkan kata kunci"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            <Button type="submit" className="h-auto rounded-none bg-destructive px-6 text-white hover:bg-destructive/90 md:px-8">
              Cari
            </Button>
          </form>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <strong className="text-emerald-400">{filteredGames.length}</strong>
            <span>gim ditemukan</span>
            {queryParam && (
              <span>
                untuk <strong className="text-emerald-400">"{queryParam}"</strong>
              </span>
            )}
            {selectedRating !== "all" && (
              <Badge className={`${ratingThemes[selectedRating].chip} h-auto rounded-full px-3 py-1`}>
                Rating {selectedRating}+ {ratingThemes[selectedRating].text}
                <button type="button" onClick={() => handleRatingFilter("all")} className="ml-1 hover:text-white">
                  <X className="size-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-4 pb-20 md:px-12 lg:grid-cols-[280px_1fr]">
        <aside className="flex flex-col gap-5">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/55 p-5 shadow-xl backdrop-blur-xs">
            <h3 className="mb-4 flex items-center gap-2 border-b border-slate-800/80 pb-4 text-sm font-bold text-slate-100">
              <Filter className="size-4 text-destructive" /> Filter Rating
            </h3>
            <div className="flex flex-col gap-2">
              {ratingFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => handleRatingFilter(filter.value)}
                  className={`flex w-full items-center gap-3 rounded-lg border p-2.5 text-left text-sm font-medium transition ${
                    selectedRating === filter.value
                      ? "border-destructive bg-destructive/15 text-white"
                      : "border-transparent bg-slate-950/40 text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  <span className={`flex h-6 w-10 shrink-0 items-center justify-center rounded font-pixel text-sm font-bold text-white ${filter.badge}`}>
                    {filter.value === "all" ? "All" : `${filter.value}+`}
                  </span>
                  <span className="min-w-0 truncate">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-100">
              <SlidersHorizontal className="size-4 text-amber-500" /> Tips pencarian
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Gunakan kata kunci singkat seperti nama gim, genre, atau publisher agar hasil lebih akurat.
            </p>
          </div>
        </aside>

        <main>
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredGames.map((game) => {
                const ratingTheme = getGameRatingTheme(game.rating);

                return (
                  <Link
                    key={game.id}
                    to={`/game/${game.id}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/45 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-900/75"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                      <img
                        src={game.imageUrl}
                        alt={game.title}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: game.imagePosition || "center", objectFit: game.imageFit || "cover" }}
                      />
                      <div className="absolute right-3 top-3 rounded border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200 backdrop-blur-xs">
                        {game.genre}
                      </div>
                      <div className={`absolute bottom-3 left-3 flex size-12 flex-col items-center justify-center rounded text-white shadow-lg ${ratingTheme.badge}`}>
                        <span className="font-pixel text-lg font-bold leading-none">{game.rating}+</span>
                        <span className="text-[9px] font-bold leading-none tracking-wider">IGRS</span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-slate-100 transition group-hover:text-destructive md:text-xl">
                          {game.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                          <span>{game.publisher}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3 text-slate-500" />
                            {game.releaseYear}
                          </span>
                        </div>
                        <p className="line-clamp-3 text-sm leading-relaxed text-slate-300/90">
                          {game.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 border-t border-slate-800/80 pt-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${ratingTheme.chip}`}>
                            {game.rating}+ - {ratingTheme.text}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {game.platforms.slice(0, 3).map((platform) => (
                              <Badge key={platform} className="h-auto rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 hover:bg-slate-800">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {game.descriptors.slice(0, 3).map((desc) => (
                            <span
                              key={desc}
                              className="rounded border border-destructive/35 bg-destructive/5 px-2 py-0.5 text-[11px] font-medium text-destructive"
                            >
                              {desc}
                            </span>
                          ))}
                        </div>

                        <span className="flex items-center gap-1 self-start text-sm font-semibold text-yellow-500 transition group-hover:translate-x-1 group-hover:text-yellow-400">
                          Lihat Detail <ChevronRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/25 py-20 text-center backdrop-blur-xs">
              <Search className="size-12 text-slate-500" />
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-slate-200">Gim Tidak Ditemukan</h4>
                <p className="max-w-md px-4 text-sm leading-relaxed text-slate-400">
                  Coba kata kunci lain atau bersihkan filter rating yang sedang aktif.
                </p>
              </div>
              <Button onClick={resetSearch} className="mt-2 bg-destructive text-white hover:bg-destructive/90">
                Reset Pencarian
              </Button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </section>
  );
}
