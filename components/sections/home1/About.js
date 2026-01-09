import { getHomePageAbout } from "@/api/services/homepageservices";
import { imagesUrl } from "@/public/utils/url";
import { t } from "i18next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const About = () => {
  const { t } = useTranslation("common");
  const [homeAbout, setHomeAbout] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getHomePageAbout(params).then((res) => setHomeAbout(res?.data));
  }, [currentLang]);

  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="pattern-layer">
        <div
          className="pattern-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                <figure className="image">
                  <img
                    src={imagesUrl + homeAbout?.image?.url}
                    alt={homeAbout?.title}
                  />
                </figure>
                <div className="icon-one">
                  <img src='/assets/images/icons/icon_1.svg' alt="GGRC" />
                </div>
                <div className="icon-two">
                <img src='/assets/images/icons/icon_2.svg' alt="GGRC" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <span className="sub-title upperCase">{t("about")}</span>
                </div>
                <div className="text-box mb_40">
                  <h6>{homeAbout?.title}</h6>
                  <p>{homeAbout?.text}</p>
                  <ul className="list-style-one clearfix">
                    {homeAbout &&
                      homeAbout?.list?.map((item, index) => (
                        <li key={index}>{item?.title}</li>
                      ))}
                  </ul>
                </div>
                <div className="btn-box">
                  <Link href="/about-us" className="theme-btn btn-one">
                    <span>{t("aboutUs")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
