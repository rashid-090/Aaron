import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ParallaxFixedBg = ({ image, title, subTitle, description }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth parallax effect on background
      gsap.to(parallaxRef.current, {
        backgroundPositionY: "30%", // Adjust for parallax intensity
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom", // Animation starts when top of element hits bottom of viewport
          end: "bottom top",   // Animation ends when bottom of element hits top of viewport
          scrub: 1,            // Smooth scrubbing (1-second delay)
          markers: false,      // <-- Debug markers removed (default: false)
        },
      });
    }, parallaxRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fallback for non-GSAP browsers
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content with Framer Motion fade-in */}
      <div className="relative z-10 h-full flex flex-col justify-end items-end pb-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col gap-3 items-center w-[90%] xl:w-[70%] mx-auto"
        >
          {title && (
            <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase text-left md:text-center">
            {title}
          </h2>
          )}
          {subTitle && (
            <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8 text-left md:text-center">{subTitle}</p>
          )}
          {description && (
                <p className="text-sm text-left md:text-center">{description}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxFixedBg;