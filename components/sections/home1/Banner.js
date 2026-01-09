import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getHomeIntro } from "@/api/services/homepageservices";
import { t } from "i18next";
import useTranslation from "next-translate/useTranslation";
import { imagesUrl } from "@/public/utils/url";
const Banner = () => {
  const { t } = useTranslation("common");
  const [homeInfo, setHomeInfo] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getHomeIntro(params).then((res) => setHomeInfo(res.data));
  }, [currentLang]);
  return (
    <section
      className="banner-section p_relative"
      style={{ position: "relative" }}
    >
      <div
        className="pattern-layer wow slideInDown animated"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
        style={{ background: "var(--theme-color)" }}
      ></div>

      {/* Left content */}
      <div
        className="auto-container"
        style={{ position: "relative", zIndex: 2, height: "80vh" }}
      >
        <div className="row align-items-center height-container">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <h2 className="upperCase homeHeader" style={{ color: "var(--pink-color)" }}>
                {homeInfo?.title}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Image absolute positioned */}
      {homeInfo?.image?.url && (
        <img
          src={imagesUrl + homeInfo.image.url}
          alt="GGRC Armenia"
          style={{
            position: "absolute",
            top: "120px",
            bottom: "0",
            right: 0,
            // width: "100%",
            height: "100%",
            objectFit: "scale-down",

            zIndex: 1,
          }}
        />
      )}
    </section>
  );
};

export default Banner;
