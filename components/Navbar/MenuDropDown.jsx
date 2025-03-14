const MenuDropDown = ({setIsMobileMenuOpen, isMobileMenuOpen}) => {
  return (
    <div className='absolute inset-y-0 left-0 top-1 flex items-center md:hidden h-10'>
        {/* <!-- Mobile menu button--> */}
        <button
        type='button'
        id='mobile-dropdown-button'
        className='border-2 relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
        aria-controls='mobile-menu'
        aria-expanded='false'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
        <span className='absolute -inset-0.5'></span>
        <span className='sr-only'>Open main menu</span>
        <svg
            className='block h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            aria-hidden='true'
        >
            <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
        </svg>
        </button>
    </div>
  )
}

export default MenuDropDown