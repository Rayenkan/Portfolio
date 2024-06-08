import { motion } from "framer-motion";

const ProjectPage = ({ src, projectName, projectDesc, projectLink }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row "
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-[40%] w-full ml-1">
        <img
          src={src}
          alt="img"
          className="max-w-full h-auto rounded-xl border border-black"
        />
      </div>
      <div className="md:w-[50%] md:pl-4 [&>*]:mt-5 md:ml-12 ">
        <p className="text-2xl font-semibold text-left">{projectName}</p>
        <p className="text-lg text-left">{projectDesc}</p>
        <div className="flex justify-start">
          <a href={projectLink}>
            <button className="bg-green-500  w-fit h-fit p-2 md:w-[13vw] max-w-[250px]  mt-2  dark:text-white text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
              Project Link
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectPage;
