
import "../App.css";
import img1 from "../assets/kinza.jpg";
import monokim from "../assets/monokim.jpg";
import userlist from "../assets/userListtt.jpg";
import todolist from "../assets/todoList.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../i18next";
import { useTranslation } from "react-i18next";
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
const Projects = () => {


    const { t, i18n } = useTranslation();

    const changeLanguage = (language: any) => {
      i18n.changeLanguage(language);
    };

  return (
    <div id="projects">
      <div className="block6 py-[50px] bg-[#1F1F1F]">
        <h1 className="text-white text-[36px] text-center font-bold py-[20px]">
          {t("Projects.Myproject")}
        </h1>
      </div>

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://kinza-project.netlify.app/" target="_blank">
              <img src={img1} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://starlit-alpaca-2859f0.netlify.app/"
              target="_blank"
            >
              <img src={monokim} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://employeeslists.netlify.app/" target="_blank">
              <img src={userlist} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://lambent-lokum-bc7efe.netlify.app/" target="_blank">
              <img src={todolist} />
            </a>
          </SwiperSlide>
          {/* <SwiperSlide>
            <a href="#" target="_blank">
              <img src={img1} />
            </a>
          </SwiperSlide> */}
        </Swiper>
      </>
    </div>
  );
};

export default Projects;
