// import FacultyGoals from "../components/Tabs";
import img1 from '../../public/images/img1.jfif'
import img2 from '../../public/images/img2.jfif'
import img3 from '../../public/images/img3.jfif'
import goals from '../../public/images/goals.jpg'
import { BookOpen } from "lucide-react";

export default function Home() {
    return (
        <>
            <div className='  overflow-hidden'>


                <section

                    className="  transition-colors duration-300 my-home-section-margin p-home-section-padding space-y-5"

                    data-aos="fade-up"
                >

                    {/* section 1 */}

                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


                            {/* نهاية العمود الاول  */}
                            <div className="text-gray-800 dark:text-gray-200 space-y-4">
                                <p className="text-lg text-gray-800 font-medium">
                                    Menoufia National University places sustainability at the heart of its vision, mission, education, research, and community service, in alignment with the United Nations Sustainable Development Goals and Egypt’s Vision 2030, striving for a more prosperous and equitable future for current and future generation
                                </p>
                            </div>
                            {/* العمود الثاني - النص */}



                            <div className="space-y-4 w-full">
                                <img
                                    src={goals}
                                    alt="Main"
                                    className="w-full rounded-xl shadow-md"
                                />
                            </div>
                        </div>

                    </div>
                    {/* section 2 */}
                    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* العمود الأول - الصور */}
                            <div className="space-y-4">
                                {/* الصورة الأولى - صف كامل */}
                                <img
                                    src={img1}
                                    alt="Main"
                                    className="w-full rounded-xl shadow-md"
                                />

                                {/* الصف الثاني - صورتين جنب بعض */}
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src={img2}
                                        alt="Sub 1"
                                        className="w-full h-full rounded-xl shadow-md"
                                    />
                                    <img
                                        src={img3}
                                        alt="Sub 2"
                                        className="w-full h-full rounded-xl shadow-md"
                                    />
                                </div>
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



                </section>




            </div>
        </>
    )
}
