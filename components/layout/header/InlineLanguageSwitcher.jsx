import { useRouter } from "next/router";

const InlineLanguageSwitcher = () => {
  const router = useRouter();

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hy", label: "Հայերեն", flag: "🇦🇲" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },

  ];

  const changeLanguage = async (locale) => {
    if (locale === router.locale) return;
    await router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div className="inline-lang-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`lang-btn ${router.locale === lang.code ? "active" : ""}`}
        >
          <span className="flag">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default InlineLanguageSwitcher;
