import { useState, useEffect, useRef } from "react";

const App = () => {
  const [open, setOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const Menus = [
    { title: "Revenue", src: "layout-dashboard" },
    { title: "Shoppable Video", src: "images" },
    { title: "Story", src: "images" },
    { title: "Live Commerce", src: "images" },
    { title: "Playlist Manager", src: "images" },
    { title: "One Click Post ", src: "square-mouse-pointer" },
    { title: "Calendar ", src: "calendar-days" },
    { title: "Hire Influencer", src: "settings" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-gray-800 border-none rounded-2xl h-screen p-5 pt-8 relative duration-300 transition-all ease-in-out`}
      >
        <img
          src="./src/assets/chevron-left.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-800 bg-gray-500 border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 h-6 w-[50%] items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-600 text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white text-gray-300"}`}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 transition-all ease-in-out`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};

export default App;
