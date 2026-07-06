import { useState } from "react";
import { gamesData } from "@/assets/data/games";
import { Eye } from "lucide-react";
import Heart from "@/assets/elements/Heart.svg";
import { Link } from "react-router";
import useGames from "@/utils/hooks/games/useGames";
import { useLanguage } from "@/utils/LanguageContext";

export default function GameSection() {
  const [filterType, setFilterType] = useState<"popular" | "latest">("popular");
  const { language } = useLanguage();

  const { data: gamesResponse } = useGames({
    limit: 8,
    sortBy: filterType,
  });
  const apiGames = gamesResponse?.data?.data || [];

  const getMappedGame = (g: any) => {
    if (!g) return null;
    return {
      id: g.slug,
      title: g.title,
      publisher: g.publisher?.name || "Publisher Resmi",
      rating: g.rating?.minimumAge || 3,
      genre: g.gameGenres?.[0]?.name || "General",
      imageUrl: g.thumbnailUrl || "/Minecraft bg.jpg",
      viewers: g.viewCount || 0,
      releaseYear: g.releaseDate ? new Date(g.releaseDate).getFullYear() : 2024,
    };
  };

  const displayedGames = apiGames.length > 0
    ? (apiGames.map(getMappedGame).filter(Boolean) as any[])
    : [...gamesData]
        .sort((a, b) => {
          if (filterType === "popular") {
            return b.viewers - a.viewers;
          } else {
            return b.releaseYear - a.releaseYear || b.id - a.id;
          }
        })
        .slice(0, 8);

  return (
    <section id="game-list" className="p-4 md:p-8 flex flex-col gap-6 select-none max-w-7xl mx-auto w-full scroll-animate">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <img src={Heart} alt="Heart-logo" />
          <h2 className="font-extrabold text-2xl text-white font-heading tracking-tight">{language === "ID" ? "Gim di IGRS" : "Games in IGRS"}</h2>
        </div>
        <div className="flex bg-slate-950/60 p-1.5 rounded-xl border border-slate-800 self-start">
          <button
            onClick={() => setFilterType("popular")}
            className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
              filterType === "popular"
                ? "bg-destructive text-white shadow-md shadow-destructive/25 scale-[1.02]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {language === "ID" ? "Paling Populer" : "Most Popular"}
          </button>
          <button
            onClick={() => setFilterType("latest")}
            className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
              filterType === "latest"
                ? "bg-destructive text-white shadow-md shadow-destructive/25 scale-[1.02]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {language === "ID" ? "Terbaru" : "Newest"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
        {displayedGames.map((game) => (
          <Link
            key={game.id}
            to={`/game/${game.id}`}
            className="group flex flex-col bg-slate-900/30 border border-slate-800/80 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/50 shadow-md transition duration-300"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: game.imagePosition || "center", objectFit: game.imageFit || "cover" }}
              />
            </div>
            <div className="flex flex-col text-left py-4 px-5 gap-3 flex-1 justify-between">
              <div>
                <p className="font-bold text-base md:text-lg text-slate-100 group-hover:text-destructive transition duration-200 line-clamp-1">
                  {game.title}
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">{game.genre}</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800/50 pt-3 mt-1">
                <p
                  className="font-pixel text-[10px] font-bold px-2 py-0.5 rounded shadow-sm select-none"
                  style={{
                    color:
                      game.rating === 3
                        ? "oklch(0.65 0.20 145)"
                        : game.rating === 7
                          ? "oklch(0.72 0.18 125)"
                          : game.rating === 13
                            ? "oklch(0.68 0.19 75)"
                            : game.rating === 15
                              ? "oklch(0.58 0.21 50)"
                              : "oklch(0.52 0.22 25)",
                    backgroundColor:
                      game.rating === 3
                        ? "rgba(102, 204, 153, 0.15)"
                        : game.rating === 7
                          ? "rgba(153, 204, 102, 0.15)"
                          : game.rating === 13
                            ? "rgba(220, 153, 102, 0.15)"
                            : game.rating === 15
                              ? "rgba(200, 102, 102, 0.15)"
                              : "rgba(180, 50, 50, 0.15)"
                  }}
                >
                  {game.rating}+
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Eye className="size-3.5 text-slate-500" />
                  {game.viewers.toLocaleString()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
