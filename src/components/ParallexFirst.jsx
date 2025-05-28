import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ParallaxFixedBg = ({ image, title, subTitle, description }) => {
  const containerRef = useRef();

  useEffect(() => {
    // iOS detection
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      // For iOS devices, we'll use a different approach
      const img = new Image();
      img.src = image;
      img.onload = () => {
        containerRef.current.style.backgroundImage = `url(${image})`;
        containerRef.current.classList.add('bg-cover', 'bg-center');
      };
    } else {
      // For other devices, use the fixed background
      containerRef.current.style.backgroundImage = `url(${image})`;
      containerRef.current.classList.add('bg-fixed', 'bg-cover', 'bg-center');
    }
  }, [image]);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white flex-col text-center w-full">
        <div className="h-[90vh] flex flex-col justify-end items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center w-full px-4"
          >
            {title && (
              <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase text-left md:text-center">
                {title}
              </h2>
            )}

            {subTitle && (
              <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8 text-left md:text-center">
                {subTitle}
              </p>
            )}

            {description && (
              <div className="relative w-full md:w-[70%] sm:mx-auto mt-3">
                <p className="text-sm text-left md:text-center">{description}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxFixedBg;