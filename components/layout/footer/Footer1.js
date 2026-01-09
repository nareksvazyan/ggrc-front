import { t } from "i18next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Footer1() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer" id="footer">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
          ></div>
          <div
            className="pattern-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
          ></div>
          <div className="pattern-4"></div>
        </div>
        <div className="widget-section pt_120 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="/assets/images/footer-logo.png" alt="GGRC" />
                    </Link>
                  </figure>

                  <ul className="social-links clearfix">
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
              <div className="col-lg-4 col-md-8 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_110">
                  <div className="widget-title">
                    <h3>{t("links")}</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">{t("home")}</Link>
                      </li>
                      <li>
                        <Link href="/about-us">{t("about")}</Link>
                      </li>
                      <li>
                        <Link href="/service">{t("services")}</Link>
                      </li>
                      {/* <li>
                        <Link href="/blog">Blog</Link>
                      </li> */}
                      <li>
                        <Link href="/contact">{t("contact")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-8 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>{t("contact")}</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <img src="/assets/images/icons/icon-1.png" alt="" />
                        Armenia Yerevan Abovyan 56/4
                      </li>
                      <li style={{ marginBottom: "1rem" }}>
                        <i className="icon-2"></i>
                        <Link href="tel:00374 95520055">+374 95520055</Link> <span>,  </span>

                        <Link href="tel:00374 60530055">+374 60530055</Link>
                      </li>
                      <li>
                     
                      </li>
                      <li>
                        <i className="icon-26"></i>
                        <Link href="mailto:ggrcarmenia@gmail.com">
                          ggrcarmenia@gmail.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {year} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
