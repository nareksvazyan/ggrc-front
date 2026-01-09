import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Accept reviews as a prop
export default function TestimonialSlider1({ reviews = [] }) {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      575: { slidesPerView: 1 },
      767: { slidesPerView: 1 },
      991: { slidesPerView: 1 },
      1199: { slidesPerView: 1 },
      1350: { slidesPerView: 1 },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none"
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="slide-item" >
            <div className="testimonial-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-23"></i>
                </div>
                <p>{review?.text}</p>
                <div className="author-box">
                  <h3>{review?.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
