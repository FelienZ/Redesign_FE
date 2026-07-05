import { Outlet } from "react-router";
import Navbar from "@/layout/navbar";
import { LanguageProvider } from "@/utils/LanguageContext";
import ScrollHelper from "@/utils/ScrollHelper";

export default function Layout() {
  ScrollHelper();
  return (
    <LanguageProvider>
      <section className="bg-background">
        <Navbar />
        <article className="min-h-screen pt-16">
          <Outlet />
        </article>
      </section>
    </LanguageProvider>
  );
}
