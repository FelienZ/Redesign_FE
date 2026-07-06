import { Outlet } from "react-router";
import Navbar from "@/layout/navbar";
import { LanguageProvider } from "@/utils/LanguageContext";
import ScrollHelper from "@/utils/ScrollHelper";
import { Toaster } from "sonner";

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
      <Toaster theme="dark" richColors position="top-center" />
    </LanguageProvider>
  );
}
