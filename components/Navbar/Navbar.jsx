'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import MenuDropDown from './MenuDropDown';
import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <nav className='sticky top-0 h-[0px] bg-transparent border-transparent z-50 md:h-auto md:bg-white'>
        <div className='mx-auto max-w-[1720px] px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-none md:h-20 items-center'>
            <MenuDropDown 
              setIsMobileMenuOpen={toggleMobileMenu} 
              isMobileMenuOpen={isMobileMenuOpen}
            />
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
              <NavLogo/>
              <NavigationMenu navLinks={navLinks}/>
              <button className='text-[16px] text-medium text-white bg-black rounded-md px-[32px] py-[12px] hidden md:block'>
                Donate
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className='md:hidden fixed inset-0 bg-black z-[70]'
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className='absolute top-4 right-4 p-2 text-white'
            >
              <X size={32} />
            </button>

            {/* Centered Content */}
            <div className='h-full flex flex-col items-center justify-center space-y-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${
                    pathname === `${link.href}` ? 'text-gray-300' : 'text-white'
                  } text-2xl font-medium hover:text-gray-300 transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <div className='mt-8'>
                <SocialLinks mobile={true}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;