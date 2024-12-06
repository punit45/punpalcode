import React from 'react';
import Youtube from "../assets/youtube.png";
import Dot from "../assets/ellipsis.png";
import Load from "../assets/refresh-cw.png";
import Square from "../assets/square.png";
import Circle from "../assets/circle.png";
import { IoLogoYoutube } from "react-icons/io";


const ProductDisplay = () => {
  const backgroundImages = [
    'https://media.istockphoto.com/id/1321486723/photo/japanese-man-spending-weekend-morning-painting-in-his-bedroom-at-home.jpg?s=612x612&w=0&k=20&c=vQNWXbNJ6xteAa33XmgBY4Uow0blGgCSl8gvRxuxSi4=',
    'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Defense-and-intelligence-Hero-Image-640x480?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=700&hei=540&qlt=100&fmt=png-alpha&fit=constrain',
    'https://hasonss.com/blogs/wp-content/uploads/2023/10/types-of-technology-2.webp',
    'https://static.vecteezy.com/system/resources/previews/024/669/489/non_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg',
    'https://admin.stayatpurijagannatha.in/images/frontend/main-slider-1_1670308972.jpg',
    'https://storage.googleapis.com/redbrics-prod-backend.appspot.com/blog/title/_1685700473338_10-Historical-Monuments-Of-India--Our-Countrys-Majestic-Tryst-With-Architecture.webp'
  ];
  const playlistNames = [
    "Artist Playlist",
    "Defense Playlist",
    "Technology Playlist",
    "Nature Playlist",
    "Temples Playlist",
    "Monument Playlist",

  ];

  return (
    <div className="flex-1 p-6 bg-gray-900 border-none outline-none rounded-3xl m-2 h-auto">
      <h2 className='text-white font-medium text-xl mb-4 text-start'>Product Playlists</h2>
      <div className='flex flex-wrap gap-6 border-gray-700 bg-gray-700 p-4 w-full h-auto'>
        {/* cards */}
        <div className="flex flex-wrap gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
              style={{
                backgroundImage: `url(${backgroundImages[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '350px' // Adjust the height to be more appropriate
              }}
            >
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center pb-1">
                <h5 className="text-xl font-medium text-white mt-40 dark:text-white">
                  {playlistNames[index]}
                </h5>
                <div className="flex w-full md:mt-6 gap-2 mt-auto">
                  <a
                    href="#"
                    className="inline-flex gap-4 items-center w-full px-6 mb-[-4px] justify-center py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <img className='' src={Youtube} alt='' />5 Videos

                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay