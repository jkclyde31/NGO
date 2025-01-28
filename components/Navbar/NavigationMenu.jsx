'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavigationMenu = ({ navLinks }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      window.history.pushState({}, '', href);
    }
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Adjust these values to change when the active state triggers
        threshold: 0
      }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <div className='hidden ml-6 md:ml-0 md:block'>
      <div className='flex space-x-2'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`
              relative px-3 py-2 font-bold 
              text-[525560] hover:text-black
              transition-colors duration-300
              ${activeSection === link.href ? 'text-black' : ''}
            `}
          >
            {link.name}
            {/* Animated underline */}
            <span
              className={`
                absolute bottom-0 left-0
                h-0.5 bg-black
                transition-all duration-300 ease-out
                ${activeSection === link.href ? 'w-full' : 'w-0'}
              `}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;