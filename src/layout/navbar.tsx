import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import NavLinkPath from "../components/ui/navlinkPath";
import { Link } from "react-router";
import { useState } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import AuthModal from "@/components/custom/AuthModal";

const navItems = [
  { path: "/", titleKey: "nav.home" as const },
  { path: "/about", titleKey: "nav.about" as const },
  { path: "/information", titleKey: "nav.rating_info" as const },
  { path: "/consult", titleKey: "nav.consultation" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleOpenAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
    setIsOpen(false);
  };

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
          <Button
            onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
            variant="outline"
            className="rounded-md border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition duration-200 cursor-pointer flex items-center gap-2"
          >
            <Globe className="size-4" /> {language}
          </Button>
          <Button
            onClick={() => handleOpenAuth("login")}
            className="rounded-md bg-destructive text-white hover:bg-destructive/90 transition duration-200 cursor-pointer border-none px-5 py-2 font-semibold text-sm"
          >
            {t("nav.login")}
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
        <div className="border-t border-slate-200 bg-card px-4 py-5 shadow-lg lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3.5 text-sm font-semibold px-1">
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
            <Button
              onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
              variant="outline"
              className="rounded-md border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition duration-200 cursor-pointer flex items-center gap-2 justify-center"
            >
              <Globe className="size-4" /> {language}
            </Button>
            <Button
              onClick={() => handleOpenAuth("login")}
              className="rounded-md bg-destructive text-white hover:bg-destructive/95 transition duration-200 border-none cursor-pointer py-2 font-semibold text-sm"
            >
              {t("nav.login")}
            </Button>
          </div>
        </div>
      )}

      {/* Auth Modal overlay component */}
      {isAuthOpen && (
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialTab={authMode} />
      )}
    </header>
  );
}
