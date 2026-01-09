"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { getServices } from "@/api/services/servicespageservices";
import useTranslation from "next-translate/useTranslation";
import { imagesUrl } from "@/public/utils/url";
import Link from "next/link";

const Service = () => {
  const { t } = useTranslation("common");
  const [servicesList, setServicesList] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();
  const currentLang = router.locale || "hy";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check + resize listener
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getServices(params).then((res) => setServicesList(res?.data || []));
  }, [currentLang]);

  return (
    <section className="service-section sec-pad">
      <div className="auto-container position-relative">
        <div className="sec-title mb_50 centred">
          <span className="sub-title upperCase">{t("ourServices")}</span>
          <h2 style={{ width: "70%", margin: "0 auto", fontSize: "18px" }}>
            {t("serviceHeader")}
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={servicesList?.length > 5}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          autoplay={
            isSmallScreen
              ? { delay: 2500, disableOnInteraction: false }
              : false
          }
          navigation={
            !isSmallScreen
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
        >
          {servicesList.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay={`${index * 300}ms`}
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={imagesUrl + service?.image?.url}
                        alt={service.title}
                      />
                    </figure>
                  </div>
                  <div
                    className="lower-content"
                    style={{
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <Link href={`/service-details-${service?.service_id}`}>
                      <p className="upperCase">{service?.name}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons (Hidden on small screens) */}
        {!isSmallScreen && (
          <>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default Service;
