import ProjectPage from "./components/projectPage";
import pyCompilerImg from "./projectImg/pythonCompiler.webp";
import recipeWebImg from "./projectImg/recipeSharing.webp";
import GameHubImg from "./projectImg/gameInfoHub.webp";

const Projects = () => {
  return (
    <div className="dark:bg-[#242424] bg-gray-100 py-20 dark:text-white text-black  font-mono  mx-2 [&>*]:my-14  w-fit">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold">PROJECTS</h1>
        <p className="md:w-[60%] w-[80%] text-center font-semibold mt-5 mb-5">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="[&>*]:my-10 ">
        <ProjectPage
          src={pyCompilerImg}
          projectName={"Python Online Interpeter"}
          projectDesc={
            "Discover our Python online Interpeter . With an integrated code editor.Built with React , tailwind and Flask"
          }
          projectLink={"https://github.com/Rayenkan/Online-code-editor-python-"}
        />
        <ProjectPage
          src={recipeWebImg}
          projectName={"Flavz"}
          projectDesc={
            "Flavz is a web application for sharing and discovering recipes. Built with React, Node.js, Express, Tailwind CSS, and MySQL"
          }
          projectLink={"https://github.com/Rayenkan/RecipiesSharing"}
        />
        <ProjectPage
          src={GameHubImg}
          projectName={"GameInfoHub"}
          projectDesc={
            "This project is a simple web application built with Python and Flask, allowing users to search for games using the RAWG Video Games Database API."
          }
          projectLink={"https://github.com/Rayenkan/GameInfoHub"}
        />
      </div>
      <div>
        <a href="https://github.com/Rayenkan?tab=repositories">
          <button className="bg-green-500  w-fit h-fit p-2 md:w-[20vw] max-w-[250px]  mt-2 py-4 font-semibold dark:text-white text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
            See More On Github
          </button>
        </a>
      </div>
    </div>
  );
};
export default Projects;
