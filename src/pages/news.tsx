import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ChevronRight,
  GripVertical,
} from "lucide-react";
import { newsConfig } from "@/utils/styleConfig";
import useNews from "@/utils/hooks/news/useNews";
import ImageWithFallback from "@/components/ui/imageWithFallback";
import { NewsSkeleton } from "@/components/custom/skeletons";
import Footer from "@/layout/footer";

export default function NewsPage() {
  const {
    data: news,
    isLoading: isLoadingNews,
    isError: isErrorNews,
  } = useNews({}); // fetch without strict limit to show full list

  return (
    <section className="bg-secondary flex flex-col justify-between min-h-screen text-slate-100">
      <div className="flex flex-col gap-8 px-4 py-10 md:px-12 max-w-7xl mx-auto w-full flex-1">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
          <Link to="/" className="hover:text-white transition flex items-center gap-1">
            <ArrowLeft className="size-3" /> Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold">Berita</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-2">
            <GripVertical className="size-8 text-primary" />
            <div className="flex flex-col font-bold">
              <h3 className="text-primary font-pixel text-sm">Semua Info Terkini</h3>
              <h2 className="text-3xl font-heading text-white">Berita & Pengumuman</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {isLoadingNews || isErrorNews ? (
          <NewsSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news?.data?.map((i) => (
              <Link
                key={i.id}
                to={`/news/${i.slug}`}
                className="group flex flex-col bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-slate-700 transition duration-300"
              >
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                  <ImageWithFallback
                    src={i.thumbnailUrl}
                    alt={i.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${newsConfig[i.category.slug]?.className || "bg-slate-700"} backdrop-blur-md shadow-md font-semibold px-3 py-1`}
                    >
                      {i.category.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1 p-5 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg text-slate-100 group-hover:text-primary transition line-clamp-2">
                      {i.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3">
                      {i.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-auto">
                    <span className="text-xs text-slate-500 font-medium">
                      {new Date(i.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className={`text-sm font-semibold flex items-center gap-1 ${newsConfig[i.category.slug]?.textColor || "text-blue-400"} group-hover:translate-x-1 transition`}>
                      Baca <ChevronRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {(!news?.data || news.data.length === 0) && (
              <div className="col-span-full py-12 text-center bg-slate-900/30 border border-slate-800 rounded-xl">
                <p className="text-slate-400">Belum ada berita tersedia saat ini.</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}
