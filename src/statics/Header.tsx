import React from 'react';
import kdcLogo from '../assets/kdcLogo.png';

const Header = ({ setIsMenuOpen, isMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, isMenuOpen: boolean }) => {
    const MobileMenu = () => (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="bg-black text-white text-center py-3 px-4 text-sm relative">
                <span>
                    Sign up and get 20% off to your first order. <a href="#" className="underline font-semibold">Sign Up Now</a>
                </span>
                <button onClick={() => setIsMenuOpen(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <button onClick={() => setIsMenuOpen(false)} className="self-start mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="flex flex-col space-y-7">
                    <a href="#" className="text-2xl text-gray-800">Our Services</a>
                    <a href="#" className="text-2xl text-gray-800">Industries we work with</a>
                    <a href="#" className="text-2xl text-gray-800">Consultation</a>
                    <a href="#" className="text-2xl text-gray-800">Blogs</a>
                    <a href="#" className="text-2xl text-gray-800">Pricing Plan</a>
                </nav>
                <div className="mt-12">
                    <a href="#" className="bg-[#0093A7] text-white font-bold py-4 px-12 rounded-lg text-base inline-block">Shop Now</a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {isMenuOpen && <MobileMenu />}
            <header className="bg-white relative">
                <div className="bg-[#F8F3EF] text-center py-2 text-sm text-gray-800">
                    Sign up and get 20% off to your first order. <a href="#" className="underline font-semibold">Sign Up Now</a>
                </div>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4 md:gap-0">
                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                        <div className="w-16">
                            <img src={kdcLogo} alt="Okids Design Company" />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-gray-800 hover:text-[#0080A0] transition-colors">Our Services</a>
                        <a href="#" className="text-gray-800 hover:text-[#0080A0] transition-colors">Industries we work with</a>
                        <a href="#" className="text-gray-800 hover:text-[#0080A0] transition-colors">Consultation</a>
                        <a href="#" className="text-gray-800 hover:text-[#0080A0] transition-colors">Blogs</a>
                        <a href="#" className="text-gray-800 hover:text-[#0080A0] transition-colors">Pricing Plan</a>
                    </nav>
                    <a href="#" className="bg-[#0080A0] text-white font-bold py-2 px-7 rounded-lg text-sm hover:bg-[#006080] transition-colors">Shop Now</a>
                </div>
            </header>
        </>
    );
};

export default Header;