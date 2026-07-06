import { useState } from "react";
import { Link } from "react-router";
import { gamesData } from "@/assets/data/games";
import { dummyRating } from "@/assets/data/dummy";
import useGames from "@/utils/hooks/games/useGames";
import { useLanguage } from "@/utils/LanguageContext";
import GrassDecoration from "../ui/grassDecoration";
import Star from "@/assets/elements/Star.svg";

interface RatingMeta {
  title: string;
  desc: string;
  colorClass: string;
  solidBg: string;
  outlinedBg: string;
  borderColorHex: string;
}

const ratingMetadata: Record<number, RatingMeta> = {
  3: {
    title: "Semua Umur",
    desc: "Gim dengan rating 3+ sesuai untuk usia semua umur. Perhatikan deskriptor konten sebelum memberikan akses kepada anak.",
    colorClass: "bg-[oklch(0.65_0.20_145)]",
    solidBg: "bg-[oklch(0.65_0.20_145)] text-white border-transparent",
    outlinedBg: "bg-slate-950/40 text-[oklch(0.65_0.20_145)] border-[oklch(0.65_0.20_145)] hover:bg-[oklch(0.65_0.20_145)]/10",
    borderColorHex: "oklch(0.65 0.20 145)"
  },
  7: {
    title: "Anak",
    desc: "Gim dengan rating 7+ sesuai untuk usia anak. Perhatikan deskriptor konten sebelum memberikan akses kepada anak.",
    colorClass: "bg-[oklch(0.72_0.18_125)]",
    solidBg: "bg-[oklch(0.72_0.18_125)] text-white border-transparent",
    outlinedBg: "bg-slate-950/40 text-[oklch(0.72_0.18_125)] border-[oklch(0.72_0.18_125)] hover:bg-[oklch(0.72_0.18_125)]/10",
    borderColorHex: "oklch(0.72 0.18 125)"
  },
  13: {
    title: "Remaja",
    desc: "Gim dengan rating 13+ sesuai untuk usia remaja. Perhatikan deskriptor konten sebelum memberikan akses kepada anak.",
    colorClass: "bg-[oklch(0.68_0.19_75)]",
    solidBg: "bg-[oklch(0.68_0.19_75)] text-white border-transparent",
    outlinedBg: "bg-slate-950/40 text-[oklch(0.68_0.19_75)] border-[oklch(0.68_0.19_75)] hover:bg-[oklch(0.68_0.19_75)]/10",
    borderColorHex: "oklch(0.68 0.19 75)"
  },
  15: {
    title: "Dewasa Muda",
    desc: "Gim dengan rating 15+ sesuai untuk usia dewasa muda. Perhatikan deskriptor konten sebelum memberikan akses kepada anak.",
    colorClass: "bg-[oklch(0.58_0.21_50)]",
    solidBg: "bg-[oklch(0.58_0.21_50)] text-white border-transparent",
    outlinedBg: "bg-slate-950/40 text-[oklch(0.58_0.21_50)] border-[oklch(0.58_0.21_50)] hover:bg-[oklch(0.58_0.21_50)]/10",
    borderColorHex: "oklch(0.58 0.21 50)"
  },
  18: {
    title: "Dewasa",
    desc: "Gim dengan rating 18+ sesuai untuk usia dewasa. Perhatikan deskriptor konten sebelum memberikan akses kepada anak.",
    colorClass: "bg-[oklch(0.52_0.22_25)]",
    solidBg: "bg-[oklch(0.52_0.22_25)] text-white border-transparent",
    outlinedBg: "bg-slate-950/40 text-[oklch(0.52_0.22_25)] border-[oklch(0.52_0.22_25)] hover:bg-[oklch(0.52_0.22_25)]/10",
    borderColorHex: "oklch(0.52 0.22 25)"
  }
};

export default function RatingSection() {
  const [activeRating, setActiveRating] = useState<3 | 7 | 13 | 15 | 18>(3);
  const { language } = useLanguage();
  const activeMeta = ratingMetadata[activeRating];

  const { data: gamesResponse } = useGames({
    rating: activeRating.toString(),
    limit: 6,
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
    };
  };

  // Filter games based on active rating
  const displayedGames = apiGames.length > 0
    ? (apiGames.map(getMappedGame).filter(Boolean) as any[])
    : gamesData.filter((g) => g.rating === activeRating).slice(0, 6);

  const getCleanRatingStr = (ratingStr: string) => {
    return ratingStr.replace("+", "");
  };

  const getRatingStatsDesc = (rating: string) => {
    const age = rating.replace("+", "");
    if (language === "ID") {
      return `Jumlah Permainan Rating Usia ${age} Tahun Keatas`;
    } else {
      return `Total Games Rated ${age} Years and Above`;
    }
  };

  const translateDesc = (desc: string, rating: number) => {
    if (language === "ID") return desc;
    switch (rating) {
      case 3:
        return "Games with a 3+ rating are suitable for all ages. Pay attention to content descriptors before giving access to children.";
      case 7:
        return "Games with a 7+ rating are suitable for children. Pay attention to content descriptors before giving access to children.";
      case 13:
        return "Games with a 13+ rating are suitable for teenagers. Pay attention to content descriptors before giving access to children.";
      case 15:
        return "Games with a 15+ rating are suitable for young adults. Pay attention to content descriptors before giving access to children.";
      case 18:
        return "Games with an 18+ rating are suitable for adults. Pay attention to content descriptors before giving access to children.";
      default:
        return desc;
    }
  };

  const renderHighlightedDesc = (desc: string, rating: number) => {
    const ratingStr = `${rating}+`;
    const targetDesc = translateDesc(desc, rating);
    const parts = targetDesc.split(ratingStr);
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="font-bold font-pixel text-lg leading-none" style={{ color: activeMeta.borderColorHex }}>{ratingStr}</span>
          {parts[1]}
        </>
      );
    }
    return targetDesc;
  };

  return (
    <section className="text-card flex flex-col justify-between gap-5">
      <div className="p-4 md:p-8 flex flex-col gap-5">
        {/* 1. Statistics Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 stagger-el stagger-delay-6">
          {dummyRating.map((i) => {
            const ratingNum = parseInt(getCleanRatingStr(i.rating));
            return (
              <Link
                key={i.rating}
                to={`/search?rating=${ratingNum}`}
                className={`${i.backgroundColor} h-40 flex flex-col justify-between p-4 hover:scale-[1.02] transition duration-200 shadow-md group rounded-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                <div className="flex justify-between items-start">
                  <span className="font-pixel text-left text-5xl text-white font-bold leading-none select-none">
                    {i.count}
                  </span>
                  <div className="flex flex-col gap-0.5 text-foreground text-center bg-black/20 p-2 rounded select-none shrink-0 min-w-11">
                    <p className="font-pixel font-bold text-sm leading-none text-white">{i.rating}</p>
                    <p className="text-[7px] font-bold tracking-wider leading-none text-slate-300 mt-0.5">IGRS</p>
                  </div>
                </div>
                <p className="text-white text-xs leading-tight font-medium opacity-90 max-w-[85%] text-left">{getRatingStatsDesc(i.rating)}</p>
              </Link>
            );
          })}
        </div>

        {/* 2. Interactive Classification Section */}
        <div className="flex flex-col gap-4 mt-8 stagger-el stagger-delay-7">
          <div className="flex items-center gap-2">
            <img src={Star} alt="Star-logo" />
            <h3 className="font-bold text-xl text-white font-heading">{language === "ID" ? "Klasifikasi Rating Usia" : "Age Rating Classification"}</h3>
          </div>

          {/* Horizontal Badge Selection Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {([3, 7, 13, 15, 18] as const).map((rating) => {
              const meta = ratingMetadata[rating];
              const isActive = activeRating === rating;
              return (
                <button
                  key={rating}
                  onClick={() => setActiveRating(rating)}
                  className={`px-5 py-3 rounded border font-semibold text-xs md:text-sm transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? `${meta.solidBg} shadow-md`
                      : `${meta.outlinedBg}`
                  }`}
                >
                  {rating === 3 && (language === "ID" ? "3+ — Semua Umur" : "3+ — All Ages")}
                  {rating === 7 && (language === "ID" ? "7+ — Anak" : "7+ — Children")}
                  {rating === 13 && (language === "ID" ? "13+ — Remaja" : "13+ — Teens")}
                  {rating === 15 && (language === "ID" ? "15+ — Dewasa Muda" : "15+ — Young Adults")}
                  {rating === 18 && (language === "ID" ? "18+ — Dewasa" : "18+ — Adults")}
                </button>
              );
            })}
          </div>

          {/* Dynamic Details Area */}
          <div className="grid grid-cols-1 gap-4 my-5 lg:grid-cols-4">
            {/* Left Block: Dynamic Descriptor Preview */}
            <div 
              className="grid bg-slate-950/40 p-6 place-content-start gap-5 py-6 rounded-xl border lg:col-span-1 shadow-inner transition-all duration-300"
              style={{ borderColor: activeMeta.borderColorHex }}
            >
              <div className="flex items-center gap-3">
                <div className={`flex flex-col gap-0.5 p-2 px-3 text-center rounded select-none ${activeMeta.colorClass}`}>
                  <p className="font-pixel text-xl font-bold leading-none text-white">{activeRating}+</p>
                  <p className="text-[8px] font-bold tracking-wider leading-none text-slate-200">IGRS</p>
                </div>
                <div className="flex flex-col">
                  <p 
                    className="text-[10px] font-bold tracking-wider uppercase"
                    style={{ color: activeMeta.borderColorHex }}
                  >
                    Rating IGRS
                  </p>
                  <h3 className="font-extrabold text-lg text-slate-200 font-heading leading-tight">
                    {language === "ID" ? activeMeta.title : (activeRating === 3 ? "All Ages" : activeRating === 7 ? "Children" : activeRating === 13 ? "Teens" : activeRating === 15 ? "Young Adults" : "Adults")}
                  </h3>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal text-left">
                {renderHighlightedDesc(activeMeta.desc, activeRating)}
              </p>
              <Link
                to={`/search?rating=${activeRating}`}
                className="text-xs font-bold flex items-center justify-center gap-1 mt-4 hover:underline transition duration-200"
                style={{ color: activeMeta.borderColorHex }}
              >
                {language === "ID" ? `Lihat semua gim ${activeRating}+ >` : `View all ${activeRating}+ games >`}
              </Link>
            </div>

            {/* Right Block: Dynamic Games Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {displayedGames.map((game) => (
                <Link
                  key={game.id}
                  to={`/game/${game.id}`}
                  className="group grid bg-slate-900/30 border border-slate-800/80 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] hover:border-slate-700/80 hover:bg-slate-900/50 transition duration-300 flex flex-col justify-between"
                  style={{ "--hover-color": activeMeta.borderColorHex } as React.CSSProperties}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: game.imagePosition || "center", objectFit: game.imageFit || "cover" }}
                    />
                    <div className={`absolute flex flex-col bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none ${activeMeta.colorClass}`}>
                      <p className="font-pixel text-white text-base leading-none">{game.rating}+</p>
                      <p className="text-[8px] font-bold tracking-wider leading-none text-white mt-0.5">IGRS</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-left py-3.5 px-4 gap-1 flex-1 justify-between">
                    <div>
                      <p className="font-bold text-sm md:text-base text-slate-100 group-hover:text-[var(--hover-color)] transition duration-200 truncate">
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
