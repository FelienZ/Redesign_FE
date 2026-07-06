import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { newsConfig } from "@/utils/styleConfig";
import useNewsDetail from "@/utils/hooks/news/useNewDetails";
import ImageWithFallback from "@/components/ui/imageWithFallback";
import Footer from "@/layout/footer";
import type { News } from "@/utils/types/news/News";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: newsData, isLoading, isError } = useNewsDetail(slug || "");
  const article = Array.isArray(newsData) ? newsData[0] : (newsData as News);

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header and Hero Image */}
      <div className="relative pt-8 pb-12 px-4 md:px-12 bg-slate-950/80 min-h-[40vh] flex flex-col justify-end">
        {article?.bannerUrl || article?.thumbnailUrl ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm pointer-events-none"
              style={{
                backgroundImage: `url(${article.bannerUrl || article.thumbnailUrl})`,
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none" />
          </>
        ) : null}

        <div className="relative max-w-4xl mx-auto w-full flex flex-col gap-6 z-10 pt-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
            <button
              onClick={() => navigate(-1)}
              className="hover:text-white transition flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 text-slate-400 font-sans"
            >
              <ArrowLeft className="size-3" /> Kembali
            </button>
            <span>/</span>
            <Link to="/news" className="hover:text-white transition">
              Berita
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold truncate max-w-[200px] md:max-w-xs">
              {isLoading ? "Memuat..." : article?.title || "Tidak Ditemukan"}
            </span>
          </nav>

          {isLoading ? (
            <div className="flex flex-col gap-4 animate-pulse">
              <div className="h-6 w-24 bg-slate-800 rounded"></div>
              <div className="h-10 w-3/4 bg-slate-800 rounded"></div>
              <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
            </div>
          ) : isError || !article ? (
            <div className="flex flex-col gap-4 py-10">
              <h1 className="text-3xl font-bold text-white">
                Berita tidak ditemukan
              </h1>
              <p className="text-slate-400">
                Maaf, berita yang Anda cari tidak tersedia atau terjadi
                kesalahan.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {article.category && (
                <Badge
                  className={`${newsConfig[article.category.slug]?.className || "bg-slate-700"} self-start px-3 py-1 text-sm shadow-lg`}
                >
                  {article.category.category}
                </Badge>
              )}
              <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300 border-t border-slate-800 pt-4 mt-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <CalendarDays className="size-4 text-slate-500" />
                  {new Date(article.createdAt).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="size-4 text-slate-500" />
                  Diperbarui:{" "}
                  {new Date(article.updatedAt).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto w-full px-4 md:px-12 py-10 flex-1">
        {isLoading ? (
          <div className="flex flex-col gap-6 animate-pulse">
            <div className="aspect-video w-full bg-slate-800 rounded-xl"></div>
            <div className="h-4 w-full bg-slate-800 rounded"></div>
            <div className="h-4 w-full bg-slate-800 rounded"></div>
            <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
          </div>
        ) : article ? (
          <div className="flex flex-col gap-8">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900">
              <ImageWithFallback
                src={article.bannerUrl || article.thumbnailUrl}
                alt={article.title}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>

            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed text-sm md:text-base">
              <p>{article.description}</p>
            </div>
          </div>
        ) : null}
      </div>

      <Footer />
    </section>
  );
}
