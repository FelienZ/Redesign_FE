import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Heart from "@/assets/elements/Heart.svg";
import { Link } from "react-router";
import useGames from "@/utils/hooks/games/useGames";
import { useState } from "react";
import {
  GamesSortBy,
  type GamesSortByType,
} from "@/utils/types/games/gameQueryParams";
import ImageWithFallback from "../ui/imageWithFallback";
import { GameSectionSkeleton } from "./skeletons";

export default function GameSection() {
  const [sortMode, setSortMode] = useState<GamesSortByType>(
    GamesSortBy.Terpopuler,
  );
  const {
    data: games,
    isLoading: isLoadingGames,
    isError: isErrorGames,
  } = useGames({
    limit: 8,
    sortBy: sortMode,
  });
  return (
    <section className="min-h-screen flex flex-col gap-5 px-8 py-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Heart} alt="Heart-logo" />
          <h2 className="font-bold text-xl text-white">Gim di IGRS</h2>
        </div>
        <div className="flex items-center">
          <Button
            onClick={() => setSortMode(GamesSortBy.Terpopuler)}
            className={`${sortMode === GamesSortBy.Terpopuler ? "bg-destructive" : "bg-accent"} text-white transition duration-300 hover:bg-destructive/90 font-semibold cursor-pointer`}
          >
            Paling Dilihat
          </Button>
          <Button
            onClick={() => setSortMode(GamesSortBy.Terbaru)}
            className={`${sortMode === GamesSortBy.Terbaru ? "bg-destructive opacity-100" : "bg-accent"} opacity-80 transition duration-300 text-white hover:bg-destructive/90 font-semibold cursor-pointer`}
          >
            Terbaru
          </Button>
        </div>
      </div>
      {isLoadingGames || isErrorGames ? (
        <GameSectionSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {games?.data.map((game) => (
            <Link
              key={game.id}
              to={`/game/${game.slug}`}
              className="group bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <ImageWithFallback
                  src={game.thumbnailUrl}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute flex flex-col bg-(--rating-${game.rating.minimumAge}-solid) bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none`}
                >
                  <p className="font-pixel text-white text-base leading-none">
                    {game.rating.minimumAge}+
                  </p>
                  <p className="text-[9px] font-bold tracking-wider leading-none text-white mt-0.5">
                    IGRS
                  </p>
                </div>
                <div
                  className={`absolute bg-black/60 top-0 right-0 m-3 px-2 py-1 text-right text-xs rounded text-slate-200 border border-white/5 font-semibold uppercase tracking-wider`}
                >
                  <p>{game.gameGenres[0].name}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-left px-4 py-4 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base md:text-lg text-slate-100 group-hover:text-destructive transition duration-200 line-clamp-1">
                    {game.title}
                  </p>
                  <p className="text-xs text-slate-500">{game.slug}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-3">
                  <p
                    className={`text-xs font-semibold px-2 py-0.5 bg-(--rating-${game.rating.minimumAge}-soft) rounded-full`}
                  >
                    {game.rating.minimumAge} +
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Eye className="size-3.5 text-slate-500" />
                    {game.viewCount.toLocaleString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
