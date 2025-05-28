import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Banner1, Banner2, Banner5 } from '../assets';

const HorizontalFullscreenCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderRef = useRef(null);

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

    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        beforeChange: (current, next) => setCurrentSlide(next),
        appendDots: dots => (
            <div className="">
                {dots}
            </div>
        ),
        customPaging: i => (
            <div className={`absolute left-1/2 bottom-10 transform -translate-x-1/2 z-20  block w-3 h-3 rounded-full  transition-all duration-300 ${currentSlide === i ? 'bg-white scale-150' : 'bg-white bg-opacity-50 hover:bg-opacity-70'}`} />
        ),
    };

    // Pause auto-play on interaction
    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
    };

    // Resume auto-play after pause
    const resumeAutoPlay = () => {
        setIsAutoPlaying(true);
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!sliderRef.current) return;
        
        pauseAutoPlay();
        if (e.key === 'ArrowRight') {
            sliderRef.current.slickNext();
        } else if (e.key === 'ArrowLeft') {
            sliderRef.current.slickPrev();
        }
        setTimeout(resumeAutoPlay, 3000);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden select-none">
            <Slider {...settings} ref={sliderRef}>
                {slidesToUse.map((slide, index) => (
                    <div key={slide.id} className="w-screen h-[70vh] md:h-[60vh] xl:h-screen relative">
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: `scale(${currentSlide === index ? 1.05 : 1})`
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40" />

                        {/* Content with fade-up animation */}
                        <div className={`relative z-10 h-full flex items-center justify-center text-center text-white px-4 max-w-4xl mx-auto`}>
                            <div className={`transition-all duration-500 ease-out ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                                <p className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight mb-8">
                                    {slide.category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HorizontalFullscreenCarousel;