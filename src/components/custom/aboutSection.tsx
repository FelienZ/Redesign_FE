import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Square, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";
import GrassDecoration from "../ui/grassDecoration";

export default function AboutSection() {
  return (
    <section className="flex flex-col justify-between bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh] text-card max-w-7xl w-full mx-auto gap-8 px-4 py-16 items-center">
        {/* Left Column: Stats */}
        <div className="order-2 lg:order-1 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center lg:items-start px-4 lg:px-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="text-(--rating-3-text) text-6xl md:text-8xl font-pixel tracking-wide [text-shadow:4px_4px_0px_var(--rating-3-soft)]">
              <h3>
                <span className="underline underline-offset-10 decoration-dashed decoration-4">
                  5.
                </span>{" "}
                224
              </h3>
            </div>
            <p className="text-sm text-slate-300 font-semibold tracking-wide uppercase">Total Gim yang Terdaftar</p>
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="text-(--rating-3-text) text-6xl md:text-8xl font-pixel tracking-wide [text-shadow:4px_4px_0px_var(--rating-3-soft)]">
              <h3>
                <span className="underline underline-offset-10 decoration-dashed decoration-4">
                  3.
                </span>{" "}
                118
              </h3>
            </div>
            <p className="text-sm text-slate-300 font-semibold tracking-wide uppercase">Total Penerbit Gim yang Terdaftar</p>
          </div>
        </div>

        {/* Right Column: About Info */}
        <div className="order-1 lg:order-2 flex flex-col justify-center gap-6 lg:gap-8 px-4 lg:px-8">
          <Badge
            variant={"outline"}
            className="bg-(--rating-3-soft) text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase w-fit"
          >
            <Square className="fill-(--rating-3-text) size-3" />
            <Square className="fill-(--rating-3-text) size-3" />
            <Square className="fill-(--rating-3-text) size-3" /> Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight font-heading text-white">
            <span className="text-(--rating-3-text)">IGRS</span> atau{" "}
            Klasifikasi Permainan Interaktif Elektronik{" "}
            <span className="text-(--rating-3-text) underline underline-offset-4 decoration-dashed">
              (KPIE)
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            <span className="font-bold text-white">
              Indonesia Game Rating System (IGRS)
            </span>{" "}
            adalah sistem klasifikasi permainan interaktif elektronik berdasarkan usia pengguna untuk mempermudah masyarakat memilih gim yang sesuai serta mendukung ekosistem gim nasional yang ramah keluarga.
          </p>
          <Button asChild className="w-fit py-6 px-5 cursor-pointer rounded-xl font-bold bg-destructive hover:bg-destructive/90 text-white transition border-none shadow-md">
            <Link to="/about" className="flex items-center gap-2">
              <SquareArrowOutUpRight className="size-4" /> Tentang IGRS
            </Link>
          </Button>
        </div>
      </div>
      <GrassDecoration />
    </section>
  );
}
