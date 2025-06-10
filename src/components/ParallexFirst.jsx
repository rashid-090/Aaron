import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ParallaxFixedBg = ({ image, title, subTitle, description }) => {
  const containerRef = useRef();
  const contentRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically tablet breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Set up scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Create transforms with mobile limitation
  const scale = useTransform(scrollYProgress, [0, 1], 
    isMobile ? [0.9, 1] : [0.7, 1.2]); // Only scale up to 1 (100%) on mobile
  
  const y = useTransform(scrollYProgress, [0, 1], 
    isMobile ? ["30%", "-20%"] : ["20%", "-20%"]); // Less movement on mobile

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] md:h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed' // Disable fixed bg on mobile
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content with scale effect */}
      <motion.div 
        ref={contentRef}
        style={{
          scale,
          y
        }}
        className="relative z-10 flex items-center justify-center h-full text-white flex-col text-center w-full px-4"
      >
        <div className="h-[90vh] flex flex-col justify-end items-center w-full">
          <div className="text-center flex flex-col md:items-center w-full">
            {title && (
              <h2 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase text-left md:text-center">
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxFixedBg;