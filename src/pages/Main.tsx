import "../App.css";
import programmer2 from "../assets/programmer2.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import "../i18next";
import { useTranslation } from "react-i18next";
import TemporaryDrawer from "../Components/Burger";


const Main = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="section bg-[#1F1F1F]" id="main">
      <div className="conteiner">
        <div className="block1 flex justify-around pt-[20px]">
          <div className="left md:pl-[10px] lg:pl-[0]">
            <p className="name sm:hidden md:block text-white pt-[20px] font-medium text-[32px]">
              {t("Main.nameSurename")}
            </p>
            <div className="txt sm:hidden md:block">
              <h1 className="pt-[20px] text-white text-[36px]">
                {" "}
                {t("Main.welcome")}
              </h1>
              <p className="text-white font-bold text-[36px] pt-[40px]">
                {t("Main.Im")}
              </p>
              <p className="text-white pb-[25px] text-[18px]">
                {t("Main.Juniyor-lvl-1")}
              </p>

              <div className="btn pt-[50px]">
                <a
                  href="/src/assets/ResumeEng.pdf"
                  download="/src/assets/ResumeEng.pdf"
                >
                  <button className="py-[10px] px-[20px] bg-gradient-to-b from-blue-300 to-blue-800 text-white rounded-lg">
                    {t("Main.cv")}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="right  px-[50px]  text-white">
            <div className="items sm:hidden md:flex justify-center gap-5 cursor-pointer bg-[#1F1F1F]">
              <p className="font-light text-[20px] hover:text-gray-300">
                <Link to="main" smooth={true} offset={10} duration={700}>
                  {t("Main.home")}
                </Link>
              </p>

              <p className="font-light text-[20px] hover:text-gray-300">
                <Link to="about" smooth={true} offset={50} duration={700}>
                  {t("Main.about")}
                </Link>
              </p>

              <p className="font-light text-[20px] hover:text-gray-300">
                <Link to="skills" smooth={true} offset={90} duration={700}>
                  {t("Main.Skills")}
                </Link>
              </p>

              <p className="font-light text-[20px] hover:text-gray-300">
                <Link to="projects" smooth={true} offset={50} duration={700}>
                  {t("Main.Projects")}
                </Link>
              </p>

              <p className="font-light text-[20px] hover:text-gray-300">
                <Link to="cv" smooth={true} offset={50} duration={700}>
                  Contact
                </Link>
              </p>
              <div className="slc mt-[4px]">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-[#1F1F1F] outline-none"
                >
                  <option value="en" className="">
                    EN
                  </option>

                  <option value="tr">TR</option>
                  <option value="ru">RU</option>
                </select>

                <div className="burger"></div>
              </div>
            </div>

            <img src={programmer2} alt="" className="sm:hidden md:block" />
          </div>
        </div>

        <div className="img px-[10px] md:hidden ">
          <div className="burgerText flex justify-between py-[10px]">
            <div className="text">
              <p className="pSorbon text-white text-[28px] ">Sorbon Kadyrov</p>
            </div>
            <div className="burger">
              {/* <MenuIcon sx={{ color: "white" }} /> */}
              <TemporaryDrawer />
            </div>
          </div>
        </div>

        <div className="txt text-center md:hidden">
          <h1 className="text-white font-light text-[22px]">Welcome </h1>
          <p className="text-white font-bold text-[28px] py-[10px]">
            I’m Sorbon Kadyrov
          </p>
          <p className="text-white pb-[18px]">Juniyor lvl 1 developer</p>

          <div className="btn py-[10px]">
            <a
              href="/src/assets/ResumeEng.pdf"
              download="/src/assets/ResumeEng.pdf"
            >
              <button className="py-[10px] px-[10px] bg-gradient-to-b from-blue-300 to-blue-800 text-white rounded-lg">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
