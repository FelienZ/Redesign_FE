import { useState } from "react";
import { useNavigate } from "react-router";
import { dummyList } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/search");
    }
  };

  const handleQuickFilter = (rating: string) => {
    navigate(`/search?rating=${rating}`);
  };

  const handlePopularClick = (title: string) => {
    navigate(`/search?q=${encodeURIComponent(title)}`);
  };

  return (
    <section className="min-h-screen text-card flex flex-col justify-center text-center items-center gap-5 bg-linear-to-tl from-secondary via-blue-950 to-secondary">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6">
        <Badge className="bg-(--rating-3-soft) inset-shadow-xs text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase">
          <Heart className="fill-(--rating-3-solid)" /> INDONESIA GAME RATE
          SYSTEM
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Tau <span className="text-(--rating-3-text)"> Rating</span> dulu
            <br />
            Baru Seru <span className="text-destructive">Gaming!</span>
          </h2>
          <div className="text-slate-300">
            Sistem Klasifikasi Permainan Interaktif Elektronik Indonesia.
            <p className="text-sm text-slate-400 mt-1">Cari tahu batas usia bermain game favorit Anda di sini.</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full px-4">
          <form onSubmit={handleSearchSubmit} className="flex shadow-[6px_6px_0px_var(--accent)] w-full max-w-2xl mx-auto rounded-md overflow-hidden bg-accent/75">
            <Input
              placeholder="Cari nama game, publisher, genre.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="shadow-lg border-none p-3 py-6 col-span-2 bg-transparent text-white placeholder-slate-300 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
            />
            <Button type="submit" className="bg-destructive border-none py-6 px-6 shrink-0 cursor-pointer font-semibold text-white">
              Cari Game
            </Button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <p className="text-slate-300">Filter Cepat: </p>
            <Badge onClick={() => handleQuickFilter("3")} className="bg-(--rating-3-soft) text-(--rating-3-solid) p-3 px-4 border-(--rating-3-solid) hover:scale-105 cursor-pointer transition">
              3+ Semua Umur
            </Badge>
            <Badge onClick={() => handleQuickFilter("7")} className="bg-(--rating-7-soft) text-(--rating-7-solid) p-3 px-4 border-(--rating-7-solid) hover:scale-105 cursor-pointer transition">
              7+ Anak
            </Badge>
            <Badge onClick={() => handleQuickFilter("13")} className="bg-(--rating-13-soft) text-(--rating-13-solid) p-3 px-4 border-(--rating-13-solid) hover:scale-105 cursor-pointer transition">
              13+ Remaja
            </Badge>
            <Badge onClick={() => handleQuickFilter("15")} className="bg-(--rating-15-soft) text-(--rating-15-solid) p-3 px-4 border-(--rating-15-solid) hover:scale-105 cursor-pointer transition">
              15+ Dewasa Muda
            </Badge>
            <Badge onClick={() => handleQuickFilter("18")} className="bg-(--rating-18-soft) text-(--rating-18-solid) p-3 px-4 border-(--rating-18-solid) hover:scale-105 cursor-pointer transition">
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
                  onClick={() => handlePopularClick(i.title)}
                  className={`hover:underline cursor-pointer transition ${idx < 3 ? "text-(--rating-3-text)" : "text-slate-300"}`}
                >
                  {i.title}
                </span>
                {idx < 6 && <span className="text-slate-600 font-bold">·</span>}
              </span>
            ))}
            <span onClick={() => navigate("/search")} className="text-blue-400 hover:underline cursor-pointer text-[11px] ml-1">
              Lihat lebih banyak &gt;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
