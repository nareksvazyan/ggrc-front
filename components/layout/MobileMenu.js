import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { useEffect } from "react";
import InlineLanguageSwitcher from "./header/InlineLanguageSwitcher";
import LanguageSwitcher from "./header/LanguageSwitcher";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const { t } = useTranslation("common");

  const menuItems = [
    { href: "/about-us", label: t("about") },
    { href: "/service", label: t("services") },
    { href: "/team", label: t("team") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <div className="mobile-menu" style={{ backgroundColor: "red" }}>
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>

        <nav className="menu-box">
          <div className="nav-logo" onClick={handleMobileMenu}>
            <Link href="/">
              <img src="/assets/images/footer-logo.png" alt="Logo" />
            </Link>
          </div>

          <div className="menu-outer">
            <ul className="navigation clearfix">
              {menuItems.map((item, index) => (
                <li key={index} className="upperCase">
                  <Link href={item.href} onClick={handleMobileMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-btn-box">
           <InlineLanguageSwitcher />
          </div>
          <div className="contact-info">
            <h4>{t("contactUs")}</h4>
            <ul>
              <li>{t("location")}</li>
              <li>
                <Link href="tel:00374 95520055">(+374) 95520055</Link>
                <br />
                <Link href="tel:00374 60530055">(+374) 60530055</Link>
              </li>
              <li>
                <Link href="mailto:ggrcarmenia@gmail.com">
                  ggrcarmenia@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <ul className=" clearfix">
              <li>
                <a
                  href="https://www.instagram.com/ggrcarmenia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-4"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-6"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573021705465"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-7"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
