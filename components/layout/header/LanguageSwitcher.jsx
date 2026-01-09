import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Language = ({ isMobile = false, disabled = false }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const getLangLabel = (lang) => {
    if (lang === "en") return "English";
    if (lang === "hy") return "Հայերեն";
    if (lang === "ru") return "Русский";

    return lang?.toUpperCase();
  };

  const getFlag = (lang) => {
    if (lang === "en") return "🇺🇸";
    if (lang === "hy") return "🇦🇲";
    if (lang === "ru") return "🇷🇺";

    return "🏳️";
  };

  const [activeLang, setActiveLang] = useState("English");

  useEffect(() => {
    if (router.locale) {
      setActiveLang(getLangLabel(router.locale));
    }
  }, [router.locale]);

  const handleLanguageChange = async (locale) => {
    if (disabled) return;
    setIsOpen(false);
    await router.push(router.asPath, router.asPath, { locale });
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={`langSwitcher ${disabled ? "disabled" : ""}`}>
      <div
        className={`theme-btn btn-two ${isOpen ? "active" : ""}`}
        onClick={toggleDropdown}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
      >
        <span className="flag">{getFlag(router.locale)}</span>
        {activeLang}
        <span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {isOpen && !disabled && (
        <ul className={`langDropdown ${isMobile ? "mobile" : ""}`}>
          {router.locales?.map((locale) => (
            <li key={locale} className="langOption">
              <button
                onClick={() => handleLanguageChange(locale)}
                className="langLink"
              >
                <span className="flag" style={{ marginRight: 6 }}>
                  {getFlag(locale)}
                </span>
                {getLangLabel(locale)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
