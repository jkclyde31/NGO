import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="px-[15px] bg-[#FCEDC6] py-[15px]  lg:py-[96px]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-[25px] md:mt-[40px] mb-[15px] md:mb-[64px] space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:max-w-[607px]">
          <p className="text-center md:text-start text-[16px] font-bold tracking-[2px] text-[1D2130] mb-[15px] md:mb-[32px]">
            WHAT WE DO
          </p>
          <h2 className="text-center md:text-start text-[38px] sm:text-[48px] font-bold text-[1D2130] leading-[110%] sm:leading-[120%] mb-[15px] md:mb-[32px]">
            Some services we provide for our children
          </h2>
          <p className="text-center md:text-start text-[16px] text-[525560] leading-[160%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div className="grid gap-1 md:gap-8 mt-[10px]">
            <div className="space-y-4 flex justify-between items-center max-w-[436px] gap-4">
              <div>
                <Image
                  src="/icons/icon.png"
                  alt="Family support"
                  width={32}
                  height={32}
                  className="min-w-[32px] min-h-[32px]"
                />
              </div>
              <div className="max-w-[384px]">
                <h3 className="text-[24px] font-bold text-[#1D2130]">
                  Family support
                </h3>
                <p className="text-[16px] text-[#525560] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="space-y-4 flex justify-between items-center max-w-[436px] gap-4">
              <div>
                <Image
                  src="/icons/icon-1.png"
                  alt="Health benefits"
                  width={32}
                  height={32}
                  className="min-w-[32px] min-h-[32px]"
                />
              </div>
              <div className="max-w-[384px]">
                <h3 className="text-[24px] font-bold text-[#1D2130]">
                  Health benefits
                </h3>
                <p className="text-[16px] text-[#525560] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="space-y-4 flex justify-between items-center max-w-[436px] gap-4">
              <div>
                <Image
                  src="/icons/icon-2.png"
                  alt="Scholarships"
                  width={32}
                  height={32}
                  className="min-w-[32px] min-h-[32px]"
                />
              </div>
              <div className="max-w-[384px]">
                <h3 className="text-[24px] font-bold text-[#1D2130]">
                  Scholarships
                </h3>
                <p className="text-[16px] text-[#525560] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>

            <div className="space-y-4 flex justify-between items-center max-w-[436px] gap-4">
              <div>
                <Image
                  src="/icons/icon-3.png"
                  alt="Therapy"
                  width={32}
                  height={32}
                  className="min-w-[32px] min-h-[32px]"
                />
              </div>
              <div className="max-w-[384px]">
                <h3 className="text-[24px] font-bold text-[#1D2130]">
                  Therapy
                </h3>
                <p className="text-[16px] text-[#525560] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Image 
            src="/what_we_do.png"
            alt="About Video"
            width={500}
            height={300}
            className="w-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;