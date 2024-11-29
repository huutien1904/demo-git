import { LanguageProvider, useLanguage } from "./LanguageContext";

const Greeting = () => {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{translations[language].greeting}</h1>
      <h1>{translations[language].greeting}</h1>
      <h1>{translations[language].greeting}</h1>
      <h1>{translations[language].greeting}</h1>
      <h1>{translations[language].greeting}</h1>
      <button onClick={toggleLanguage}>{translations[language].switch}</button>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Greeting />
    </LanguageProvider>
  );
};

export default App;
