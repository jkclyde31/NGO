import Link from "next/link"
import { usePathname } from 'next/navigation';


const NavigationMenu = ({navLinks}) => {
    const pathname = usePathname();
  return (
         <div className='hidden ml-6 md:ml-0 md:block '>
                  <div className='flex space-x-2'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                          pathname === link.href ? 'bg-white' : ''
                        } text-[525560] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold `}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
  )
}

export default NavigationMenu