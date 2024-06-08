import { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Nav = (props: {
  mode: string;
  changeMode: (arg0: string) => void;
  onScrollAboutMe: MouseEventHandler<HTMLLIElement> | undefined;
  onScrollProjects: MouseEventHandler<HTMLLIElement> | undefined;
  onScrollContact: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const handleModeChange = () => {
    const newMode: string = props.mode === "light" ? "dark" : "light";
    props.changeMode(newMode);
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);
  const onToggleMenu = () => {
    setMenuIcon(menuVisible ? faBars : faX);
    setMenuVisible(!menuVisible);
  };
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${props.mode}  ${
        menuVisible ? "border-b-0" : " "
      } w-[100vw] h-20 flex justify-between items-center px-3 bg-white dark:bg-[#242424] rounded-md`}
    >
      <p className="text-4xl cursor-pointer">
        <span className="text-green-500">&lt; R</span>
        <span className="text-black dark:text-white ">ayen</span>{" "}
        <span className="text-green-500"> /&gt;</span>
      </p>
      <ul
        className={` bg-white  fixed top-0 left-0 right-0 bottom-0 md:static md:top-auto md:left-auto md:right-auto md:bottom-auto  md:flex-row flex-col items-center list-none dark:bg-[#262624] bg-gray-300 text-center  h-[100vh] md:h-fit    z-50 md:z-0 text-[#373743]  gap-8 md:gap-[4vw] mt-[20%] pt-[12vh] md:pt-[0%] md:w-fit   md:mt-0 cursor-pointer md:space-x-8  [&>*]:cursor-pointer ${
          menuVisible ? "flex" : "hidden md:flex"
        } `}
      >
        <li
          className={`relative  text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={onToggleMenu}
        >
          Home
        </li>
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={() => {
            props.onScrollAboutMe();
            onToggleMenu();
          }}
        >
          About Me
        </li>
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={() => {
            props.onScrollProjects();
            onToggleMenu();
          }}
        >
          Projects
        </li>
        <li
          className={`relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={onToggleMenu}
        >
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:eu:0ed4bafa-9487-4961-b552-a3c989123f31" className="text-xl text-black dark:text-white hover:text-black dark:hover:text-white" download>Resume</a>
          
        </li>
      </ul>
      <div className="flex items-center [&>*]:mx-3   ">
        <button
          className={`ml-4 p-2 rounded-full dark:text-gray-500 text-yellow-500 bg-blue-400 dark:bg-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 focus:outline-none`}
          onClick={handleModeChange}
        >
          {props.mode === "dark" ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              ></path>
            </svg>
          )}
        </button>
        <button
          className=" md:flex hidden  border-none rounded-lg md:mr-5 bg-green-500 transition duration-300 ease-in-out transform md:hover:scale-105"
          onClick={props.onScrollContact}
        >
          Contact Me
        </button>
        <label className="text-green-500  z-50 list-none mr-4 cursor-pointer text-xl md:hidden ">
          <button onClick={onToggleMenu} className="bg-gray-400">
            <FontAwesomeIcon icon={menuIcon} />
          </button>
        </label>
      </div>
    </motion.div>
  );
};

export default Nav;
