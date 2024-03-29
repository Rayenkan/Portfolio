
const ProjectPage = ({ src, projectName, projectDesc ,projectLink }) => {


  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:w-[40%] ml-12">
        <img src={src} alt="img" className="max-w-full h-auto rounded-xl" />
      </div>
      <div className="md:w-[50%] md:pl-4 [&>*]:mt-5 ml-12 ">
        <p className="text-2xl font-semibold text-left">{projectName}</p>
        <p className="text-lg text-left">{projectDesc}</p>
        <div className="flex justify-start">
            <a href={projectLink}>
            <button className="bg-green-500  w-fit h-fit p-2 md:w-[13vw] max-w-[250px]  mt-2  dark:text-white text-gray-800">
            Project Link
          </button>
            </a>
          
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
