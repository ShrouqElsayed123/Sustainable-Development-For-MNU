import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// 🎨 استيراد الأيقونات اللي هتستخدمها
import { FaBookOpen, FaUsers, FaHandshake, FaTrophy } from "react-icons/fa";

export default function Tabs({ data }) {
    const {
        title = "",
        icon: Icon,
        main = "",
        globalImage = "",
        tabsData = [],
    } = data || {};

    const [activeTab, setActiveTab] = useState(tabsData[0]?.id || "1");

    if (!data) return null;

    // ✅ Array فيها الأيقونات الخاصة بالتبويبات بالترتيب
    const tabIcons = [FaBookOpen, FaUsers, FaHandshake, FaTrophy];

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            {/* ===== Header ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mb-10">
                {/* Title */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-3 order-1">
                    <div className="flex items-center justify-center gap-3 cursor-pointer select-none w-fit">
                        {Icon && (
                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-mainColor drop-shadow-md" />
                        )}
                        <span className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-gray-800">
                            {title}
                        </span>
                    </div>
                    <div className="h-1 w-20 sm:w-24 bg-mainColor rounded-full mt-2"></div>
                </div>

                {/* Global Image */}
                <div className="hidden lg:flex justify-center order-2">
                    <img
                        src={globalImage}
                        alt="Global"
                        className="w-full max-w-[220px] sm:max-w-xs rounded-2xl sm:rounded-3xl object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* GOAL Image */}
                <div className="flex justify-center order-3">
                    <img
                        src={main}
                        alt="GOAL"
                        className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* ===== Tabs Container ===== */}
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm border border-gray-100">

                {/* ===== Tab Buttons ===== */}
                <div className="flex flex-wrap md:flex-col bg-gradient-to-b from-gray-50 to-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
                    {tabsData.map((tab, index) => {
                        const TabIcon = tabIcons[index % tabIcons.length]; // 👈 توزيع الأيقونات حسب الترتيب

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-start gap-3 px-4 py-3 text-sm sm:text-base font-semibold transition-all duration-300 border-b md:border-b-0 md:border-l-4 w-full md:w-auto
                                    ${activeTab === tab.id
                                        ? "text-mainColor bg-white border-mainColor shadow-md"
                                        : "text-gray-600 hover:text-mainColor/80 border-transparent"
                                    }`}
                            >
                                {/* 👇 الأيقونة من المصفوفة */}
                                <TabIcon className="text-lg sm:text-2xl " />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* ===== Animated Content ===== */}
                <div className="flex-1 p-5 sm:p-8 bg-gradient-to-br from-white to-gray-50">
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
                                    <h3 className="text-lg sm:text-xl font-bold mb-6 text-center md:text-left text-gray-800">
                                        {tab.title}
                                    </h3>

                                    <ul className="space-y-5">
                                        {tab.content.map((goal, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-sm hover:shadow-lg border border-gray-100 p-5 rounded-xl transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-mainColor flex-shrink-0" />
                                                    <span className="text-gray-800 leading-relaxed text-sm sm:text-base">
                                                        {goal.text}
                                                    </span>
                                                </div>
                                                {goal.link?.trim() && (
                                                    <NavLink
                                                        to={goal.link}
                                                        target="_blank"
                                                        className="text-mainColor font-semibold hover:underline text-sm sm:text-base"
                                                    >
                                                        Visit ↗
                                                    </NavLink>
                                                )}
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

// ✅ PropTypes
Tabs.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        main: PropTypes.string.isRequired,
        globalImage: PropTypes.string.isRequired,
        tabsData: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                label: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                content: PropTypes.arrayOf(
                    PropTypes.shape({
                        text: PropTypes.string.isRequired,
                        link: PropTypes.string,
                    })
                ).isRequired,
            })
        ).isRequired,
    }).isRequired,
};
