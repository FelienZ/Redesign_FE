import { useParams, useNavigate } from "react-router";
import {
  Calendar,
  Gamepad2,
  Building2,
  Eye,
  ArrowLeft,
  Smartphone,
  Monitor,
  ShieldAlert,
  Info
} from "lucide-react";
import Footer from "@/layout/footer";
import useGame from "@/utils/hooks/games/useGame";
import ImageWithFallback from "@/components/ui/imageWithFallback";

export default function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGame(slug || "");

  const gameData = data; 

  const getRatingColor = (age: number | undefined) => {
    switch (age) {
      case 3:
        return "bg-[oklch(0.65_0.20_145)] border-[oklch(0.65_0.20_145)]";
      case 7:
        return "bg-[oklch(0.72_0.18_125)] border-[oklch(0.72_0.18_125)]";
      case 13:
        return "bg-[oklch(0.68_0.19_75)] border-[oklch(0.68_0.19_75)]";
      case 15:
        return "bg-[oklch(0.58_0.21_50)] border-[oklch(0.58_0.21_50)]";
      case 18:
        return "bg-[oklch(0.52_0.22_25)] border-[oklch(0.52_0.22_25)]";
      default:
        return "bg-slate-700 border-slate-700";
    }
  };

  if (isLoading) {
    return (
      <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <p className="animate-pulse text-lg">Memuat data gim...</p>
        </div>
        <Footer />
      </section>
    );
  }

  if (isError || !gameData) {
    return (
      <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-white">Gim Tidak Ditemukan</h1>
          <button onClick={() => navigate(-1)} className="text-destructive hover:underline">
            Kembali
          </button>
        </div>
        <Footer />
      </section>
    );
  }

  const releaseYear = gameData.releaseDate ? new Date(gameData.releaseDate).getFullYear() : "N/A";
  const primaryGenre = gameData.gameGenres?.[0]?.name || "N/A";

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Detail Header Banner */}
      <div className="relative pt-8 pb-12 px-4 md:px-12 overflow-hidden bg-slate-950/80">
        {/* Background Image Blurred for Premium Look */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl scale-110 pointer-events-none"
          style={{ backgroundImage: `url(${gameData.bannerUrl || gameData.thumbnailUrl})` }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto w-full flex flex-col gap-6 z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
            <button
              onClick={() => navigate(-1)}
              className="hover:text-white transition flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 text-slate-400 font-sans"
            >
              <ArrowLeft className="size-3" /> Kembali
            </button>
            <span>/</span>
            <span className="text-slate-200 font-semibold truncate max-w-xs">{gameData.title}</span>
          </nav>

          {/* Banner Hero Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mt-4">
            {/* Large Rating Square */}
            <div className={`w-24 h-24 shrink-0 rounded-xl flex flex-col items-center justify-center text-white font-bold shadow-2xl ${getRatingColor(gameData.rating?.minimumAge)} border-2 border-white/20 select-none`}>
              <span className="font-pixel text-4xl leading-none">{gameData.rating?.minimumAge || "?"}+</span>
              <span className="text-xs font-bold tracking-wider leading-none mt-1">IGRS</span>
            </div>

            {/* Game Main Metadata */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`text-xs font-semibold px-3 py-1 rounded bg-orange-600/90 text-white border border-white/10 uppercase`}>
                  {gameData.rating?.label || "Rating"}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700/50 uppercase">
                  {primaryGenre}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
                {gameData.title}
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-medium">
                {gameData.publisher?.name || "Publisher"} <span className="text-slate-500 mx-1.5">·</span> {releaseYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 pb-20 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left 2 Columns: Main Game Detail Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl overflow-hidden shadow-md">
             <ImageWithFallback src={gameData.thumbnailUrl} alt={gameData.title} className="w-full h-auto aspect-video object-cover" />
          </div>

          {/* Section 1: Tentang Gim Ini */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              Tentang Gim Ini
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal whitespace-pre-line">
              {gameData.description}
            </p>
          </div>

          {/* Section 2: Informasi Gim Grid */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              Informasi Gim
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Building2 className="size-3 text-destructive" /> Publisher
                </span>
                <span className="text-sm font-bold text-slate-200">{gameData.publisher?.name || "-"}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Calendar className="size-3 text-destructive" /> Tahun Rilis
                </span>
                <span className="text-sm font-bold text-slate-200">{releaseYear}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Gamepad2 className="size-3 text-destructive" /> Genre
                </span>
                <span className="text-sm font-bold text-slate-200">{primaryGenre}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Eye className="size-3 text-destructive" /> Dilihat
                </span>
                <span className="text-sm font-bold text-slate-200">{gameData.viewCount?.toLocaleString() || "0"}x</span>
              </div>
            </div>
          </div>

          {/* Section 3: Platform */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              Platform
            </h3>
            <div className="flex flex-wrap gap-3">
              {gameData.gamePlatforms?.map((platform) => (
                <div
                  key={platform.id}
                  className="bg-slate-950/55 border border-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 font-semibold text-sm hover:border-slate-700 transition"
                >
                  {platform.name === "iOS" || platform.name === "Android" ? (
                    <Smartphone className="size-4 text-destructive" />
                  ) : (
                    <Monitor className="size-4 text-destructive" />
                  )}
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Column: Sidebar Information */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Sidebar Box 1: Rating Detail Box */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 shadow-lg">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-1.5">
              <ShieldAlert className="size-4 text-destructive" /> Rating IGRS
            </h4>
            <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 mb-4">
              <div className={`w-14 h-14 shrink-0 rounded-lg flex flex-col items-center justify-center text-white font-bold ${getRatingColor(gameData.rating?.minimumAge)} select-none`}>
                <span className="font-pixel text-2xl leading-none">{gameData.rating?.minimumAge || "?"}+</span>
                <span className="text-[8px] font-bold tracking-wider leading-none">IGRS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-bold text-slate-200">{gameData.rating?.label || "-"}</span>
                <span className="text-xs text-slate-500 font-medium">Usia {gameData.rating?.minimumAge || "0"}+ ke atas</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/20 p-3 rounded-lg border border-slate-900">
              {gameData.rating?.description || "-"}
            </p>
          </div>

          {/* Sidebar Box 2: Ringkasan Table */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 shadow-lg">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-1.5">
              <Info className="size-4 text-destructive" /> Ringkasan
            </h4>
            <div className="flex flex-col text-xs md:text-sm">
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Genre</span>
                <span className="font-semibold text-slate-200">{primaryGenre}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Publisher</span>
                <span className="font-semibold text-slate-200">{gameData.publisher?.name || "-"}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Tahun Rilis</span>
                <span className="font-semibold text-slate-200">{releaseYear}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Total Platform</span>
                <span className="font-semibold text-slate-200">{gameData.gamePlatforms?.length || 0} platform</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400 font-medium">Dilihat</span>
                <span className="font-semibold text-slate-200">{gameData.viewCount?.toLocaleString() || "0"} kali</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
