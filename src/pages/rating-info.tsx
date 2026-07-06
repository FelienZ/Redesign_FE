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
  AlertCircle
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
                    ? "text-white"
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
          /* Standard Layout: 2 Columns for 3+, 7+, 13+, 15+, 18+, and Terlarang */
          <div className="flex flex-col md:flex-row gap-10 animate-in fade-in duration-300">
            {/* Left Column: Visual Badge Column */}
            <div className="md:w-[30%] flex flex-col items-center gap-6">
              <div
                className={`w-44 h-44 rounded-xl flex flex-col items-center justify-center text-white font-heading font-extrabold text-3xl shadow-xl select-none ${currentTab.colorClass} border-4 border-white/10`}
              >
                <span className="font-pixel text-6xl leading-none">{currentTab.badgeLetter}</span>
                <span className="text-sm font-bold tracking-wider leading-none mt-1">IGRS</span>
              </div>

              <div className="flex flex-col items-center text-center gap-1.5">
                <h3 className="text-xl font-bold text-slate-100 font-heading">{currentTab.label}</h3>
                <span className={`text-xs font-bold ${currentTab.textClass}`}>
                  {currentTab.ageGuideline}
                </span>
              </div>

              {activeTab !== "terlarang" && (
                <Link to={`/search?rating=${currentTab.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full py-5 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-center gap-2 cursor-pointer transition font-medium"
                  >
                    Lihat Gim {currentTab.badgeText} <ArrowRight className="size-4 ml-1" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Right Column: Detailed Lists */}
            <div className="md:w-[70%] flex flex-col gap-6">
              {/* Card 1: Summary Bordered Box */}
              <div
                className={`p-6 rounded-xl border ${currentTab.bgClass}`}
                style={{
                  borderColor:
                    currentTab.id === "3"
                      ? "rgba(102, 204, 153, 0.3)"
                      : currentTab.id === "7"
                        ? "rgba(153, 220, 102, 0.3)"
                        : currentTab.id === "13"
                          ? "rgba(220, 153, 102, 0.3)"
                          : currentTab.id === "15"
                            ? "rgba(200, 102, 102, 0.3)"
                            : currentTab.id === "18"
                              ? "rgba(180, 50, 50, 0.3)"
                              : "rgba(148, 163, 184, 0.3)"
                }}
              >
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                  {currentTab.summary}
                </p>
              </div>

              {/* Card 2: Konten tidak diperbolehkan */}
              {currentTab.notAllowed.length > 0 && (
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Konten tidak diperbolehkan
                  </h4>
                  <div className="flex flex-col gap-3">
                    {currentTab.notAllowed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400 font-medium">
                        <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 3: Konten diperbolehkan */}
              {currentTab.allowed.length > 0 && (
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Konten diperbolehkan
                  </h4>
                  <div className="flex flex-col gap-3">
                    {currentTab.allowed.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400 font-medium">
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
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
