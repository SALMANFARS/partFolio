import "../App.css";
import "../i18next";
import { useTranslation } from "react-i18next";

import programmer from "../assets/programmer.png";
const About = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: any) => {
      i18n.changeLanguage(language);
    };
  return (
    <div id="about" className="bg-[#1F1F1F]">
      <div className="conteiner">
        <div className="block3 sm:grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-[140px] ">
          <div className="left">
            <img src={programmer} alt="" />
          </div>
          <div className="rightt sm:text-center lg:text-start ">
            <h1 className="sm:text-[42px] md:text-[90px] font-bold text-white ">
              {t("About.A-little-bit")} <br />
              <b className="tAbout sm:text-[42px] md:text-[90px] ml-[50px]">
                {t("About.aboutMe")}
              </b>
            </h1>
            <p className="py-[20px] text-white px-[50px]">
              {t("About.I")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
