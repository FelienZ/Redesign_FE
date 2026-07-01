import { dummyThumbnail } from "@/assets/data/dummy";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Heart from "@/assets/elements/Heart.svg";

export default function GameSection() {
  return (
    <section className="min-h-screen flex flex-col gap-5 px-8 py-10 justify-center">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Heart} alt="Heart-logo" />
          <h2 className="font-bold text-xl">Gim di IGRS</h2>
        </div>
        <div className="flex items-center">
          <Button className="bg-destructive">Paling Dilihat</Button>
          <Button className="bg-accent">Terbaru</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 col-span-3 gap-6">
        {dummyThumbnail.map((i, idx) =>
          idx < 8 ? (
            <div
              key={i.rating}
              className="grid bg-accent hover:scale-105 transition"
            >
              <div className="relative">
                <img
                  src={i.imageUrl}
                  alt={i.title + " thumbnail"}
                  className="aspect-video w-full"
                />
                <div
                  className={`absolute flex flex-col bg-(--rating-${i.rating}-solid) bottom-0 m-3 px-2 py-1 text-center text-sm`}
                >
                  <p className="font-pixel">{i.rating}+</p>
                  <p>IGRS</p>
                </div>
                <div
                  className={`absolute bg-background/75 top-0 m-3 px-2 py-1 text-right text-sm place-self-end`}
                >
                  <p>{i.genre}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-left px-3 py-2">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">{i.title}</p>
                  <p>{i.genre}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className={`bg-(--rating-${i.rating}-soft) text-(--rating-${i.rating}-solid) w-fit px-2 py-1 text-center text-sm`}
                  >
                    {i.rating}+
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <Eye className="size-4" />
                    {i.viewers ?? 0}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          ),
        )}
      </div>
    </section>
  );
}
