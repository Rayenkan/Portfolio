import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { MouseEventHandler } from 'react';


const Home =(props: { onScrollProjects: MouseEventHandler<HTMLButtonElement> | undefined; })=>{
    return (
        <div className={` dark:bg-[#242424] bg-gray-100 h-fit md:py-[10%] py-[20%] `}>
            <div className="absolute mt-[5%] z-50">
                <ul className='text-4xl [&>*]:my-2 ml-1  '>
                    <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://github.com/Rayenkan"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://www.linkedin.com/in/rayen-kanzari-b17a52298/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://www.facebook.com/profile.php?id=100090960805342"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
            </div>
            <div className=" flex justify-center items-center flex-col   [&>*]:my-5 ">
                <p className="font-semibold text-4xl md:text-6xl dark:text-white text-black font-mono">HEY, I'M RAYEN KANZARI</p>
                <p className="max-w-[70%] text-center text-xl  dark:text-white text-black">Motivated <span className='text-green-500'> &lt; Web Developer /&gt;</span>  iteratively builds and refines websites and web applications, ensuring they continuously adapt to user needs and market demands.</p>
                <button onClick={props.onScrollProjects} className="bg-green-500 w-fit px-8 h-[50px] dark:text-white text-gray-800 transition duration-300 ease-in-out transform hover:scale-105 ">Projects</button>
            </div>
        </div>
        
    )
}
export default Home;