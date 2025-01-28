import Link from "next/link"
import logo from '@/public/images/logo-white.png';
import Image from "next/image";
import { siteInfo } from "@/config/siteInfo";

const NavLogo = () => {
  return (
    <Link className='hidden md:flex flex-shrink-0 items-center' href='/'>
    <Image className='h-10 w-auto' src={logo} alt='PropertyPulse' />
    <div className="flex items-center">
              <p className="text-[24px] text-black font-bold leading-[44px] tracking-[0px]">largerthan</p>
              <span className="font-courgette text-black leading-[44px] text-[25px]">i</span>
            </div>
  </Link>
  )
}

export default NavLogo