import React from 'react'
import "../App.css"

import programmer from '../assets/programmer.png'
const About = () => {
  return (
    <div id="about" className="bg-[#1F1F1F]">
      <div className="conteiner">
        <div className="block3 sm:grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-[140px] ">
          <div className="left">
            <img src={programmer} alt="" />
          </div>
          <div className="rightt sm:text-center lg:text-start ">
            <h1 className="sm:text-[50px] md:text-[90px] font-bold text-white ">
              A little bit <br />
              <b className="tAbout sm:text-[50px] md:text-[90px] ml-[50px]">
                about me ...
              </b>
            </h1>
            <p className="py-[20px] text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce{" "}
              <br />
              sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim{" "}
              <br /> odio cursus id. Pulvinar commodo pellentesque non massa,
              nunc <br /> massa nisi est id. Diam est molestie massa commodo
              pulvinar <br />
              aliquam arcu gravida. Dictum pretium senectus dolor vulputate{" "}
              <br />
              tempor ac vel. Placerat proin sed risus at fusce aliquam.
              Convallis <br /> varius auctor quam fusce diam. Vulputate enim est
              nibh diam <br /> pellentesque. Adipiscing dolor turpis egestas
              velit sit feugiat <br /> ultricies. Id ac placerat dolor sem neque
              elit. Ut nisl <br /> turpis nisi etiam ac nibh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About