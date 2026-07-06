import { useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router";
import { dummyNews } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsConfig } from "@/utils/styleConfig";
import useNews from "@/utils/hooks/news/useNews";
import { useLanguage } from "@/utils/LanguageContext";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  GripVertical,
  Info,
  X
} from "lucide-react";
import GrassDecoration from "@/components/ui/grassDecoration";

export default function NewsSection() {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const { data: newsResponse } = useNews();
  const { language } = useLanguage();
  const apiNews = newsResponse?.data?.data || [];

  const getMappedNews = (item: any) => {
    if (!item) return null;
    const cat = item.category?.category || "Berita";
    let mappedLabel: "Pengumuman Penting" | "Berita" | "Panduan" = "Berita";
    if (cat.toLowerCase() === "update" || cat.toLowerCase() === "pengumuman") {
      mappedLabel = "Pengumuman Penting";
    } else if (cat.toLowerCase() === "panduan" || cat.toLowerCase() === "guide") {
      mappedLabel = "Panduan";
    }
    return {
      id: item.id,
      title: item.title,
      description: item.description || "",
      imageUrl: item.thumbnailUrl || item.imageUrl || "/Minecraft bg.jpg",
      label: mappedLabel,
      createdAt: item.createdAt,
    };
  };

  const newsList = apiNews.length > 0 
    ? apiNews.map(getMappedNews).filter(Boolean) 
    : dummyNews;

  const mainNews = newsList[0];

  const handleNewsClick = (newsItem: any) => {
    if (newsItem.label === "Panduan") {
      // If it is a Guide, redirect to classification guide page
      navigate("/information?tab=klasifikasi");
    } else {
      // Show details in premium modal
      setSelectedNews(newsItem);
    }
  };

  return (
    <section className="bg-secondary flex flex-col justify-between scroll-animate">
      <div className="flex flex-col gap-6 px-4 py-10 md:px-8 max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-2">
            <GripVertical className="size-8 text-primary" />
            <div className="flex flex-col font-bold">
              <h3 className="text-primary font-pixel">Info Terkini</h3>
              <h2 className="text-2xl text-white">Berita & Pengumuman</h2>
            </div>
          </div>
          <Button
            asChild
            variant={"outline"}
            className="bg-secondary border-primary text-primary self-start sm:self-auto cursor-pointer rounded-xl font-bold px-5"
          >
            <Link to="/about" className="flex items-center gap-2">
              Lihat Semua <ChevronRight />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-[1.8fr_1.2fr]">
          {/* Main Hero News Card */}
          <div 
            onClick={() => handleNewsClick(mainNews)}
            className="grid bg-accent/60 hover:bg-accent/80 border-slate-800/60 hover:border-slate-700/80 transition duration-300 cursor-pointer drop-shadow-lg shadow-sm border rounded-2xl overflow-hidden group flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video w-full">
              <img
                src={mainNews.imageUrl}
                alt={mainNews.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
              />
              <div className={`absolute backdrop-blur-md flex items-center gap-2 top-4 left-4 p-2 text-xs rounded font-bold border border-white/10 select-none ${
                mainNews.label === "Pengumuman Penting"
                  ? "bg-destructive text-white"
                  : mainNews.label === "Panduan"
                    ? "bg-amber-600 text-white"
                    : "bg-[oklch(0.65_0.20_145)] text-slate-900"
              }`}>
                <Info className="size-4" />
                <span>{mainNews.label}</span>
              </div>
            </div>
            {/* Card Content */}
            <div className="flex flex-col gap-3 p-6">
              <h2 className="font-extrabold text-xl md:text-2xl font-heading text-white group-hover:text-destructive transition duration-200 leading-tight">
                {mainNews.title}
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                {mainNews.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-800/40 pt-4 mt-2">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="size-3.5" /> 
                    {new Date(mainNews.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" /> 
                    {Math.max(1, Math.round((mainNews.description || "").split(" ").length / 200))} {language === "ID" ? "Menit baca" : "Min read"}
                  </span>
                </div>
                <Button
                  variant={"link"}
                  className="text-destructive hover:text-white transition p-0 h-auto justify-start self-start sm:self-auto font-bold flex items-center gap-1 cursor-pointer"
                >
                  Baca Selengkapnya <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar List News Cards */}
          <div className="flex flex-col gap-4">
            {newsList.slice(1, 5).map((i: any) => (
              <div 
                key={i.id} 
                onClick={() => handleNewsClick(i)}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-accent/40 hover:bg-accent/70 border-slate-800/50 hover:border-slate-700/85 p-4 drop-shadow-md border rounded-2xl cursor-pointer transition duration-300 group"
              >
                <div className="overflow-hidden rounded-xl aspect-video sm:aspect-square w-full bg-slate-950 flex items-center justify-center shrink-0">
                  <img 
                    src={i.imageUrl} 
                    alt={i.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Badge
                      variant={"outline"}
                      className={`${newsConfig[i.label]?.className} border uppercase w-fit text-[9px] px-2 py-0.5`}
                    >
                      {i.label}
                    </Badge>
                    <h3 className="font-bold text-sm text-slate-200 group-hover:text-destructive transition leading-snug font-heading truncate-2-lines">
                      {i.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                    <span>
                      {new Date(i.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <Button
                      variant={"link"}
                      className={`${newsConfig[i.label]?.textColor} hover:text-white transition p-0 h-auto font-semibold flex items-center gap-0.5 cursor-pointer`}
                    >
                      Baca <ChevronRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GrassDecoration />

      {/* Premium News Detail Modal */}
      {selectedNews && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-950/95 p-6 md:p-8 shadow-2xl text-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute right-5 top-5 rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition cursor-pointer"
              aria-label="Tutup"
            >
              <X className="size-5" />
            </button>

            {/* Badge Category */}
            <Badge
              variant="outline"
              className={`${newsConfig[selectedNews.label]?.className} border uppercase w-fit mb-2`}
            >
              {selectedNews.label}
            </Badge>

            {/* Title */}
            <h2 className="text-xl md:text-3xl font-extrabold text-white leading-tight font-heading mt-2">
              {selectedNews.title}
            </h2>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3 pb-4 border-b border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4 text-destructive" />
                {new Date(selectedNews.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-destructive" />
                3 Menit yang lalu
              </span>
            </div>

            {/* Cover Image */}
            <img
              src={selectedNews.imageUrl}
              alt={selectedNews.title}
              className="w-full aspect-video md:aspect-21/9 object-cover rounded-2xl bg-slate-900 border border-slate-800 my-5"
            />

            {/* Article Content */}
            <div className="text-sm md:text-base text-slate-300 leading-relaxed space-y-4 font-normal mt-4">
              <p>
                {selectedNews.description}
              </p>
              <p>
                Klasifikasi permainan interaktif elektronik yang dilakukan secara berkala dan konsisten bertujuan untuk menjaga iklim industri gim tanah air tetap sehat, kreatif, dan aman bagi anak-anak Indonesia. Seluruh pemangku kepentingan, termasuk penerbit gim dan masyarakat umum, diimbau untuk selalu memeriksa kategori rating usia dari setiap gim yang dimainkan.
              </p>
              <p>
                Untuk informasi panduan detail mengenai kriteria penilaian konten lainnya, Anda juga dapat mengakses menu Panduan Rating resmi yang telah disediakan oleh Komite IGRS melalui situs resmi kami.
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
