// import FacultyGoals from "../components/Tabs";
import green from '../../public/images/green.PNG'
import office2 from '../../public/images/office2.jpg'
import img3 from '../../public/images/img3.jfif'
import bg from '../../public/images/bg1.jpeg'
import goals from '../../public/images/goals.jpg'
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className='  overflow-hidden'>


                <section

                    className="  transition-colors duration-300 my-home-section-margin p-home-section-padding "

                    data-aos="fade-up"
                >

                    <motion.h1
                        className="text-center text-5xl font-extrabold bg-gradient-to-r  mb-10  bg-clip-text"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >

                        Sustainable <span className="text-mainColor">Development</span>
                        <div className="mt-3 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>


                    </motion.h1>


                    {/* section 1 */}

                    <div className='relative w-full h-[500px] flex items-center justify-center text-center mb-20'>
                        <div
                            className='absolute inset-0 bg-cover bg-center'
                            style={{ backgroundImage: `url(${bg})` }}
                        ></div>

                        {/* overlay رمادي */}
                        {/* <div className='absolute inset-0 bg-gray-800/10'></div> */}

                        <div className='relative z-10'>


                            <div className="flex justify-center">
                                <div className="bg-gradient-to-br from-[#1e8c5c40] to-white dark:from-mainColor-[#1e8c5c40] dark:to-gray-900 
                                rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 max-w-3xl text-center 
                                hover:shadow-2xl transition-all duration-300">

                                    {/* العنوان */}
                                    <h2 className="text-2xl sm:text-3xl font-bold  dark:text-mainColor-light mb-4 relative inline-block">
                                        Sustainability <span className='text-mainColor'>Vision</span>
                                        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-1 bg-mainColor rounded-full"></span>
                                    </h2>

                                    {/* النص */}
                                    <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 font-medium italic leading-relaxed mt-6">
                                        Menoufia National University places sustainability at the heart of its vision, mission, education, research, and community service, in alignment with the United Nations Sustainable Development Goals and Egypt’s Vision 2030, striving for a more prosperous and equitable future for current and future generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>






                    {/* section 2*/}
                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col mt-20 gap-home-section-gap">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* العمود الأول - الصور */}
                            <div className="space-y-4">
                                {/* الصورة الأولى - صف كامل */}
                                <img
                                    src={goals}
                                    alt="Main"
                                    className="w-full rounded-xl shadow-md"
                                />

                                {/* الصف الثاني - صورتين جنب بعض */}

                            </div>
                            {/* نهاية العمود الاول  */}
                            {/* العمود الثاني - النص */}
                            <div className="text-gray-800 dark:text-gray-200 space-y-4">
                                <div className={`flex items-center  gap-2 text-mainColor cursor-pointer select-none border-b-[1px] border-mainColor w-fit`}>
                                    <BookOpen className="w-6 h-6" />
                                    <span className="text-sm  tracking-widest uppercase">
                                        Sustainable Development
                                    </span>
                                </div>
                                <h1 className='text-2xl font-semibold'>Sustainable Development</h1>
                                <p className="text-lg text-gray-600">
                                    Sustainability is meeting the needs of the present without compromising the ability of future generations to meet their own needs, by balancing economic growth, environmental protection, and social well-being.
                                </p>
                                <p className="text-lg text-gray-600">
                                    Menoufia National University is committed to supporting and achieving the United Nations Sustainable Development Goals (SDGs) by integrating sustainability principles into education, research, and community engagement, contributing to a better and more sustainable future.

                                </p>



                            </div>
                            {/* نهايه عمود المحتوي  */}
                        </div>

                    </div>



                    {/* section 3*/}

                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col mt-20 gap-home-section-gap">
                        <h1 className='text-2xl font-semibold'>Main Sustainability- <span className='text-mainColor'>Related Units:</span></h1>
                        <div className="mt-1 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                        <p className='text-gray-600 italic w-3/4 text-lg text-center'>Menoufia National University is committed to promoting sustainability through its specialized centers and committees that support environmental, social, and governance initiatives across campus. These units play a key role in implementing the University’s Sustainability Strategy and aligning with the UN Sustainable Development Goals (SDGs). </p>


                        <div className="max-w-5xl mx-auto px-4 py-10">
                            {/* Wrapper */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Section 1 */}
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                                        <img
                                            src={green}
                                            alt="Section 1"
                                            className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-mainColor mb-2">
                                        The Green Office (Sustainability Office)
                                    </h2>
                                    <p className="text-gray-600">
                                        Responsible for coordinating sustainability initiatives, monitoring environmental performance, and promoting green practices across all university facilities.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                                        <img
                                            src={office2}
                                            alt="Section 2"
                                            className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-mainColor mb-2">
                                        Crisis and Disaster Management Unit
                                    </h2>
                                    <p className="text-gray-600">
                                        Works on risk assessment, emergency preparedness, and resilience planning to ensure safety and sustainability in response to natural and man-made disasters.                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>


















                </section >




            </div >
        </>
    )
}
