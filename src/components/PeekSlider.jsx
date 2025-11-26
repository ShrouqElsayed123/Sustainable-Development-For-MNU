import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function PeekSlider({ images }) {
    const [index, setIndex] = useState(0);
    const [flipping, setFlipping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setFlipping(true);
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setFlipping(false);
        }, 600);
    };

    const currentImage = images[index];
    const nextImage = images[(index + 1) % images.length];

    return (
        <section className="h-[50vh] md:h-[80vh]  flex flex-col items-center justify-start bg-gray-50 py-10 my-16">
            <div className="text-center flex flex-col gap-3 mb-5">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                    Sustainability <span className="text-mainColor">Gallery</span>
                </h1>
                <div className="mt-1 mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>
            </div>

            <div
                className="relative w-full max-w-4xl h-full overflow-visible"
                style={{ perspective: 1200 }}
            >
                {/* // الصورة القديمة */}
                <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl"
                    style={{ backfaceVisibility: "hidden" }}
                    animate={{
                        rotateY: flipping ? 90 : 0,
                        scale: flipping ? 0.95 : 1,
                        x: flipping ? -50 : 0,
                        opacity: flipping ? 0 : 1,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                {/* // الصورة الجديدة */}
                <motion.img
                    key={nextImage}
                    src={nextImage}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl"
                    style={{ backfaceVisibility: "hidden", rotateY: 90 }}
                    animate={{
                        rotateY: flipping ? 0 : 90,
                        scale: flipping ? 1 : 0.95,
                        x: flipping ? 0 : 50,
                        opacity: flipping ? 1 : 0,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />

            </div>
        </section>
    );
}

PeekSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
