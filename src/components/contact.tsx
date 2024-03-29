const Contact = () => {
    return (
        <div className="dark:bg-[#242828] bg-gray-100 py-20 dark:text-white text-black font-mono mx-2 [&>*]:my-14 w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-center font-semibold">CONTACT</h1>
                <p className="md:w-[60%] w-[80%] text-center font-semibold mt-5 mb-5">
                    Feel free to Contact me by submitting the form below and I will get
                    back to you as soon as possible
                </p>
            </div>
            <div>
                <section className="bg-gray-200 dark:bg-[#242828]">
                    <div className="py-8 lg:py-2 px-4 mx-auto max-w-screen-md">
                        <form action="#" className="space-y-8">
                            <div>
                                <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email :</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject :</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message :</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="bg-green-500  w-fit h-fit  md:w-[20vw] max-w-[250px]  mt-2 py-3 font-semibold dark:text-white text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Contact;
