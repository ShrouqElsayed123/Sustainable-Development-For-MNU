import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import SustainabilityUnits from "../components/SustainabilityUnits";
import PeekSlider from "../components/PeekSlider";

export default function Home() {
    const green = "/mnu/images/green.PNG";
    const bg = "/mnu/images/bg1.jpeg";
    const goals = "/mnu/images/goals.jpg";
    const office2 = "/mnu/images/office2.jpg";

    return (
        <section className="overflow-x-hidden transition-colors duration-300 my-home-section-margin p-home-section-padding max-[400px]:px-2">
            {/* ===== Header ===== */}
            <motion.h1
                className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold mb-10 flex flex-col justify-center items-center gap-3 flex-wrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                    <p className="text-center sm:text-left text-base sm:text-xl md:text-4xl max-[400px]:text-sm">
                        Sustainability <span className="text-mainColor">Development</span>
                    </p>
                    <span className="bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
                        Since 2023
                    </span>
                </div>
                <div className="mt-3 mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>
            </motion.h1>

            {/* ===== Section 1 ===== */}
            <div className="relative w-full h-[320px] sm:h-[500px] flex items-center justify-center text-center mb-10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>

                <div className="relative z-10 flex justify-center px-2 sm:px-6">
                    <div className="bg-gradient-to-br from-[#1e8c5c40] to-white dark:from-mainColor-[#1e8c5c40] dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-8 max-w-3xl text-center hover:shadow-2xl transition-all duration-300">
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 relative inline-block max-[400px]:text-base">
                            Sustainability <span className="text-mainColor">Vision</span>
                            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-10 sm:w-16 h-1 bg-mainColor rounded-full"></span>
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 font-medium italic leading-relaxed mt-6 max-[400px]:text-xs">
                            Menoufia National University places sustainability at the heart
                            of its vision, mission, education, research, and community
                            service, in alignment with the United Nations Sustainable
                            Development Goals and Egypt’s Vision 2030.
                        </p>
                    </div>
                </div>
            </div>



            {/* ===== Section 2 ===== */}
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-home-section-gap mb-10 px-2 sm:px-4">
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* الصورة */}
                    <div className="space-y-4 order-1 md:order-none">
                        <img
                            src={goals}
                            alt="Main"
                            className="w-full max-w-full rounded-xl shadow-md"
                        />
                    </div>

                    {/* النص */}
                    <div className="text-gray-800 dark:text-gray-200 space-y-4">
                        <div className="flex items-center gap-2 text-mainColor cursor-pointer select-none border-b border-mainColor w-fit">
                            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xs sm:text-sm tracking-widest uppercase">
                                Sustainable Development
                            </span>
                        </div>

                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold max-[400px]:text-base">
                            Sustainable Development
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-[400px]:text-xs">
                            Sustainability is meeting the needs of the present without
                            compromising the ability of future generations to meet their own
                            needs, by balancing economic growth, environmental protection, and
                            social well-being.
                        </p>

                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-[400px]:text-xs">
                            Menoufia National University is committed to supporting and
                            achieving the United Nations Sustainable Development Goals (SDGs)
                            by integrating sustainability principles into education, research,
                            and community engagement.
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <PeekSlider
                    images={[
                        "/mnu/images/sliderimg1.jpeg",
                        "/mnu/images/sliderimg2.jpeg",
                        "/mnu/images/sliderimg3.jpeg",
                        "/mnu/images/sliderimg4.jpeg",
                        "/mnu/images/sliderimg5.jpeg",
                        "/mnu/images/sliderimg6.jpeg",

                    ]}
                />
            </div>
            {/* ===== Section 3 ===== */}
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-home-section-gap mb-10 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center max-[400px]:text-base">
                    Main Sustainability- <span className="text-mainColor">Related Units:</span>
                </h1>
                <div className="mt-1 mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                <p className="text-gray-600 italic text-sm sm:text-base md:text-lg text-center max-w-2xl max-[400px]:text-xs">
                    Menoufia National University is committed to promoting sustainability
                    through its specialized centers and committees that support
                    environmental, social, and governance initiatives across campus.
                </p>

                <div className="max-w-5xl mx-auto py-10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 🟩 Section 1 */}
                        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl transition">
                            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                                <img
                                    src={green}
                                    alt="Section 1"
                                    className="w-full max-w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-mainColor mb-2 max-[400px]:text-base">
                                The Green Office (Sustainability Office)
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base max-[400px]:text-xs">
                                Responsible for coordinating sustainability initiatives and
                                promoting green practices across all university facilities.
                            </p>
                        </div>

                        {/* 🏛 Section 2 */}
                        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-xl transition">
                            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                                <img
                                    src={office2}
                                    alt="Section 2"
                                    className="w-full max-w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-mainColor mb-2 max-[400px]:text-base">
                                Crisis and Disaster Management Unit
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base max-[400px]:text-xs">
                                Works on risk assessment, emergency preparedness, and resilience
                                planning to ensure safety and sustainability in response to
                                disasters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Section 4 - Report ===== */}
            {/* <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 mb-10 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center max-[400px]:text-base">
                    Download <span className="text-mainColor">Report</span>
                </h1>
                <div className="mt-1 mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition w-full max-w-sm"
                >
                    <div>
                        <BookOpen className="text-mainColor w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 max-[400px]:text-sm">
                            Sustainability Annual Report 2025
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm max-[400px]:text-[10px]">
                            Policy framework for environmental and sustainability actions.
                        </p>
                    </div>
                    <a
                        href="/mnu/pdfs/Sustainability Annual report 2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-mainColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm sm:text-base max-[400px]:text-xs"
                    >
                        Show File
                    </a>
                </motion.div>
            </div> */}

            {/* ===== Section 5 ===== */}
            <SustainabilityUnits />
        </section>
    );
}
