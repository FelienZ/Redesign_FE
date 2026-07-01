import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { gamesData } from "@/assets/data/games";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Filter,
  ArrowLeft,
  Search,
  X,
  ChevronRight
} from "lucide-react";
import Footer from "@/layout/footer";

const ratingFilters = [
  { value: "all", label: "Semua Rating", color: "bg-slate-700", text: "text-white" },
  { value: "3", label: "3+ Semua Umur", color: "bg-[oklch(0.65_0.20_145)]", text: "text-white" },
  { value: "7", label: "7+ Anak", color: "bg-[oklch(0.72_0.18_125)]", text: "text-white" },
  { value: "13", label: "13+ Remaja", color: "bg-[oklch(0.68_0.19_75)]", text: "text-white" },
  { value: "15", label: "15+ Dewasa Muda", color: "bg-[oklch(0.58_0.21_50)]", text: "text-white" },
  { value: "18", label: "18+ Dewasa", color: "bg-[oklch(0.52_0.22_25)]", text: "text-white" }
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const ratingParam = searchParams.get("rating") || "all";

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedRating, setSelectedRating] = useState(ratingParam);

  // Sync state with URL params
  useEffect(() => {
    setSearchQuery(queryParam);
    setSelectedRating(ratingParam);
  }, [queryParam, ratingParam]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      newParams.set("q", searchQuery);
    } else {
      newParams.delete("q");
    }
    setSearchParams(newParams);
  };

  const handleRatingFilter = (ratingValue: string) => {
    setSelectedRating(ratingValue);
    const newParams = new URLSearchParams(searchParams);
    if (ratingValue !== "all") {
      newParams.set("rating", ratingValue);
    } else {
      newParams.delete("rating");
    }
    setSearchParams(newParams);
  };

  const clearFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("rating");
    setSelectedRating("all");
    setSearchParams(newParams);
  };

  // Filter games based on search query and rating
  const filteredGames = gamesData.filter((game) => {
    const matchesQuery =
      searchQuery === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRating =
      selectedRating === "all" || game.rating.toString() === selectedRating;

    return matchesQuery && matchesRating;
  });

  const getRatingColor = (rating: number) => {
    switch (rating) {
      case 3:
        return "bg-[oklch(0.65_0.20_145)]";
      case 7:
        return "bg-[oklch(0.72_0.18_125)]";
      case 13:
        return "bg-[oklch(0.68_0.19_75)]";
      case 15:
        return "bg-[oklch(0.58_0.21_50)]";
      case 18:
        return "bg-[oklch(0.52_0.22_25)]";
      default:
        return "bg-slate-700";
    }
  };

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 3:
        return "Semua Umur";
      case 7:
        return "Anak";
      case 13:
        return "Remaja";
      case 15:
        return "Dewasa Muda";
      case 18:
        return "Dewasa";
      default:
        return "";
    }
  };

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Top Banner / Search bar container */}
      <div className="pt-20 pb-8 px-4 md:px-12 bg-linear-to-b from-blue-950/40 to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition flex items-center gap-1">
              <ArrowLeft className="size-3" /> Beranda
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Hasil Pencarian</span>
          </nav>

          {/* Search Input Bar */}
          <form onSubmit={handleSearchSubmit} className="flex max-w-3xl mt-4 w-full shadow-lg rounded-md overflow-hidden bg-slate-900 border border-slate-700/50">
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-4 size-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari nama game, publisher, genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-transparent border-none text-white placeholder-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            <Button type="submit" className="bg-destructive hover:bg-destructive/90 text-white font-semibold px-8 py-6 rounded-none border-none transition">
              Cari
            </Button>
          </form>

          {/* Results Summary */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <span>
              <strong className="text-emerald-400">{filteredGames.length}</strong> gim ditemukan
              {searchQuery && (
                <span>
                  {" "}
                  untuk <strong className="text-emerald-400">"{searchQuery}"</strong>
                </span>
              )}
            </span>
            {selectedRating !== "all" && (
              <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold">
                Rating: {selectedRating}+ {getRatingText(parseInt(selectedRating))}
                <button onClick={clearFilter} className="hover:text-white transition ml-1">
                  <X className="size-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout: Filter Sidebar & Results Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 pb-20 flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Filter Rating Sidebar */}
        <aside className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 shadow-xl backdrop-blur-xs">
            <h3 className="text-md font-bold text-slate-100 flex items-center gap-2 pb-4 border-b border-slate-800/80 mb-4">
              <Filter className="size-4 text-destructive" /> Filter Rating
            </h3>
            <div className="flex flex-col gap-2">
              {ratingFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => handleRatingFilter(filter.value)}
                  className={`flex items-center gap-3 w-full p-2.5 rounded-lg text-left text-xs md:text-sm font-medium transition-all ${
                    selectedRating === filter.value
                      ? "bg-destructive/15 border border-destructive text-white"
                      : "bg-slate-950/40 border border-transparent text-slate-300 hover:bg-slate-800/40 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-9 h-6 flex items-center justify-center rounded font-pixel text-sm font-bold text-center shrink-0 ${filter.color} ${filter.text}`}
                  >
                    {filter.value === "all" ? "All" : `${filter.value}+`}
                  </span>
                  <span className="truncate">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Column: Results Grid */}
        <main className="lg:col-span-3">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="group bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:border-slate-700/80 hover:bg-slate-900/70 flex flex-col justify-between"
                >
                  {/* Card Banner Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Top Right Genre */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-slate-200 text-xs px-2.5 py-1 rounded font-semibold border border-white/10 uppercase tracking-wide">
                      {game.genre}
                    </div>
                    {/* Bottom Left Rating Badge */}
                    <div className="absolute bottom-3 left-3 flex flex-col items-center justify-center w-12 h-12 rounded shadow-lg bg-orange-600/90 text-white font-bold leading-none backdrop-blur-xs select-none">
                      <span className="font-pixel text-lg leading-none">{game.rating}+</span>
                      <span className="text-[9px] font-bold tracking-wider leading-none">IGRS</span>
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-lg md:text-xl text-slate-100 group-hover:text-destructive transition duration-200">
                        {game.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                          {game.publisher}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3 text-slate-500" />
                          {game.releaseYear}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-300/90 line-clamp-3 mt-1 leading-relaxed">
                        {game.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* Rating Label & Platform */}
                      <div className="flex items-center justify-between flex-wrap gap-2 border-t border-slate-800/80 pt-3">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getRatingColor(game.rating)}/15 text-white border border-${getRatingColor(game.rating)}/20`}
                        >
                          {game.rating}+ — {getRatingText(game.rating)}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          {game.platforms.includes("iOS") && (
                            <Badge className="bg-slate-800 text-slate-300 text-[10px] hover:bg-slate-800 flex items-center gap-0.5 px-2 py-0.5 rounded">
                              iOS
                            </Badge>
                          )}
                          {game.platforms.includes("Android") && (
                            <Badge className="bg-slate-800 text-slate-300 text-[10px] hover:bg-slate-800 flex items-center gap-0.5 px-2 py-0.5 rounded">
                              Android
                            </Badge>
                          )}
                          {game.platforms.includes("PC") && (
                            <Badge className="bg-slate-800 text-slate-300 text-[10px] hover:bg-slate-800 flex items-center gap-0.5 px-2 py-0.5 rounded">
                              PC
                            </Badge>
                          )}
                          {game.platforms.includes("Xbox") && (
                            <Badge className="bg-slate-800 text-slate-300 text-[10px] hover:bg-slate-800 flex items-center gap-0.5 px-2 py-0.5 rounded">
                              Xbox
                            </Badge>
                          )}
                          {game.platforms.includes("PS4") && (
                            <Badge className="bg-slate-800 text-slate-300 text-[10px] hover:bg-slate-800 flex items-center gap-0.5 px-2 py-0.5 rounded">
                              PS4
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Content Descriptors */}
                      <div className="flex flex-wrap gap-1.5">
                        {game.descriptors.map((desc) => (
                          <span
                            key={desc}
                            className="text-[10px] md:text-xs text-destructive border border-destructive/35 bg-destructive/5 px-2 py-0.5 rounded font-medium"
                          >
                            {desc}
                          </span>
                        ))}
                      </div>

                      {/* Detail Link */}
                      <Link
                        to={`/game/${game.id}`}
                        className="text-xs md:text-sm text-yellow-500 font-semibold flex items-center gap-1 hover:text-yellow-400 hover:translate-x-1 transition duration-200 mt-1 self-start"
                      >
                        Lihat Detail <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/20 border border-slate-800/80 rounded-xl backdrop-blur-xs flex flex-col items-center justify-center gap-4">
              <Search className="size-12 text-slate-500" />
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-slate-200">Gim Tidak Ditemukan</h4>
                <p className="text-sm text-slate-400 max-w-md">
                  Kami tidak dapat menemukan gim dengan kriteria pencarian Anda. Silakan coba kata kunci lain atau bersihkan filter.
                </p>
              </div>
              <Button onClick={() => { setSearchQuery(""); clearFilter(); }} className="bg-destructive hover:bg-destructive/90 text-white mt-2">
                Reset Pencarian & Filter
              </Button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </section>
  );
}
