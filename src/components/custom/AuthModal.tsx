import React, { useState } from "react";
import { X, Lock, Mail, User, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/utils/LanguageContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "login" | "register";
}

export default function AuthModal({ isOpen, onClose, initialTab = "login" }: AuthModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [picName, setPicName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "register") {
      if (password !== confirmPassword) {
        alert(t("auth.confirm_password") + " tidak cocok!");
        return;
      }
      if (!agreeTerms) {
        alert("Anda harus menyetujui Syarat & Ketentuan!");
        return;
      }
      setIsSuccess(true);
      setSuccessMsg(t("auth.register_title") + " berhasil dilakukan! Silakan periksa email Anda untuk verifikasi.");
    } else {
      setIsSuccess(true);
      setSuccessMsg("Selamat datang kembali! Berhasil masuk ke portal IGRS.");
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/90 p-8 shadow-2xl text-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white transition duration-200"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <CheckCircle className="size-16 text-emerald-500 animate-bounce" />
            <h3 className="text-2xl font-bold text-white font-heading">Sukses!</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">{successMsg}</p>
            <Button onClick={handleClose} className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white min-w-[120px]">
              Tutup
            </Button>
          </div>
        ) : (
          <>
            {/* Logo / Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex size-8 items-center justify-center rounded bg-destructive text-white font-heading font-extrabold text-sm select-none">
                IGRS
              </div>
              <span className="font-heading font-extrabold text-lg text-white select-none uppercase tracking-wide">
                Portal Redesign
              </span>
            </div>

            {/* Tab Buttons */}
            <div className="flex border-b border-slate-800 mb-6 gap-2">
              <button
                onClick={() => setActiveTab("login")}
                className={`pb-3 text-sm font-semibold uppercase tracking-wider relative transition duration-200 ${
                  activeTab === "login" ? "text-destructive" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t("auth.login")}
                {activeTab === "login" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-destructive rounded" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`pb-3 text-sm font-semibold uppercase tracking-wider relative transition duration-200 ml-4 ${
                  activeTab === "register" ? "text-destructive" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t("auth.register")}
                {activeTab === "register" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-destructive rounded" />
                )}
              </button>
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white font-heading mb-1.5">
                {activeTab === "login" ? t("auth.login_title") : t("auth.register_title")}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeTab === "login" ? t("auth.login_subtitle") : t("auth.register_subtitle")}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {activeTab === "register" && (
                <>
                  {/* Publisher / Company Name */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-400">{t("auth.publisher_name")}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                      <Input
                        type="text"
                        required
                        value={publisherName}
                        onChange={(e) => setPublisherName(e.target.value)}
                        placeholder="e.g. PT. Gamers Nusantara"
                        className="pl-9 bg-slate-900/60 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-destructive focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  {/* Person in Charge */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-400">{t("auth.pic")}</label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                      <Input
                        type="text"
                        required
                        value={picName}
                        onChange={(e) => setPicName(e.target.value)}
                        placeholder="e.g. Budi Santoso"
                        className="pl-9 bg-slate-900/60 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-destructive focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email Address */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-slate-400">{t("auth.email")}</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@penerbit.com"
                    className="pl-9 bg-slate-900/60 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-destructive focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5 text-left">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-400">{t("auth.password")}</label>
                  {activeTab === "login" && (
                    <a href="#" className="text-[11px] text-destructive hover:underline font-semibold">
                      {t("auth.forgot_password")}
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                  <Input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-9 bg-slate-900/60 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-destructive focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {activeTab === "register" && (
                <>
                  {/* Confirm Password */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-400">{t("auth.confirm_password")}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                      <Input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="pl-9 bg-slate-900/60 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-destructive focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-start gap-2.5 mt-2 text-left">
                    <input
                      type="checkbox"
                      id="terms-check"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="size-4 shrink-0 rounded border-slate-800 accent-destructive mt-0.5"
                    />
                    <label htmlFor="terms-check" className="text-[11px] text-slate-400 cursor-pointer select-none leading-relaxed">
                      {t("auth.terms")}
                    </label>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full mt-4 bg-destructive hover:bg-destructive/90 text-white font-semibold py-6 shrink-0 cursor-pointer rounded-lg shadow-md border-none uppercase tracking-wide">
                {activeTab === "login" ? t("auth.login_now") : t("auth.register_now")}
              </Button>

              {/* Switch Offer */}
              <div className="text-center mt-3 text-xs text-slate-400">
                {activeTab === "login" ? (
                  <>
                    {t("auth.no_account")}{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("register")}
                      className="text-destructive font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
                    >
                      {t("auth.register")}
                    </button>
                  </>
                ) : (
                  <>
                    {t("auth.have_account")}{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="text-destructive font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
                    >
                      {t("auth.login")}
                    </button>
                  </>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
