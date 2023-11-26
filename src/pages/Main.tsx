import "../App.css";
import programmer2 from "../assets/programmer2.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Layout = () => {
  return (
    <div className="section bg-[#1F1F1F]" id="main">
      <div className="conteiner">
        <div className="block1 flex flex-wrap justify-around pt-[20px]">
          <div className="left ">
            <p className="name sm:hidden md:block text-white pt-[20px] font-medium text-[32px]">
              Sorbon Kadyrov
            </p>
            <div className="txt sm:hidden md:block">
              <h1 className="pt-[20px] text-white text-[36px]">Welcome </h1>
              <p className="text-white font-bold text-[36px] pt-[40px]">
                I’m Sorbon Kadyrov
              </p>
              <p className="text-white pb-[25px] text-[18px]">
                Juniyor lvl 1 developer
              </p>

              <div className="btn pt-[50px]">
                <a
                  href="/src/assets/ResumeEng.pdf"
                  download="/src/assets/ResumeEng.pdf"
                >
                  <button className="py-[10px] px-[20px] bg-gradient-to-b from-blue-300 to-blue-800 text-white rounded-lg">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="right  px-[50px]  text-white">
            <div className="items sm:hidden md:flex justify-center gap-5 cursor-pointer">
              <p className="font-light text-[20px]">
                <Link to="main" smooth={true} offset={10} duration={700}>
                  Home
                </Link>
              </p>

              <p className="font-light text-[20px]">
                <Link to="about" smooth={true} offset={50} duration={700}>
                  About Me
                </Link>
              </p>

              <p className="font-light text-[20px]">
                <Link to="skills" smooth={true} offset={90} duration={700}>
                  Skills
                </Link>
              </p>

              <p className="font-light text-[20px]">
                <Link to="projects" smooth={true} offset={50} duration={700}>
                  Works
                </Link>
              </p>

              <p className="font-light text-[20px]">
                <Link to="cv" smooth={true} offset={50} duration={700}>
                  Contact
                </Link>
              </p>
            </div>

            <img src={programmer2} alt="" className="sm:hidden md:block" />
          </div>
        </div>

        <div className="img px-[10px] sm:hidden ">
          <div className="burgerText flex justify-between py-[10px]">
            <div className="text">
              <p className="pSorbon text-white ">Sorbon Kadyrov</p>
            </div>
            <div className="burger">
              <MenuIcon sx={{ color: "white" }} />
            </div>
          </div>
        </div>

        <div className="txt text-center md:hidden">
          <h1 className="pt-[20px] text-white font-light">Welcome </h1>
          <p className="text-white font-bold text-[28px] py-[10px]">
            I’m Sorbon Kadyrov
          </p>
          <p className="text-white pb-[18px]">Juniyor lvl 1 developer</p>

          <div className="btn py-[10px]">
            <button className="py-[5px] px-[10px] bg-gradient-to-b from-blue-300 to-blue-800 text-white rounded-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
