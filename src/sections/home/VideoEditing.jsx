import HomeSectionTitle from "../../components/home/HomeSectionTitle";
import unionL from "/UnionL.svg";
import unionR from "/UnionR.svg";
import toolkit from "/toolkit.svg";
import vidSec from "/vid-sec.svg";
import frame from "/Frame.svg";

const VideoEditing = () => {
  return (
    <div className="md:p-0 p-4">
      <div className="video-sec flex flex-col md:gap-8 rounded-lg  gap-4 justify-center items-center w-full  py-10 pb-8">
        <div className="flex justify-center gap-4 md:gap-10 items-start">
          <img src={unionL} alt="" className="w-[20vw] md:w-[313px]" />
          <div className="w-full">
            <HomeSectionTitle src={toolkit} title="Our tool kit" />
          </div>
          <img src={unionR} alt="" className="w-[20vw] md:w-[313px]" />
        </div>
        <img src={vidSec} alt="" className="" />
        <img src={frame} className="w-auto md:hidden" alt="" />
        <div className="flex flex-col items-center gap-4">
          <h2 className='font-["Manrope-Bold"] text-center h2 tracking-[-0.04em] leading-[120%] mt-[1rem] lg:mt-[2rem] '>
            Latest video editing <br />
            tools at your fingertips
          </h2>
          <p className="text-sb text-center md:max-w-[50%] ">
            Using the latest editing software, we craft seamless,
            professional-quality videos that captivate your audience. Our
            state-of-the-art cameras capture every moment in very stunning
            detail, providing a cinematic experience. Crystal clear audio is
            essential. Our top-tier microphones and sound editing tools ensure
            perfect sound quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
