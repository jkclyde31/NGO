import Image from "next/image"
import { sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5 } from "@/public/sponsors"
import project1 from '@/public/project1.png'
import project2 from '@/public/project2.png'
import project3 from '@/public/project3.png'

const ProjectsSection = () => {
  const sponsors = [sponsor, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <div className="px-[15px]">
         <div className="max-w-[1200px] mx-auto">
            <p className="text-[16px] font-bold  tracking-[2px] pt-[25px] md:pt-[96px] pb-[15px] md:pb-[32px]">
            Projects we have done
            </p>
            <h2 className="text-center md:text-start text-[48px] font-bold text-[1D2130] leading-[120%] mb-[64px] max-w-[640px] ">
            We are creating a place where children with special needs can thrive
            </h2>
        </div>

        {/* Bottom */}
        <div className="max-w-[1280px] mx-auto flex justify-between gap-4">
         {/* Item 1 */}
            <div className="bg-none max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] pb-[25px] md:pb-[55px] rounded-xl"  style={{
                backgroundImage: `url(${project1.src})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                position: "center", 
            }} >
      
            <div className="max-w-[315px]" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                     Mission smile 1k: Outdoor charity
                </h3>
                <p className="text-[16px] leading-[160%] mb-[64px] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
            </div>
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px] '>
                   Learn More
                </button>
            </div>



             {/* Item 2 */}
             <div className="bg-none max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] pb-[25px] md:pb-[55px]  rounded-xl"  style={{
                backgroundImage: `url(${project2.src})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                position: "center", 
            }} >
      
            <div className="max-w-[315px]" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                Weekly excursions
                </h3>
                <p className="text-[16px] leading-[160%] mb-[64px] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
            </div>
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px] '>
                   Learn More
                </button>
            </div>



               {/* Item 3 */}
               <div className="bg-none max-w-[420px] px-[25px] md:px-[48px] pt-[25px] md:pt-[85px] pb-[25px] md:pb-[55px]  rounded-xl"  style={{
                backgroundImage: `url(${project3.src})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                position: "center", 
            }} >
      
            <div className="max-w-[315px]" >
                <h3 className="text-[28px] leading-[150%] font-bold text-[#FFFFFF] mb-[16px]">
                Monthly public awareness
                </h3>
                <p className="text-[16px] leading-[160%] mb-[64px] text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
            </div>
                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px] '>
                   Learn More
                </button>
            </div>
        </div>

    </div>
   
  )
}

export default ProjectsSection