import { MouseEventHandler } from "react";

const Nav = (props: { mode: string; changeMode: (arg0: string) => void; onScrollAboutMe: MouseEventHandler<HTMLLIElement> | undefined; onScrollProjects: MouseEventHandler<HTMLLIElement> | undefined; onScrollContact: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  const handleModeChange = () => {
    const newMode: string = props.mode === "light" ? "dark" : "light";
    props.changeMode(newMode);
  };

  return (
    <div
      className={`${props.mode} w-[100vw] h-20 flex justify-between items-center px-3 bg-white dark:bg-[#242424] rounded-md`}
    >
      <p className="text-4xl cursor-pointer">
        <span className="text-green-500">&lt; R</span>
        <span className="text-black dark:text-white ">ayen</span>{" "}
        <span className="text-green-500"> /&gt;</span>
      </p>
      <ul className="list-none flex flex-row space-x-8 [&>*]:cursor-pointer ">
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>
          Home
        </li>
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={props.onScrollAboutMe}
          >
          About Me
        </li>
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          onClick={props.onScrollProjects}>
          Projects
        </li>
        <li
          className={`relative text-xl text-black dark:text-white w-fit block after:block after:content-[''] after:absolute after:h-[3px] dark:after:bg-white after:bg-green-500  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
          >
          Resume
        </li>
      </ul>
      <div className="flex items-center [&>*]:mx-3   ">
        <button
          className={`ml-4 p-2 rounded-full dark:text-gray-500 text-yellow-500 bg-blue-400 dark:bg-gray-200 hover:bg-blue-600 dark:hover:bg-gray-700 focus:outline-none`}
          onClick={handleModeChange}>
          {props.mode === "dark" ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
            </svg>
          )}
        </button>
        <button
          className=" border-none rounded-lg mr-5 bg-green-500 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={props.onScrollContact} >
            Contact Me
        </button>
      </div>
    </div>
  );
};

export default Nav;