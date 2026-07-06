import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ChevronRight,
  Filter,
  Infinity as InfinityLogo,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Footer from "@/layout/footer";
import useGames from "@/utils/hooks/games/useGames";
import useGameFilters from "@/utils/hooks/games/useGameFilters";
import ImageWithFallback from "@/components/ui/imageWithFallback";
import { GameSectionSkeleton } from "@/components/custom/skeletons";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const ratingParam = searchParams.get("rating") || "semua-umur";
  const selectedRating = ratingParam || "semua-umur";
  const [searchQuery, setSearchQuery] = useState(queryParam);

  const {
    data: gamesResponse,
    isLoading,
    isError,
  } = useGames({
    search: queryParam || undefined,
    rating: selectedRating,
  });

  const { ratings, isLoading: isFilterLoading } = useGameFilters();

  const filteredGames = gamesResponse?.data || [];

  const updateParams = (nextQuery: string, nextRating: string) => {
    const nextParams = new URLSearchParams();

    if (nextQuery.trim()) {
      nextParams.set("q", nextQuery.trim());
    }

    if (nextRating !== "semua-umur") {
      nextParams.set("rating", nextRating);
    }

    setSearchParams(nextParams);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams(searchQuery, selectedRating);
  };

  const handleRatingFilter = (ratingValue: string) => {
    updateParams(searchQuery, ratingValue);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setSearchParams(new URLSearchParams());
  };

  // Find the selected rating label for the top badge
  const selectedRatingObj = ratings.find(
    (r) => String(r.minimumAge) === selectedRating,
  );
  const selectedRatingLabel = selectedRatingObj?.label || "";

  return (
    <section className="flex min-h-screen flex-col justify-between bg-background text-slate-100">
      <div className="bg-linear-to-b from-blue-950/35 to-transparent px-4 pb-8 pt-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <nav className="flex items-center gap-2 text-xs text-slate-400 md:text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 transition hover:text-white"
            >
              <ArrowLeft className="size-3" /> Beranda
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-200">
              Hasil Pencarian
            </span>
          </nav>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-heading">
              Direktori Gim IGRS
            </span>
            <h1 className="text-3xl font-extrabold text-white font-heading md:text-5xl">
              Temukan rating gim sebelum bermain
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Cari berdasarkan judul, publisher, genre, atau gunakan filter
              rating usia.
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
            <Button
              type="submit"
              className="h-auto rounded-none bg-destructive px-6 text-white hover:bg-destructive/90 md:px-8"
            >
              Cari
            </Button>
          </form>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <strong className="text-emerald-400">{filteredGames.length}</strong>
            <span>gim ditemukan</span>
            {queryParam && (
              <span>
                untuk{" "}
                <strong className="text-emerald-400">"{queryParam}"</strong>
              </span>
            )}
            {selectedRating !== "semua-umur" && (
              <Badge
                className={`bg-(--rating-${selectedRating}-soft) text-(--rating-${selectedRating}-solid) border border-(--rating-${selectedRating}-solid) h-auto rounded-full px-3 py-1`}
              >
                Rating {selectedRating}+ {selectedRatingLabel}
                <button
                  type="button"
                  onClick={() => handleRatingFilter("semua-umur")}
                  className="ml-1 hover:text-white"
                >
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
              <button
                type="button"
                onClick={() => handleRatingFilter("dewasa")}
                className={`flex w-full items-center gap-3 rounded-lg border p-2.5 text-left text-sm font-medium transition ${
                  selectedRating === "semua-umur"
                    ? "border-destructive bg-destructive/15 text-white"
                    : "border-transparent bg-slate-950/40 text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-6 w-10 shrink-0 items-center justify-center rounded font-pixel text-sm font-bold text-white bg-slate-700`}
                >
                  <InfinityLogo className="size-4" />
                </span>
                <span className="min-w-0 truncate">Semua Rating</span>
              </button>

              {isFilterLoading ? (
                <div className="text-xs text-slate-500 p-2">
                  Memuat filter...
                </div>
              ) : (
                ratings.map((filter) => (
                  <button
                    key={filter.slug}
                    type="button"
                    onClick={() => handleRatingFilter(String(filter.slug))}
                    className={`flex w-full items-center gap-3 rounded-lg border p-2.5 text-left text-sm font-medium transition ${
                      selectedRating === String(filter.minimumAge)
                        ? "border-destructive bg-destructive/15 text-white"
                        : "border-transparent bg-slate-950/40 text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-10 shrink-0 items-center justify-center rounded font-pixel text-sm font-bold text-(--rating-${filter.minimumAge}-solid) bg-(--rating-${filter.minimumAge}-soft) border border-(--rating-${filter.minimumAge}-solid)/30`}
                    >
                      {filter.minimumAge}+
                    </span>
                    <span className="min-w-0 truncate">{filter.label}</span>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-100">
              <SlidersHorizontal className="size-4 text-amber-500" /> Tips
              pencarian
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Gunakan kata kunci singkat seperti nama gim, genre, atau publisher
              agar hasil lebih akurat.
            </p>
          </div>
        </aside>

        <main>
          {isLoading ? (
            <GameSectionSkeleton />
          ) : isError ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/25 py-20 text-center backdrop-blur-xs">
              <h4 className="text-lg font-bold text-slate-200">
                Gagal Memuat Gim
              </h4>
              <p className="max-w-md px-4 text-sm leading-relaxed text-slate-400">
                Terjadi kesalahan saat mengambil data dari server.
              </p>
            </div>
          ) : filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredGames.map((game) => {
                const ratingAge = game.rating?.minimumAge || 0;
                const primaryGenre = game.gameGenres?.[0]?.name || "-";

                return (
                  <Link
                    key={game.id}
                    to={`/game/${game.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/45 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-900/75"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                      <ImageWithFallback
                        src={game.thumbnailUrl}
                        alt={game.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute right-3 top-3 rounded border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200 backdrop-blur-xs">
                        {primaryGenre}
                      </div>
                      <div
                        className={`absolute bottom-3 left-3 flex size-12 flex-col items-center justify-center rounded text-white shadow-lg bg-(--rating-${ratingAge}-solid)`}
                      >
                        <span className="font-pixel text-lg font-bold leading-none">
                          {ratingAge}+
                        </span>
                        <span className="text-[9px] font-bold leading-none tracking-wider">
                          IGRS
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-slate-100 transition group-hover:text-destructive md:text-xl">
                          {game.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                          <span className="truncate">{game.slug}</span>
                        </div>
                        <p className="line-clamp-3 text-sm leading-relaxed text-slate-300/90">
                          {game.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 border-t border-slate-800/80 pt-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            className={`rounded-full border px-2.5 py-1 text-xs font-semibold bg-(--rating-${ratingAge}-soft) text-(--rating-${ratingAge}-solid) border-(--rating-${ratingAge}-solid)/30`}
                          >
                            {ratingAge}+ - {game.rating?.label || ""}
                          </span>
                        </div>
                        <span
                          className={`flex items-center gap-1 self-start text-sm font-semibold text-(--rating-${game.rating.minimumAge}-text) transition group-hover:translate-x-1 group-hover:text-(--rating-${game.rating.minimumAge}-text) mt-2`}
                        >
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
                <h4 className="text-lg font-bold text-slate-200">
                  Gim Tidak Ditemukan
                </h4>
                <p className="max-w-md px-4 text-sm leading-relaxed text-slate-400">
                  Coba kata kunci lain atau bersihkan filter rating yang sedang
                  aktif.
                </p>
              </div>
              <Button
                onClick={resetSearch}
                className="mt-2 bg-destructive text-white hover:bg-destructive/90"
              >
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
