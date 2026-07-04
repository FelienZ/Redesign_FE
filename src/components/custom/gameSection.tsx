import { useState } from "react";
import { gamesData } from "@/assets/data/games";
import { Button } from "@/components/ui/button";
import { Eye, ChevronRight } from "lucide-react";
import Heart from "@/assets/elements/Heart.svg";
import { Link } from "react-router";

export default function GameSection() {
  const [filterType, setFilterType] = useState<"popular" | "latest">("popular");

  // Sort and filter top 8 games
  const sortedGames = [...gamesData]
    .sort((a, b) => {
      if (filterType === "popular") {
        return b.viewers - a.viewers;
      } else {
        // Sort by release year, and then by id as a tie-breaker
        return b.releaseYear - a.releaseYear || b.id - a.id;
      }
    })
    .slice(0, 8);

  return (
    <section className="min-h-screen flex flex-col gap-5 px-4 md:px-8 py-14 justify-center max-w-7xl w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex items-center gap-3">
          <img src={Heart} alt="Heart-logo" />
          <h2 className="font-bold text-xl text-white font-heading">Gim di IGRS</h2>
        </div>
        {/* Toggle Filter Tabs */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5 select-none self-start sm:self-auto">
          <button
            onClick={() => setFilterType("popular")}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition duration-200 cursor-pointer ${
              filterType === "popular"
                ? "bg-destructive text-white shadow-md font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Paling Dilihat
          </button>
          <button
            onClick={() => setFilterType("latest")}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition duration-200 cursor-pointer ${
              filterType === "latest"
                ? "bg-destructive text-white shadow-md font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Terbaru
          </button>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sortedGames.map((game) => (
          <Link
            key={game.id}
            to={`/game/${game.id}`}
            className="group grid bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <img src={game.imageUrl} alt={game.title} className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: game.imagePosition || "center", objectFit: game.imageFit || "cover" }} />
              <div
                className={`absolute flex flex-col bg-[oklch(0.68_0.19_75)] bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none`}
                style={{
                  backgroundColor:
                    game.rating === 3
                      ? "oklch(0.65 0.20 145)"
                      : game.rating === 7
                        ? "oklch(0.72 0.18 125)"
                        : game.rating === 13
                          ? "oklch(0.68 0.19 75)"
                          : game.rating === 15
                            ? "oklch(0.58 0.21 50)"
                            : "oklch(0.52 0.22 25)"
                }}
              >
                <p className="font-pixel text-white text-base leading-none">{game.rating}+</p>
                <p className="text-[9px] font-bold tracking-wider leading-none text-white mt-0.5">IGRS</p>
              </div>
              <div
                className={`absolute bg-black/60 top-0 right-0 m-3 px-2 py-1 text-right text-xs rounded text-slate-200 border border-white/5 font-semibold uppercase tracking-wider`}
              >
                <p>{game.genre}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-left px-4 py-4 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base md:text-lg text-slate-100 group-hover:text-destructive transition duration-200 line-clamp-1">{game.title}</p>
                <p className="text-xs text-slate-500">{game.publisher}</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800/80 pt-3">
                <p
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full`}
                  style={{
                    color: "white",
                    backgroundColor:
                      game.rating === 3
                        ? "rgba(102, 204, 153, 0.15)"
                        : game.rating === 7
                          ? "rgba(153, 220, 102, 0.15)"
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

      {/* See All Games Action Button */}
      <div className="flex justify-center mt-10">
        <Button asChild className="py-6 px-8 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white rounded-2xl font-bold cursor-pointer transition shadow-lg duration-300">
          <Link to="/search" className="flex items-center gap-2">
            Lihat Semua Gim <ChevronRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
