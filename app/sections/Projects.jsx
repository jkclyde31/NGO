import Image from "next/image"
import { sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5 } from "@/public/sponsors"
import project1 from '@/public/project1.png'
import project2 from '@/public/project2.png'
import project3 from '@/public/project3.png'

const ProjectsSection = () => {
  const sponsors = [sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <div className="px-[15px] py-[45px] md:py-[96px]" id="projects">
         <div className="max-w-[1200px] mx-auto ">
            <p className="text-[16px] font-bold  tracking-[2px]  pb-[15px] md:pb-[32px]  text-center lg:text-start ">
            Projects we have done
            </p>
            <h2 className="text-center lg:text-start text-[38px] sm:text-[48px] font-bold text-[1D2130] leading-[110%] sm:leading-[120%] mb-[15px] md:mb-[64px] max-w-[640px] mx-auto lg:mx-0">
            We are creating a place where children with special needs can thrive
            </h2>
        </div>

        {/* Bottom */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-4 ">
         {/* Item 1 */}
         <div 
              className="project-card bg-none max-w-[100%] md:max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] rounded-xl relative group overflow-hidden h-[421px] flex flex-col"
              style={{
                backgroundImage: `url(${project1.src})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="max-w-[315px] relative z-10 flex-grow" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                Weekly excursions
                </h3>
                <p className="text-[16px] leading-[160%] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                </p>
            </div>
            <div className="relative z-10 pb-[48px]">
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px]'>
                   Learn More
                </button>
            </div>
            </div>
       
             {/* Item 2 */}
             <div 
              className="project-card bg-none max-w-[100%] md:max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] rounded-xl relative group overflow-hidden h-[421px] flex flex-col"
              style={{
                backgroundImage: `url(${project2.src})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="max-w-[315px] relative z-10 flex-grow" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                Weekly excursions
                </h3>
                <p className="text-[16px] leading-[160%] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                </p>
            </div>
            <div className="relative z-10 pb-[48px]">
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px]'>
                   Learn More
                </button>
            </div>
            </div>

               {/* Item 3 */}
               <div 
                className="project-card bg-none max-w-[100%] md:max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] rounded-xl relative group overflow-hidden h-[421px] flex flex-col"
                style={{
                  backgroundImage: `url(${project3.src})`,
                  backgroundSize: "cover", 
                  backgroundPosition: "center",
              }}>
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="max-w-[315px] relative z-10 flex-grow" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                Monthly public awareness
                </h3>
                <p className="text-[16px] leading-[160%] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                </p>
            </div>
            <div className="relative z-10 pb-[48px]">
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px]'>
                   Learn More
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection