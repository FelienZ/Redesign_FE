import { useState } from "react";
import { Link } from "react-router";
import { gamesData } from "@/assets/data/games";
import { dummyRating } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Minus } from "lucide-react";
import GrassDecoration from "../ui/grassDecoration";
import Star from "@/assets/elements/Star.svg";

interface RatingMeta {
  title: string;
  desc: string;
  colorClass: string;
  solidColor: string;
  softColor: string;
}

const ratingMetadata: Record<number, RatingMeta> = {
  3: {
    title: "Semua Umur",
    desc: "Gim yang sesuai untuk seluruh anggota keluarga tanpa adanya adegan kekerasan, kata kasar, atau materi dewasa.",
    colorClass: "bg-[oklch(0.65_0.20_145)]",
    solidColor: "text-[oklch(0.85_0.22_145)]",
    softColor: "bg-[oklch(0.65_0.20_145)]/15"
  },
  7: {
    title: "Anak",
    desc: "Gim yang boleh mengandung kekerasan fantasi ringan bergaya kartun. Cocok untuk anak usia 7 tahun ke atas.",
    colorClass: "bg-[oklch(0.72_0.18_125)]",
    solidColor: "text-[oklch(0.88_0.20_125)]",
    softColor: "bg-[oklch(0.72_0.18_125)]/15"
  },
  13: {
    title: "Remaja",
    desc: "Gim yang mengandung kekerasan tingkat sedang, bahasa tidak pantas ringan, atau tema remaja dengan pengawasan orang tua.",
    colorClass: "bg-[oklch(0.68_0.19_75)]",
    solidColor: "text-[oklch(0.85_0.18_75)]",
    softColor: "bg-[oklch(0.68_0.19_75)]/15"
  },
  15: {
    title: "Dewasa Muda",
    desc: "Gim dengan konten kekerasan lebih nyata, bahasa kasar, dan tema cerita yang lebih kompleks bagi anak usia 15+ tahun.",
    colorClass: "bg-[oklch(0.58_0.21_50)]",
    solidColor: "text-[oklch(0.82_0.20_50)]",
    softColor: "bg-[oklch(0.58_0.21_50)]/15"
  },
  18: {
    title: "Dewasa",
    desc: "Gim khusus dewasa dengan konten kekerasan realistis, tema berat sensitif, atau simulasi perjudian fiksi.",
    colorClass: "bg-[oklch(0.52_0.22_25)]",
    solidColor: "text-[oklch(0.80_0.22_25)]",
    softColor: "bg-[oklch(0.52_0.22_25)]/15"
  }
};

export default function RatingSection() {
  const [activeRating, setActiveRating] = useState<3 | 7 | 13 | 15 | 18>(3);
  const activeMeta = ratingMetadata[activeRating];

  // Filter games based on active rating
  const displayedGames = gamesData.filter((g) => g.rating === activeRating).slice(0, 6);

  const getCleanRatingStr = (ratingStr: string) => {
    return ratingStr.replace("+", "");
  };

  return (
    <section className="text-card flex flex-col justify-between gap-5">
      <div className="p-4 md:p-8 flex flex-col gap-5">
        {/* 1. Statistics Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dummyRating.map((i) => {
            const ratingNum = parseInt(getCleanRatingStr(i.rating));
            return (
              <Link
                key={i.rating}
                to={`/search?rating=${ratingNum}`}
                className={`${i.backgroundColor} h-40 grid p-3 px-4 hover:scale-[1.02] transition duration-200 shadow-md group rounded-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                <span className="font-pixel text-left self-end text-4xl text-white font-bold leading-none select-none">
                  {i.count}
                </span>
                <div className="grid grid-cols-3 gap-3 items-end text-left text-xs md:text-sm">
                  <p className="col-span-2 text-slate-100 leading-tight font-medium">{i.description}</p>
                  <div className="flex flex-col gap-0.5 text-foreground text-center bg-black/25 p-2 rounded select-none">
                    <p className="font-pixel font-bold text-sm leading-none text-white">{i.rating}</p>
                    <p className="text-[8px] font-bold tracking-wider leading-none text-slate-300">IGRS</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 2. Interactive Classification Section */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-2">
            <img src={Star} alt="Star-logo" />
            <h3 className="font-bold text-xl text-white font-heading">Klasifikasi Rating Usia</h3>
          </div>

          {/* Horizontal Badge Selection Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              onClick={() => setActiveRating(3)}
              className={`p-5 border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${
                activeRating === 3
                  ? "bg-(--rating-3-solid) text-white border-transparent shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:scale-105"
              }`}
            >
              3+ <Minus className="size-3" /> Semua Umur
            </Badge>
            <Badge
              onClick={() => setActiveRating(7)}
              className={`p-5 border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${
                activeRating === 7
                  ? "bg-(--rating-7-solid) text-white border-transparent shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:scale-105"
              }`}
            >
              7+ <Minus className="size-3" /> Anak
            </Badge>
            <Badge
              onClick={() => setActiveRating(13)}
              className={`p-5 border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${
                activeRating === 13
                  ? "bg-(--rating-13-solid) text-white border-transparent shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:scale-105"
              }`}
            >
              13+ <Minus className="size-3" /> Remaja
            </Badge>
            <Badge
              onClick={() => setActiveRating(15)}
              className={`p-5 border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${
                activeRating === 15
                  ? "bg-(--rating-15-solid) text-white border-transparent shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:scale-105"
              }`}
            >
              15+ <Minus className="size-3" /> Dewasa Muda
            </Badge>
            <Badge
              onClick={() => setActiveRating(18)}
              className={`p-5 border cursor-pointer transition select-none flex items-center gap-1.5 font-semibold text-xs md:text-sm ${
                activeRating === 18
                  ? "bg-(--rating-18-solid) text-white border-transparent shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:scale-105"
              }`}
            >
              18+ <Minus className="size-3" /> Dewasa
            </Badge>
          </div>

          {/* Dynamic Details Area */}
          <div className="grid grid-cols-1 gap-4 my-5 lg:grid-cols-4">
            {/* Left Block: Dynamic Descriptor Preview */}
            <div className="grid bg-accent p-4 place-content-start gap-5 py-5 rounded-lg border border-slate-800 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className={`flex flex-col gap-0.5 p-2 px-3 text-center rounded select-none ${activeMeta.colorClass}`}>
                  <p className="font-pixel text-xl font-bold leading-none text-white">{activeRating}+</p>
                  <p className="text-[8px] font-bold tracking-wider leading-none text-slate-200">IGRS</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                    Rating IGRS
                  </p>
                  <h3 className="font-extrabold text-lg text-slate-200 font-heading leading-tight">{activeMeta.title}</h3>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                {activeMeta.desc}
              </p>
              <Link
                to={`/information?tab=${activeRating}`}
                className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1 mt-4 hover:translate-x-1 transition duration-200"
              >
                Lihat Detail Rating {activeRating}+ &gt;
              </Link>
            </div>

            {/* Right Block: Dynamic Games Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {displayedGames.map((game) => (
                <Link
                  key={game.id}
                  to={`/game/${game.id}`}
                  className="group grid bg-slate-900/30 border border-slate-800/80 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/50 transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute flex flex-col bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none ${activeMeta.colorClass}`}>
                      <p className="font-pixel text-white text-base leading-none">{game.rating}+</p>
                      <p className="text-[8px] font-bold tracking-wider leading-none text-white mt-0.5">IGRS</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-left py-3.5 px-4 gap-1 flex-1 justify-between">
                    <div>
                      <p className="font-bold text-sm md:text-base text-slate-100 group-hover:text-destructive transition duration-200 truncate">
                        {game.title}
                      </p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{game.genre}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GrassDecoration />
    </section>
  );
}
