import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { sidebarMenu } from "./sidebarConfig";
import logo from "../../public/images/logo.png";

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // ✅ لحالة فتح/غلق القائمة في الموبايل

    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <>
            {/* ✅ زر القائمة في الموبايل */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-md border"
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* ✅ الشريط الجانبي */}
            <aside
                className={`fixed md:static top-0 left-0 h-screen bg-white border-r shadow-sm flex flex-col 
                transition-all duration-300 z-40
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 
                w-64 md:w-72`}
            >
                {/* ✅ اللوجو */}
                <div className="flex items-center justify-start p-2 gap-3 h-20 border-b">
                    <img src={logo} alt="" className="w-16" />
                    <h1 className="text-2xl font-extrabold tracking-wide font-sans text-gray-800">
                        Estidama
                    </h1>
                </div>

                {/* ✅ القائمة (Scroll على اليسار) */}
                <nav className="flex-1 p-6 overflow-y-auto scrollbar-fade [direction:rtl]">
                    <div className="[direction:ltr] space-y-2">
                        {sidebarMenu.map((menu, index) =>
                            menu.items ? (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleDropdown(menu.title)}
                                        className="flex items-center justify-between w-full px-3 py-2 text-[15px] font-medium text-gray-700 rounded-md transition-all hover:bg-gray-50"
                                    >
                                        <span>{menu.title}</span>
                                        {openDropdown === menu.title ? (
                                            <ChevronDown size={16} className="text-gray-500" />
                                        ) : (
                                            <ChevronRight size={16} className="text-gray-500" />
                                        )}
                                    </button>

                                    {/* ✅ القوائم الفرعية */}
                                    <div
                                        className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === menu.title
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {menu.items.map((item, i) => (
                                            <NavLink
                                                key={i}
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `block px-3 py-2 text-[14px] rounded-md transition ${isActive
                                                        ? "bg-mainColor/10 border-l-4 border-mainColor  text-mainColor font-semibold"
                                                        : "text-gray-600 hover:text-mainColor hover:bg-gray-50"
                                                    }`
                                                }
                                                onClick={() => setIsOpen(false)} // ✅ يغلق القائمة بعد الاختيار في الموبايل
                                            >
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={index}
                                    to={menu.path}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-[16px] font-medium transition-all ${isActive
                                            ? "bg-mainColor/10 border-l-4 border-mainColor text-mainColor font-semibold"
                                            : "text-gray-700 hover:text-mainColor hover:bg-gray-50"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {menu.title}
                                </NavLink>
                            )
                        )}
                    </div>
                </nav>
            </aside>

            {/* ✅ خلفية داكنة عند فتح القائمة في الموبايل */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
