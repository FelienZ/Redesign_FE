import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import Footer from "@/layout/footer";
import GrassDecoration from "@/components/ui/grassDecoration";
import { useLanguage } from "@/utils/LanguageContext";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const stats = [
    { label: t("about.stats.games"), value: "3.794+", color: "text-[oklch(0.65_0.20_145)]" },
    { label: t("about.stats.publishers"), value: "205+", color: "text-sky-400" },
    { label: t("about.stats.categories"), value: "5", color: "text-amber-500" },
    { label: t("about.stats.regulation"), value: "2024", color: "text-red-500" }
  ];

  const infoList = [
    {
      label: t("about.info.pub_service"),
      tagColor: "bg-red-500/10 text-red-500 border-red-500/20",
      desc: t("about.info.pub_service_desc")
    },
    {
      label: t("about.info.legal"),
      tagColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: t("about.info.legal_desc")
    },
    {
      label: t("about.info.objective"),
      tagColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      desc: t("about.info.objective_desc")
    },
    {
      label: t("about.info.benefit"),
      tagColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      desc: t("about.info.benefit_desc")
    }
  ];

  const abbreviation = [
    { letter: "I", word: "Indonesia", desc: language === "ID" ? "Negara Kesatuan Republik Indonesia" : "Republic of Indonesia", color: "bg-red-600" },
    { letter: "G", word: "Game", desc: language === "ID" ? "Permainan Interaktif Elektronik" : "Interactive Electronic Games", color: "bg-blue-600" },
    { letter: "R", word: "Rating", desc: language === "ID" ? "Klasifikasi berdasarkan usia" : "Age-based Classification", color: "bg-amber-600" },
    { letter: "S", word: "System", desc: language === "ID" ? "Sistem Pengelompokan Nasional" : "National Classification System", color: "bg-emerald-600" }
  ];

  const coreProcesses = [
    { num: 1, title: t("about.business.step1"), color: "bg-pink-600" },
    { num: 2, title: t("about.business.step2"), color: "bg-blue-600" },
    { num: 3, title: t("about.business.step3"), color: "bg-amber-600" },
    { num: 4, title: t("about.business.step4"), color: "bg-emerald-600" },
    { num: 5, title: t("about.business.step5"), color: "bg-purple-600" }
  ];

  const solutionCards = [
    {
      tabLabel: t("about.hadir.tujuan"),
      tabColor: "bg-red-600",
      desc: t("about.hadir.tujuan_desc")
    },
    {
      tabLabel: t("about.hadir.hukum"),
      tabColor: "bg-blue-600",
      desc: t("about.hadir.hukum_desc")
    },
    {
      tabLabel: t("about.hadir.penerbit"),
      tabColor: "bg-emerald-600",
      desc: t("about.hadir.penerbit_desc")
    },
    {
      tabLabel: t("about.hadir.industri"),
      tabColor: "bg-amber-600",
      desc: t("about.hadir.industri_desc")
    }
  ];

  const steps = [
    {
      num: "01",
      title: t("about.process.step1.title"),
      desc: t("about.process.step1.desc"),
      tagColor: "bg-red-600"
    },
    {
      num: "02",
      title: t("about.process.step2.title"),
      desc: t("about.process.step2.desc"),
      tagColor: "bg-blue-600"
    },
    {
      num: "03",
      title: t("about.process.step3.title"),
      desc: t("about.process.step3.desc"),
      tagColor: "bg-amber-600"
    },
    {
      num: "04",
      title: t("about.process.step4.title"),
      desc: t("about.process.step4.desc"),
      tagColor: "bg-emerald-600"
    },
    {
      num: "05",
      title: t("about.process.step5.title"),
      desc: t("about.process.step5.desc"),
      tagColor: "bg-purple-600"
    }
  ];

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* 1. Hero Section */}
      <div className="relative pt-12 pb-16 px-4 md:px-12 bg-linear-to-b from-blue-950/20 to-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.65_0.20_145)] font-heading">
            {t("about.title_label")}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight font-heading">
            {language === "ID" ? "Tentang" : "About"} <span className="text-[oklch(0.65_0.20_145)]">IGRS</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            {t("about.description")}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-xs">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-center md:text-left">
                <span className={`text-3xl md:text-4xl font-extrabold font-heading ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Indonesia Game Rating System Details */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 pb-20 flex flex-col lg:flex-row gap-10">
        {/* Left Column: Info Cards */}
        <div className="lg:w-[60%] flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 font-heading">
            {t("about.info.title_label")}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
            {language === "ID" ? "Sistem Klasifikasi Gim" : "Game Classification"}{" "}
            <span className="text-[oklch(0.65_0.20_145)]">Rating System</span>
          </h2>
          <div className="flex flex-col gap-4 mt-2">
            {infoList.map((info, idx) => (
              <div
                key={idx}
                className="bg-slate-900/35 border border-slate-800/80 p-5 rounded-xl flex flex-col gap-2 hover:border-slate-700/50 transition duration-300"
              >
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded w-fit border ${info.tagColor}`}>
                  {info.label}
                </span>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Singkatan & Proses Bisnis */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          {/* Card 1: Singkatan IGRS */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl shadow-lg">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
              {t("about.abbreviation.title")}
            </span>
            <div className="flex flex-col gap-3">
              {abbreviation.map((ab, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-900">
                  <div className={`w-10 h-10 shrink-0 rounded font-heading font-extrabold text-xl flex items-center justify-center text-white ${ab.color}`}>
                    {ab.letter}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-slate-200">{ab.word}</span>
                    <span className="text-xs text-slate-500 truncate">{ab.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Proses Bisnis Utama */}
          <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl shadow-lg">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
              {t("about.business.title")}
            </span>
            <div className="flex flex-col gap-3">
              {coreProcesses.map((proc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-900">
                  <div className={`w-7 h-7 shrink-0 rounded-full font-bold text-xs flex items-center justify-center text-white ${proc.color}`}>
                    {proc.num}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-300">
                    {proc.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mid Banner (Mengapa IGRS Hadir?) */}
      <div className="w-full bg-slate-950/80 relative">
        <GrassDecoration />
        <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-16 flex flex-col gap-10 text-center items-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-heading">
              {t("about.hadir.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              {t("about.hadir.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
            {solutionCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col hover:border-slate-700 transition duration-300"
              >
                {/* Colored Tab Header */}
                <div className={`px-4 py-3 text-xs md:text-sm font-bold text-white uppercase font-heading ${card.tabColor}`}>
                  {card.tabLabel}
                </div>
                <div className="p-5 flex-1 bg-slate-900/25">
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GrassDecoration />
      </div>

      {/* 4. Bottom Section: Cara Klasifikasi Gim di IGRS */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-20 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-heading">
              {t("about.process.label")}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
              {t("about.process.title")}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t("about.process.desc")}
            </p>
          </div>
          <Button className="bg-sky-600 hover:bg-sky-500 text-white font-semibold flex items-center gap-2 py-5 px-6 rounded-lg self-start shrink-0 cursor-pointer transition shadow-md border-none">
            <Download className="size-4" /> {t("about.process.download")}
          </Button>
        </div>

        {/* Step-by-Step Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col gap-4 hover:border-slate-700/60 hover:bg-slate-900/60 transition duration-300 relative justify-between min-h-[220px]"
            >
              <div className="flex flex-col gap-2">
                <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded w-fit font-heading ${step.tagColor}`}>
                  {step.num}
                </span>
                <h4 className="text-sm md:text-base font-extrabold text-slate-200 mt-2 font-heading leading-tight">
                  {step.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal mt-1 flex-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Info Alert Banner */}
        <div className="bg-blue-950/40 border border-blue-900/60 rounded-xl p-4 flex items-start gap-3 mt-4">
          <Info className="size-5 text-sky-400 shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
            {t("about.process.alert")}{" "}
            <a href="https://s.id/panduanIGRS" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline font-semibold">
              s.id/panduanIGRS
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
