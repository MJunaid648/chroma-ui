import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative flex flex-col">
      {isMobile ? (
        <img
          className="w-full p-4"
          src="/assets/images/HeroSection-mobile.jpg"
          alt=""
        />
      ) : (
        <img
          className="w-full p-4"
          src="/assets/images/HeroSection-desktop.jpg"
          alt=""
        />
      )}

      <div className="absolute w-[100%] left-0 top-[20%] flex flex-col justify-center items-center">
        <div className="flex gap-[0.5rem] lg:gap-[3.5rem]">
          <div className="flex h-[auto]">
            <img src="/assets/images/yellow-star.svg" alt="" />
            <img src="/assets/images/yellow-star.svg" alt="" />
            <img src="/assets/images/yellow-star.svg" alt="" />
            <img src="/assets/images/yellow-star.svg" alt="" />
            <img src="/assets/images/yellow-star.svg" alt="" />
          </div>
          <div className="text-[0.8rem] lg:text-[1.2rem]">
            Loved by 4,281+ creators worldwide
          </div>
        </div>
        <div className="text-[3rem] text-center font-[Manrope-Bold] tracking-[-0.04em] leading-[110%] mt-[0.5rem] lg:text-[6rem] lg:mt-[1rem]">
          Chroma makes
          <br />
          video editing easy
        </div>
        <div className="text-center font-[Manrope-SemiBold] text-[1rem] mt-[1rem] w-[90%] lg:text-[1.33rem] lg:mt-[2rem] lg:w-[40%]">
          Welcome to Chroma, where creativity meets expertise. We specialize in
          crafting captivating short videos that tell your story, engage your
          audience, and leave a lasting impression.
        </div>
        <TextButton className="mt-[1.5rem] lg:mt-[3rem]">
          Get started for free
        </TextButton>
        <HomeImages className="mt-[4rem] lg:mt-[8rem]" />
        <HomeSection2 />
      </div>
    </div>
  );
};

export default HeroSection;
