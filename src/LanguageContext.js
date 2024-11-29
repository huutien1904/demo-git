import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"));
  };

  const translations = {
    en: { greeting: "Hello", switch: "Switch to Vietnamese" },
    vi: { greeting: "Xin chào", switch: "Chuyển sang Tiếng Anh" },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
