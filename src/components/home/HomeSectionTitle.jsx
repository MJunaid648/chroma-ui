import React from "react";

function HomeSectionTitle({ src, title }) {
  return (
    <div
      className="relative flex border-solid border-[#29145B10] gap-[0.5rem] border-[1px] px-[0.8rem] py-[0.4rem] rounded-[2rem] lg:px-[1rem] lg:py-[0.5rem]"
      style={{
        boxShadow:
          "2px 19px 8px rgba(97, 51, 142, 0.01), 1px 11px 7px rgba(97, 51, 142, 0.02), 0px 5px 5px rgba(97, 51, 142, 0.03), 0px 1px 3px rgba(97, 51, 142, 0.04)",
      }}
    >
      <img className="w-[1rem] lg:w-[1.2rem]" src={src} alt="" />
      <p className="font-[Manrope-Bold] sec-title">{title}</p>
    </div>
  );
}

export default HomeSectionTitle;
