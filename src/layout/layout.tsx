import { Outlet, useLocation } from "react-router";
import Navbar from "@/layout/navbar";
import { LanguageProvider } from "@/utils/LanguageContext";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Keep loader for 1.2s, then start fadeout transition
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for fadeout animation (500ms) to complete before unmounting loader DOM node
      const fadeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    // Wait a brief moment for page components to render
    const animTimer = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(animTimer);
      observer.disconnect();
    };
  }, [location.pathname, isLoading]);

  return (
    <LanguageProvider>
      <section className={`bg-background relative min-h-screen ${isLoading ? "is-loading" : "is-loaded"}`}>
        {/* Modern & Minimalist Preloader Screen */}
        {shouldRender && (
          <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ease-in-out ${
              isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src="/logo-igrs.webp"
                alt="logo IGRS"
                className="h-16 w-auto animate-pulse filter brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
              {/* Premium Slim Progress Indicator */}
              <div className="h-0.5 w-32 bg-slate-800 rounded-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 bg-destructive rounded-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        )}

        {/* Navbar wrapper (opacity transition, no transforms to keep position: fixed intact) */}
        <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <Navbar />
        </div>

        {/* Website Content with simple opacity fade */}
        <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <article className="min-h-screen pt-16">
            <Outlet />
          </article>
        </div>
      </section>
    </LanguageProvider>
  );
}
