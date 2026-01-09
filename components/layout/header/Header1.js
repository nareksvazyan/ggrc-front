"use client";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <header className={`main-header`}>
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="icon-1"></i>
                  {t("workingHour")}
                </li>
                <li>
                  <Link href="tel:00374 95520055">
                    <i className="icon-2"></i>
                    +374 95520055{" "}
                  </Link>
                  <span>, </span>
                  <Link href="tel:00374 60530055">+374 60530055</Link>
                </li>

                <li>
                  <img
                    src="/assets/images/icons/icon-1.png"
                    alt=""
                    style={{ width: "20px" }}
                  />{" "}
                  {t("location")}
                </li>
              </ul>
              <ul
                className="social-links clearfix"
                style={{ color: "var(--pink-color)" }}
              >
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
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-lower">
          <div className="outer-container">
            <div className="auto-container">
              <div className="outer-box">
                <div className="logo-box">
                  <figure className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo.png" alt="" />
                    </Link>
                  </figure>
                </div>
                <div className="menu-area">
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light clearfix">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <Menu />
                    </div>
                  </nav>
                </div>
                <div className="btn-box">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/images/logo.png" alt="" />
                  </Link>
                </figure>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <Menu />
                </div>
              </nav>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
