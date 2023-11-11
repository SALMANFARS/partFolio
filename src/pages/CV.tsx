import React from 'react'

const CV = () => {
  return (
    <div id='cv'>
      <div className="block7  text-white text-center bg-[#1F1F1F]">
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
  );
}

export default CV