import { Minus } from "lucide-react";
import { Link } from "react-router";
import Star from "@/assets/elements/Star.svg";
import Heart from "@/assets/elements/Heart.svg";
import { useLanguage } from "@/utils/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const footerGroups = [
    {
      title: language === "ID" ? "Layanan" : "Services",
      links: [
        { label: language === "ID" ? "Cari Gim" : "Search Games", to: "/search" },
        { label: language === "ID" ? "Rating Usia" : "Age Rating", to: "/information" },
        { label: language === "ID" ? "Deskriptor Konten" : "Content Descriptors", to: "/information?tab=klasifikasi" },
        { label: language === "ID" ? "Konsultasi" : "Consultation", to: "/consult" },
      ],
    },
    {
      title: language === "ID" ? "Informasi" : "Information",
      links: [
        { label: language === "ID" ? "Tentang IGRS" : "About IGRS", to: "/about" },
        { label: language === "ID" ? "Regulasi" : "Regulations", to: "/about" },
        { label: "FAQ", to: "/information" },
        { label: language === "ID" ? "Hubungi Kami" : "Contact Us", to: "/consult" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col bg-card text-card-foreground/60">
      <div className="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4 md:px-12">
        <div className="flex flex-col gap-4 md:w-[85%]">
          <img src="/logo-igrs.webp" alt="logo IGRS" className="w-28" />
          <h3 className="text-sm leading-relaxed">
            {language === "ID" 
              ? "Sistem Klasifikasi Permainan Interaktif Elektronik Indonesia" 
              : "Indonesia Electronic Interactive Game Classification System"}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <img src={Heart} alt="" />
            <p>Made in Indonesia</p>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">{group.title}</h4>
            <ul className="flex flex-col gap-3 py-2 text-xs md:text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-slate-900 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900">{language === "ID" ? "Institusi" : "Institutions"}</h4>
          <ul className="flex flex-col gap-3 py-2 text-xs md:text-sm">
            <li>
              <a
                href="https://www.komdigi.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900 hover:underline"
              >
                KOMDIGI
              </a>
            </li>
            <li>
              <a
                href="https://www.kemenpora.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900 hover:underline"
              >
                Kemenpora
              </a>
            </li>
            <li>
              <a
                href="https://www.kpai.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900 hover:underline"
              >
                KPAI
              </a>
            </li>
            <li>
              <a
                href="https://www.pom.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900 hover:underline"
              >
                BPOM
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 text-xs shadow-sm inset-shadow-2xs md:flex-row md:items-center md:justify-between md:px-12">
        <span className="flex flex-wrap items-center gap-2 leading-relaxed">
          Copyright 2024 IGRS <Minus className="size-3" /> {language === "ID" ? "Kementerian Komunikasi dan Informatika Republik Indonesia" : "Ministry of Communication and Informatics Republic of Indonesia"}
        </span>
        <div className="flex items-center gap-3">
          {Array.from({ length: 3 }, (_, idx) => (
            <img
              src={Star}
              key={idx}
              alt=""
              className={idx % 2 === 0 ? "opacity-50" : ""}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
