import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faFacebook  } from '@fortawesome/free-brands-svg-icons';

const Home =(props)=>{
    return (
        <div className={` dark:bg-[#242424] bg-gray-100 h-[90vh] `}>
            <div className="absolute mt-[10%] z-50">
                <ul className='text-4xl [&>*]:my-2 ml-1 '>
                    <li><a href="https://github.com/Rayenkan"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/rayen-kanzari-b17a52298/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100090960805342"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
            </div>
            <div className=" flex justify-center items-center flex-col  pt-[10%]">
                <p className="font-semibold text-6xl dark:text-white text-black font-mono">HEY, I'M RAYEN KANZARI</p>
                <p className="max-w-[70%] text-center text-xl mt-[5%] dark:text-white text-black">Motivated Web Developer iteratively builds and refines websites and web applications, ensuring they continuously adapt to user needs and market demands.</p>
                <button className="bg-green-500 w-[13vw] max-w[250px] h-[60px] mt-[4%] dark:text-white text-gray-800 ">Projects</button>
            </div>
        </div>
        
    )
}
export default Home;