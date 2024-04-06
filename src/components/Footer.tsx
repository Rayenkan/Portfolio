import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin , faFacebook  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="flex flex-col w-full h-fit dark:text-white text-black bg-gray-100 dark:bg-[#242424] ">
            <div className="flex flex-row my-[25px]">
                <div className="  ml-[5%] [&>*]:my-5">
                    <p className="md:text-4xl text-left font-semibold">Rayen Kanzari</p>
                    <p className='w-[50%] text-left'>Motivated <span className='text-green-500'> &lt; Web Developer /&gt;</span>  iteratively builds and refines websites and web applications, ensuring they continuously adapt to user needs and market demands.</p>
                </div>
                <div className="mr-[5%] pt-5">
                    <p className="text-4xl mb-5 font-semibold">Social</p>
                    <p>
                        <ul className='text-4xl [&>*]:mx-2 ml-1 flex flex-row  '>
                            <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://github.com/Rayenkan"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://www.linkedin.com/in/rayen-kanzari-b17a52298/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li className='hover:scale-110 transform transition duration-300 ease-in-out'><a href="https://www.facebook.com/profile.php?id=100090960805342"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        </ul>
                    </p>
                </div>
            </div>
            <hr className='w-[90%] mx-auto' />
            <p className='my-5'>© Copyright 2024 . Made by <u className='font-medium'>Rayen Kanzari</u></p>
        </div>

    )
}
export default Footer;