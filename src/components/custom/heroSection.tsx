import { useState } from "react";
import { useNavigate } from "react-router";
import { dummyList } from "@/assets/data/dummy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { decorationItems } from "@/utils/decorationItems";
import { Heart } from "lucide-react";
import { useLanguage } from "@/utils/LanguageContext";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

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
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden text-card flex flex-col justify-center text-center items-center gap-5 bg-linear-to-tl from-secondary via-blue-950 to-secondary px-4 py-14">
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-6">
        <Badge className="bg-(--rating-3-soft) inset-shadow-xs text-(--rating-3-text) p-2 px-4 border border-(--rating-3-solid)/20 text-xs font-semibold tracking-wider flex items-center gap-2 uppercase stagger-el stagger-delay-1">
          <Heart className="fill-(--rating-3-solid)" /> {t("hero.badge")}
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight stagger-el stagger-delay-2">
            {t("hero.title_p1")} <span className="text-(--rating-3-text)"> {t("hero.title_p2")}</span> {t("hero.title_p3")}{" "}
            <span className="text-destructive">{t("hero.title_p4")}</span>
          </h2>
          <div className="text-slate-300 stagger-el stagger-delay-3">
            {t("hero.sub")}
            <p className="text-sm text-slate-400 mt-1">{t("hero.sub_desc")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full px-4">
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row shadow-[6px_6px_0px_var(--accent)] w-full max-w-2xl mx-auto rounded-md overflow-hidden bg-accent/75 transition-all duration-300 focus-within:shadow-[6px_6px_0px_var(--destructive)] focus-within:bg-accent/90 focus-within:scale-[1.01] focus-within:ring-1 focus-within:ring-destructive/50 stagger-el stagger-delay-4">
            <Input
              placeholder={t("hero.placeholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="shadow-lg border-none p-3 py-6 col-span-2 bg-transparent text-white placeholder-slate-300 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
            />
            <Button type="submit" className="bg-destructive border-none py-6 px-6 shrink-0 cursor-pointer font-semibold text-white">
              {t("hero.btn")}
            </Button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs stagger-el stagger-delay-5">
            <p className="text-slate-300">{t("hero.filter")}</p>
            <Badge onClick={() => handleQuickFilter("3")} className="bg-(--rating-3-soft) text-(--rating-3-solid) p-3 px-4 border-(--rating-3-solid) hover:scale-105 cursor-pointer transition">
              {t("hero.rating.3")}
            </Badge>
            <Badge onClick={() => handleQuickFilter("7")} className="bg-(--rating-7-soft) text-(--rating-7-solid) p-3 px-4 border-(--rating-7-solid) hover:scale-105 cursor-pointer transition">
              {t("hero.rating.7")}
            </Badge>
            <Badge onClick={() => handleQuickFilter("13")} className="bg-(--rating-13-soft) text-(--rating-13-solid) p-3 px-4 border-(--rating-13-solid) hover:scale-105 cursor-pointer transition">
              {t("hero.rating.13")}
            </Badge>
            <Badge onClick={() => handleQuickFilter("15")} className="bg-(--rating-15-soft) text-(--rating-15-solid) p-3 px-4 border-(--rating-15-solid) hover:scale-105 cursor-pointer transition">
              {t("hero.rating.15")}
            </Badge>
            <Badge onClick={() => handleQuickFilter("18")} className="bg-(--rating-18-soft) text-(--rating-18-solid) p-3 px-4 border-(--rating-18-solid) hover:scale-105 cursor-pointer transition">
              {t("hero.rating.18")}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-400 mt-2 stagger-el stagger-delay-6">
            <span className="font-medium text-slate-400">
              {t("hero.popular")}
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
              {t("hero.view_more")}
            </span>
          </div>
        </div>
      </div>
        {decorationItems.map((i, idx) => (
          <img
            key={`${i.src}-${idx}`}
            src={i.src}
            alt=""
            style={{
              top: i.top,
              bottom: i.bottom,
              left: i.left,
              right: i.right,
              width: i.size,
              height: "auto",
              opacity: i.opacity,
            }}
            className={`absolute hidden md:block select-none pointer-events-none stagger-el stagger-delay-7 ${i.className || ""}`}
          />
        ))}
    </section>
  );
}
