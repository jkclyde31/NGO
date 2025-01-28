'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, createScrollAnimation, createScrollStagger } from "@/app/animations";

const Footer = () => {
  // Scroll animations for different sections
  const [ctaRef, ctaInView] = useScrollAnimation({ threshold: 0.3 });
  const [eventsRef, eventsInView] = useScrollAnimation({ threshold: 0.2 });
  const [footerRef, footerInView] = useScrollAnimation({ threshold: 0.15 });

  // Animation variants
  const ctaAnimation = createScrollAnimation({
    type: "scale",
    duration: 0.8,
    scale: 0.95
  });

  const eventsHeaderAnimation = createScrollAnimation({
    type: "slide",
    from: "left",
    distance: 50,
    duration: 0.6
  });

  const eventBoxAnimation = createScrollAnimation({
    type: "fade",
    from: "bottom",
    distance: 30,
    duration: 0.7
  });

  const footerStagger = createScrollStagger({
    delayChildren: 0.2,
    staggerDelay: 0.1,
    childAnimationType: "fade",
    childDistance: 30
  });

  return (
    <div className="pt-[40px] lg:pt-[96px]">
      {/* Top CTA Section */}
      <div className="px-[15px]">
        <motion.div
          ref={ctaRef}
          variants={ctaAnimation}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="max-w-[1280px] w-full mx-auto py-[94px] rounded-[25px] flex justify-center items-center flex-col mb-[35px] md:mb-[84px] px-[15px]"
          style={{
            backgroundImage: `url('/CTA.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-center text-[38px] sm:text-[48px] max-w-[805px] mx-auto text-white font-bold">
            You can contribute to provide a place for children with special needs!
          </h1>
          <div className="flex max-w-[350px] justify-between w-full mt-[32px] gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-[16px] text-medium text-black bg-[#F2C94C] rounded-md px-[32px] py-[12px]'
            >
              Join as a Volunteer
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px]'
            >
              Donate
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Events Section */}
      <div ref={eventsRef} className="max-w-[1280px] w-full mx-auto px-[15px]">
        <motion.div
          variants={eventsHeaderAnimation}
          initial="hidden"
          animate={eventsInView ? "visible" : "hidden"}
          className="flex justify-between items-center"
        >
          <p className="text-[40px] text-[1D2130] font-medium">Our Events</p>
          <div className="flex-1 border-t border-gray-200 mx-4"></div>
        </motion.div>

        <div className="flex justify-between flex-col lg:flex-row items-center mt-[48px] mb-[86px] gap-8">
          {/* Event boxes with hover animations */}
          {[
            {
              date: "13",
              month: "APR",
              title: "A day with our wonderful children"
            },
            {
              date: "25",
              month: "APR",
              title: "Seminar: Caring for children with autism"
            }
          ].map((event, index) => (
            <motion.div
              key={index}
              variants={eventBoxAnimation}
              initial="hidden"
              animate={eventsInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="flex justify-between items-start gap-4 rounded-[25px] bg-[#F2C94C] max-w-[628px] min-h-[191px] p-[40px] flex-wrap md:flex-none"
            >
              <div>
                <p className="text-[48px] font-medium leading-none">{event.date}</p>
                <p className="text-[16px] font-medium leading-none">{event.month}</p>
              </div>
              <div>
                <p className="font-medium tracking-[2px] text-[16px]">NEXT EVENTS</p>
                <div className="flex justify-between items-center gap-4 mt-[10px]">
                  <p className="max-w-[381px] text-[22px] md:text-[28px] leading-[150%] font-bold">
                    {event.title}
                  </p>
                  <Image src="/arrow.png" width={56} height={56} alt="arrow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div
        ref={footerRef}
        variants={footerStagger.container}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        className="bg-black py-[96px] px-[5px] md:px-[110px]"
      >
        <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-[50px]">
          {/* Logo */}
          <motion.div variants={footerStagger.item} className="flex items-center">
            <p className="text-[24px] text-white font-bold leading-[44px] tracking-[0px]">largerthan</p>
            <span className="font-courgette text-white leading-[44px] text-[25px]">i</span>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-8 max-w-[80%] lg:max-w-[386px] w-full">
            {["Home", "More", "Connect"].map((section, index) => (
              <motion.div
                key={section}
                variants={footerStagger.item}
                className="text-white"
              >
                <p className="font-bold mb-4">{section}</p>
                <ul className="space-y-2">
                  {[
                    ["About us", "Projects", "Facebook"],
                    ["Team", "Events", "Instagram"],
                    ["What we do", "Donate", "Twitter"],
                    ["Contact", "Blog", "LinkdIn"]
                  ].map((items, i) => (
                    <li key={i}>{items[index]}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            variants={footerStagger.item}
            className="max-w-[80%] lg:max-w-[400px]"
          >
            <h3 className="text-white text-2xl font-bold mb-4">Subscribe to get latest updates</h3>
            <div className="flex gap-2 flex-wrap">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-white/20 rounded px-4 py-2 text-white flex-grow"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;