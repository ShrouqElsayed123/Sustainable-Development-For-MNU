import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

export default function Tabs({ data }) {
    if (!data) return null; // ✅ الشرط في الأول تمام

    // 🎯 أول حاجة: استخرجي الداتا قبل استخدام أي hook
    const {
        title,
        icon: Icon,
        main,
        globalImage,
        tabsData = [],
    } = data;

    // 🎯 بعد كده استخدميها هنا بأمان
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTab, setActiveTab] = useState(tabsData[0]?.id || "1");

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-5">
                {/* Title */}
                <div className="text-center flex items-center flex-col gap-3 mb-10">
                    <div className="flex items-center justify-center gap-3 cursor-pointer select-none w-fit">
                        {Icon && <Icon className="w-12 h-12 text-mainColor drop-shadow-md" />}
                        <span className="text-2xl text-left font-bold tracking-wide uppercase text-gray-800">
                            {title}
                        </span>
                    </div>
                    <div className="h-1 w-24 bg-mainColor rounded-full mt-2"></div>
                </div>
                <div className="flex justify-center mb-10">
                    <img
                        src={globalImage}
                        alt="Global"
                        className="w-full max-w-xs rounded-3xl object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {/* Faculty Image */}
                <div className="flex justify-center mb-10">
                    <img
                        src={main}
                        alt="Faculty"
                        className="w-full max-w-[300px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>


            </div>

            {/* Tabs */}
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100">
                <div className="flex md:flex-col bg-gradient-to-b from-gray-50 to-gray-100 md:w-64">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-start gap-3 p-5 w-full text-base font-semibold transition-all duration-300 border-b md:border-b-0 md:border-l-4
                ${activeTab === tab.id
                                    ? "text-mainColor bg-white border-mainColor shadow-md"
                                    : "text-gray-600 hover:text-mainColor/80 border-transparent"
                                }`}
                        >
                            <span className="text-2xl">{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Animated Content */}
                <div className="flex-1 p-8 bg-gradient-to-br from-white to-gray-50">
                    <AnimatePresence mode="wait">
                        {tabsData
                            .filter((tab) => tab.id === activeTab)
                            .map((tab) => (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-800">
                                        {tab.title}
                                    </h3>

                                    <ul className="space-y-5">
                                        {tab.content.map((goal, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-4 bg-white shadow-sm hover:shadow-lg border border-gray-100 p-5 rounded-xl transition-all duration-300"
                                            >
                                                <CheckCircle className="w-7 h-7 text-mainColor flex-shrink-0" />
                                                <span className="text-gray-800 leading-relaxed">{goal}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

// ✅ تعريف الـ PropTypes
Tabs.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        main: PropTypes.string.isRequired,
        globalImage: PropTypes.string.isRequired,
        tabsData: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                icon: PropTypes.node,
                label: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.arrayOf(PropTypes.string).isRequired,
            })
        ).isRequired,
    }).isRequired,
};
