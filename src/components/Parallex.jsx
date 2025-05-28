import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { Banner1 } from '../assets';

const ParallaxDemo = ({ image, title, subTitle, description }) => {
    return (
        <ParallaxProvider scrollAxis="vertical" smoothScroll>
            <ParallaxBanner
                shouldAlwaysCompleteAnimation={true}
                layers={[
                    {
                        image: image,
                        speed: -70, // Adjusted speed for a more pronounced effect
                        style: {
                            transform: 'translateZ(0)', // Forces GPU acceleration
                            willChange: 'transform',    // Optimizes rendering
                            filter: 'brightness(0.5)',  // Darkens the image slightly
                            backgroundSize: 'contain', // Prevent zooming
                            backgroundPosition: 'center', // Center the image
                            backgroundRepeat: 'no-repeat', // Prevents image repetition

                        },
                    },
                    {
                        children: (
                            <div className="flex items-center justify-center h-full text-white flex-col text-center">
                                {
                                    title &&
                                    <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal uppercase">
                                        {title}
                                    </h2>
                                }
                                {
                                    subTitle &&
                                    <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8">
                                        {subTitle}
                                    </p>
                                }
                                {
                                    description &&
                                    <div className="relative w-[90%] md:w-[70%] sm:mx-auto mt-3">
                                        <p className=" text-sm text-left  sm:text-center">
                                            {description}
                                        </p>
                                    </div>
                                }


                            </div>
                        ),
                        speed: -50, // Adjusted speed for smoother transition
                    },
                ]}
                className="h-screen"
            />
        </ParallaxProvider>
    );
};

export default ParallaxDemo;
