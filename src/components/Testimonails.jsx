import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Customer Testimonial Data
const CustomerTestimonails = [
  {
    name: "Riya",
    // desig: "Manager",
    desc: "Aaron elevators has steadily climbed greater heights and is now an industry leader. Having an ultimate life style with comfortable living is needed for every individual which you get with the installation of Aaron elevators.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/w-GL0jeLyOw"
  },
  {
    name: "Arjun P B",
    // desig: "Engineer",
    desc: "As ahomeowner, having a reliable home elevator was essential for us, especially as we think about aging comfortably in place. Aaron Elevators offered innovative solutions that met all our needs. The lift is smooth, quiet, and stylish, and the entire process—from design to installation—was handled with care and professionalism. We couldn’t be happier!",
  },
  {
    name: "Amal Krishna",
    // desig: "Designer",
    desc: "Elevators are often praised for their performance without constantly calling them for repairs . Smooth working is what you get from Aaron elevators which I have been using for years.I appreciate the technology and technicians are all very helpful .",
  },
  {
    videoUrl: "https://www.youtube.com/embed/RPQshNTbQjg"
  },
  {
    name: "Nikhil Chandrababu",
    // desig: "Architect",
    desc: "Aaron Elevators has set the bar high with their exceptional service and top-quality elevators. The installation process was seamless, and their team was professional and knowledgeable. We appreciate their focus on customer satisfaction, providing lifts tailored to our unique requirements without hidden costs. Highly recommended!",
  },
  {
    name: "Rajeena Sudheer",
    // desig: "Engineer",
    desc: "We were impressed by the speed and efficiency of Aaron Elevators' installation process in our Kerala home. The elevator is perfect for our multi-story house and has significantly improved our daily lives. The team was professional and cleaned up after themselves. Highly recommend!",
  },
  {
    name: "Mansad Manu",
    // desig: "Designer",
    desc: "As a senior citizen living in Kerala, I was looking for a home elevator that would improve my mobility. Aaron Elevators provided the perfect solution. Their elevators are easy to use and have significantly enhanced my quality of life. The installation process was smooth, and the after-sales service is excellent.",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Jv84BRrVSgM"
  },
  {
    name: "Abhinav M Balakrishnan",
    // desig: "Architect",
    desc: "Aaron Elevators stands out in the market as one of the best elevator manufacturers. Their products are a perfect blend of advanced technology and affordability. The elevators are energy-efficient, smooth, and reliable, and they’ve truly enhanced the convenience",
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute right-12 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-mainbtn text-white"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-mainbtn text-white"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Testimonails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 hover:bg-mainbtn rounded-full transition-all duration-300 cursor-pointer"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ul className="flex">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const videoTestimonials = CustomerTestimonails.filter((item) => item.videoUrl);
  const textTestimonials = CustomerTestimonails.filter((item) => !item.videoUrl);

  return (
    <div className="grid grid-cols-5 gap-y-10 gap-4">
      {/* Video Carousel - 2 columns */}
      <div className="col-span-5 md:col-span-2">
        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
          }}
        >
          {videoTestimonials.map((item, i) => (
            <motion.div
              key={i}
              className="p-1 md:p-2 mt-5 z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white duration-200 border border-gray-700 h-80 p-5 rounded-lg flex flex-col text-center gap-1 justify-center relative">
                <iframe
                  src={item.videoUrl}
                  title={`Testimonial Video ${i}`}
                  className="w-full h-full rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Text Testimonials Carousel - 3 columns */}
      <div className="col-span-5 md:col-span-3 relative">
        <Slider {...settings}>
          {textTestimonials.map((item, i) => (
            <motion.div
              key={i}
              className="p-1 md:p-2 mt-5 z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white duration-200 border border-gray-700 h-80 p-5 rounded-lg flex flex-col text-center gap-1 justify-center relative">
                <RiDoubleQuotesL className="text-3xl text-mainbtn" />
                <p className="text-[10px] md:text-sm text-black">{item.desc}</p>
                <h4 className="text-base font-semibold mt-2 text-mainbtn">{item.name}</h4>
                <p className="text-xs font-light">{item.desig}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonails;
