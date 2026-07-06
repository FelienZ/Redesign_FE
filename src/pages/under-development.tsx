import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import Footer from "@/layout/footer";

export default function UnderDevelopmentPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-between bg-background text-slate-100">
      <div className="flex flex-col min-h-screen items-center justify-center flex-1 py-20 px-4">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-10 max-w-lg w-full text-center shadow-2xl backdrop-blur-sm flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              Fitur Sedang Dibangun
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-2">
              Fitur ini sedang dalam tahap pengembangan !
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition border border-slate-700 hover:border-slate-600 cursor-pointer"
            >
              <ArrowLeft className="size-4" /> Kembali
            </button>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-3 px-4 rounded-lg bg-destructive hover:bg-destructive/90 text-white font-semibold transition cursor-pointer"
            >
              Ke Beranda
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
