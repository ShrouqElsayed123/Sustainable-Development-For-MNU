// src/components/GoalsBar.jsx
import Marquee from "react-fast-marquee";

const items = [
    { icon: "✱", label: "No Poverty" },
    { icon: "✱", label: "Zero Hunger" },
    { icon: "✱", label: "Quality Education" },
    { icon: "✱", label: "Clean Water and Sanitation" },
    { icon: "✱", label: "Affordable and Clean Energy" },
    { icon: "✱", label: "Gender Equality" },
    { icon: "✱", label: "Reduced Inequalities" },
    { icon: "✱", label: "Climate Action" },
    { icon: "✱", label: "Life Below Water" },
    { icon: "✱", label: "Life on Land" },

];

export default function GoalsBar() {
    return (
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-mainColor py-4 overflow-hidden shadow-md">
            <Marquee gradient={false} speed={45} pauseOnHover={true}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center gap-2 text-white text-lg font-medium px-8 py-2 whitespace-nowrap"
                    >
                        <span className="text-yellow-400 text-2xl">{item.icon}</span>
                        <span className="tracking-wide">{item.label}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
