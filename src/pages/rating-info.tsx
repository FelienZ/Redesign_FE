import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Ghost,
  Globe,
  User,
  Swords,
  Heart,
  GlassWater,
  Droplet,
  MessageSquare,
  Dices,
  Lightbulb,
  AlertCircle,
  ChevronRight,
  Shield,
  Users
} from "lucide-react";
import Footer from "@/layout/footer";

interface RatingTab {
  id: string;
  badgeText: string;
  badgeLetter: string;
  label: string;
  colorClass: string;
  borderClass: string;
  textClass: string;
  bgClass: string;
  hoverBgClass: string;
  ageGuideline: string;
  summary: string;
  notAllowed: string[];
  allowed: string[];
}

interface DescriptorCard {
  title: string;
  badges: ("7+" | "13+" | "15+" | "18+")[];
  icon: React.ReactNode;
  iconBgClass: string;
  description: string;
  advice: string;
}

const getRatingGlowColor = (id: string) => {
  switch (id) {
    case "3":
      return "rgba(102, 204, 153, 0.4)";
    case "7":
      return "rgba(153, 220, 102, 0.4)";
    case "13":
      return "rgba(220, 153, 102, 0.4)";
    case "15":
      return "rgba(200, 102, 102, 0.4)";
    case "18":
      return "rgba(180, 50, 50, 0.4)";
    default:
      return "rgba(148, 163, 184, 0.4)";
  }
};

export default function RatingInfoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "3";
  const activeTab = tabParam;

  const handleTabSelect = (tabId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("tab", tabId);
    setSearchParams(newParams);
  };

  const tabs: RatingTab[] = [
    {
      id: "3",
      badgeText: "3+",
      badgeLetter: "3+",
      label: "Semua Umur",
      colorClass: "bg-[oklch(0.65_0.20_145)]",
      borderClass: "border-[oklch(0.65_0.20_145)]",
      textClass: "text-[oklch(0.85_0.22_145)]",
      bgClass: "bg-[oklch(0.65_0.20_145)]/10",
      hoverBgClass: "hover:bg-[oklch(0.65_0.20_145)]",
      ageGuideline: "Usia 3+ tahun",
      summary: "Gim dengan rating ini tidak mengandung konten yang berpotensi membahayakan bagi siapa pun. Orang tua dapat membiarkan anak bermain tanpa khawatir.",
      notAllowed: [
        "Kekerasan dalam bentuk apapun",
        "Bahasa kasar atau umpatan",
        "Konten seksual",
        "Judi atau simulasi judi",
        "Narkoba, rokok, atau alkohol",
        "Konten menakutkan/menyeramkan",
        "Diskriminasi SARA",
        "Fitur chat atau interaksi online"
      ],
      allowed: [
        "Konten edukatif",
        "Karakter kartun non-kekerasan",
        "Cerita ringan dan menyenangkan",
        "Musik dan efek suara yang ramah anak"
      ]
    },
    {
      id: "7",
      badgeText: "7+",
      badgeLetter: "7+",
      label: "Anak",
      colorClass: "bg-[oklch(0.72_0.18_125)]",
      borderClass: "border-[oklch(0.72_0.18_125)]",
      textClass: "text-[oklch(0.88_0.20_125)]",
      bgClass: "bg-[oklch(0.72_0.18_125)]/10",
      hoverBgClass: "hover:bg-[oklch(0.72_0.18_125)]",
      ageGuideline: "Usia 7+ tahun",
      summary: "Gim ini boleh mengandung kekerasan ringan non-realistis seperti gaya kartun. Orang tua tetap disarankan mendampingi dan memantau waktu bermain anak.",
      notAllowed: [
        "Kekerasan realistis atau berdarah",
        "Bahasa kasar yang vulgar",
        "Konten seksual",
        "Judi",
        "Narkoba, rokok, atau alkohol",
        "Konten menakutkan ekstrem",
        "Diskriminasi SARA"
      ],
      allowed: [
        "Kekerasan ringan bergaya kartun",
        "Tema petualangan ringan",
        "Kompetisi sederhana",
        "Interaksi online terbatas (dengan moderasi)"
      ]
    },
    {
      id: "13",
      badgeText: "13+",
      badgeLetter: "13+",
      label: "Remaja",
      colorClass: "bg-[oklch(0.68_0.19_75)]",
      borderClass: "border-[oklch(0.68_0.19_75)]",
      textClass: "text-[oklch(0.85_0.18_75)]",
      bgClass: "bg-[oklch(0.68_0.19_75)]/10",
      hoverBgClass: "hover:bg-[oklch(0.68_0.19_75)]",
      ageGuideline: "Usia 13+ tahun",
      summary: "Gim ini bisa mengandung kekerasan sedang, bahasa tidak pantas, atau tema dewasa ringan. Cocok untuk remaja namun tetap perlu pengawasan dari orang tua.",
      notAllowed: [
        "Kekerasan sangat grafis atau gore",
        "Konten seksual eksplisit",
        "Penggambaran judi secara nyata",
        "Glorifikasi narkoba atau alkohol",
        "Konten teror atau kekerasan ekstrem"
      ],
      allowed: [
        "Kekerasan sedang (tidak eksplisit)",
        "Bahasa tidak pantas ringan",
        "Tema dewasa ringan",
        "Kompetisi online",
        "Cerita dengan konflik dan moralitas"
      ]
    },
    {
      id: "15",
      badgeText: "15+",
      badgeLetter: "15+",
      label: "Dewasa Muda",
      colorClass: "bg-[oklch(0.58_0.21_50)]",
      borderClass: "border-[oklch(0.58_0.21_50)]",
      textClass: "text-[oklch(0.82_0.20_50)]",
      bgClass: "bg-[oklch(0.58_0.21_50)]/10",
      hoverBgClass: "hover:bg-[oklch(0.58_0.21_50)]",
      ageGuideline: "Usia 15+ tahun",
      summary: "Gim ini mengandung konten yang lebih berat — kekerasan lebih nyata, bahasa kasar, atau tema dewasa. Tidak direkomendasikan untuk anak di bawah 15 tahun.",
      notAllowed: [
        "Konten seksual eksplisit",
        "Glorifikasi narkoba",
        "Kekerasan ekstrem/gore berlebihan",
        "Konten yang melanggar perundang-undangan"
      ],
      allowed: [
        "Kekerasan lebih nyata",
        "Bahasa kasar",
        "Tema dewasa",
        "Konten seksual sangat ringan (non-eksplisit)",
        "Cerita kompleks dengan tema moral berat"
      ]
    },
    {
      id: "18",
      badgeText: "18+",
      badgeLetter: "18+",
      label: "Dewasa",
      colorClass: "bg-[oklch(0.52_0.22_25)]",
      borderClass: "border-[oklch(0.52_0.22_25)]",
      textClass: "text-[oklch(0.80_0.22_25)]",
      bgClass: "bg-[oklch(0.52_0.22_25)]/10",
      hoverBgClass: "hover:bg-[oklch(0.52_0.22_25)]",
      ageGuideline: "Usia 18+ tahun",
      summary: "Gim ini mengandung konten dewasa yang tidak sesuai untuk anak dan remaja — termasuk kekerasan eksplisit, konten seksual, atau tema berat lainnya.",
      notAllowed: [
        "Pornografi",
        "Glorifikasi kejahatan nyata",
        "Konten yang melanggar peraturan perundang-undangan",
        "Propaganda terlarang"
      ],
      allowed: [
        "Kekerasan eksplisit",
        "Konten seksual (non-pornografi)",
        "Bahasa kasar",
        "Tema berat dan sensitif",
        "Simulasi judi (dalam konteks fiksi)"
      ]
    },
    {
      id: "terlarang",
      badgeText: "T",
      badgeLetter: "T",
      label: "Konten Terlarang",
      colorClass: "bg-slate-700",
      borderClass: "border-slate-700",
      textClass: "text-slate-300",
      bgClass: "bg-slate-700/10",
      hoverBgClass: "hover:bg-slate-700",
      ageGuideline: "Regulasi Negara",
      summary: "Konten yang dilarang keras untuk dimuat dalam permainan interaktif elektronik yang beredar di wilayah hukum Republik Indonesia. Gim yang memuat konten ini tidak diperbolehkan rilis.",
      notAllowed: [
        "Pornografi dan eksploitasi seksual",
        "Perjudian nyata (berbasis uang riil)",
        "Penyalahgunaan narkoba dan zat adiktif lainnya",
        "Makar, terorisme, dan separatisme",
        "Ujaran kebencian ekstrem & pelecehan SARA"
      ],
      allowed: []
    },
    {
      id: "klasifikasi",
      badgeText: "K",
      badgeLetter: "K",
      label: "Klasifikasi Konten",
      colorClass: "bg-amber-600",
      borderClass: "border-amber-600",
      textClass: "text-amber-500",
      bgClass: "bg-amber-600/10",
      hoverBgClass: "hover:bg-amber-600",
      ageGuideline: "Deskriptor IGRS",
      summary: "Metode IGRS dalam mengelompokkan kandungan game berdasarkan 9 aspek penilai konten.",
      notAllowed: [],
      allowed: []
    }
  ];

  const descriptorCards: DescriptorCard[] = [
    {
      title: "Horor",
      badges: ["13+", "15+", "18+"],
      icon: <Ghost className="size-6 text-purple-400" />,
      iconBgClass: "bg-purple-950/40 border-purple-800/40",
      description: "Gim mengandung elemen yang dapat menimbulkan rasa takut, seperti penampakan hantu, suasana mencekam, atau jumpscare.",
      advice: "Anak kecil mudah terbawa suasana. Pertimbangkan dampak pada tidur dan kecemasan anak."
    },
    {
      title: "Interaksi Daring",
      badges: ["7+", "13+", "15+", "18+"],
      icon: <Globe className="size-6 text-blue-400" />,
      iconBgClass: "bg-blue-950/40 border-blue-800/40",
      description: "Gim memiliki fitur bermain bersama atau berkomunikasi dengan pemain lain secara online, seperti chat teks, suara, atau video.",
      advice: "Pantau dengan siapa anak berinteraksi online. Ajarkan etika digital dan bahaya orang asing."
    },
    {
      title: "Penampilan Tokoh",
      badges: ["15+", "18+"],
      icon: <User className="size-6 text-orange-400" />,
      iconBgClass: "bg-orange-950/40 border-orange-800/40",
      description: "Gim menampilkan karakter dengan penampilan yang menonjolkan bagian tubuh tertentu atau busana yang tidak pantas.",
      advice: "Diskusikan dengan anak tentang standar penampilan yang realistis dan menghormati diri sendiri."
    },
    {
      title: "Kekerasan",
      badges: ["7+", "13+", "15+", "18+"],
      icon: <Swords className="size-6 text-amber-500" />,
      iconBgClass: "bg-amber-950/40 border-amber-900/40",
      description: "Gim mengandung adegan atau mekanisme yang melibatkan tindakan kekerasan, dari yang ringan (kartun) hingga realistis.",
      advice: "Kekerasan berulang dapat menumpulkan empati. Diskusikan bahwa kekerasan nyata punya konsekuensi serius."
    },
    {
      title: "Seksualitas / Pornografi",
      badges: ["18+"],
      icon: <Heart className="size-6 text-red-400" />,
      iconBgClass: "bg-red-950/40 border-red-900/40",
      description: "Gim mengandung konten seksual, mulai dari yang sangat ringan (romansa) hingga eksplisit (pornografi).",
      advice: "Konten ini tidak boleh diakses anak. Gunakan kontrol orang tua di perangkat dan toko aplikasi."
    },
    {
      title: "Rokok, Narkotika & Alkohol",
      badges: ["13+", "15+", "18+"],
      icon: <GlassWater className="size-6 text-stone-400" />,
      iconBgClass: "bg-stone-900/40 border-stone-800/40",
      description: "Gim menampilkan atau menggambarkan penggunaan rokok, narkotika, minuman beralkohol, atau zat adiktif lainnya.",
      advice: "Paparan dini pada konten ini dapat membentuk persepsi positif terhadap zat berbahaya pada anak."
    },
    {
      title: "Darah, Mutilasi & Kanibalisme",
      badges: ["18+"],
      icon: <Droplet className="size-6 text-red-500" />,
      iconBgClass: "bg-red-950/50 border-red-800/50",
      description: "Gim menampilkan darah, luka grafis, mutilasi anggota tubuh, atau adegan kanibalisme.",
      advice: "Konten ini sangat tidak cocok untuk anak dan remaja. Dapat menyebabkan trauma atau desensitisasi."
    },
    {
      title: "Bahasa Kasar",
      badges: ["13+", "15+", "18+"],
      icon: <MessageSquare className="size-6 text-yellow-500" />,
      iconBgClass: "bg-yellow-950/40 border-yellow-900/40",
      description: "Gim menggunakan kata-kata kasar, makian, atau bahasa yang tidak pantas dalam dialog, narasi, atau interaksi pemain.",
      advice: "Anak-anak mudah meniru bahasa yang sering mereka dengar. Tetapkan norma komunikasi di rumah."
    },
    {
      title: "Simulasi Judi",
      badges: ["13+", "15+", "18+"],
      icon: <Dices className="size-6 text-amber-600" />,
      iconBgClass: "bg-amber-950/40 border-amber-900/40",
      description: "Gim memiliki mekanisme yang menyerupai perjudian, seperti loot box, gacha, atau taruhan virtual dengan hadiah.",
      advice: "Mekanisme gacha dirancang adiktif. Batasi akses dan awasi pengeluaran anak dalam gim."
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "7+":
        return "bg-[oklch(0.72_0.18_125)] text-white";
      case "13+":
        return "bg-[oklch(0.68_0.19_75)] text-white";
      case "15+":
        return "bg-[oklch(0.58_0.21_50)] text-white";
      case "18+":
        return "bg-[oklch(0.52_0.22_25)] text-white";
      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* 1. Header Banner */}
      <div className="relative pt-12 pb-12 px-4 md:px-12 bg-linear-to-b from-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-heading">
            ■■■ PANDUAN RATING
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading">
            Informasi Rating Usia
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
            6 kategori rating + 9 klasifikasi konten untuk membantu orang tua memilih gim yang sesuai.
          </p>

          {/* Dynamic Tabs Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-slate-800 pb-4 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`flex items-center gap-2 pb-2.5 transition duration-200 cursor-pointer font-semibold relative text-xs md:text-sm ${
                  activeTab === tab.id
                    ? tab.textClass
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className={`w-7 h-5 flex items-center justify-center rounded font-pixel font-bold text-xs text-white ${tab.colorClass}`}>
                  {tab.badgeText}
                </span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
                    style={{
                      backgroundColor:
                        tab.id === "3"
                          ? "oklch(0.65 0.20 145)"
                          : tab.id === "7"
                            ? "oklch(0.72 0.18 125)"
                            : tab.id === "13"
                              ? "oklch(0.68 0.19 75)"
                              : tab.id === "15"
                                ? "oklch(0.58 0.21 50)"
                                : tab.id === "18"
                                  ? "oklch(0.52 0.22 25)"
                                  : tab.id === "terlarang"
                                    ? "rgb(100 116 139)"
                                    : "rgb(217 119 6)"
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Tab Content Area */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 pb-24">
        {activeTab === "klasifikasi" ? (
          /* Custom Layout: Klasifikasi Konten */
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            {/* Top Warning Box */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex items-start gap-4">
              <div className="p-3 bg-amber-500 text-slate-900 rounded-lg flex items-center justify-center shrink-0">
                <AlertCircle className="size-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-md font-bold text-slate-100 font-heading">
                  Apa itu Klasifikasi Konten?
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Klasifikasi konten adalah <strong>label tambahan</strong> yang muncul di samping badge rating usia. Label ini menjelaskan jenis konten spesifik dalam gim — seperti kekerasan, bahasa kasar, atau simulasi judi — membantu orang tua membuat keputusan yang lebih tepat dan terinformasi.
                </p>
              </div>
            </div>

            {/* Grid of 9 Descriptors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {descriptorCards.map((desc, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between hover:border-slate-700/60 hover:bg-slate-900/60 transition duration-300 min-h-[280px]"
                >
                  <div className="flex flex-col gap-4">
                    {/* Header: Icon, Title, and Rating Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-lg border flex items-center justify-center ${desc.iconBgClass}`}>
                          {desc.icon}
                        </div>
                        <h4 className="text-sm md:text-base font-extrabold text-slate-200 font-heading">
                          {desc.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1">
                        {desc.badges.map((b) => (
                          <span
                            key={b}
                            className={`px-1.5 py-0.5 rounded font-pixel text-[10px] font-bold ${getBadgeColor(b)}`}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {desc.description}
                    </p>
                  </div>

                  {/* Parental Advice Note Box */}
                  <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-lg flex items-start gap-2 text-[11px] leading-relaxed text-slate-400 mt-4">
                    <Lightbulb className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{desc.advice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Standard Layout: Premium 2-Column Mockup Layout */
          <div className="flex flex-col lg:flex-row gap-10 animate-in fade-in duration-300 items-start">
            {/* Left Column: Visual Badge Glass Card */}
            <div 
              className="w-full lg:w-[35%] flex flex-col items-center gap-6 p-8 rounded-3xl bg-slate-950/60 border bg-gradient-to-b from-slate-900/60 to-slate-950/80 transition duration-300 relative overflow-hidden"
              style={{
                borderColor: getRatingGlowColor(currentTab.id).replace("0.4", "0.2"),
                boxShadow: `0 10px 40px -10px ${getRatingGlowColor(currentTab.id).replace("0.4", "0.08")}`
              }}
            >
              {/* Glowing Box Badge */}
              <div 
                className="w-48 h-48 rounded-3xl border-2 border-dashed flex items-center justify-center relative p-3"
                style={{ borderColor: getRatingGlowColor(currentTab.id).replace("0.4", "0.25") }}
              >
                <div 
                  className={`w-40 h-40 rounded-2xl flex flex-col items-center justify-center text-white ${currentTab.colorClass} border-4 border-white/10 select-none transition`}
                  style={{ boxShadow: `0 0 35px ${getRatingGlowColor(currentTab.id)}` }}
                >
                  <span className="font-pixel text-6xl leading-none font-extrabold">{currentTab.badgeLetter}</span>
                  <span className="text-[10px] font-extrabold tracking-widest leading-none mt-1.5 opacity-90">IGRS</span>
                </div>
              </div>

              {/* Title & Age Info */}
              <div className="flex flex-col items-center text-center gap-2">
                <h3 className="text-2xl font-extrabold text-slate-100 font-heading">{currentTab.label}</h3>
                <span className={`text-sm font-extrabold tracking-wider ${currentTab.textClass}`}>
                  {currentTab.ageGuideline}
                </span>
                <span 
                  className="w-12 h-1 rounded-full mt-1.5"
                  style={{ backgroundColor: getRatingGlowColor(currentTab.id).replace("0.4", "1") }}
                />
              </div>

              {/* Summary Text */}
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed text-center font-normal px-2">
                {currentTab.summary}
              </p>

              {/* Button */}
              {activeTab !== "terlarang" && (
                <Link to={`/search?rating=${currentTab.id}`} className="w-full mt-2">
                  <Button
                    variant="outline"
                    className={`w-full py-6 bg-slate-900/35 hover:text-white flex items-center justify-between px-6 cursor-pointer transition rounded-2xl font-bold border ${currentTab.borderClass} ${currentTab.textClass} ${currentTab.hoverBgClass}`}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="size-5 shrink-0" />
                      <span>Lihat GIM {currentTab.badgeText}</span>
                    </div>
                    <ChevronRight className="size-5" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Right Column: Content Grid (Konten Dalam Gim) */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6">
              {/* Header Title with Separator */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-amber-500/60 relative flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
                </div>
                <h3 className="font-extrabold tracking-widest text-xs md:text-sm uppercase text-slate-200 font-heading">
                  KONTEN DALAM GIM
                </h3>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-amber-500/60 relative flex items-center justify-start">
                  <span className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
                </div>
              </div>

              {/* 1. Card: Konten tidak diperbolehkan */}
              {currentTab.notAllowed.length > 0 && (
                <div className="border border-red-500/20 bg-red-950/5 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition duration-300 hover:border-red-500/30">
                  {/* Left Icon Badge */}
                  <div className="flex flex-col items-center gap-3 shrink-0 w-36 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-red-950/45 border border-red-500/25 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.12)] transform rotate-45 transition hover:scale-105 duration-200">
                      <X className="size-6 -rotate-45" />
                    </div>
                    <span className="text-xs font-extrabold tracking-wide leading-tight text-slate-300 font-heading mt-1">
                      Konten tidak diperbolehkan
                    </span>
                  </div>
                  {/* Right Items List */}
                  <div className="flex-1 flex flex-col gap-3 justify-center md:border-l md:border-slate-800/80 md:pl-6 w-full">
                    {currentTab.notAllowed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-400 font-medium">
                        <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Card: Konten diperbolehkan */}
              {currentTab.allowed.length > 0 && (
                <div className="border border-emerald-500/20 bg-emerald-950/5 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition duration-300 hover:border-emerald-500/30">
                  {/* Left Icon Badge */}
                  <div className="flex flex-col items-center gap-3 shrink-0 w-36 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-950/45 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.12)] transform rotate-45 transition hover:scale-105 duration-200">
                      <Check className="size-6 -rotate-45" />
                    </div>
                    <span className="text-xs font-extrabold tracking-wide leading-tight text-slate-300 font-heading mt-1">
                      Konten diperbolehkan
                    </span>
                  </div>
                  {/* Right Items List */}
                  <div className="flex-1 flex flex-col gap-3 justify-center md:border-l md:border-slate-800/80 md:pl-6 w-full">
                    {currentTab.allowed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-400 font-medium">
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Card: Pengawasan Orang Tua */}
              {activeTab !== "terlarang" && (
                <div className="border border-blue-500/20 bg-blue-950/5 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition duration-300 hover:border-blue-500/30">
                  {/* Left Icon Badge */}
                  <div className="flex flex-col items-center shrink-0 w-36 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-950/45 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.12)] transform rotate-45 transition hover:scale-105 duration-200">
                      <Users className="size-6 -rotate-45" />
                    </div>
                  </div>
                  {/* Right Description */}
                  <div className="flex-1 flex flex-col gap-1.5 md:border-l md:border-slate-800/80 md:pl-6 w-full">
                    <h4 className="text-sm font-extrabold text-blue-400 uppercase tracking-wider font-heading">
                      Pengawasan Orang Tua
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                      Kami menyarankan orang tua untuk memahami konten gim yang dimainkan anak serta berdiskusi bersama tentang pengalaman bermain mereka.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}

// Inline ArrowRight helper
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
