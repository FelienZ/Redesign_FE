import { useState } from "react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Minus } from "lucide-react";
import GrassDecoration from "../ui/grassDecoration";
import Star from "@/assets/elements/Star.svg";
import useGames from "@/utils/hooks/games/useGames";
import useGameFilters from "@/utils/hooks/games/useGameFilters";
import ImageWithFallback from "../ui/imageWithFallback";
import {
  GameStatsSkeleton,
  RatingsBadgeSkeleton,
  RatingSectionSkeleton,
} from "./skeletons";

export default function RatingSection() {
  const [filterRating, setFilterRating] = useState("");
  const {
    ratings,
    isLoading: isLoadingRating,
    isError: isErrorRating,
  } = useGameFilters();
  const {
    data: games,
    isLoading: isLoadingGames,
    isError: isErrorGames,
  } = useGames({
    limit: 6,
    rating: filterRating,
  });
  const {
    data: staticGames,
    isLoading: isLoadingStats,
    isError: isErrorStats,
  } = useGames({
    limit: 50,
  });
  const getCleanRatingStr = (ratingStr: number) => {
    return ratingStr + " +";
  };

  return (
    <section className="text-card flex flex-col justify-between gap-5">
      <div className="p-4 md:p-8 flex flex-col gap-5">
        {/* 1. Statistics Row */}
        {isLoadingStats || isErrorStats ? (
          <GameStatsSkeleton />
        ) : (
          <div
            className={`grid grid-cols-${ratings.length - 2} gap-4 sm:grid-cols-${ratings.length - 3} lg:grid-cols-${ratings.length}`}
          >
            {ratings.map((i) => {
              const ratingNum = parseInt(getCleanRatingStr(i.minimumAge || 3));
              return (
                <Link
                  key={i.slug}
                  to={`/search?rating=${ratingNum}`}
                  className={`bg-(--rating-${i.minimumAge}-solid) h-40 grid p-3 px-4 hover:scale-[1.02] transition duration-200 shadow-md group rounded-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                  <span
                    className={`font-pixel [text-shadow:4px_4px_0px_black] text-left self-end text-4xl text-white font-bold leading-none select-none`}
                  >
                    {
                      staticGames?.data.filter(
                        (d) => d.rating.minimumAge === i.minimumAge,
                      ).length
                    }
                  </span>
                  <div className="grid grid-cols-3 gap-3 items-end text-left text-xs md:text-sm">
                    <p className="col-span-2 text-slate-100 leading-tight font-medium">
                      Jumlah Game dengan Rating Usia {i.minimumAge} ke Atas
                    </p>
                    <div className="flex flex-col gap-0.5 text-foreground text-center bg-black/25 py-3 rounded select-none">
                      <p className="font-pixel font-bold text-lg leading-none text-white">
                        {i.minimumAge} +
                      </p>
                      <p className="text-[8px] font-bold tracking-wider leading-none text-slate-300">
                        IGRS
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* 2. Interactive Classification Section */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-2">
            <img src={Star} alt="Star-logo" />
            <h3 className="font-bold text-xl text-white font-heading">
              Klasifikasi Rating Usia
            </h3>
          </div>

          {/* Horizontal Badge Selection Bar */}
          {isLoadingRating || isErrorRating ? (
            <RatingsBadgeSkeleton />
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              {ratings.map((i) => (
                <Badge
                  key={i.slug}
                  onClick={() => setFilterRating(i.slug)}
                  className={`p-5 bg-(--rating-${i.minimumAge || 3}-soft) text-white border-(--rating-${i.minimumAge || 3}-solid) shadow-lg border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${i.slug === filterRating ? `scale-110 decoration decoration-1 underline underline-offset-4 mx-2 back` : ""}`}
                >
                  {i.minimumAge} + <Minus className="size-3" /> {i.label}
                </Badge>
              ))}
            </div>
          )}

          {/* Dynamic Details Area */}
          {isLoadingGames || isErrorGames ? (
            <RatingSectionSkeleton />
          ) : (
            <div className="grid grid-cols-1 gap-4 my-5 lg:grid-cols-4">
              {/* Left Block: Dynamic Descriptor Preview */}
              <div className="grid bg-accent p-4 place-content-start gap-5 py-5 rounded-lg border border-slate-800 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex flex-col gap-0.5 p-2 px-3 text-center rounded select-none bg-(--rating-${games?.data[0].rating.minimumAge}-solid)`}
                  >
                    <p className="font-pixel text-xl font-bold leading-none text-white">
                      {games?.data[0].rating.minimumAge}+
                    </p>
                    <p className="text-[8px] font-bold tracking-wider leading-none text-slate-200">
                      IGRS
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                      Rating IGRS
                    </p>
                    <h3 className="font-extrabold text-lg text-slate-200 font-heading leading-tight">
                      {games?.data[0].title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  {games?.data[0].description}
                </p>
                <Link
                  to={`/information?tab=${games?.data[0].slug}`}
                  className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1 mt-4 hover:translate-x-1 transition duration-200"
                >
                  Lihat Detail Rating Berdasar Usia &gt;
                </Link>
              </div>

              {/* Right Block: Dynamic Games Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                {games?.data.map((game) => (
                  <Link
                    key={game.id}
                    to={`/game/${game.slug}`}
                    className="group bg-slate-900/30 border border-slate-800/80 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/50 transition duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                      <ImageWithFallback
                        src={game.thumbnailUrl}
                        alt={game.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div
                        className={` flex flex-col bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none bg-(--rating-${game.rating.minimumAge}-solid)`}
                      >
                        <p className="font-pixel text-white text-base leading-none">
                          {game.rating.minimumAge || 0}+
                        </p>
                        <p className="text-[8px] font-bold tracking-wider leading-none text-white mt-0.5">
                          IGRS
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-left py-3.5 px-4 gap-1 flex-1 justify-between">
                      <div>
                        <p className="font-bold text-sm md:text-base text-slate-100 group-hover:text-destructive transition duration-200 truncate">
                          {game.title}
                        </p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          {game.gameGenres[0].name}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <GrassDecoration />
    </section>
  );
}
