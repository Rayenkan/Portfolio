

const AboutMe = () => {
  return (
    <div className="dark:bg-[#242828] bg-gray-200 dark:text-white text-black  font-mono  py-24  w-fit h-fit relative">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold text-green-600">About Me</h1>
        <p className="md:w-[60%] w-[80%] text-center font-semibold mt-5">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className="flex flex-col md:flex-row h-[85vh] w-full [&>*]:my-5 ">

        <div className="w-full text-left ml-12 [&>*]:my-10 font-semibold">
          <p className="text-4xl ">Get to know me :</p>
          <div className="max-w-[80%] dark:text-white text-black [&>*]:my-4 [&>*]:font-medium ">
            <p>
              👋 Hi there! I'm a Full Stack Web Developer focused on building
              user-friendly web experiences. Take a look at my projects below!
            </p>
            <p>
              📚 I enjoy sharing my web development insights on my blog and social
              media. Connect with me on LinkedIn for more tips and tricks!
            </p>
            <p>
              💼 Seeking new opportunities to contribute, learn, and grow. Let's
              collaborate and create something great together!
            </p>
            <p>
              🔗 Feel free to connect with me on LinkedIn to stay updated on my latest endeavors and professional achievements.
            </p>
            <button className="border-none  rounded-lg mr-5 bg-green-500 transition duration-300 ease-in-out transform hover:scale-105">Contact Me</button>
          </div>

        </div>
        <div className="w-full  text-left ml-12 mr-5 ">
          <p className="text-4xl font-semibold mt-10">My Skills :</p>
          <div className="mt-5 flex  flex-wrap justify-start [&>*]:m-2 mr-5 [&>*]:font-medium [&>*]:bg-green-500 [&>*]:text-black [&>*]:rounded [&>*]:w-fit [&>*]:h-fit [&>*]:p-2 [&>*]:cursor-pointer  ">
            <p>HTML</p>
            <p>CSS</p>
            <p>Responsive design</p>
            <p>javascript</p>
            <p>tailwindCss</p>
            <p>reactJs</p>
            <p>viteJs</p>
            <p>NodeJs</p>
            <p>express</p>
            <p>flask</p>
            <p>Mysql</p>
            <p>sql</p>
            <p>Python</p>
            <p>Git/Github</p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default AboutMe;
