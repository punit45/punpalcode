import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const DropDown = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setIsOpen(!isOpen); 
  };

  const handleSelect = () => {
    setIsOpen(false); 
  };

  // Arrow icon margin-left based on label
  const getArrowMarginLeft = (label) => {
    switch (label) {
      case 'Shoppable Video':
        return '5rem';
      case 'Story':
        return '9.6rem';
      case 'Live Commerce':
        return '5.7rem';
      case 'Playlist Manager':
        return '5.2rem';
      default:
        return 'auto'; 
    }
  };

  return (
    <div className="relative flex items-center mt-2 font-semibold text-gray-500">
      {/* Dropdown menu item with the toggle */}
      <div onClick={toggleDropdown} className="flex items-center cursor-pointer hover:text-white">
        <FaImage className="text-2xl" />

        <li className="py-1 ml-8 whitespace-nowrap overflow-hidden text-ellipsis">{label}</li>

        {/* Arrow icon with dynamic margin-left */}
        <IoIosArrowDown
          className="relative"
          style={{
            marginLeft: getArrowMarginLeft(label),
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
          }}
        />
      </div>

      {/* Dropdown items */}
      {isOpen && (
        <div
          className="absolute bg-white shadow-lg rounded-lg w-48 z-10"
          style={{
            top: '100%',
            left: '0', 
          }}
        >
          <button
            className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
            onClick={handleSelect} 
          >
            Item 1
          </button>
          <button
            className="block text-gray-700 px-4 py-2 hover:bg-gray-200"
            onClick={handleSelect} 
          >
            Item 2
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
