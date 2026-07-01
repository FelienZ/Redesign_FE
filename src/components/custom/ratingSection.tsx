import { dummyRating, dummyThumbnail } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { LayoutTemplate, Minus } from "lucide-react";
import { NavLink } from "react-router";

export default function RatingSection() {
  return (
    <section className="min-h-screen text-card flex flex-col gap-5 p-6">
      {/* card Rating */}
      <div className="grid grid-cols-5 gap-5">
        {dummyRating.map((i) => (
          <div
            key={i.rating}
            className={`${i.backgroundColor} h-40 grid p-3 px-4`}
          >
            <span className="font-pixel text-left self-end text-4xl">
              {i.count}
            </span>
            <div className="grid grid-cols-3 gap-3 items-end text-left text-sm">
              <p className="col-span-2">{i.description}</p>
              <div className="flex flex-col gap-1 text-foreground text-center bg-black/20 p-3">
                <p className="font-pixel">{i.rating}</p>
                <p>IGRS</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* card classification */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <LayoutTemplate className="text-(--accent-yellow) fill-(--accent-yellow)" />
          <h3 className="font-bold text-xl">Klasifikasi Rating Usia</h3>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-(--rating-3-solid) text-card p-5 border-(--rating-3-solid) hover:scale-105 cursor-pointer transition">
            3+
            <Minus /> Semua Umur
          </Badge>
          <Badge className="bg-(--rating-7-soft) text-(--rating-7-solid) p-5 border-(--rating-7-solid) hover:scale-105 cursor-pointer transition">
            7+ <Minus /> Anak
          </Badge>
          <Badge className="bg-(--rating-13-soft) text-(--rating-13-solid) p-5 border-(--rating-13-solid) hover:scale-105 cursor-pointer transition">
            13+ <Minus /> Remaja
          </Badge>
          <Badge className="bg-(--rating-15-soft) text-(--rating-15-solid) p-5 border-(--rating-15-solid) hover:scale-105 cursor-pointer transition">
            15+ <Minus /> Dewasa Muda
          </Badge>
          <Badge className="bg-(--rating-18-soft) text-(--rating-18-solid) p-5 border-(--rating-18-solid) hover:scale-105 cursor-pointer transition">
            18+ <Minus /> Dewasa
          </Badge>
        </div>

        <div className="grid grid-cols-4 gap-3 my-5">
          {/* konten deskripsi */}
          <div className="grid col-span-1 bg-accent p-3 w-[110%] place-content-start gap-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1 bg-(--rating-3-solid) p-2 px-3 text-center">
                <p className="font-pixel">3+</p>
                <p>IGRS</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-(--rating-3-solid) font-pixel">
                  Rating IGRS
                </p>
                <h3 className="font-bold text-xl">Semua Umur</h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eum recusandae porro sequi qui voluptatibus est officia aut
              explicabo rem.
            </p>
            <NavLink
              to="/game"
              className={
                "text-(--rating-3-solid) transition right text-center hover:text-card"
              }
            >
              Lihat Semua Gim 3+
            </NavLink>
          </div>
          <div className="grid grid-cols-3 col-span-3 gap-3 w-[95%] place-self-end">
            {dummyThumbnail.map((i, idx) =>
              idx < 6 ? (
                <div
                  key={i.rating}
                  className="grid bg-accent hover:scale-105 transition"
                >
                  <div className="relative">
                    <img
                      src={i.imageUrl}
                      alt=""
                      className="aspect-video w-full"
                    />
                    <div
                      className={`absolute flex flex-col bg-(--rating-${i.rating}-solid) bottom-0 m-3 px-2 py-1 text-center text-sm`}
                    >
                      <p className="font-pixel">{i.rating}+</p>
                      <p>IGRS</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-left py-1 px-2">
                    <p className="font-bold text-lg">{i.title}</p>
                    <p>{i.genre}</p>
                  </div>
                </div>
              ) : (
                ""
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
