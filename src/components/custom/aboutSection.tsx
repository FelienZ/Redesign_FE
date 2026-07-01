import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Square, SquareArrowOutUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen text-card bg-secondary grid grid-cols-2 gap-5 px-2 py-6">
      <div className="flex flex-col gap-3 justify-center px-5">
        <div className="flex flex-col gap-3">
          <div className="text-(--rating-3-text) text-8xl font-pixel tracking-wide [text-shadow:4px_4px_0px_var(--rating-3-soft)]">
            <h3>
              <span className="underline underline-offset-10 decoration-dashed decoration-4">
                5.
              </span>{" "}
              224
            </h3>
          </div>
          <p>Total Gim yang Terdaftar</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-(--rating-3-text) text-8xl font-pixel tracking-wide [text-shadow:4px_4px_0px_var(--rating-3-soft)]">
            <h3>
              <span className="underline underline-offset-10 decoration-dashed decoration-4">
                3.
              </span>
              118
            </h3>
          </div>

          <p>Total Penerbit Gim yang Terdaftar</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8">
        <Badge
          variant={"outline"}
          className="bg-(--rating-3-soft) text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase"
        >
          <Square className="fill-(--rating-3-text)" />
          <Square className="fill-(--rating-3-text)" />
          <Square className="fill-(--rating-3-text)" /> Tentang Kami
        </Badge>
        <h2 className="text-4xl font-bold w-[45%]">
          <span className="text-(--rating-3-text)">IGRS</span> atau Klasifikasi
          Permainan Interaktif Elektronik{" "}
          <span className="text-(--rating-3-text) underline underline-offset-4 decoration-dashed">
            (KPIE)
          </span>
        </h2>
        <p className="w-[75%]">
          <span className="font-bold">Indonesia Game Rating System (IGRS)</span>{" "}
          adalah Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Numquam vitae earum aspernatur sint placeat porro perferendis nesciunt
          vero magni repellat!
        </p>
        <Button className="w-fit py-5 px-3">
          <SquareArrowOutUpRight /> Tentang IGRS
        </Button>
      </div>
    </section>
  );
}
