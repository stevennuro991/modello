import React from 'react';
import logo from '../assets/images/modello.png';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import phone from '../assets/icons/phone.svg';
import clock from '../assets/icons/clock.svg';
import email from '../assets/icons/email.svg'

const TopBar = () => {
  return (
    <div className="bg-gray-200 text-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={phone} alt="" /><p className="text-sm">0246140578</p></div>
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={clock} alt="" /><p className="text-sm">Mon - Fri: 9:00 - 19:00 / Closed on Weekends</p></div>
        <div className='flex  gap-2 items-center ' ><img className='h-6 w-8' src={email} alt="" /><p className="text-sm">info@modellogh.com</p></div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-sm">Call us: (+233) 547 896 097</span>
          <span className="text-sm"><img src="" alt="" /></span> */}
          <span className=""><img className='h-8 w-8' src= {instagram} alt="" /></span>
          <span className=""><img className='h-8 w-8' src={facebook} alt="" /></span>
          <span className=""><img className='h-8 w-8' src={twitter} alt="" /></span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <TopBar />
      <nav className="bg-white text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-10">
            <div className="text-xl font-bold"><img src= {logo} alt="" /></div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-blue-500 text-sm font-medium">Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-sm text-blue-500 font-medium">About</a>
              <a href="/service" className="px-3 py-2 rounded-md text-blue-500 text-sm font-medium">Services</a>
              <a href="/pricing" className="px-3 py-2 rounded-md text-sm text-blue-500 font-medium">Pricing</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-sm text-blue-500 font-medium">Contact Us</a>
              {/* Other navigation items */}
            </div>
          </div>

        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
