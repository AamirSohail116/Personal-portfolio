import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import "./Portfolio.css";
import "swiper/css";

function Portfolio() {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
