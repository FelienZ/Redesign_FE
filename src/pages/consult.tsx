import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  FileText,
  AlertTriangle,
  CheckCircle2,
  User,
  Mail,
  Activity,
  Clock,
  ChevronRight,
  RotateCcw
} from "lucide-react";
import Footer from "@/layout/footer";

const quizQuestions = [
  {
    id: 1,
    question: "Apakah Anda sering merasa gelisah, mudah marah, atau cemas ketika tidak dapat bermain gim?"
  },
  {
    id: 2,
    question: "Apakah waktu bermain gim Anda sering mengganggu aktivitas penting seperti belajar, bekerja, tidur, atau bersosialisasi?"
  },
  {
    id: 3,
    question: "Apakah Anda sering gagal membatasi atau menghentikan aktivitas bermain gim meskipun Anda sudah berniat melakukannya?"
  },
  {
    id: 4,
    question: "Apakah Anda kehilangan minat pada hobi atau aktivitas hiburan lain yang sebelumnya Anda sukai selain bermain gim?"
  },
  {
    id: 5,
    question: "Apakah Anda pernah berbohong kepada keluarga atau teman dekat mengenai berapa lama waktu yang Anda habiskan untuk bermain gim?"
  }
];

const answerOptions = [
  { text: "Jarang / Tidak Pernah", score: 0 },
  { text: "Kadang-kadang", score: 1 },
  { text: "Sering", score: 2 },
  { text: "Sangat Sering", score: 3 }
];

export default function ConsultationPage() {
  // Quiz states
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Consultation Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    playTime: "",
    notes: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAnswerSelect = (qId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const calculateQuizResult = () => {
    let total = 0;
    quizQuestions.forEach((q) => {
      total += answers[q.id] || 0;
    });
    setQuizScore(total);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const getQuizDiagnosis = (score: number) => {
    if (score <= 3) {
      return {
        level: "Sehat / Normal",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        desc: "Pola bermain Anda tergolong sehat. Anda mampu membagi waktu dengan baik antara hiburan digital dan kewajiban harian.",
        recommendation: "Pertahankan disiplin waktu bermain Anda. Tetap luangkan waktu untuk bersosialisasi dan melakukan hobi fisik lainnya."
      };
    } else if (score <= 7) {
      return {
        level: "Kecanduan Ringan",
        color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
        desc: "Anda mulai menunjukkan gejala keterikatan berlebih pada gim. Waktu bermain mulai mengganggu beberapa fokus aktivitas harian Anda.",
        recommendation: "Mulai batasi waktu bermain Anda secara sadar (misal maksimal 2 jam sehari). Buat jadwal aktivitas rutin harian."
      };
    } else if (score <= 11) {
      return {
        level: "Kecanduan Sedang",
        color: "text-orange-400 bg-orange-500/10 border-orange-500/30",
        desc: "Tingkat kecanduan Anda cukup mengkhawatirkan. Hubungan sosial, produktivitas harian, dan kesehatan fisik Anda terancam terganggu.",
        recommendation: "Lakukan 'digital detox' selama beberapa hari. Informasikan keluarga untuk membantu membatasi akses gim Anda. Jika sulit, silakan hubungi tim konselor kami."
      };
    } else {
      return {
        level: "Kecanduan Berat (Risiko Tinggi)",
        color: "text-destructive bg-destructive/10 border-destructive/30",
        desc: "Bermain gim telah mengendalikan aktivitas harian Anda sepenuhnya. Anda berisiko mengalami stres berat, isolasi sosial, atau gangguan pola makan/tidur kronis.",
        recommendation: "Sangat disarankan untuk berkonsultasi dengan psikolog atau konselor profesional. Segera isi formulir konsultasi di bawah untuk mendapatkan bantuan lebih lanjut dari tim ahli kami secara gratis."
      };
    }
  };

  const diagnosis = getQuizDiagnosis(quizScore);

  return (
    <section className="bg-background min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header Banner */}
      <div className="relative pt-12 pb-16 px-4 md:px-12 bg-linear-to-b from-blue-950/25 via-slate-900/10 to-transparent text-center overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
          <Badge className="bg-destructive/15 text-destructive border border-destructive/20 px-3 py-1 text-xs uppercase font-semibold tracking-wider flex items-center gap-1.5">
            <MessageSquare className="size-3.5" /> Layanan Konsultasi
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Konsultasi Adiksi Gim Mandiri
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Apakah aktivitas bermain gim Anda atau anak Anda sudah melebihi batas wajar? Gunakan alat deteksi adiksi mandiri di bawah ini secara gratis.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 pb-24 flex flex-col lg:flex-row gap-10">
        {/* Left Column: Questionnaire Diagnostic (60% width) */}
        <div className="lg:w-[60%] flex flex-col gap-6">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-xs">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
              <FileText className="size-5 text-destructive" /> Tes Evaluasi Adiksi Gim
            </h3>

            {!quizSubmitted ? (
              <div className="flex flex-col gap-6 mt-4">
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed bg-slate-950/40 p-3 rounded border border-slate-900">
                  Jawab pertanyaan di bawah secara jujur berdasarkan aktivitas bermain Anda selama 6 bulan terakhir.
                </p>

                <div className="flex flex-col gap-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="flex flex-col gap-3 pb-5 border-b border-slate-800/60 last:border-b-0 last:pb-0">
                      <span className="text-xs font-semibold text-destructive uppercase tracking-wider">
                        Pertanyaan {idx + 1}
                      </span>
                      <h4 className="text-sm md:text-base font-medium text-slate-200">
                        {q.question}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {answerOptions.map((opt) => (
                          <button
                            key={opt.score}
                            onClick={() => handleAnswerSelect(q.id, opt.score)}
                            className={`p-3 rounded-lg text-left text-xs md:text-sm font-medium border transition-all duration-200 ${
                              answers[q.id] === opt.score
                                ? "bg-destructive/15 border-destructive text-white"
                                : "bg-slate-950/60 border-slate-800/60 text-slate-300 hover:bg-slate-800/40 hover:text-white"
                            }`}
                          >
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit button */}
                <Button
                  onClick={calculateQuizResult}
                  disabled={Object.keys(answers).length < quizQuestions.length}
                  className="bg-destructive hover:bg-destructive/95 text-white font-semibold py-6 mt-4 flex items-center justify-center gap-2"
                >
                  Lihat Hasil Analisis <ChevronRight className="size-4" />
                </Button>
                {Object.keys(answers).length < quizQuestions.length && (
                  <span className="text-xs text-slate-500 text-center">
                    Harap jawab semua {quizQuestions.length} pertanyaan di atas untuk melihat hasil.
                  </span>
                )}
              </div>
            ) : (
              // Quiz Results View
              <div className="flex flex-col gap-6 mt-4 animate-in fade-in duration-300">
                <div className={`p-6 rounded-xl border flex flex-col md:flex-row gap-5 items-center md:items-start ${diagnosis.color}`}>
                  <div className="p-3 bg-black/40 rounded-full border border-white/5 shrink-0">
                    <Activity className="size-10" />
                  </div>
                  <div className="flex flex-col gap-2 text-center md:text-left">
                    <div className="text-xs font-semibold uppercase tracking-wider">Hasil Diagnosis Mandiri</div>
                    <h4 className="text-xl md:text-2xl font-extrabold font-heading">
                      {diagnosis.level}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {diagnosis.desc}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-5 flex flex-col gap-3">
                  <h5 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-400" /> Rekomendasi Tindakan:
                  </h5>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                    {diagnosis.recommendation}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-3 mt-4">
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white flex items-center gap-2 py-5"
                  >
                    <RotateCcw className="size-4" /> Ulangi Evaluasi
                  </Button>
                  {quizScore >= 8 && (
                    <a href="#consult-form" className="flex-1">
                      <Button className="w-full bg-destructive hover:bg-destructive/95 text-white flex items-center justify-center gap-2 py-5">
                        Kirim Form Konsultasi <ChevronRight className="size-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Contact/Booking Consultation Form (40% width) */}
        <div id="consult-form" className="lg:w-[40%] flex flex-col gap-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-xs flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-destructive pl-3 mb-4 font-heading">
                Formulir Konsultasi Ahli
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                Ingin berdiskusi secara langsung dan privat dengan psikolog/konselor adiksi gim kami secara gratis? Isi formulir di bawah ini.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <User className="size-3 text-destructive" /> Nama Lengkap
                    </label>
                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="Masukkan nama lengkap Anda..."
                      value={formData.name}
                      onChange={handleFormChange}
                      className="bg-slate-950/60 border-slate-800 text-white placeholder-slate-500 py-5 text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <Mail className="size-3 text-destructive" /> Alamat Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="bg-slate-950/60 border-slate-800 text-white placeholder-slate-500 py-5 text-sm"
                    />
                  </div>

                  {/* Age & Play time row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Umur (Tahun)</label>
                      <Input
                        type="number"
                        name="age"
                        min="1"
                        placeholder="Misal: 15"
                        value={formData.age}
                        onChange={handleFormChange}
                        className="bg-slate-950/60 border-slate-800 text-white placeholder-slate-500 py-5 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Clock className="size-3 text-destructive" /> Durasi Main / Hari
                      </label>
                      <select
                        name="playTime"
                        value={formData.playTime}
                        onChange={handleFormChange}
                        className="bg-slate-950/60 border border-slate-800 text-white rounded-md p-2.5 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-destructive"
                      >
                        <option value="">Pilih durasi...</option>
                        <option value="<2">Kurang dari 2 Jam</option>
                        <option value="2-4">2 - 4 Jam</option>
                        <option value="4-6">4 - 6 Jam</option>
                        <option value=">6">Lebih dari 6 Jam</option>
                      </select>
                    </div>
                  </div>

                  {/* Message/Notes field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">Pesan / Keluhan Utama</label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Jelaskan secara singkat gejala kecanduan gim yang dialami..."
                      value={formData.notes}
                      onChange={handleFormChange}
                      className="bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 p-3 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-destructive"
                    />
                  </div>

                  <Button type="submit" className="bg-destructive hover:bg-destructive/95 text-white font-semibold py-5 mt-2 flex items-center justify-center gap-2">
                    Ajukan Konsultasi Gratis
                  </Button>
                </form>
              ) : (
                // Form Submission Success View
                <div className="flex flex-col items-center justify-center text-center gap-4 py-8 bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-xl animate-in zoom-in-95 duration-200">
                  <div className="p-3 bg-emerald-500/25 rounded-full border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-md font-bold text-slate-200">Formulir Terkirim!</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Terima kasih <strong>{formData.name}</strong>. Tim psikolog/konselor IGRS akan segera menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 24 jam kerja untuk melakukan asesmen lebih lanjut secara privat.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", age: "", playTime: "", notes: "" });
                    }}
                    variant="outline"
                    className="border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-xs py-4 px-4 mt-2"
                  >
                    Kirim Form Baru
                  </Button>
                </div>
              )}
            </div>

            {/* Note box */}
            <div className="mt-8 bg-destructive/5 border border-destructive/15 p-3 rounded-lg flex items-start gap-2 text-[10px] md:text-xs">
              <AlertTriangle className="size-4 text-destructive shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-normal">
                <strong>Catatan Penting:</strong> Seluruh data identitas diri dan informasi keluhan yang Anda kirimkan bersifat sangat rahasia (privat) sesuai dengan UU Perlindungan Data Pribadi (PDP).
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
