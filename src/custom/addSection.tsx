import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function AddSection() {
  return (
    <section className="bg-(--rating-7-soft) flex flex-col gap-5 justify-center items-center min-h-[75vh]">
      <div className="flex items-center gap-3">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`fill-(--rating-13-soft) text-(--rating-13-${index % 2 == 0 ? "solid" : "soft"}) ${index % 2 == 0 ? "scale-140" : ""}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold text-4xl">
          Bersama Bermain Gim sesuai dengan Rating <br /> Usianya
        </h2>
        <h3 className="font-bold text-xl font-[Pixelify_Sans] text-(--rating-3-solid)">
          #TauRatingSeruGaming
        </h3>
      </div>
      <p className="w-[60%] text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        molestias facilis cupiditate ratione provident exercitationem velit,
        voluptate ullam et, ipsum sint expedita deserunt non magnam?
      </p>
      <Button className="py-6 px-3 bg-(--rating-3-solid)">
        Daftarkan Gim Mandiri
      </Button>
    </section>
  );
}
