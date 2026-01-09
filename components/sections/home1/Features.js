"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { getValues } from "@/api/services/aboutservice";

const Feature = () => {
  const [values, setValues] = useState();
  const router = useRouter();
  const currentLang = router.locale || "hy";
  useEffect(() => {
    const params = {
      populate: "*",
      locale: currentLang,
    };
    getValues(params).then((res) => setValues(res.data?.values));
  }, [currentLang]);

  return (
    <section className="feature-section pt_150 pb_90 position-relative">
    {/* Left shape */}
    <div
      className="shape shape-left"
      style={{
        backgroundImage: "url(assets/images/shape/shape1-6.png)",
      }}
    ></div>
  
    {/* Right shape (mirrored or same) */}
    <div
      className="shape shape-right"
      style={{
        backgroundImage: "url(assets/images/shape/shape1-6.png)",
        right: 0,
        left: "auto",
      }}
    ></div>
  
    <div className="auto-container position-relative" style={{ maxWidth: "1200px" }}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        }}
      >
        {values?.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className={feature.iconClass}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </section>
  
  );
};

export default Feature;
