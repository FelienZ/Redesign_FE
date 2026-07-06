import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsConfig } from "@/utils/styleConfig";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  GripVertical,
  Info,
} from "lucide-react";
import GrassDecoration from "@/components/ui/grassDecoration";
import useNews from "@/utils/hooks/news/useNews";
import ImageWithFallback from "../ui/imageWithFallback";
import { NewsSkeleton } from "./skeletons";

export default function NewsSection() {
  const {
    data: news,
    isLoading: isLoadingNews,
    isError: isErrorNews,
  } = useNews({ limit: 5 });
  return (
    <section className="bg-secondary flex flex-col justify-between">
      <div className="flex flex-col gap-6 px-4 py-10 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-2">
            <GripVertical className="size-8 text-primary" />
            <div className="flex flex-col font-bold">
              <h3 className="text-primary font-pixel">Info Terkini</h3>
              <h2 className="text-2xl">Berita & Pengumuman</h2>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="bg-secondary border-primary text-primary self-start sm:self-auto"
          >
            Lihat Semua <ChevronRight />
          </Button>
        </div>
        {isLoadingNews || isErrorNews ? (
          <NewsSkeleton />
        ) : (
          <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-[1.8fr_1.2fr]">
            <div className="grid bg-accent brightness-110 drop-shadow-lg shadow-sm border-background border">
              {/* gambar */}
              <div className="relative">
                <ImageWithFallback
                  src={news?.data[0].thumbnailUrl}
                  alt=""
                  className="aspect-video w-full mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
                />
                <div className="absolute backdrop-blur-md flex items-center gap-2 top-0 m-3 bg-destructive p-1 text-sm">
                  <Info className="size-4" />
                  <h3 className="font-bold">
                    {news?.data[0].category.category}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-3">
                <h2 className="font-bold text-xl md:text-2xl">
                  {news?.data[0].title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  {news?.data[0].description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <CalendarDays className="size-4" />
                    {news?.data[0].createdAt}
                    <Clock className="size-4" />
                    {news?.data[0].updatedAt}
                  </div>
                  <Button
                    variant={"link"}
                    className="text-destructive hover:text-card transition"
                  >
                    Baca Selengkapnya <ChevronRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {/* gambar */}
              {news?.data.slice(0, 4).map((i) => (
                <div
                  key={i.id}
                  className="grid grid-cols-1 place-content-center gap-3 bg-accent/70 brightness-110 p-3 inset-shadow-2xs drop-shadow-2xl border sm:grid-cols-[0.8fr_2.2fr]"
                >
                  <ImageWithFallback
                    src={i.thumbnailUrl}
                    alt={i.slug}
                    className="h-20 lg:h-25 place-self-center"
                  />
                  <div className="flex flex-col gap-3">
                    <Badge
                      variant={"outline"}
                      className={newsConfig[i.category.slug].className}
                    >
                      {i.category.category}
                    </Badge>
                    <h3 className="font-bold">{i.title}</h3>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      {new Date(i.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      <Button
                        variant={"link"}
                        className={newsConfig[i.category.slug].textColor}
                      >
                        Baca <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <GrassDecoration />
    </section>
  );
}
