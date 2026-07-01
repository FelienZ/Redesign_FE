import { Minus } from "lucide-react";
import { Link } from "react-router";
import Star from "@/assets/elements/Star.svg";
import Heart from "@/assets/elements/Heart.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-card text-card-foreground/60">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-8 md:px-12">
        <div className="flex flex-col gap-4 md:w-[85%]">
          <img src="/logo-igrs.webp" alt="logo-igrs" className="scale-90 w-30" />
          <h3>Sistem Klasifikasi Permainan Interaktif Elektronik Indonesia</h3>
          <div className="flex items-center gap-2">
            <img src={Heart} alt="Heart-logo" />
            <p>Made in Indonesia</p>
          </div>
        </div>

        {/* Layanan */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900">Layanan</h4>
          <ul className="flex flex-col gap-3 py-2 text-xs md:text-sm">
            <li>
              <Link to="/search" className="hover:underline hover:text-slate-900 transition">
                Cari Gim
              </Link>
            </li>
            <li>
              <Link to="/information" className="hover:underline hover:text-slate-900 transition">
                Rating Usia
              </Link>
            </li>
            <li>
              <Link to="/information" className="hover:underline hover:text-slate-900 transition">
                Deskriptor Konten
              </Link>
            </li>
            <li>
              <Link to="/consult" className="hover:underline hover:text-slate-900 transition">
                Konsultasi
              </Link>
            </li>
          </ul>
        </div>
        {/* Informasi */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900">Informasi</h4>
          <ul className="flex flex-col gap-3 py-2 text-xs md:text-sm">
            <li>
              <Link to="/about" className="hover:underline hover:text-slate-900 transition">
                Tentang IGRS
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-slate-900 transition">
                Regulasi
              </Link>
            </li>
            <li>
              <Link to="/information" className="hover:underline hover:text-slate-900 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/consult" className="hover:underline hover:text-slate-900 transition">
                Hubungi Kami
              </Link>
            </li>
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
            <img
              src={Star}
              key={idx}
              alt="Star-logo"
              className={`${idx % 2 == 0 ? "opacity-50" : ""}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
