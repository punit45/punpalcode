import React from 'react'
import Help from "../assets/message-circle-question.png";
import Search from "../assets/search.png";
import Atom from "../assets/atom.png";
import Bell from "../assets/bell-dot.png";
import Downn from "../assets/chevron-down.png";
import Tinu from "../assets/tinu.jpg";

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mx-4 mt-2 mb-8 bg-gray-800 border-none rounded-2xl h-auto lg:h-20'>
      {/* Left Section */}
      <div className="flex-1">
        <h2 className='text-white font-semibold px-4 items-center justify-center text-2xl'>Design Studio</h2>
      </div>

      {/* Right Section */}
      <div className='flex flex-col lg:flex-row items-center justify-evenly mr-16 gap-4 lg:gap-6 mt-4 lg:mt-0'>
        {/* Support Request Button */}
        <div className='flex text-white font-normal text-sm border gap-2 border-blue-400 rounded-xl p-2'>
          <img src={Help} alt='' />
          Support Request
        </div>

        {/* Product Tour Button */}
        <div className='flex text-white font-normal text-sm border gap-2 border-blue-400 rounded-xl p-2'>
          <img src={Atom} alt='' />
          Product Tour
        </div>

        {/* Search Box */}
        <div className='flex flex-row border border-gray-500 rounded-lg items-center justify-around gap-2 p-1'>
          <input className='border-none outline-none rounded-lg text-left px-1 text-gray-500' type="text" placeholder='Search Project' />
          <div className='border border-gray-500 p-1 rounded-lg flex items-center justify-center cursor-pointer'>
            <img src={Search} alt="Search Icon" className='w-6 h-6' />
          </div>
        </div>

        {/* Bell Icon */}
        <div className='border border-gray-500 p-1 rounded-lg flex items-center justify-center cursor-pointer'>
          <img src={Bell} alt="Bell Icon" className='w-6 h-6' />
        </div>

        {/* User Profile */}
        <div className='border-gray-700 flex items-center justify-between gap-2 cursor-pointer'>
          <img src={Tinu} alt="User Profile" className='w-10 h-10 rounded-3xl cursor-pointer' />
          <h2 className='text-white font-medium text-xs lg:text-sm'>Punit Panda</h2>
          <img src={Downn} alt="Dropdown" className='text-white w-4 h-4 lg:w-6 lg:h-6' />
        </div>
      </div>
    </div>
  )
}

export default Header;
