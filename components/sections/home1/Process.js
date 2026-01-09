import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import { getProcess } from "@/api/services/homepageservices";
import { imagesUrl } from "@/public/utils/url";

export default function Process() {
  const { t, lang: currentLang } = useTranslation("common");
  const [steps, setSteps] = useState([]);
  const router = useRouter();


  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getProcess(params).then((res) => setSteps(res.data || []));
  }, [currentLang]);

  return (
    <section className="process-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title upperCase">{t("process")}</span>
        </div>
        <div className="inner-container">
          <div
            className="arrow-shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-18-modified.svg)" }}
          ></div>

          {steps?.map((item, index) => (
            <div
              className="processing-block-one wow fadeInLeft animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
              key={item.id || index}
            >
              <div className="inner-box">
                <span className="count-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <figure className="image-box">
                  <img
                    src={imagesUrl + item?.image?.url}
                    alt={item.attributes?.title}
                  />
                </figure>
                <div className="lower-content">
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
