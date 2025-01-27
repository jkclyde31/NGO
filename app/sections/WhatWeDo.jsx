import Image from "next/image";
import image from '/public/what_we_do.png';
import icon1 from '/public/icons/icon.png';
import icon2 from '/public/icons/icon-1.png';
import icon3 from '/public/icons/icon-2.png';
import icon4 from '/public/icons/icon-3.png';

const WhatWeDo = () => {
  const features = [
    {
      icon: icon1,
      title: "Family support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      icon: icon2,
      title: "Health benefits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      icon: icon3,
      title: "Scholarships",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      icon: icon4,
      title: "Therapy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  return (
    <div className="px-[15px] bg-[#FCEDC6] py-[25px] md:py-[96px]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-[40px] mb-[64px] space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:max-w-[607px]">
          <p className="text-center md:text-start text-[16px] font-bold tracking-[2px] text-[1D2130] mb-[32px]">WHAT WE DO</p>
          <h2 className="text-center md:text-start text-[48px] font-bold text-[1D2130] leading-[120%] mb-[32px]">
            Some services we provide for our children
          </h2>
          <p className="text-center md:text-start text-[16px] text-[525560] leading-[160%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4 flex justify-between items-center max-w-[436px] gap-4">
                <div>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="min-w-[32px] min-h-[32px]"
                  />
                </div>
                <div className="max-w-[384px]">
                  <h3 className="text-[24px] font-bold text-[#1D2130]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-[#525560] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Image 
            src={image} 
            alt="About Video" 
            className="w-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;