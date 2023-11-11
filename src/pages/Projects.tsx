import React, { useState } from 'react'
import "../App.css";
import img1 from "../assets/kinza.png"
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
const Projects = () => {


  return (
    <div id="projects">
      <div className="block6 py-[50px] bg-[#1F1F1F]">
        <h1 className="text-white text-2xl text-center font-bold py-[20px]">
          My Work Experiance
        </h1>

        <div className="svipers">
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        
      </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects