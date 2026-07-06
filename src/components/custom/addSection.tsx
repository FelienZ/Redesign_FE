import { Button } from "@/components/ui/button";
import Star from "@/assets/elements/Star.svg";
import { Link } from "react-router";

export default function AddSection() {
  return (
    <section className="bg-(--rating-7-soft) flex flex-col gap-5 justify-center items-center min-h-[75vh]">
      <div className="flex items-center gap-3">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            src={Star}
            key={index}
            alt="Star-logo"
            className={`${index == 2 ? "" : "opacity-25"}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold text-4xl">
          Bersama Bermain Gim sesuai dengan Rating <br /> Usianya
        </h2>
        <h3 className="font-bold text-xl font-pixel text-(--rating-3-solid) tracking-widest">
          #TauRatingSeruGaming
        </h3>
      </div>
      <p className="w-[60%] text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        molestias facilis cupiditate ratione provident exercitationem velit,
        voluptate ullam et, ipsum sint expedita deserunt non magnam?
      </p>
      <Button asChild className="py-6 px-3 bg-(--rating-3-solid) text-white hover:bg-(--rating-3-solid)/90 cursor-pointer">
        <Link to="/submit-game">
          Daftarkan Gim Mandiri
        </Link>
      </Button>
    </section>
  );
}
