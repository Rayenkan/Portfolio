import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, MouseEventHandler } from "react";
import { motion } from "framer-motion";

const Home = (props: {
  onScrollProjects: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const [words, setWords] = useState([
    "Web Developer",
    "Front-End dev",
    "Back-End dev",
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      setCurrentText((prevText) => {
        if (!isDeleting && prevText.length === currentWord.length) {
          setIsDeleting(true);
        } else if (isDeleting && prevText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
        return isDeleting
          ? prevText.slice(0, -1)
          : currentWord.slice(0, prevText.length + 1);
      });
    };

    const typingInterval = setInterval(type, 100);
    return () => clearInterval(typingInterval);
  }, [currentWordIndex, isDeleting, words]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={` dark:bg-[#242424] bg-gray-100 h-fit md:py-[10%] py-[20%] `}
    >
      <div className="absolute mt-[5%] z-50  ">
        <ul className="text-4xl [&>*]:my-2 ml-1  ">
          <li className="hover:scale-110 transform transition duration-300 ease-in-out ">
            <a href="https://github.com/Rayenkan">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="hover:scale-110 transform transition duration-300 ease-in-out">
            <a href="https://www.linkedin.com/in/rayen-kanzari-b17a52298/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="hover:scale-110 transform transition duration-300 ease-in-out">
            <a href="https://www.facebook.com/profile.php?id=100090960805342">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div className=" flex justify-center items-center flex-col   [&>*]:my-5 ">
        <p className="font-semibold text-4xl md:text-6xl dark:text-white text-black font-mono">
          HEY, I'M RAYEN KANZARI
        </p>
        <p className="w-[80%] text-center text-xl  dark:text-white text-black">
          Motivated
          <span
            id="typewriter"
            className="text-green-500"
          >{`< ${currentText} />`}</span>
          iteratively builds and refines websites and web applications, ensuring
          they continuously adapt to user needs and market demands.
        </p>
        <button
          onClick={props.onScrollProjects}
          className="bg-green-500 w-fit px-8 h-[50px] dark:text-white text-gray-800 transition duration-300 ease-in-out transform hover:scale-105 "
        >
          Projects
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
