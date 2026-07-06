import { Button } from "@/components/ui/button";
import Star from "@/assets/elements/Star.svg";
import { Plus } from "lucide-react";

export default function AddSection() {
  return (
    <section className="bg-(--rating-7-soft) relative flex flex-col gap-6 justify-center items-center py-20 px-4 min-h-[60vh] overflow-hidden border-t border-b border-slate-900/10">
      {/* Decorative stars / shapes */}
      <div className="absolute top-10 left-10 opacity-10 animate-pulse hidden md:block select-none pointer-events-none">
        <img src={Star} alt="" className="w-8 h-8" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 animate-pulse hidden md:block select-none pointer-events-none">
        <img src={Star} alt="" className="w-12 h-12" />
      </div>
      
      <div className="flex flex-col gap-6 max-w-3xl w-full mx-auto justify-center items-center text-center z-10">
        <div className="flex items-center gap-1.5 bg-slate-950/10 p-2 px-3 rounded-full border border-white/5 shadow-inner">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              src={Star}
              key={index}
              alt="Star-logo"
              className={`w-4 h-4 transition duration-300 ${index === 2 ? "opacity-100 scale-110" : "opacity-25"}`}
            />
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <h2 className="font-extrabold text-3xl md:text-5xl font-heading text-white leading-tight">
            Bersama Bermain Gim Sesuai <br className="hidden sm:inline" /> dengan Rating Usianya
          </h2>
          <h3 className="font-bold text-xl font-pixel text-(--rating-3-solid) tracking-widest uppercase mt-1">
            #TauRatingSeruGaming
          </h3>
        </div>
        
        <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
          Indonesia Game Rating System (IGRS) memfasilitasi pengembang dan penerbit gim untuk melakukan klasifikasi produk mereka secara mandiri. Mari berkontribusi menciptakan ekosistem bermain gim yang sehat, aman, dan edukatif bagi anak-anak Indonesia.
        </p>
        
        <Button className="py-6 px-8 rounded-xl font-bold bg-(--rating-3-solid) hover:scale-105 hover:bg-(--rating-3-solid)/90 text-white border-none shadow-lg transition duration-300 cursor-pointer flex items-center gap-2 uppercase tracking-wider text-xs md:text-sm mt-2">
          <Plus className="size-4 md:size-5" /> Daftarkan Gim Mandiri
        </Button>
      </div>
    </section>
  );
}
