import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import "./Testimonials.css";

function Testimonials() {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ilassumendavoluptates maiores dolor atque voluptatibus dolorem odit rerum dicta, laborum molestias!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ilassumendavoluptates maiores dolor atque voluptatibus dolorem odit rerum dicta, laborum molestias!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ilassumendavoluptates maiores dolor atque voluptatibus dolorem odit rerum dicta, laborum molestias!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ilassumendavoluptates maiores dolor atque voluptatibus dolorem odit rerum dicta, laborum molestias!",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "rgb(238 210 255)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
