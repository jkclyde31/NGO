import Image from "next/image"
import AboutVideo from '@/public/Video.png'
import { sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5 } from "@/public/sponsors"

const AboutUs = () => {
  const sponsors = [sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <div className="px-[15px] ">
      {/* Top */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-[40px] md:mt-[86px] mb-[64px] space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side */}
        <div className="w-full md:max-w-[607px]">
          <p className="text-center md:text-start text-[16px] font-bold tracking-[2px] text-[1D2130] mb-[32px]">KNOW ABOUT US</p>
          <h2 className="text-center md:text-start text-[48px] font-bold text-[1D2130] leading-[120%] mb-[32px]">
            We provide a place for children with special needs
          </h2>
          <p className="text-center md:text-start text-[16px] text-[525560] leading-[160%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <br />
          <p className="text-center md:text-start text-[16px] text-[525560] leading-[160%] mb-[48px]">
            ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.      
          </p>
          <button className="text-[16px] text-medium text-black bg-[#F2C94C] rounded-md px-[32px] py-[12px] w-full md:w-auto">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-auto">
          <Image 
            src={AboutVideo} 
            alt="About Video" 
            className="w-full md:w-auto"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center gap-4 pb-[32px]">
          <p className="text-[16px] text-[1D2130] font-medium tracking-[2px]">OUR SUPPORTERS</p>
          <div className="flex-1 border-t border-gray-200 mx-4"></div>
        </div>
        
        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center pb-[64px]">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="max-w-[120px] h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs