import { useState, useEffect } from "react";
import Logo from '/images/logo.svg';
import Hamburger from '/images/icon-hamburger.svg';
import Close from '/images/icon-close.svg';
import Button from './Button.jsx'

function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    //State to manage scroll's visibility
    const [scrolled, setScrolled] = useState(false);

    // Toggle function to handle the navbar's display
    const showNavbar = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 0, text: 'Pricing' },
        { id: 1, text: 'Product' },
        { id: 2, text: 'About Us' },
        { id: 3, text: 'Careers' },
        { id: 4, text: 'Community' },
    ];

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav id="topNav" aria-label="Top Navigation"
                className={`fixed z-30 w-full font-semibold text-xl text-DarkBlue md:text-sm md:px-12 lg:px-32 md:pt-4 lg:pt-6
                ${scrolled ? 'bg-white ' : 'bg-transparent'} transition-colors duration-500 `}
            >

            <div className="flex max-w-[80rem] mx-auto lg:justify-between lg:items-center">
                {/* Logo, Hamburger and Close mobile */}
                <div className='flex justify-between items-center w-full md:w-auto h-20'>
                    <a href='#' className="absolute w-24 lg:w-32 z-20 top-9 left-8 md:relative md:inset-0" aria-label='Home'>
                        <img src={Logo} alt="Manage logo" />
                    </a>
                    <button
                        onClick={showNavbar}
                        className='absolute z-20 right-8 top-8 ease-in duration-700 md:relative block md:hidden'
                        aria-expanded={nav}
                        aria-controls="mobileMenu"
                        aria-label={nav ? "Close Navigation" : "Open Navigation"}
                    >
                        {nav
                            ? <img src={Close} alt="Close Navigation" />
                            : <img src={Hamburger} alt="Open Navigation" />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center w-full justify-end lg:justify-center'>
                    <ul className='flex gap-x-6 lg:gap-x-8'>
                        {navItems.map((item) => (
                            <li key={item.id} className="min-w-max hover:text-DarkGrayishBlue">
                                <a href="#" aria-label={`Go to ${item.text}`}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:block min-w-max">
                        <Button 
                            textButton="Get Started"
                            variant="orange"
                        />
                </div>
            </div>

                {/* Mobile Navigation Menu */}
                {nav && <div 
                    onClick={showNavbar}
                    className="block md:hidden min-h-screen bg-gradient-to-b from-transparent to-black/50 min-w-[100%]"
                >
                </div>}
                <ul className={`fixed inset-x-0 top-[5rem] mx-auto w-[90%] bg-white py-5 rounded z-10 md:hidden transition-transform duration-700 ease-in-out 
                    ${nav ? 'transform translate-y-0' : 'transform -translate-y-[130%] '}`}
                >
                    {navItems.map(item => (
                        <li key={item.id} className='w-full text-center text-base'>
                            <a
                                href="#"
                                aria-label={`Go to ${item.text}`}
                                className='block w-full py-4'>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
