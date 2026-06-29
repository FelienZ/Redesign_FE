import { dummyList } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen text-card flex flex-col justify-center text-center items-center gap-5 bg-linear-to-tl from-indigo-950 via-blue-900 to-indigo-950">
      <Badge className="bg-(--rating-3-soft) text-(--rating-3-text) p-3 px-4">
        <Heart className="fill-(--rating-3-solid)" /> INDONESIA GAME RATE SYSTEM
      </Badge>
      <div className="flex flex-col gap-3">
        <h2 className="text-5xl font-bold">
          Tau <span className="text-(--rating-3-text)"> Rating</span> dulu
          <p>
            Baru Seru <span className="text-destructive">Gaming!</span>
          </p>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <p>Voluptates similique amet consectetur.</p>
        </p>
      </div>
      <div className="grid grid-cols-3 w-[40%]">
        <Input
          placeholder="Cari nama game, publisher, genre"
          className="shadow-lg border-transparent p-3 py-5 col-span-2 bg-accent-foreground/75"
        />
        <Button className="bg-destructive py-5">Cari Game</Button>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <p>Filter Cepat: </p>
        <Badge className="bg-(--rating-3-soft) text-(--rating-3-text) p-3 px-4">
          Semua Umur
        </Badge>
        <Badge className="bg-(--rating-7-soft) text-(--rating-7-text) p-3 px-4">
          Anak
        </Badge>
        <Badge className="bg-(--rating-13-soft) text-(--rating-13-text) p-3 px-4">
          Remaja
        </Badge>
        <Badge className="bg-(--rating-15-soft) text-(--rating-15-text) p-3 px-4">
          Dewasa Muda
        </Badge>
        <Badge className="bg-(--rating-18-soft) text-(--rating-15-text) p-3 px-4">
          Dewasa
        </Badge>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <p>Paling Banyak Dilihat: </p>
        {dummyList.map((i, idx) =>
          idx < 7 ? (
            <p key={i.id} className={idx < 4 ? "text-(--rating-3-text)" : ""}>
              {i.title}
            </p>
          ) : (
            ""
          ),
        )}
      </div>
    </section>
  );
}
