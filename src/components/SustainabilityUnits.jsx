import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, AlertTriangle, X } from "lucide-react";

const SustainabilityUnits = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // ✅ منع الـscroll أثناء عرض الصورة
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    const initiatives = [
        {
            id: 1,
            icon: <Leaf className="text-green-600" size={22} />,
            title: "The Green Office",
            subtitle:
                "The Green Office is responsible for coordinating sustainability initiatives, monitoring environmental performance, and promoting green practices across all university facilities. The concept of green offices was considered during the design of the university; all offices and classrooms adhere to green principles in terms of lighting and ventilation. To reinforce these principles, the Green Office was established to promote values and practices that help protect the environment and support environmental sustainability.",
            // images: [
            //     "/mnu/images/sliderimg1.jpeg",
            //     "/mnu/images/sliderimg6.jpeg",
            //     "/mnu/images/sliderimg7.jpeg",
            //     "/mnu/images/sliderimg3.jpeg",
            // ],
            objectivesTitle: "Formation:",
            objectives: [
                "Vice President for Academic Affairs – Chair",
                "University Secretary-General – Member",
                "Dean of the Engineering and Physical Sciences Sector – Member",
                "Coordinator of the English Language and Specialized Translation Program – Member",
                "Coordinator of the Clinical Pharmacy (Pharm D) Program – Member",
                "Administrative Staff Member – Member",
                "Representative from the University’s IT Department – Member",
                "President of the Student Union – Member",
            ],
            leadershipTitle: "Objectives:",
            leadership: [
                "Promote the culture of sustainability across the university community.",
                "Enhance social responsibility awareness to address environmental challenges and support efforts toward achieving sustainability goals.",
                "Rationalize energy consumption through the development of sustainable management programs.",
                "Activate environmental monitoring systems to improve the university’s carbon footprint and reduce harmful emissions.",
            ],
        },
        {
            id: 2,
            icon: <AlertTriangle className="text-green-600" size={22} />,
            title: "Crisis and Disaster Management Unit",
            subtitle:
                "The Crisis and Disaster Management Unit works on risk assessment, emergency preparedness, and developing recovery plans to ensure safety and sustainability in response to natural and man-made disasters.",
            // images: ["/mnu/images/sliderimg2.jpeg"],
            objectivesTitle: "Formation:",
            objectives: [
                "Assistant Coordinator of the Health Sciences Program – Chair",
                "Coordinator of the Artificial Intelligence Program – Member",
                "Assistant Coordinator of the Nursing Program – Executive Director",
                "Coordinator of the Medicine and Surgery Program – Member",
                "Representative from the Security Department – Member",
                "Representative from the University’s Engineering Department – Member",
                "Representative from the Workshops and Laboratory Technicians – Member",
                "Director of Administrative Affairs – Member",
            ],
            leadershipTitle: "Objectives:",
            leadership: [
                "Protect all university personnel—faculty, administrative staff, and students—from injuries and occupational hazards by preventing accidents and professional diseases.",
                "Preserve university property, facilities, and equipment from damage or loss resulting from accidents.",
                "Ensure the implementation of all occupational safety and health standards that provide a safe environment and effective risk prevention for both human and material resources.",
            ],
        },
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className="text-center mb-10">
                <h1 className="text-2xl font-semibold text-center">
                    University <span className="text-mainColor">Initiatives</span>
                </h1>
                <div className="mt-1 mx-auto h-1 w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>
                <p className="text-gray-600 mt-2">
                    Discover our commitment to sustainability and safety through dedicated administrative units
                </p>
            </div>

            <div className="grid md:grid-rows-2 gap-8">
                {initiatives.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            {item.icon}
                            <h3 className="text-lg font-semibold text-green-700">
                                {item.title}
                            </h3>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>

                        {/* <div className="flex flex-wrap gap-2 mb-4">
                            {item.images.map((img, i) => (
                                <motion.img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className="h-32 w-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"

                                    whileHover={{ scale: 1.05 }}
                                />
                            ))}
                        </div> */}

                        <h4 className="font-semibold text-gray-900 mb-2">
                            {item.objectivesTitle}
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
                            {item.objectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                            ))}
                        </ul>

                        <div className="border-t pt-3 text-sm text-gray-600">
                            <h5 className="font-semibold text-gray-900 mb-2">
                                {item.leadershipTitle}
                            </h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                {item.leadership.map((leader, idx) => (
                                    <li key={idx}>{leader}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Popup image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <img
                                src={selectedImage}
                                alt="Expanded view"
                                className="max-h-[10vh] max-w-[90vw] rounded-xl shadow-2xl"
                            />
                            <button
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="text-gray-700" size={20} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SustainabilityUnits;
