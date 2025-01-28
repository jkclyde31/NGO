'use client';
import { Play } from "lucide-react";
import Image from "next/image";
import PlayIcon from "@/public/play-icon.png";
import { motion } from "framer-motion";

import { createFadeIn, createStagger  } from "@/app/animations";
const Banner = () => {
  // Create custom animations
  const headerAnimation = createFadeIn({
    duration: 1,
    delay: 0.2,
    from: "bottom",
    distance: 50
  });

  const buttonAnimation = createFadeIn({
    duration: 0.7,
    delay: 0.6,
    from: "bottom",
    distance: 30
  });

  const statsAnimation = createFadeIn({
    duration: 0.7,
    delay: 1,
    from: "left",
    distance: 40
  });

  return (
    <div 
      className="bg-cover bg-center pt-[100px] md:pt-[200px] h-[95vh] lg:h-auto flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${'/images/bg-banner.png'})`,
      }}
    >
      {/* text */}
      <div className="row max-w-[1700px] w-full mx-auto px-[15px]">
        <motion.h1 
          variants={headerAnimation}
          initial="initial"
          animate="animate"
          className="max-w-full lg:max-w-[640px] text-[45px] md:text-[64px] text-white font-bold text-center mb-[48px] lg:leading-[120%]"
        >
          Inclusive care for children with special needs
        </motion.h1>
        
        <motion.div 
          variants={buttonAnimation}
          initial="initial"
          animate="animate"
          className="pb-[100px] lg:pb-[200px] max-w-[640px] flex flex-col lg:flex-row items-center justify-between mx-auto lg:mx-0 gap-5"
        >
          <button className='text-[16px] text-medium text-black bg-white rounded-lg px-[32px] py-[12px] mx-auto'>
            What We Do
          </button>
        </motion.div>

        <motion.div 
          variants={statsAnimation}
          initial="initial"
          animate="animate"
          className="hidden lg:flex justify-between items-center gap-4 pb-[64px]"
        >
          <p className="text-lg text-white">children under our care</p>
          <div className="flex-1 border-t border-gray-200 mx-4"></div>
          <p className="text-lg text-white">58 donations collected</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;