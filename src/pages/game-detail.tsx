import { useParams, Link, useNavigate } from "react-router";
import { gamesData } from "@/assets/data/games";
import useGame from "@/utils/hooks/games/useGame";
import { useLanguage } from "@/utils/LanguageContext";
import {
  Calendar,
  Gamepad2,
  Building2,
  Eye,
  ArrowLeft,
  Smartphone,
  Monitor,
  ShieldAlert,
  Info,
  Sparkles
} from "lucide-react";
import Footer from "@/layout/footer";

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Fetch game from API by slug (where id parameter is the slug)
  const { data: gameResponse } = useGame(id || "");
  const apiGame = gameResponse?.data;

  // Map database structure to component fields
  const mappedGame = apiGame ? {
    id: apiGame.id,
    slug: apiGame.slug,
    title: apiGame.title,
    publisher: apiGame.publisher?.name || "Publisher Resmi",
    developer: apiGame.gameDevelopers?.[0]?.name || "Developer",
    releaseYear: apiGame.releaseDate ? new Date(apiGame.releaseDate).getFullYear() : 2024,
    rating: apiGame.rating?.minimumAge || 3,
    ratingLabel: language === "ID" 
      ? (apiGame.rating?.label || "Semua Umur") 
      : (apiGame.rating?.minimumAge === 3 ? "All Ages" : apiGame.rating?.minimumAge === 7 ? "Children" : apiGame.rating?.minimumAge === 13 ? "Teens" : apiGame.rating?.minimumAge === 15 ? "Young Adults" : "Adults"),
    genre: apiGame.gameGenres?.[0]?.name || "General",
    platforms: apiGame.gamePlatforms?.map((p: any) => p.name) || [],
    descriptors: apiGame.gameTags?.map((t: any) => t.name) || [],
    description: apiGame.description || "",
    fullDescription: apiGame.rating?.description || apiGame.description || "",
    imageUrl: apiGame.thumbnailUrl || "/Minecraft bg.jpg",
    bgImageUrl: apiGame.bannerUrl || apiGame.thumbnailUrl || "/Minecraft bg.jpg",
    viewers: apiGame.viewCount || 0,
    features: apiGame.gameTags?.map((t: any) => t.name) || [],
  } : null;

  // Find game by ID or slug or fallback to default
  const game =
    mappedGame ||
    gamesData.find(
      (g) =>
        g.id === parseInt(id || "1") ||
        g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === id?.toLowerCase() ||
        g.title.toLowerCase() === id?.toLowerCase()
    ) ||
    gamesData[0];

  // Similar games (same rating, different ID)
  const similarGames = gamesData
    .filter((g) => g.rating === game.rating && String(g.id) !== String(game.id))
    .slice(0, 2);

  const getRatingColor = (rating: number) => {
    switch (rating) {
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

  const getRatingText = (rating: number) => {
    if (language === "ID") {
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
    } else {
      switch (rating) {
        case 3:
          return "All Ages";
        case 7:
          return "Children";
        case 13:
          return "Teens";
        case 15:
          return "Young Adults";
        case 18:
          return "Adults";
        default:
          return "";
      }
    }
  };

  const getRatingExplanation = (rating: number) => {
    if (language === "ID") {
      switch (rating) {
        case 3:
          return "Sesuai untuk semua umur. Tidak mengandung kekerasan, bahasa kasar, pornografi, atau materi dewasa lainnya.";
        case 7:
          return "Sesuai untuk anak usia 7 tahun ke atas. Bisa mengandung kekerasan ringan yang tidak realistis (kartun) dan tidak memicu ketakutan.";
        case 13:
          return "Sesuai untuk remaja 13 tahun ke atas. Bisa mengandung kekerasan sedang, penggunaan bahasa tidak pantas tingkat sedang, dan interaksi online.";
        case 15:
          return "Sesuai untuk dewasa muda 15 tahun ke atas. Bisa mengandung kekerasan yang lebih eksplisit, bahasa kasar yang lebih intens, dan interaksi online yang luas.";
        case 18:
          return "Sesuai untuk dewasa berusia 18 tahun ke atas. Bisa mengandung kekerasan intens, tema dewasa, bahasa kasar tingkat tinggi, dan simulasi judi.";
        default:
          return "";
      }
    } else {
      switch (rating) {
        case 3:
          return "Suitable for all ages. Contains no violence, bad language, pornography, or other adult materials.";
        case 7:
          return "Suitable for children aged 7 and above. May contain mild, non-realistic violence (cartoon) and is not scary.";
        case 13:
          return "Suitable for teenagers aged 13 and above. May contain moderate violence, moderate crude language, and online interaction.";
        case 15:
          return "Suitable for young adults aged 15 and above. May contain more explicit violence, more intense bad language, and broad online interaction.";
        case 18:
          return "Suitable for adults aged 18 and above. May contain intense violence, adult themes, high-level bad language, and simulated gambling.";
        default:
          return "";
      }
    }
  };

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Detail Header Banner */}
      <div className="relative min-h-[380px] md:min-h-[500px] w-full overflow-hidden flex flex-col justify-between">
        
        {/* Background Image (Cover, sharp, unblurred) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-500 contrast-[1.02] brightness-[1.05]"
          style={{ 
            backgroundImage: `url("${game.bgImageUrl || game.imageUrl}")`,
          }}
        />
        
        {/* Subtle bottom gradient overlay for title legibility, keeping the rest of the illustration fully clear and bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Top Navbar */}
        <div className="relative z-10 w-full bg-slate-950/50 backdrop-blur-xs border-b border-white/5 py-4 px-4 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <button
                onClick={() => navigate(-1)}
                className="hover:text-white transition flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 text-slate-400 font-semibold font-sans"
              >
                <ArrowLeft className="size-3.5" /> {language === "ID" ? "Kembali" : "Back"}
              </button>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200 font-semibold truncate max-w-xs">{game.title}</span>
            </nav>
          </div>
        </div>

        {/* Game Title & Metadata Overlay (At the bottom of the banner) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 pb-8 pt-20 mt-auto">
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-start sm:items-end">
            
            {/* Large Rating Square Badge */}
            <div className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl flex flex-col items-center justify-center text-white font-bold shadow-2xl ${getRatingColor(game.rating)} border-4 border-white/10 select-none`}>
              <span className="font-pixel text-4xl leading-none">{game.rating}+</span>
              <span className="text-[10px] font-extrabold tracking-widest leading-none mt-1.5">IGRS</span>
            </div>

            {/* Game Main Metadata */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded border border-orange-500/30 bg-orange-950/40 text-orange-400`}>
                  {game.ratingLabel}
                </span>
                <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded border border-slate-700/40 bg-slate-900/40 text-slate-300">
                  {game.genre}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
                {game.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">
                {game.publisher} <span className="text-slate-600 mx-1.5">·</span> {game.releaseYear}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 pb-20 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left 2 Columns: Main Game Detail Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Section 1: Tentang Gim Ini */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              {language === "ID" ? "Tentang Gim Ini" : "About This Game"}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              {game.fullDescription}
            </p>
          </div>

          {/* Section 2: Informasi Gim Grid */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              {language === "ID" ? "Informasi Gim" : "Game Info"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Building2 className="size-3 text-destructive" /> Publisher
                </span>
                <span className="text-sm font-bold text-slate-200">{game.publisher}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Calendar className="size-3 text-destructive" /> {language === "ID" ? "Tahun Rilis" : "Release Year"}
                </span>
                <span className="text-sm font-bold text-slate-200">{game.releaseYear}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Gamepad2 className="size-3 text-destructive" /> Genre
                </span>
                <span className="text-sm font-bold text-slate-200">{game.genre}</span>
              </div>
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg flex flex-col gap-1.5">
                <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Eye className="size-3 text-destructive" /> {language === "ID" ? "Dilihat" : "Views"}
                </span>
                <span className="text-sm font-bold text-slate-200">{game.viewers.toLocaleString()}x</span>
              </div>
            </div>
          </div>

          {/* Section 3: Platform */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              Platform
            </h3>
            <div className="flex flex-wrap gap-3">
              {game.platforms.map((platform: string) => (
                <div
                  key={platform}
                  className="bg-slate-950/55 border border-slate-800 px-5 py-3 rounded-lg flex items-center gap-2 font-semibold text-sm hover:border-slate-700 transition"
                >
                  {platform === "iOS" || platform === "Android" ? (
                    <Smartphone className="size-4 text-destructive" />
                  ) : (
                    <Monitor className="size-4 text-destructive" />
                  )}
                  {platform}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Content Descriptors */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-4 border-destructive pl-3 mb-4">
              <h3 className="text-lg font-bold text-slate-100 font-heading">{language === "ID" ? "Deskriptor Konten" : "Content Descriptors"}</h3>
              <span className="text-xs md:text-sm text-slate-400 font-medium">
                {language === "ID" ? `Mengapa gim ini mendapat rating ${game.rating}+?` : `Why did this game get a ${game.rating}+ rating?`}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {game.descriptors.map((desc: string) => (
                <span
                  key={desc}
                  className="text-xs md:text-sm text-destructive border-2 border-destructive/30 bg-destructive/5 px-4 py-2 rounded-lg font-semibold tracking-wide"
                >
                  {desc}
                </span>
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
              <div className={`w-14 h-14 shrink-0 rounded-lg flex flex-col items-center justify-center text-white font-bold ${getRatingColor(game.rating)} select-none`}>
                <span className="font-pixel text-2xl leading-none">{game.rating}+</span>
                <span className="text-[8px] font-bold tracking-wider leading-none">IGRS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-bold text-slate-200">{getRatingText(game.rating)}</span>
                <span className="text-xs text-slate-500 font-medium">{language === "ID" ? `Usia ${game.rating}+ ke atas` : `Age ${game.rating}+ and above`}</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/20 p-3 rounded-lg border border-slate-900">
              {getRatingExplanation(game.rating)}
            </p>
          </div>

          {/* Sidebar Box 2: Ringkasan Table */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 shadow-lg">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-1.5">
              <Info className="size-4 text-destructive" /> {language === "ID" ? "Ringkasan" : "Summary"}
            </h4>
            <div className="flex flex-col text-xs md:text-sm">
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Genre</span>
                <span className="font-semibold text-slate-200">{game.genre}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">Publisher</span>
                <span className="font-semibold text-slate-200">{game.publisher}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">{language === "ID" ? "Tahun Rilis" : "Release Year"}</span>
                <span className="font-semibold text-slate-200">{game.releaseYear}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-800">
                <span className="text-slate-400 font-medium">{language === "ID" ? "Total Platform" : "Total Platforms"}</span>
                <span className="font-semibold text-slate-200">{game.platforms.length} {language === "ID" ? "platform" : "platforms"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-400 font-medium">{language === "ID" ? "Dilihat" : "Views"}</span>
                <span className="font-semibold text-slate-200">{game.viewers.toLocaleString()} {language === "ID" ? "kali" : "times"}</span>
              </div>
            </div>
          </div>

          {/* Sidebar Box 3: Gim Rating Serupa */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 shadow-lg">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-1.5">
              <Sparkles className="size-4 text-destructive" /> {language === "ID" ? "Gim Rating Serupa" : "Similar Rating Games"}
            </h4>
            {similarGames.length > 0 ? (
              <div className="flex flex-col gap-3">
                {similarGames.map((simGame) => (
                  <Link
                    key={simGame.id}
                    to={`/game/${simGame.id}`}
                    className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800/50 hover:border-slate-700/80 transition group"
                  >
                    <img
                      src={simGame.imageUrl}
                      alt={simGame.title}
                      className="w-12 h-12 object-cover rounded-md bg-slate-900"
                    />
                    <div className="flex-1 flex flex-col min-w-0">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        {simGame.genre}
                      </span>
                      <span className="text-sm font-bold text-slate-200 truncate group-hover:text-destructive transition">
                        {simGame.title}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 text-white font-pixel font-bold text-sm ${getRatingColor(simGame.rating)}`}>
                      {simGame.rating}+
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center py-4 bg-slate-950/30 rounded-lg">
                {language === "ID" ? "Tidak ada gim serupa dengan rating yang sama." : "No similar games with the same rating found."}
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
