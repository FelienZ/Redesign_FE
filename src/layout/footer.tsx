import { Heart, Minus, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-card text-card-foreground/60">
      <div className="grid grid-cols-4 gap-2 px-4 py-8">
        <div className="flex flex-col gap-4 w-[85%]">
          <img src="logo-igrs.webp" alt="logo-igrs" className="scale-90 w-30" />
          <h3>Sistem Klasifikasi Permainan Interaktif Elektronik Indonesia</h3>
          <div className="flex items-center gap-2">
            <Heart className="size-4 fill-destructive text-destructive" />
            <p>Made in Indonesia</p>
          </div>
        </div>

        {/* Layanan */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Layanan</h4>
          <ul className="flex flex-col gap-3 py-2">
            <li>Cari Gim</li>
            <li>Rating Usia</li>
            <li>Deskriptor Konten</li>
            <li>Konsultasi</li>
          </ul>
        </div>
        {/* Informasi */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Informasi</h4>
          <ul className="flex flex-col gap-3 py-2">
            <li>Tentang IGRS</li>
            <li>Regulasi</li>
            <li>FAQ</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
        {/* Layanan */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Institusi</h4>
          <ul className="flex flex-col gap-3 py-2">
            <li>KOMDIGI</li>
            <li>Kemenpora</li>
            <li>KPAI</li>
            <li>BPOM</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between shadow-sm inset-shadow-2xs p-3">
        <span className="flex items-center gap-2">
          © 2024IGRS <Minus /> Kementerian Komunikasi dan Informatika Republik
          Indonesia{" "}
        </span>
        <div className="flex items-center gap-3">
          {Array.from({ length: 3 }, (_, idx) => (
            <Star
              key={idx}
              className={`${idx % 2 != 0 ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
