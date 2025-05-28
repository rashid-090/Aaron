// import React from 'react';
// import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
// import { Banner1 } from '../assets';
// import { motion } from "framer-motion";


// const ParallaxFirst = ({ image, title, subTitle, description }) => {
//     return (
//         <ParallaxProvider scrollAxis="vertical" smoothScroll>
//             <ParallaxBanner
//                 shouldAlwaysCompleteAnimation={true}
//                 layers={[
//                     {
//                         image: image,
//                         speed: -70, // Adjusted speed for a more pronounced effect
//                         style: {
//                             transform: 'translateZ(0)', // Forces GPU acceleration
//                             willChange: 'transform',    // Optimizes rendering
//                             filter: 'brightness(0.5)',  // Darkens the image slightly
//                             backgroundSize: 'contain', // Prevent zooming
//                             backgroundPosition: 'center', // Center the image
//                             backgroundRepeat: 'no-repeat', // Prevents image repetition

//                         },
//                     },
//                     {
//                         children: (
// <div className="flex items-center justify-center h-full text-white flex-col text-center">
//     <div className="h-[90vh] flex flex-col justify-end items-center">
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center flex flex-col items-center"
//         >
//             {title && (
//                 <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase">
//                     {title}
//                 </h2>
//             )}

//             {subTitle && (
//                 <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8">
//                     {subTitle}
//                 </p>
//             )}

//             {description && (
//                 <div className="relative w-[90%] md:w-[70%] sm:mx-auto mt-3">
//                     <p className="text-sm text-left sm:text-center">{description}</p>
//                 </div>
//             )}
//         </motion.div>
//     </div>
// </div>
//                         ),
//                         speed: -50, // Adjusted speed for smoother transition
//                     },
//                 ]}
//                 className="h-screen"
//             />
//         </ParallaxProvider>
//     );
// };

// export default ParallaxFirst;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ParallaxFixedBg = ({ image, title, subTitle, description }) => {
//   const containerRef = useRef();

//   useEffect(() => {
//     gsap.to(containerRef.current, {
//       backgroundPositionY: "80%", // move image downward
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center">
//     {/* Background Image */}
//     <img
//       src={image}
//       alt="Background"
//       className="absolute top-0 left-0 w-full h-full object-cover object-center scale-125"
//       style={{ zIndex: -1 }}
//     />
  
//     {/* Content */}
//     <div className="absolute inset-0 bg-black/40 z-0"></div>
  
//     <div className="relative z-10 text-white text-center">
//       {title && (
//         <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase">
//           {title}
//         </h2>
//       )}
//       {subTitle && (
//         <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-4">
//           {subTitle}
//         </p>
//       )}
//       {description && (
//         <p className="w-[90%] md:w-[70%] mx-auto text-sm sm:text-base">{description}</p>
//       )}
//     </div>
//   </div>
  
//   );
// };

// export default ParallaxFixedBg;


import { motion } from "framer-motion";


const ParallaxFixedBg = ({ image, title, subTitle, description }) => {
  return (
    <div
      className="relative h-[100vh] md:h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white flex-col text-center">
        <div className="h-[90vh] flex flex-col justify-end items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center"
          >
            {title && (
              <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase text-left md:text-center pl-4">
                {title}
              </h2>
            )}

            {subTitle && (
              <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8 text-left md:text-center">
                {subTitle}
              </p>
            )}

            {description && (
              <div className="relative w-[90%] md:w-[70%] sm:mx-auto mt-3">
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
