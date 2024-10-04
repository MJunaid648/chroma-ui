import React from "react";
import HomeSectionTitle from "../../components/home/HomeSectionTitle";
import thumbsUp from "/ThumbsUp.svg";
import Vector from "/Vector.svg";
import PencilRuler from "/PencilRuler.svg";
import star from "/Star.svg";

function HomeSection2() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full mt-[5rem] lg:mt-[10rem] ">
      <HomeSectionTitle
        src="/assets/images/home/section2-title.svg"
        title="Our mission"
      />
      <h2 className='font-["Manrope-Bold"] text-center h2 tracking-[-0.04em] leading-[120%] mt-[1rem] lg:mt-[2rem] '>
        Expertise and tools
        <br className="block lg:hidden" /> to <br className="hidden lg:block" />
        deliver
        <br className="block lg:hidden" /> exceptional output
      </h2>

      <div className="w-full flex md:flex-row flex-col justify-center gap-16 px-4 md:items-center my-14">
        {/* Professional */}
        <div className="flex md:flex-col gap-4 flex-row items-center  md:text-center ">
          <div className="bg-[#EEEAF9] rounded-[12px] p-1">
            <div className="bg-[#FFF] rounded-[10px] p-1.5">
              <div className="bg-gradient-to-b from-[#EEEAF9] via-[#EEEAF9] to-[#FFF] rounded-[8px] p-[1px]">
                <div className="bg-[#FFF] rounded-[8px] p-3">
                  <img src={thumbsUp} className="w-8 h-8" alt="thumbs up" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="card-h md:mt-4 md:mb-2">Professional Quality</h3>
            <p className="text-sb leading-tight font-semibold">
              We deliver top-notch videos <br className="hidden md:block" />{" "}
              that meet <br className="block md:hidden" /> the highest{" "}
              <br className="hidden md:block" /> standards of quality.
            </p>
          </div>
        </div>
        {/* power AI */}
        <div className="flex md:flex-col gap-4 flex-row items-center  md:text-center">
          <div className="bg-[#EEEAF9] rounded-[12px] p-1">
            <div className="bg-[#FFF] rounded-[10px] p-1.5">
              <div className="bg-gradient-to-b from-[#EEEAF9] via-[#EEEAF9] to-[#FFF] rounded-[8px] p-[1px]">
                <div className="bg-[#FFF] rounded-[8px] p-3">
                  <img src={Vector} className="w-8 h-8" alt="Ventor" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="card-h md:mt-4 md:mb-2">Powered by AI</h3>
            <p className="text-sb leading-tight font-semibold">
              Our efficient process ensures you{" "}
              <br className="block md:hidden" />
              <br className="hidden md:block" /> get your videos quickly without{" "}
              <br className="block md:hidden" />
              <br className="hidden md:block" /> compromising quality.
            </p>
          </div>
        </div>
        {/* PencilRuler */}
        <div className="flex md:flex-col gap-4 flex-row items-center  md:text-center">
          <div className="bg-[#EEEAF9] rounded-[12px] p-1">
            <div className="bg-[#FFF] rounded-[10px] p-1.5">
              <div className="bg-gradient-to-b from-[#EEEAF9] via-[#EEEAF9] to-[#FFF] rounded-[8px] p-[1px]">
                <div className="bg-[#FFF] rounded-[8px] p-3">
                  <img src={PencilRuler} className="w-8 h-8" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="card-h md:mt-4 md:mb-2">Intuitive Tools</h3>
            <p className="text-sb leading-tight font-semibold">
              We utilize the latest video editing{" "}
              <br className="block md:hidden" />
              <br className="hidden md:block" /> software and technology to
              bring <br className="hidden md:block" /> your{" "}
              <br className="block md:hidden" /> vision to life.
            </p>
          </div>
        </div>
      </div>

      <div className="my-4 px-4 md:px-20 flex gap-2 justify-center items-center w-full ">
        <hr className="w-full border-t-1 border-[#EAE7F3]" />
        <img src={star} alt="star" />
        <hr className="w-full border-t-1 border-[#EAE7F3]" />
      </div>
	  <p className="md:my-12 my-8 text-sb ">Trusted by top creators and 500+ teams across the world</p>
    </div>
  );
}

export default HomeSection2;
