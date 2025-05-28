import { useState, useEffect, useRef } from 'react';
import { Banner1, Banner2, Banner5 } from '../assets';

const HorizontalFullscreenCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef(null);
    const isScrolling = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const isTouchDevice = useRef(false);
    const touchStartTime = useRef(0);
    const autoPlayTimer = useRef(null);
    const slidesContainerRef = useRef(null);

    // Sample slides data if none provided
    const defaultSlides = [
        {
            id: 1,
            url: "#",
            title: "aaron elevators",
            category: "Premium Elevators in India.",
            image: Banner1,
            isLight: false
        },
        {
            id: 2,
            url: "#",
            title: "aaron elevators",
            category: "Premium Elevators in India.",
            image: Banner2,
            isLight: false
        },
        {
            id: 3,
            url: "#",
            title: "aaron elevators",
            category: "Premium Elevators in India.",
            image: Banner5,
            isLight: false
        },
    ];

    const slidesToUse = slides || defaultSlides;

    // Clone slides for infinite loop (first and last duplicated)
    const clonedSlides = [
        slidesToUse[slidesToUse.length - 1], // last slide duplicated at beginning
        ...slidesToUse,
        slidesToUse[0] // first slide duplicated at end
    ];

    // Get the real index accounting for cloned slides
    const getRealIndex = (index) => {
        if (index === 0) return slidesToUse.length - 1; // first cloned slide
        if (index === clonedSlides.length - 1) return 0; // last cloned slide
        return index - 1;
    };

    // Auto-play functionality with infinite loop
    const startAutoPlay = () => {
        clearInterval(autoPlayTimer.current);
        autoPlayTimer.current = setInterval(() => {
            if (isAutoPlaying) {
                setCurrentSlide(prev => {
                    // If we're at the last cloned slide, jump to the real first slide (index 1)
                    if (prev >= clonedSlides.length - 2) {
                        setTimeout(() => {
                            // Instantly jump to the real first slide without animation
                            slidesContainerRef.current.style.transition = 'none';
                            setCurrentSlide(1);
                            // Force reflow
                            void slidesContainerRef.current.offsetWidth;
                            // Restore transition
                            slidesContainerRef.current.style.transition = '';
                        }, 700);
                        return prev + 1;
                    }
                    return prev + 1;
                });
            }
        }, 2000);
    };

    // Pause auto-play on interaction
    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        clearInterval(autoPlayTimer.current);
    };

    // Resume auto-play after pause
    const resumeAutoPlay = () => {
        setIsAutoPlaying(true);
        startAutoPlay();
    };

    // Handle wheel/trackpad scrolling
    const handleWheel = (e) => {
        if (isScrolling.current) return;

        // Only consider horizontal scrolling
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            isScrolling.current = true;
            pauseAutoPlay();

            const delta = e.deltaX;

            if (delta > 0) {
                // Scroll right
                setCurrentSlide(prev => {
                    if (prev >= clonedSlides.length - 2) {
                        setTimeout(() => {
                            slidesContainerRef.current.style.transition = 'none';
                            setCurrentSlide(1);
                            void slidesContainerRef.current.offsetWidth;
                            slidesContainerRef.current.style.transition = '';
                        }, 700);
                        return prev + 1;
                    }
                    return prev + 1;
                });
            } else {
                // Scroll left
                setCurrentSlide(prev => {
                    if (prev <= 1) {
                        setTimeout(() => {
                            slidesContainerRef.current.style.transition = 'none';
                            setCurrentSlide(clonedSlides.length - 2);
                            void slidesContainerRef.current.offsetWidth;
                            slidesContainerRef.current.style.transition = '';
                        }, 700);
                        return prev - 1;
                    }
                    return prev - 1;
                });
            }

            setTimeout(() => {
                isScrolling.current = false;
                resumeAutoPlay();
            }, 800);
        }
    };

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
        isTouchDevice.current = true;
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
        touchStartTime.current = Date.now();
        pauseAutoPlay();
    };

    const handleTouchMove = (e) => {
        if (!isTouchDevice.current) return;
        
        const touch = e.touches[0];
        const diffX = startX.current - touch.clientX;
        const diffY = startY.current - touch.clientY;
        
        // If the movement is primarily horizontal, prevent default to allow carousel swipe
        if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (!isTouchDevice.current) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX.current - endX;
        const diffY = startY.current - endY;
        const timeElapsed = Date.now() - touchStartTime.current;

        // Only proceed if the swipe was more horizontal than vertical
        // and meets minimum distance and maximum time thresholds
        if (Math.abs(diffX) > Math.abs(diffY) && 
            Math.abs(diffX) > 30 && 
            timeElapsed < 500) {
            
            if (diffX > 50) {
                // Swipe right
                setCurrentSlide(prev => {
                    if (prev >= clonedSlides.length - 2) {
                        setTimeout(() => {
                            slidesContainerRef.current.style.transition = 'none';
                            setCurrentSlide(1);
                            void slidesContainerRef.current.offsetWidth;
                            slidesContainerRef.current.style.transition = '';
                        }, 700);
                        return prev + 1;
                    }
                    return prev + 1;
                });
            } else if (diffX < -50) {
                // Swipe left
                setCurrentSlide(prev => {
                    if (prev <= 1) {
                        setTimeout(() => {
                            slidesContainerRef.current.style.transition = 'none';
                            setCurrentSlide(clonedSlides.length - 2);
                            void slidesContainerRef.current.offsetWidth;
                            slidesContainerRef.current.style.transition = '';
                        }, 700);
                        return prev - 1;
                    }
                    return prev - 1;
                });
            }
        }
        
        // Resume auto-play after a delay
        setTimeout(resumeAutoPlay, 3000);
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        pauseAutoPlay();
        if (e.key === 'ArrowRight') {
            setCurrentSlide(prev => {
                if (prev >= clonedSlides.length - 2) {
                    setTimeout(() => {
                        slidesContainerRef.current.style.transition = 'none';
                        setCurrentSlide(1);
                        void slidesContainerRef.current.offsetWidth;
                        slidesContainerRef.current.style.transition = '';
                    }, 700);
                    return prev + 1;
                }
                return prev + 1;
            });
        } else if (e.key === 'ArrowLeft') {
            setCurrentSlide(prev => {
                if (prev <= 1) {
                    setTimeout(() => {
                        slidesContainerRef.current.style.transition = 'none';
                        setCurrentSlide(clonedSlides.length - 2);
                        void slidesContainerRef.current.offsetWidth;
                        slidesContainerRef.current.style.transition = '';
                    }, 700);
                    return prev - 1;
                }
                return prev - 1;
            });
        }
        setTimeout(resumeAutoPlay, 3000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            clearInterval(autoPlayTimer.current);
        };
    }, [isAutoPlaying]);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('wheel', handleWheel, { passive: false });
            carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
            carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
            carousel.addEventListener('touchend', handleTouchEnd);
            window.addEventListener('keydown', handleKeyDown);

            return () => {
                carousel.removeEventListener('wheel', handleWheel);
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchmove', handleTouchMove);
                carousel.removeEventListener('touchend', handleTouchEnd);
                window.removeEventListener('keydown', handleKeyDown);
                clearInterval(autoPlayTimer.current);
            };
        }
    }, []);

    // Initialize to the first real slide (index 1)
    useEffect(() => {
        setCurrentSlide(1);
    }, []);

    return (
        <div
            ref={carouselRef}
            className="relative w-full h-full overflow-hidden select-none"
            tabIndex="0"
        >
            {/* Slides container */}
            <div
                ref={slidesContainerRef}
                className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77, 0, 0.175, 1)]"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {clonedSlides.map((slide, index) => (
                    <div
                        key={`${slide.id}-${index}`} // Unique key with index
                        className="w-screen h-full flex-shrink-0 flex items-center justify-center relative"
                    >
                        {/* Background image with parallax effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: `scale(${getRealIndex(currentSlide) === getRealIndex(index) ? 1.05 : 1})`
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40" />

                        {/* Content */}
                        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-opacity duration-500 ${getRealIndex(currentSlide) === getRealIndex(index) ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8">
                                {slide.category}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex">
                {slidesToUse.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            pauseAutoPlay();
                            setCurrentSlide(index + 1); // +1 because of cloned slides
                            setTimeout(resumeAutoPlay, 3000);
                        }}
                        className={`block w-3 h-3 rounded-full mx-2 transition-all duration-300 ${getRealIndex(currentSlide) === index ? 'bg-white scale-150' : 'bg-white bg-opacity-50 hover:bg-opacity-70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HorizontalFullscreenCarousel;