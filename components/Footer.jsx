import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[40px] lg:pt-[96px]  ">
      {/* Top =================================================================================================================================================================*/}
       <div className="px-[15px]">
        <div className="max-w-[1280px] w-full mx-auto py-[94px] rounded-[25px] flex justify-center items-center flex-col mb-[35px] md:mb-[84px] " 
          style={{
              backgroundImage: `url('/CTA.png')`,
              backgroundSize: "cover", 
              backgroundPosition: "center",
            }}>
                <h1 className="text-center text-[38px] sm:text-[48px] max-w-[805px] mx-auto text-white font-bold px-[15px]">
                  You can contribute to provide a place for children with special needs!
                </h1>
              {/* Buttons */}
              <div className=" flex max-w-[350px] justify-between w-full mt-[32px]"> 

                <button className='text-[16px] text-medium text-black bg-[#F2C94C] rounded-md px-[32px] py-[12px] '>
                  Join as a Volunteer
                </button>


                <button className='text-[16px] text-medium text-black bg-white rounded-md px-[32px] py-[12px] '>
                  Donate
                </button>
              </div>
          </div>
       </div>


        
        {/* mid =================================================================================================================================================================*/}
        <div className="max-w-[1280px] w-full mx-auto px-[15px]"> 
           <div className="flex justify-between items-center ">
              <p className="text-[40px] text-[1D2130] font-medium">Our Events</p>
              <div className="flex-1 border-t border-gray-200 mx-4"></div>
          </div>
          
          <div className="flex justify-between flex-col lg:flex-row items-center mt-[48px] mb-[86px] gap-8">
              {/* events box 1 */}
              <div className="flex justify-between items-start gap-4 rounded-[25px] bg-[#F2C94C] max-w-[628px] min-h-[191px] p-[40px] ">
                <div>
                  <p className="text-[48px] font-medium leading-none">13</p>
                  <p className="text-[16px] font-medium leading-none">APR</p>
                </div>

                <div >
                   <p className="font-medium tracking-[2px] text-[16px]">NEXT EVENTS</p>
                    <div className="flex justify-between items-center gap-4 mt-[10px]">
                      <p className="max-w-[381px] text-[22px] md:text-[28px] leading-[150%] font-bold">
                         A day with our wonderful children 
                      </p>
                      <Image src="/arrow.png" width={56} height={56}/>
                    </div>
                </div>
              </div>

           {/* events box 2 */}
              <div className="flex justify-between items-start gap-4 rounded-[25px] bg-[#F2C94C] max-w-[628px] min-h-[191px] p-[40px] ">
                <div>
                  <p className="text-[48px] font-medium leading-none">25</p>
                  <p className="text-[16px] font-medium leading-none">APR</p>
                </div>

                <div >
                   <p className="font-medium tracking-[2px] text-[16px]">NEXT EVENTS</p>
                    <div className="flex justify-between items-center gap-4 mt-[10px]">
                      <p className="max-w-[381px] text-[22px] md:text-[28px] leading-[150%] font-bold">
                      Seminar: Caring for children with autism
                      </p>
                      <Image src="/arrow.png" width={56} height={56}/>
                    </div>
                </div>
              </div>
          </div>
        </div>

        {/* Bottom ============================================================================================================================================================================*/}
        <div className="bg-black py-[96px] px-[5px] md:px-[110px]">
          <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-[50px]">
            {/* Logo */}
            <div className="flex items-center">
              <p className="text-[24px] text-white font-bold leading-[44px] tracking-[0px]">largerthan</p>
              <span className="font-courgette text-white leading-[44px] text-[25px]">i</span>
            </div>

           {/* nav */}
              <div className="flex justify-between items-center gap-8 max-w-[80%] lg:max-w-[386px] w-full">
                <div className="text-white">
                  <p className="font-bold mb-4">Home</p>
                  <ul className="space-y-2">
                    <li>About us</li>
                    <li>Team</li>
                    <li>What we do</li>
                    <li>Contact</li>
                  </ul>
                </div>

                <div className="text-white">
                  <p className="font-bold mb-4">More</p>
                  <ul className="space-y-2">
                    <li>Projects</li>
                    <li>Events</li>
                    <li>Donate</li>
                    <li>Blog</li>
                  </ul>
                </div>

                <div className="text-white">
                  <p className="font-bold mb-4">Connect</p>
                  <ul className="space-y-2">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkdIn</li>
                  </ul>
                </div>
              </div>

            {/* News letter */}
            <div className="max-w-[80%] lg:max-w-[400px]">
              <h3 className="text-white text-2xl font-bold mb-4">Subscribe to get latest updates</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent border border-white/20 rounded px-4 py-2 text-white flex-grow"
                />
                <button className="bg-white text-black px-6 py-2 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Footer