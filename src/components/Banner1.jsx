import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const PortfolioFullscreenSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('next');
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);
    const isDragging = useRef(false);
    const startPosition = useRef({ x: 0 });
    
    const scrollTimeout = useRef(null);
    const lastScrollTime = useRef(0);

    const portfolioItems = [
        {
            id: 1,
            url: "single-project-1.html",
            title: "Mountain Sunrise",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
            isLight: false
        },
        {
            id: 2,
            url: "single-project-2.html",
            title: "Alpine Lake",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            isLight: false
        },
        {
            id: 3,
            url: "single-project-3.html",
            title: "Waterfall Majesty",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
            isLight: false
        },
        {
            id: 4,
            url: "single-project-4.html",
            title: "Forest Path",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
            isLight: false
        },
        {
            id: 5,
            url: "single-project-5.html",
            title: "Rocky Peaks",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
            isLight: false
        },
        {
            id: 6,
            url: "single-project-6.html",
            title: "Autumn Mountains",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            isLight: false
        },
        {
            id: 7,
            url: "single-project-7.html",
            title: "Misty Valley",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f",
            isLight: false
        },
        {
            id: 8,
            url: "single-project-8.html",
            title: "Snowy Summit",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            isLight: true
        },
        {
            id: 9,
            url: "single-project-9.html",
            title: "Mountain Reflection",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            isLight: false
        }
    ];

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [viewportDimensions, setViewportDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setViewportDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setViewportDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isTransitioning) return;

            if (e.key === 'ArrowLeft') {
                goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                goToNextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isTransitioning]);

    useEffect(() => {
        if (!sliderRef.current) return;
        
        const handleWheel = (e) => {
            e.preventDefault();
            
            if (isTransitioning) return;
            
            const now = Date.now();
            const timeSinceLastScroll = now - lastScrollTime.current;
            
            if (timeSinceLastScroll < 100) return;
            
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            
            scrollTimeout.current = setTimeout(() => {
                if (Math.abs(e.deltaY) > 10) {
                    if (e.deltaY > 0) {
                        goToNextSlide();
                    } else {
                        goToPrevSlide();
                    }
                    
                    lastScrollTime.current = now;
                }
            }, 50);
        };

        const sliderElement = sliderRef.current;
        sliderElement.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('wheel', handleWheel);
            }
            
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [isTransitioning]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (slidesRef.current[activeSlide] && !isTransitioning) {
            const centerX = viewportDimensions.width / 2;
            const centerY = viewportDimensions.height / 2;

            const ratioX = (mousePosition.x - centerX) / centerX;
            const ratioY = (mousePosition.y - centerY) / centerY;

            const moveX = ratioX * 30;
            const moveY = ratioY * 30;

            const activeSlideImage = slidesRef.current[activeSlide].querySelector('.slide-image-wrapper');
            if (activeSlideImage) {
                activeSlideImage.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`;
            }
        }
    }, [mousePosition, activeSlide, isTransitioning, viewportDimensions]);

    useEffect(() => {
        const handleMouseDown = (e) => {
            if (isTransitioning) return;
            isDragging.current = true;
            startPosition.current = { x: e.clientX };
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current || isTransitioning) return;
        };

        const handleMouseUp = (e) => {
            if (!isDragging.current || isTransitioning) return;

            const diffX = startPosition.current.x - e.clientX;
            isDragging.current = false;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    goToNextSlide();
                } else {
                    goToPrevSlide();
                }
            }
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isTransitioning]);

    const goToPrevSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setDirection('prev');
        setPrevSlide(activeSlide);
        setActiveSlide((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));

        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000); // Match this with your CSS transition duration
    };

    const goToNextSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setDirection('next');
        setPrevSlide(activeSlide);
        setActiveSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));

        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000); // Match this with your CSS transition duration
    };

    const getSlideStyles = (index) => {
        const commonStyles = "absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out";

        // If not active or previous slide, hide it
        if (index !== activeSlide && index !== prevSlide) {
            return `${commonStyles} opacity-0 pointer-events-none ${
                direction === 'next' ? 'translate-x-full' : '-translate-x-full'
            }`;
        }

        // If we're in transition
        if (isTransitioning) {
            // Previous slide - sliding out
            if (index === prevSlide) {
                return `${commonStyles} z-20 ${
                    direction === 'next' ? '-translate-x-full' : 'translate-x-full'
                }`;
            }
            // New active slide - sliding in from correct direction
            if (index === activeSlide) {
                return `${commonStyles} z-30 translate-x-0`;
            }
        }

        // Active slide (not transitioning)
        if (index === activeSlide) {
            return `${commonStyles} z-30 translate-x-0`;
        }

        return commonStyles;
    };

    const captionStyles = {
        title: `text-5xl font-bold mb-2 transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            }`,
        category: `text-xl transition-all duration-500 delay-200 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-75 transform translate-y-0'
            }`
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden" ref={sliderRef}>
            {/* Noise background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/api/placeholder/400/400')] bg-repeat z-10 pointer-events-none"></div>

            {/* Slider Container */}
            <div className="relative w-full h-full overflow-hidden">
                {/* Slides */}
                {portfolioItems.map((item, index) => {
                    const slideClass = getSlideStyles(index);

                    return (
                        <div
                            key={item.id}
                            ref={(el) => (slidesRef.current[index] = el)}  
                            className={slideClass}
                        >
                            <div className={`slide-image-wrapper w-full h-full transition-transform duration-700 ${
                                item.isLight ? '' : 'after:content-[""] after:absolute after:inset-0 after:bg-black after:bg-opacity-30 after:z-10'
                            }`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Caption */}
            <div className="absolute left-0 right-0 mx-auto text-center bottom-32 z-30 text-white px-6">
                <h2 className={captionStyles.title}>
                    <a href={portfolioItems[activeSlide]?.url} className="hover:opacity-70 relative inline-block">
                        {portfolioItems[activeSlide]?.title}
                    </a>
                </h2>
                <div className={captionStyles.category}>{portfolioItems[activeSlide]?.category}</div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-16 left-0 right-0 z-30 flex items-center justify-center">
                <div
                    className="w-12 h-12 flex items-center justify-center mr-4 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={goToPrevSlide}
                >
                    <FaChevronLeft className="w-6 h-6 text-white" />
                </div>

                <div className="text-white text-lg mx-6 opacity-80">
                    {String(activeSlide + 1).padStart(2, '0')} / {String(portfolioItems.length).padStart(2, '0')}
                </div>

                <div
                    className="w-12 h-12 flex items-center justify-center ml-4 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={goToNextSlide}
                >
                    <FaChevronRight className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );
};

export default PortfolioFullscreenSlider;