import { getChooseUs } from "@/api/services/aboutservice";
import WhyChooseUs from "@/pages/faq";
import { imagesUrl } from "@/public/utils/url";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChooseUs = () => {
  const { t } = useTranslation("common");
  const [chooseUsList, setChooseUsList] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getChooseUs(params).then((res) => setChooseUsList(res?.data));
  }, [currentLang]);
  return (
    <section >
   
        <img src={imagesUrl + chooseUsList?.image?.url} />
        {/* <div className="sec-title light mb_50 upperCase">
                <h2>{t('chooseUs')}</h2>
              </div>
              <div className="row clearfix">
                {chooseUsList?.map((item, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 chooseus-block"
                   
                    key={i}
                  >
                    <div
                      className="chooseus-block-one wow fadeInUp animated"
                      data-wow-delay={`${i * 100}ms`}
                      data-wow-duration="1200ms"
                      style={{height:"250px"}}
                    >
                      <div
                        className={`inner-box p-4 h-100 ${
                          i < 3 ? "border-bottom" : ""
                        }`}
                      >
                        <h3>{item.title}</h3>
                        <p style={{fontSize:"14px"}}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
     
    </section>
  );
};
export default ChooseUs;
