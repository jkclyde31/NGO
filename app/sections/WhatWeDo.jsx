'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, createScrollAnimation, createScrollStagger } from '@/app/animations';

const WhatWeDo = () => {
  // Create scroll triggers
  const [headerRef, headerInView] = useScrollAnimation({ threshold: 0.3 });
  const [servicesRef, servicesInView] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageInView] = useScrollAnimation({ threshold: 0.3 });

  // Create animations
  const headerAnimation = createScrollAnimation({
    type: "slide",
    duration: 0.8,
    from: "left",
    distance: 50
  });

  const imageAnimation = createScrollAnimation({
    type: "slide",
    duration: 0.8,
    from: "right",
    distance: 50
  });

  // Create staggered animations for services
  const { container: serviceContainer, item: serviceItem } = createScrollStagger({
    delayChildren: 0.2,
    staggerDelay: 0.15,
    childAnimationType: "slide",
    childDistance: 30
  });

  return (
    <div className="px-[15px] bg-[#FCEDC6] py-[15px] lg:py-[96px]" id="services">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-[25px] md:mt-[40px] mb-[15px] md:mb-[64px] space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:max-w-[607px]">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            variants={headerAnimation}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <p className="text-center md:text-start text-[16px] font-bold tracking-[2px] text-[1D2130] mb-[15px] md:mb-[32px]">
              WHAT WE DO
            </p>
            <h2 className="text-center md:text-start text-[38px] sm:text-[48px] font-bold text-[1D2130] leading-[110%] sm:leading-[120%] mb-[15px] md:mb-[32px]">
              Some services we provide for our children
            </h2>
            <p className="text-center md:text-start text-[16px] text-[525560] leading-[160%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={servicesRef}
            variants={serviceContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid gap-1 md:gap-8 mt-[10px]"
          >
            {/* Service Items */}
            {[
              { icon: "/Icon.png", title: "Family support" },
              { icon: "/Icon1.png", title: "Health benefits" },
              { icon: "/Icon2.png", title: "Scholarships" },
              { icon: "/Icon3.png", title: "Therapy" }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={serviceItem}
                className="space-y-4 flex justify-between items-center max-w-[436px] gap-4"
              >
                <div>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="min-w-[32px] min-h-[32px]"
                  />
                </div>
                <div className="max-w-[384px]">
                  <h3 className="text-[24px] font-bold text-[#1D2130]">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#525560] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          variants={imageAnimation}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          className="w-full md:w-auto"
        >
          <Image 
            src="/what_we_do.png"
            alt="About Video"
            width={500}
            height={300}
            className="w-full md:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;