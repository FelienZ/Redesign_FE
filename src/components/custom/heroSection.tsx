import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { decorationItems } from "@/utils/decorationItems";
import { ChevronRight, Heart } from "lucide-react";
import useGames from "@/utils/hooks/games/useGames";
import { GamesSortBy } from "@/utils/types/games/gameQueryParams";
import useGameFilters from "@/utils/hooks/games/useGameFilters";
import { dummyRating } from "@/assets/data/dummy";
import { gamesData } from "@/assets/data/games";
import { HeroLoadingSkeleton } from "./skeletons";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const navigate = useNavigate();
  const {
    data: games,
    isLoading: isGameLoading,
    isError: isGameError,
  } = useGames({
    limit: 8,
    sortBy: GamesSortBy.Terpopuler,
  });
  const {
    ratings,
    isLoading: isRatingLoading,
    isError: isRatingError,
  } = useGameFilters();
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden text-card flex flex-col justify-center text-center items-center gap-5 bg-linear-to-tl from-secondary via-blue-950 to-secondary px-4 py-14">
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-6">
        <Badge className="bg-(--rating-3-soft) inset-shadow-xs text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase">
          <Heart className="fill-(--rating-3-solid)" /> INDONESIA GAME RATING
          SYSTEM
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Know <span className="text-(--rating-3-text)"> Rating </span> First,
            Enjoy <span className="text-destructive">Gaming!</span>
          </h2>
          <div className="text-slate-300">
            Indonesian Interactive Electronic Game Classification System.
            <p className="text-sm text-slate-400 mt-1">
              Find out the age limits of your favorite games here.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full px-4">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const q = formData.get("q");
              if (q) navigate(`/search?q=${encodeURIComponent(q.toString())}`);
            }}
            className="flex flex-col sm:flex-row shadow-[6px_6px_0px_var(--accent)] w-full max-w-2xl mx-auto rounded-md overflow-hidden bg-accent/75">
            <Input
              name="q"
              placeholder={"Search game title, publisher, genre.."}
              className="shadow-lg border-none p-3 py-6 col-span-2 bg-transparent text-white placeholder-slate-300 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
            />
            <Button
              type="submit"
              className="bg-destructive border-none py-6 px-6 shrink-0 cursor-pointer font-semibold text-white"
            >
              Search Game
            </Button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <p className="text-slate-300">Quick Filter: </p>
            {isRatingLoading && <HeroLoadingSkeleton length={3} />}
            {isRatingError
              ? dummyRating.map((i) => (
                  <Badge
                    className={`bg-(--rating-${i.minimumAge}-soft) text-(--rating-${i.minimumAge}-solid) p-3 px-4 border-(--rating-${i.minimumAge}-solid) hover:scale-105 cursor-pointer transition`}
                  >
                    {i.minimumAge}+ {i.label}
                  </Badge>
                ))
              : ratings.map((i) => (
                  <Badge
                    className={`bg-(--rating-${i.minimumAge}-soft) text-(--rating-${i.minimumAge}-solid) p-3 px-4 border-(--rating-${i.minimumAge}-solid) hover:scale-105 cursor-pointer transition`}
                  >
                    {i.minimumAge}+ {i.label}
                  </Badge>
                ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-400 mt-2">
            <span className="font-medium text-slate-400">Most Popular:</span>
            {isGameLoading && <HeroLoadingSkeleton length={8} />}
            {isGameError
              ? gamesData.slice(0, 8).map((i, idx) => (
                  <span key={i.id} className="flex items-center gap-2">
                    <span
                      className={`hover:underline cursor-pointer transition ${idx < 3 ? "text-(--rating-3-text)" : "text-slate-300"}`}
                    >
                      {i.title}
                    </span>
                    {idx < 6 && (
                      <span className="text-slate-600 font-bold">·</span>
                    )}
                  </span>
                ))
              : games?.data.map((i, idx) => (
                  <span key={i.slug} className="flex items-center gap-2">
                    <span
                      className={`hover:underline cursor-pointer transition ${idx < 3 ? "text-(--rating-3-text)" : "text-slate-300"}`}
                    >
                      {i.title}
                    </span>
                    {idx < 6 && (
                      <span className="text-slate-600 font-bold">·</span>
                    )}
                  </span>
                ))}
            <span className="text-blue-400 flex items-center hover:underline cursor-pointer text-[11px] ml-1">
              View More <ChevronRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <>
        {decorationItems.map((i, idx) => (
          <img
            key={`${i.src}-${idx}`}
            src={i.src}
            alt=""
            style={{
              top: i.top,
              left: i.left,
              width: i.size,
              height: i.size,
              opacity: i.opacity,
            }}
            className="absolute"
          />
        ))}
      </>
    </section>
  );
}
