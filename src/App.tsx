import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import behruz from "./assets/behruz.png"
import programmer from "./assets/programmer.png"
import programmer2 from "./assets/programmer2.png";
import programmer3 from "./assets/programmer3.png";
import fon from "./assets/fon.png"
import html3 from "./assets/html3.png"
import html5 from "./assets/html5.png";
import js from "./assets/js.png";
import bootstrap from "./assets/bootstrap.png";
import react from "./assets/react.png";
import girdak from "./assets/girdak.png"
import MenuIcon from "@mui/icons-material/Menu";


import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";


function App() {


  return (
    <>
      <div className="section bg-[#1F1F1F]">
        <div className="conteiner">
          <div className="block1 flex flex-wrap justify-around pt-[20px]">
            <div className="left ">
              <p className="sm:hidden md:block text-white pt-[20px] font-light">
                Sorbon Kadyrov
              </p>
              <div className="txt sm:hidden md:block">
                <h1 className="pt-[20px] text-white">Welcome </h1>
                <p className="text-white font-bold text-[36px] pt-[100px]">
                  I’m Sorbon Kadyrov
                </p>
                <p className="text-white pb-[25px]">Juniyor lvl 1 developer</p>

                <div className="btn pt-[50px]">
                  <button className="py-[10px] px-[20px] bg-gradient-to-b from-blue-300 to-blue-800 text-white rounded-lg">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            <div className="right  px-[50px]  text-white">
              <div className="items sm:hidden md:flex justify-center gap-5">
                <p className="font-light text-[20px]">Home</p>
                <p className="font-light text-[20px]">About Me</p>
                <p className="font-light text-[20px]">Works</p>
                <p className="font-light text-[20px]">Contact</p>
              </div>

              <img src={programmer2} alt="" className="sm:hidden md:block" />
            </div>
          </div>

          <div className="img px-[10px] md:hidden ">
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

        {/* <div className="conteiner">
          <div className="block1in1 flex  justify-left text-[24px] sm:pl-[0] lg:pl-[200px] sm:gap-5 lg:gap-10 py-[40px] text-white">
            <a href="">
              <p>Client</p>
            </a>
            <a href="">
              <p>Client</p>
            </a>
            <a href="">
              <p>Client</p>
            </a>
            <a href="">
              <p>Client</p>
            </a>
          </div>
        </div> */}

        <div className="conteiner">
          <div className="block3 sm:grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-[140px] ">
            <div className="left">
              <img src={programmer} alt="" />
            </div>
            <div className="rightt sm:text-center lg:text-start ">
              <h1 className="sm:text-[50px] md:text-[110px] font-bold text-white ">
                A little bit <br />
                <b className="tAbout sm:text-[50px] md:text-[110px] ml-[50px]">
                  about me ...
                </b>
              </h1>
              <p className="py-[20px] text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce{" "}
                <br />
                sollicitudin ut augue netus fusce fringilla. Aliquam blandit
                enim <br /> odio cursus id. Pulvinar commodo pellentesque non
                massa, nunc <br /> massa nisi est id. Diam est molestie massa
                commodo pulvinar <br />
                aliquam arcu gravida. Dictum pretium senectus dolor vulputate{" "}
                <br />
                tempor ac vel. Placerat proin sed risus at fusce aliquam.
                Convallis <br /> varius auctor quam fusce diam. Vulputate enim
                est nibh diam <br /> pellentesque. Adipiscing dolor turpis
                egestas velit sit feugiat <br /> ultricies. Id ac placerat dolor
                sem neque elit. Ut nisl <br /> turpis nisi etiam ac nibh.
              </p>
            </div>
          </div>
        </div>

        <div className="block4 py-[100px] sm:pl-[10px] lg:pl-[200px]">
          <hr className="w-[11%]" />
          <p className="text-4xl text-white ">My Skills</p>
          <div className="zabon  flex flex-wrap justify-center m-auto py-[50px] gap-20">
            <div className="html3">
              <img src={html3} alt="" />
            </div>
            <div className="html5">
              <img src={html5} alt="" />
            </div>
            <div className="js">
              <img src={js} alt="" />
            </div>
            <div className="bootstrap">
              <img src={bootstrap} alt="" />
            </div>
            <div className="react">
              <img src={react} alt="" />
            </div>
          </div>
          <div className="texts sm:grid grid-cols-1 sm:justify-items-center  md:grid-cols-4 text-white">
            <p>Adobe PhotoShop</p>
            <p>Microsoft Excel</p>
            <p>Adobe PhotoShop</p>
            <p>Microsoft Excel</p>
          </div>
        </div>

        <div className="block5 sm:grid grid-1 md:grid-cols-2 justify-items-center">
          <div className="left py-[50px]">
            <h1 className="text-4xl text-white pb-[10px] font-bold">
              language
            </h1>
            <hr className="sm:hidden lg:block w-[150%]" />
            <br />
            <div className="text-2xl language text-white py-[10px]">
              <p>Russion</p>
              <div className="khat sm:w-[200px] p-[10px_30px] lg:w-[400px]"></div>
            </div>
            <div className="text-2xl language text-white py-[10px]">
              <p>Turkish</p>
              <div className="khat1 sm:w-[200px] p-[10px_30px] lg:w-[400px]"></div>
            </div>
            <div className="text-2xl language text-white py-[10px]">
              <p>English</p>
              <div className="khat1 p-[10px_10px] w-[150px]"></div>
            </div>
          </div>
          <div className="rightt py-[50px]">
            <h1 className="text-4xl text-white pb-[10px] font-bold">Studies</h1>
            <hr className="sm:hidden lg:block w-[100%]" />
            <br />
            <div className="crm ">
              <div className="crm1 flex flex-wrap justify-center items-center text-white gap-5 py-[5px]">
                <img src={girdak} alt="" />
                <div className="texts">
                  <p className="text-[24px] py-[5px]">
                    Moscow Finance and Law University
                  </p>
                  <p className="text-xs text-gray-500">BBA 2022</p>
                </div>
              </div>

              <div className="crm1 flex flex-wrap justify-start items-center text-white gap-5 py-[5px]">
                <img src={girdak} alt="" />
                <div className="texts">
                  <p className="text-[24px] py-[5px]">Softclub Academy</p>
                  <p className="text-xs text-gray-500">BBA 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block6 py-[50px]">
          <h1 className="text-white text-2xl text-center font-bold py-[20px]">
            My Work Experiance
          </h1>

          <div className="imeges flex flex-wrap justify-center gap-5 px-[10px]">
            <div className="imgaes1">
              <img src={img1} alt="" />
            </div>
            <div className="imgaes2">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="imeges flex flex-wrap justify-center gap-5 pt-[10px] px-[10px]">
            <div className="imgaes3">
              <img src={img3} alt="" />
            </div>
            <div className="imgaes4">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>

        <div className="block7  text-white text-center">
          <h1 className="text-4xl font-bold py-[10px]">Intrested in my Work</h1>
          <p className="text-xs text-gray-500 py-[10px]">
            Download my cV to know more about me
          </p>

          <div className="btn py-[10px]">
            <button className="py-[15px] px-[15px] bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
