import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import NavLinkPath from "./navlinkPath";

export default function Navbar() {
  return (
    <header className="flex justify-between p-3 px-4 bg-white fixed w-full shadow-md">
      <img src="/logo-igrs.webp" alt="logo-igrs" className="scale-90 w-20" />
      <nav className="flex items-center gap-5">
        <NavLinkPath path="/" title="Beranda"></NavLinkPath>
        <NavLinkPath path="/about" title="Tentang"></NavLinkPath>
        <NavLinkPath
          path="/information"
          title="Informasi Penting"
        ></NavLinkPath>
        <NavLinkPath path="/consult" title="Konsultasi Adiksi"></NavLinkPath>
      </nav>
      <div className="flex items-center gap-3">
        <Button variant={"outline"}>
          <Globe /> IND
        </Button>
        <Button variant={"outline"} className="bg-destructive">
          Masuk
        </Button>
      </div>
    </header>
  );
}
