import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import Footer from "@/layout/footer";

const PixelDivider = () => (
  <div
    className="w-full h-4"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16'%3E%3Cpath d='M0 16V8h8v8h8V8h8v8' fill='%2316a34a'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "32px 16px"
    }}
  />
);

export default function AboutPage() {
  const stats = [
    { label: "Gim Terdaftar", value: "3.794+", color: "text-[oklch(0.65_0.20_145)]" },
    { label: "Penerbit", value: "205+", color: "text-sky-400" },
    { label: "Kategori Rating", value: "5", color: "text-amber-500" },
    { label: "Regulasi Terbaru", value: "2024", color: "text-red-500" }
  ];

  const infoList = [
    {
      label: "Layanan Publik",
      tagColor: "bg-red-500/10 text-red-500 border-red-500/20",
      desc: "IGRS adalah layanan publik dari Kominfo sebagai komitmen pemerintah untuk mewujudkan penyelenggaraan sistem dan transaksi elektronik khususnya Gim yang aman, andal, dan bertanggung jawab."
    },
    {
      label: "Dasar Hukum",
      tagColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Klasifikasi Gim dilaksanakan sesuai Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang Klasifikasi Gim."
    },
    {
      label: "Tujuan",
      tagColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      desc: "Memberikan klasifikasi usia dan konten dalam Gim yang beredar di Indonesia, dengan memperhatikan norma sosial, budaya bangsa, serta kesesuaian dengan peraturan perundang-undangan."
    },
    {
      label: "Manfaat",
      tagColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      desc: "Menyeimbangkan perkembangan industri kreatif digital dan kebutuhan perlindungan publik dari potensi dampak negatif konten gim melalui sistem yang transparan dan akuntabel."
    }
  ];

  const abbreviation = [
    { letter: "I", word: "Indonesia", desc: "Negara Kesatuan Republik Indonesia", color: "bg-red-600" },
    { letter: "G", word: "Game", desc: "Permainan Interaktif Elektronik", color: "bg-blue-600" },
    { letter: "R", word: "Rating", desc: "Klasifikasi berdasarkan usia", color: "bg-amber-600" },
    { letter: "S", word: "System", desc: "Sistem Pengelompokan Nasional", color: "bg-emerald-600" }
  ];

  const coreProcesses = [
    { num: 1, title: "Registrasi Penerbit", color: "bg-pink-600" },
    { num: 2, title: "Self-Assessment", color: "bg-blue-600" },
    { num: 3, title: "Uji Kesesuaian", color: "bg-amber-600" },
    { num: 4, title: "Penerbitan Rating", color: "bg-emerald-600" },
    { num: 5, title: "Pengawasan/Pengaduan", color: "bg-purple-600" }
  ];

  const solutionCards = [
    {
      tabLabel: "Tujuan Utama",
      tabColor: "bg-red-600",
      desc: "Memberikan klasifikasi usia dan konten dalam gim yang beredar di Indonesia, dengan memperhatikan norma sosial, budaya bangsa, serta kesesuaian peraturan."
    },
    {
      tabLabel: "Dasar Hukum",
      tabColor: "bg-blue-600",
      desc: "Dilaksanakan sesuai Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang Klasifikasi Gim."
    },
    {
      tabLabel: "Untuk Penerbit",
      tabColor: "bg-emerald-600",
      desc: "Memudahkan penerbit mendaftarkan dan mengklasifikasikan produknya, serta memfasilitasi aduan dan konsultasi masyarakat."
    },
    {
      tabLabel: "Industri & Masyarakat",
      tabColor: "bg-amber-600",
      desc: "Mendukung pertumbuhan industri gim nasional yang berkelanjutan dan memperkuat reputasi Indonesia dalam regulasi konten digital."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Daftar Akun",
      desc: "Penerbit atau pengembang gim mendaftarkan akun resmi di portal IGRS sebagai langkah pertama.",
      tagColor: "bg-red-600"
    },
    {
      num: "02",
      title: "Self-Assessment",
      desc: "Penerbit mendata gim, mengunggah cuplikan konten & simulasi permainan, lalu menjawab kuesioner klasifikasi.",
      tagColor: "bg-blue-600"
    },
    {
      num: "03",
      title: "Uji Kesesuaian",
      desc: "Tim IGRS melakukan uji kesesuaian kandungan berdasarkan kategori usia elektronis yang berlaku, istilah resmi dalam regulasi.",
      tagColor: "bg-amber-600"
    },
    {
      num: "04",
      title: "Proses Sanggah",
      desc: "Jika tidak setuju dengan hasil verifikasi, penerbit dapat mengajukan proses sanggah secara resmi.",
      tagColor: "bg-emerald-600"
    },
    {
      num: "05",
      title: "Penerbitan Sertifikat",
      desc: "Sertifikat resmi diterbitkan oleh Menteri melalui sistem setelah hasil verifikasi resmi didapatkan. Penerbit kemudian dapat mengunduh sertifikat tersebut.",
      tagColor: "bg-purple-600"
    }
  ];

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* 1. Hero Section */}
      <div className="relative pt-28 pb-16 px-4 md:px-12 bg-linear-to-b from-blue-950/20 to-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.65_0.20_145)] font-heading">
            APA TENTANG KAMI
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight font-heading">
            Tentang <span className="text-[oklch(0.65_0.20_145)]">IGRS</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            <strong>Indonesia Game Rating System (IGRS)</strong> adalah layanan publik dari Kementerian Komunikasi dan Digital (Komdigi) untuk mewujudkan gim yang aman, andal, dan bertanggung jawab di Indonesia.
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
            APA ITU IGRS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
            Indonesia Game <span className="text-[oklch(0.65_0.20_145)]">Rating System</span>
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
              SINGKATAN IGRS
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
              PROSES BISNIS UTAMA
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
        <PixelDivider />
        <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-16 flex flex-col gap-10 text-center items-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-heading">
              SOLUSI NYATA
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              Mengapa IGRS Hadir?
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
        <PixelDivider />
      </div>

      {/* 4. Bottom Section: Cara Klasifikasi Gim di IGRS */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 py-20 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-heading">
              PROSES KLASIFIKASI
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
              Cara Klasifikasi Gim di IGRS
            </h2>
            <p className="text-xs md:text-sm text-slate-350 leading-relaxed">
              Proses klasifikasi dilakukan melalui sistem daring. Pengembang/publisher mengisi formulir, mengunggah cuplikan gim, dan menjawab kuesioner klasifikasi.
            </p>
          </div>
          <Button className="bg-sky-600 hover:bg-sky-500 text-white font-semibold flex items-center gap-2 py-5 px-6 rounded-lg self-start shrink-0 cursor-pointer transition shadow-md border-none">
            <Download className="size-4" /> Unduh Panduan IGRS
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
            Melalui proses klasifikasi ini, IGRS berupaya menciptakan lingkungan bermain yang aman, bertanggung jawab, dan selaras dengan nilai-nilai masyarakat Indonesia. Butuh bantuan? Silakan pelajari lebih lanjut di{" "}
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
