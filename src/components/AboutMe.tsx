import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutMe = forwardRef((_props, ref) => {
  return (
    <div
      className="dark:bg-[#242828] bg-gray-200 dark:text-white text-black font-mono py-24 w-fit h-fit relative"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center font-semibold text-green-600">About Me</h1>
        <p className="md:w-[60%] w-[80%] text-center font-semibold mt-5">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row md:h-[85vh] h-fit w-full [&>*]:my-5 ">
        <motion.div
          className="w-full text-left md:ml-10 ml-5 [&>*]:my-10 font-semibold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-4xl ">Get to know me :</p>
          <div className="max-w-[80%] dark:text-white text-black [&>*]:my-4 [&>*]:font-medium ">
            <p>
              👋 Hi there! I'm a Full Stack Web Developer focused on building
              user-friendly web experiences. Take a look at my projects below!
            </p>
            <p>
              📚 I enjoy sharing my web development insights on my blog and
              social media. Connect with me on LinkedIn for more tips and
              tricks!
            </p>
            <p
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: "all" }}
              transition={{ delay: 3, duration: 1 }}
            >
              💼 Seeking new opportunities to contribute, learn, and grow. Let's
              collaborate and create something great together!
            </p>
            <p>
              🔗 Feel free to connect with me on LinkedIn to stay updated on my
              latest endeavors and professional achievements.
            </p>
            <button className="border-none rounded-lg mr-5 bg-green-500 transition duration-300 ease-in-out transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </motion.div>
        <motion.div
          className="w-full text-left md:ml-10 ml-5 mr-5 "
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-4xl font-semibold mt-10">My Skills :</p>
          <div>
            <p className="mt-5 flex flex-wrap justify-start [&>*]:m-2 mr-5 [&>*]:font-medium [&>*]:bg-green-500 [&>*]:text-black [&>*]:rounded [&>*]:w-fit [&>*]:h-fit [&>*]:p-2 [&>*]:cursor-pointer  ">
              <p>HTML</p>
              <p>CSS</p>
              <p>Responsive design</p>
              <p>javaScript</p>
              <p>typeScript</p>
              <p>tailwindCss</p>
              <p>reactJs</p>
              <p>viteJs</p>
              <p>NextJs</p>
              <p>NodeJs</p>
              <p>express</p>
              <p>flask</p>
              <p>Mysql</p>
              <p>mongoDB</p>
              <p>Python</p>
              <p>Git/Github</p>
              <p>Gitlab</p>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AboutMe;
