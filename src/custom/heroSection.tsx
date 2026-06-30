import { dummyList } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen text-card flex flex-col justify-center text-center items-center gap-5 bg-linear-to-tl from-secondary via-blue-950 to-secondary">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6">
        <Badge className="bg-(--rating-3-soft) text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase">
          <Heart className="fill-(--rating-3-solid)" /> INDONESIA GAME RATE
          SYSTEM
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Tau <span className="text-(--rating-3-text)"> Rating</span> dulu
            <br />
            Baru Seru <span className="text-destructive">Gaming!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <p>Voluptates similique amet consectetur.</p>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex p-3">
            <Input
              placeholder="Cari nama game, publisher, genre.."
              className="shadow-lg border-none p-3 py-6 col-span-2 bg-accent/75"
            />
            <Button className="bg-destructive border-none py-6">
              Cari Game
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs">
            <p>Filter Cepat: </p>
            <Badge className="bg-(--rating-3-soft) text-(--rating-3-solid) p-3 px-4 border-(--rating-3-solid) hover:scale-105 cursor-pointer transition">
              3+ Semua Umur
            </Badge>
            <Badge className="bg-(--rating-7-soft) text-(--rating-7-solid) p-3 px-4 border-(--rating-7-solid) hover:scale-105 cursor-pointer transition">
              7+ Anak
            </Badge>
            <Badge className="bg-(--rating-13-soft) text-(--rating-13-solid) p-3 px-4 border-(--rating-13-solid) hover:scale-105 cursor-pointer transition">
              13+ Remaja
            </Badge>
            <Badge className="bg-(--rating-15-soft) text-(--rating-15-solid) p-3 px-4 border-(--rating-15-solid) hover:scale-105 cursor-pointer transition">
              15+ Dewasa Muda
            </Badge>
            <Badge className="bg-(--rating-18-soft) text-(--rating-18-solid) p-3 px-4 border-(--rating-18-solid) hover:scale-105 cursor-pointer transition">
              18+ Dewasa
            </Badge>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-400 mt-2">
            <span className="font-medium text-slate-400">
              Paling Banyak Dilihat:
            </span>
            {dummyList.map((i, idx) => (
              <span key={i.id} className="flex items-center gap-2">
                <span
                  className={`hover:underline cursor-pointer transition ${idx < 3 ? "text-(--rating-3-text)" : "text-slate-300"}`}
                >
                  {i.title}
                </span>
                {idx < 6 && <span className="text-slate-600 font-bold">·</span>}
              </span>
            ))}
            <span className="text-blue-400 hover:underline cursor-pointer text-[11px] ml-1">
              Lihat lebih banyak &gt;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
