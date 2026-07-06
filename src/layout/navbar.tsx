import { Button } from "@/components/ui/button";
import { Globe, Menu, Search, X } from "lucide-react";
import NavLinkPath from "../components/ui/navlinkPath";
import { Link } from "react-router";
import { useState } from "react";
import { useLanguage } from "@/utils/LanguageContext";

const navItems = [
  { path: "/", titleKey: "nav.home" as const },
  { path: "/about", titleKey: "nav.about" as const },
  { path: "/information", titleKey: "nav.rating_info" as const },
  { path: "/consult", titleKey: "nav.consultation" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-card/95 text-card-foreground shadow-md backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <img src="/logo-igrs.webp" alt="logo IGRS" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <NavLinkPath key={item.path} path={item.path} title={t(item.titleKey)} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700">
            <Link to="/search">
              <Search className="size-4" /> {t("nav.search")}
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700 cursor-pointer">
            <Link to="/under-development">
              <Globe className="size-4" /> {language}
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700 cursor-pointer">
            <Link to="/under-development">{t("nav.register")}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md bg-destructive px-4 text-white hover:bg-destructive/90 hover:text-white cursor-pointer border-none">
            <Link to="/under-development">{t("nav.login")}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Buka menu navigasi"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-800 lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-card px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold">
            {navItems.map((item) => (
              <NavLinkPath
                key={item.path}
                path={item.path}
                title={t(item.titleKey)}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700">
              <Link to="/search" onClick={() => setIsOpen(false)}>
                <Search className="size-4" /> {t("nav.search")}
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700 cursor-pointer">
              <Link to="/under-development" onClick={() => setIsOpen(false)}>
                <Globe className="size-4" /> {language}
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md border-slate-200 bg-white text-slate-700 cursor-pointer">
              <Link to="/under-development" onClick={() => setIsOpen(false)}>{t("nav.register")}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md bg-destructive text-white hover:bg-destructive/90 hover:text-white border-none cursor-pointer">
              <Link to="/under-development" onClick={() => setIsOpen(false)}>{t("nav.login")}</Link>
            </Button>
          </div>
        </div>
      )}

    </header>
  );
}
