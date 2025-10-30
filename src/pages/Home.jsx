import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

import SustainabilityUnits from "../components/SustainabilityUnits";

export default function Home() {
    const green = "/mnu/images/green.PNG";
    const bg = "/mnu/images/bg1.jpeg";
    const goals = "/mnu/images/goals.jpg";
    const office2 = "/mnu/images/office2.jpg";

    return (
        <>
            <div>
                <section
                    className="transition-colors duration-300 my-home-section-margin p-home-section-padding"
                    data-aos="fade-up"
                >
                    {/*  Header */}
                    <motion.h1
                        className="text-center text-4xl sm:text-5xl font-extrabold mb-10 bg-clip-text flex flex-col justify-center items-center gap-3 flex-wrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex flex-row items-end">
                            <p className="mr-2">Sustainable <span className="text-mainColor">Development</span></p>
                            <span className="bg-green-100 h-fit text-green-700 text-sm font-semibold px-3 py-1 rounded-full w-fit text-right block pl-2">
                                Since 2023
                            </span>


                        </div>


                        <div className="mt-3 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>
                    </motion.h1>


                    {/* Section 1 */}
                    <div className="relative w-full h-[500px] flex items-center justify-center text-center mb-10">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${bg})` }}
                        ></div>

                        <div className="relative z-10 flex justify-center">
                            <div className="bg-gradient-to-br from-[#1e8c5c40] to-white dark:from-mainColor-[#1e8c5c40] dark:to-gray-900 
                rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 max-w-3xl text-center 
                hover:shadow-2xl transition-all duration-300"
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative inline-block">
                                    Sustainability <span className="text-mainColor">Vision</span>
                                    <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-1 bg-mainColor rounded-full"></span>
                                </h2>

                                <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 font-medium italic leading-relaxed mt-6">
                                    Menoufia National University places sustainability at the heart
                                    of its vision, mission, education, research, and community
                                    service, in alignment with the United Nations Sustainable
                                    Development Goals and Egypt’s Vision 2030.
                                </p>
                            </div>
                        </div>
                    </div>






                    {/*  Section 2 */}
                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col  gap-home-section-gap mb-10">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <img
                                    src={goals}
                                    alt="Main"
                                    className="w-full rounded-xl shadow-md"
                                />
                            </div>

                            <div className="text-gray-800 dark:text-gray-200 space-y-4">
                                <div
                                    className="flex items-center gap-2 text-mainColor cursor-pointer select-none border-b-[1px] border-mainColor w-fit"
                                >
                                    <BookOpen className="w-6 h-6" />
                                    <span className="text-sm tracking-widest uppercase">
                                        Sustainable Development
                                    </span>
                                </div>

                                <h1 className="text-2xl font-semibold">
                                    Sustainable Development
                                </h1>

                                <p className="text-lg text-gray-600">
                                    Sustainability is meeting the needs of the present without
                                    compromising the ability of future generations to meet their
                                    own needs, by balancing economic growth, environmental
                                    protection, and social well-being.
                                </p>

                                <p className="text-lg text-gray-600">
                                    Menoufia National University is committed to supporting and
                                    achieving the United Nations Sustainable Development Goals
                                    (SDGs) by integrating sustainability principles into education,
                                    research, and community engagement.
                                </p>
                            </div>
                        </div>
                    </div>







                    {/*  Section 3 */}
                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col  gap-home-section-gap mb-10">
                        <h1 className="text-2xl font-semibold">
                            Main Sustainability- <span className="text-mainColor">Related Units:</span>
                        </h1>
                        <div className="mt-1 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                        <p className="text-gray-600 italic w-3/4 text-lg text-center">
                            Menoufia National University is committed to promoting sustainability
                            through its specialized centers and committees that support environmental,
                            social, and governance initiatives across campus.
                        </p>

                        <div className="max-w-5xl mx-auto px-4 py-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* 🟩 Section 1 */}
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
                                        Responsible for coordinating sustainability initiatives and promoting green practices across all university facilities.
                                    </p>
                                </div>

                                {/* 🏛 Section 2 */}
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
                                        Works on risk assessment, emergency preparedness, and resilience planning to ensure safety and sustainability in response to disasters.
                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>



                    <div className="max-w-7xl mx-auto flex flex-col items-center  gap-6 mb-10">
                        <h1 className="text-2xl font-semibold text-center">
                            Download <span className="text-mainColor">Report</span>
                        </h1>
                        <div className="mt-1 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                        {/* مثال على كارد لعرض ملف PDF */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition flex flex-col justify-between"
                        >
                            <div>
                                <BookOpen className="text-mainColor w-10 h-10 mx-auto mb-3" />
                                <h2 className="text-lg font-bold text-gray-800 mb-2">
                                    Sustainability Annual Report 2025
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Policy framework for environmental and sustainability actions.
                                </p>
                            </div>
                            <a
                                href="/mnu/pdfs/Sustainability Annual report 2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-mainColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
                            >
                                Show File
                            </a>
                        </motion.div>
                    </div>




                    {/*  Section 5 */}
                    <SustainabilityUnits />
                </section>
            </div>
        </>
    );
}
