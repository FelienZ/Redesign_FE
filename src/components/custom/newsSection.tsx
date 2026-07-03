import { dummyNews } from "@/assets/data/dummy";
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

export default function NewsSection() {
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
        <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-[1.8fr_1.2fr]">
          <div className="grid bg-accent brightness-110 drop-shadow-lg shadow-sm border-background border">
            {/* gambar */}
            <div className="relative">
              <img
                src="/nekomichi.jpg"
                alt=""
                className="aspect-video w-full mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
              />
              <div className="absolute backdrop-blur-md flex items-center gap-2 top-0 m-3 bg-destructive p-1 text-sm">
                <Info className="size-4" />
                <h3 className="font-bold">Pengumuman Penting</h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <h2 className="font-bold text-xl md:text-2xl">
                Evaluasi dan Penangguhan Sementara Layanan Klasifikasi Gim IGRS
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                voluptas quos. Tempora debitis voluptatum iure, repudiandae eius
                fugiat ipsa, commodi voluptate blanditiis dicta vero deserunt.
                Libero animi voluptatibus esse et?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <CalendarDays className="size-4" />7 Februari 2025
                  <Clock className="size-4" />3 Menit yang lalu
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
            {dummyNews.slice(0, 4).map((i) => (
                <div key={i.id} className="grid grid-cols-1 gap-3 bg-accent/70 brightness-110 p-3 inset-shadow-2xs drop-shadow-2xl border sm:grid-cols-[0.8fr_2.2fr]">
                  <img src={i.imageUrl} alt="" className="h-20" />
                  <div className="flex flex-col gap-3">
                    <Badge
                      variant={"outline"}
                      className={newsConfig[i.label].className}
                    >
                      {i.label}
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
                        className={newsConfig[i.label].textColor}
                      >
                        Baca <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      <GrassDecoration />
    </section>
  );
}
