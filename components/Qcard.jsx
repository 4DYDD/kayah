import React, { useState, useEffect } from "react";

export default function Qcard({ data, color = {}, br = false }) {
  const { value, index } = data;
  const {
    background = "bg-teal-700",
    hover = ["bg-teal-600"],
    portrait = ["text-[12px]", "w-[200px]", "h-[150px]"],
    shadow = "shadow-teal-700",
    text = "text-white",
    boxtitle = "bg-teal-500",
    hr = "bg-teal-500",
  } = color;

  const newhover = hover.map((value, index) => `hover:${value}`);
  const newportrait = portrait.map((value, index) => `portrait:${value}`);

  return (
    /* --CARD-- */
    <React.Fragment key={`${value} ${index}`}>
      <div
        className={`
          ${background}
          ${newhover && newhover.join(" ")}
          ${newportrait && newportrait.join(" ")}
          ${text} ${shadow}
          w-[220px] h-[200px] flex justify-center items-center flex-col rounded-lg shadow cursor-pointer transition-all ease-out duration-100 hover:scale-95 overflow-hidden
          `}
        key={index}
      >
        <div className="h-auto flex flex-col justify-center items-center p-0">
          {/* --Jarak-- */}
          <div className="font-bold" key={`${value.nama} ${index}`}>
            {value.nama}
          </div>
          <div
            className="font-bold text-yellow-300 text-[1.4em]"
            key={`${value.asma} ${index}`}
          >
            {value.asma}
          </div>
          <div
            className="font-bold text-[0.9em]"
            key={`--${value.arti}-- ${index}`}
          >
            {value.arti}
          </div>
        </div>

        <div
          className={`${hr} w-full h-[1.3px] my-4 border-box flex justify-center items-center gap-1 px-1`}
        >
          <div
            className={`position-relative w-[100%] py-[2.7px] ${hr} rounded-[30%]`}
          ></div>
          <div
            className={`position-relative w-[100%] py-[2.7px] ${hr} rounded-[30%]`}
          ></div>
          <div
            className={`position-relative w-[100%] py-[2.7px] ${hr} rounded-[30%]`}
          ></div>
        </div>

        <div className={`${boxtitle} w-[90%] px-5 py-[1.5px] rounded-xl`}>
          <div className="font-medium" key={`${value.ayat} ${index}`}>
            {`{ ${value.ayat} ayat }`}
          </div>
          <div
            className="font-medium text-[0.8em]"
            key={`${value.type} ${index}`}
          >
            diturunkan di {value.type}
          </div>
        </div>
        {/* --Jarak-- */}
      </div>
      {br && <div className="w-full h-[5px]"></div>}
    </React.Fragment>
    /* --CARD-- */
  );
}
