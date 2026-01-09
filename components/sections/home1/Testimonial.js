import { getReviews } from "@/api/services/homepageservices";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const { t } = useTranslation("common");
  const [reviews, setReviews] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getReviews(params).then((res) => {
      setReviews(res?.data);
    });
  }, [currentLang]);

  return (
    <>
      <section className="testimonial-section sec-pad bg-color-1">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/background/testimonial-bg.jpg)",
          }}
        ></div>
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
              <div className="content-box p_relative ml_45">
                <div className="sec-title mb_50">
                  <span className="sub-title upperCase">
                    {t("testimonials")}
                  </span>
                </div>
                <div className="content-box">
                  <TestimonialSlider1 reviews={reviews}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
