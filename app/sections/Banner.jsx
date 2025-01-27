import { Play } from "lucide-react";
import Image from "next/image";
import PlayIcon from "@/public/play-icon.png";

const Banner = () => {
  return (
    <div 
    className="bg-cover bg-center pt-[100px] md:pt-[200px] h-[95vh] md:h-auto flex flex-col justify-center items-center"
    style={{
      backgroundImage: `url(${'/images/bg-banner.png'})`,
    }}
  >
      {/* text */}
      <div className="row max-w-[1700px] w-full mx-auto px-[15px]">
        <h1 className="max-w-full md:max-w-[640px] text-[45px] md:text-[64px] text-white font-bold text-center mb-[48px] md:leading-[120%]" >
           Inclusive care for children with special needs
        </h1>
        <div className="pb-[100px] md:pb-[200px] max-w-[320px] flex flex-col md:flex-row items-center justify-between mx-auto md:mx-0 gap-5">
           <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px] '>
            What We Do
          </button>
          <div className="flex items-center gap-2 ">
            <Image width={24} height={24} src={PlayIcon} alt="Play Icon" />
             <p className="font-medium text-[16px] text-white">Play Video</p>
          </div>
         </div>

        <div className="hidden md:flex justify-between items-center gap-4 pb-[64px] ">
          <p className="text-lg text-white">children under our care</p>
          <div className="flex-1 border-t border-gray-200 mx-4"></div>
          <p className="text-lg text-white">58 donations collected</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;