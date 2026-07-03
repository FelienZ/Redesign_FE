import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

type Language = "ID" | "EN";
type TranslationKey = keyof typeof translations.ID;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("igrs_lang");
    return (saved as Language) || "ID";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("igrs_lang", lang);
  };

  const t = (key: TranslationKey, defaultText?: string): string => {
    const translation = translations[language]?.[key];
    return translation || defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
export default LanguageContext;
