import React, { useState } from 'react';
import Link from "../assets/link-2.png";  // Make sure the path to your image is correct.

const RadioButtonGroup = ({ status, handleChange }) => {
  return (
    <div className="flex items-center justify-start ml-2 space-x-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="active"
          name="status"
          value="active"
          checked={status === 'active'}
          onChange={handleChange}
          className="form-radio h-4 w-4 text-blue-500 rounded-full border-2 border-gray-400"
        />
        <label htmlFor="active" className="ml-2 text-gray-300">
          Active
        </label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          id="inactive"
          name="status"
          value="inactive"
          checked={status === 'inactive'}
          onChange={handleChange}
          className="form-radio h-4 w-4 text-blue-500 rounded-full border-2 border-gray-400"
        />
        <label htmlFor="inactive" className="ml-2 text-gray-300">
          Inactive
        </label>
      </div>
    </div>
  );
};

const ThumbnailList = () => {
  const [status, setStatus] = useState('');
  const [thumbnailTitle, setThumbnailTitle] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleTitleChange = (e) => {
    setThumbnailTitle(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-900 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
      <button className="flex flex-row p-2 mb-4 ml-4 bg-blue-700 items-center justify-evenly border-none rounded-[16px] gap-3 text-gray-300">
        <img className="" src={Link} alt="" />
        Generate Code
      </button>

      <div className="flex flex-col bg-gray-700 w-full p-2 h-auto border-none rounded-[16px]">
        <div className="flex flex-col gap-1 justify-start items-start">
          <h2 className="text-gray-300 text-left mx-3 my-2 font-medium text-sm">Thumbnail Title</h2>
          <input
            type="text"
            placeholder="Get Sporty in Style"
            value={thumbnailTitle}
            onChange={handleTitleChange}
            className="p-2 border rounded-2xl mx-4"
          />
        </div>

        <div>
          <h2 className="text-gray-300 text-left mx-2 my-2 font-medium text-sm">Video Status</h2>
          <RadioButtonGroup status={status} handleChange={handleStatusChange} />
        </div>

        {/* Repeatable Card */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-row bg-gray-500 mt-3 mb-2 rounded-lg relative items-center justify-between w-full h-[60px]">
            <div className="md:shrink-0">
              <img className="w-[40px] h-[40px] object-cover" src="https://loremflickr.com/g/320/240/team" alt="thumbnail" />
            </div>
            <div className="p-2 flex flex-col items-start absolute left-[-20px] justify-center space-y-1 text-xs ml-20">
              <div className="font-bold text-sm text-white">The Coldest Sunset</div>
              <div className="text-gray-400 text-xs">Duration: 2:45</div>
              <div className="text-gray-400 text-xs">Products Attached: 5</div>
            </div>
            <div className="absolute top-[-10px] right-[-10px] m-2 w-8 h-8 bg-gray-600 flex items-center justify-center rounded-tr-[16px] rounded-bl-[16px] cursor-pointer">
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2h12v12H2z" />
              </svg>
            </div>
          </div>
        ))}

        <button className="flex flex-row p-2 ml-4 mr-4 mb-2.5 mt-1.5 bg-blue-700 items-center justify-center gap-2 border-none rounded-2xl text-gray-300">
          <img className="" src={Link} alt="" />
          Update Playlist
        </button>
      </div>
    </div>
  );
};

export default ThumbnailList;
