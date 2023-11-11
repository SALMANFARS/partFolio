import React from 'react'
import "../App.css";
import html3 from '../assets/html3.png'
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import ts from "../assets/typescript.png"
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import taildwinds from "../assets/talwinds.png";
import girdak from "../assets/girdak.png";

const Skills = () => {
  return (
    <div id="skills">
      <div className="block4 py-[20px] sm:pl-[10px] lg:pl-[200px] bg-[#1F1F1F]">
        <hr className="w-[11%]" />
        <p className="text-4xl text-white font-light">My Skills</p>
        <div className="zabon ">
          <div className="html3">
            <img src={html3} alt="" />
          </div>
          <div className="html5">
            <img src={html5} alt="" />
          </div>
          <div className="tailwinds">
            <img src={taildwinds} alt="" />
          </div>
          <div className="js">
            <img src={js} alt="" />
          </div>
          <div className="ts">
            <img src={ts} alt="" />
          </div>
          <div className="bootstrap">
            <img src={bootstrap} alt="" />
          </div>
          <div className="react">
            <img src={react} alt="" />
          </div>
          <div className="redux">
            <img src={redux} alt="" />
          </div>
        </div>
        <div className="texts sm:grid grid-cols-1 sm:justify-items-center  md:grid-cols-4 text-white">
          <p>Adobe PhotoShop</p>
          <p>Microsoft Excel</p>
        </div>
      </div>

      <div className="block5 sm:grid grid-1 md:grid-cols-2 justify-items-center bg-[#1F1F1F]">
        <div className="left py-[10px]">
          <h1 className="text-4xl text-white pb-[10px] font-bold">Language</h1>
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
        <div className="rightt py-[10px]">
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
    </div>
  );
}

export default Skills;