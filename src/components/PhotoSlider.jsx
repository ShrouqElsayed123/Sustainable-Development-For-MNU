import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionImg = motion.img;

export default function PhotoSlider() {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    // 🖼️ المسارات — لازم تكون الصور داخل public/mnu/images/
    const images = [
        "/mnu/images/sliderimg1.jpeg",
        "/mnu/images/sliderimg2.jpeg",
        "/mnu/images/sliderimg3.jpeg",
        "/mnu/images/sliderimg4.jpeg",
        "/mnu/images/sliderimg5.jpeg",
    ];

    // ⏱️ حركة تلقائية كل 3 ثواني
    useEffect(() => {
        const interval = setInterval(() => {
            setPositionIndexes((prev) => prev.map((i) => (i + 1) % images.length));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "-50%", y: "-50%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-80%", y: "-50%", scale: 0.8, zIndex: 3, opacity: 0.9 },
        left: { x: "-110%", y: "-50%", scale: 0.6, zIndex: 2, opacity: 0.6 },
        right: { x: "10%", y: "-50%", scale: 0.6, zIndex: 2, opacity: 0.6 },
        right1: { x: "-20%", y: "-50%", scale: 0.8, zIndex: 3, opacity: 0.9 },
    };

    return (
        <section
            className="block bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-20 min-h-[80vh] flex flex-col justify-center items-center"
            data-aos="zoom-in"
        >
            <h1 className="text-3xl font-bold text-center mb-12">
                Campus <span className="text-mainColor">Photo Slider</span>
            </h1>

            <div className="relative flex items-center justify-center overflow-hidden w-full h-[500px]">
                {images.map((image, index) => (
                    <MotionImg
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                        className="rounded-xl shadow-xl absolute object-cover border border-gray-200"
                        initial="center"
                        animate={positions[positionIndexes[index % images.length]]}
                        variants={imageVariants}
                        transition={{ duration: 0.7 }}
                        style={{
                            width: "40%",
                            height: "auto",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        onError={(e) => {
                            e.target.src =
                                "https://via.placeholder.com/800x500?text=Image+Not+Found";
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
