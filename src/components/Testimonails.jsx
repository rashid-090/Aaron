import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomerTestimonails = [
  {
    name: "Samual John",
    desig: "Manager",
    desc: "I got surprised to see the results! This lift is so compact, stylish & it doesn’t feel like there is any change in my apartment. Perfect option for people Residing in Apartments.",
  },
  {
    name: "Michael Brown",
    desig: "Engineer",
    desc: "Amazing product and excellent support! The lift blends seamlessly into my house design. Highly recommend this to everyone looking for convenience and style.",
  },
  {
    name: "Emily Davis",
    desig: "Designer",
    desc: "This is a game-changer for apartments! Compact, elegant, and extremely efficient. Couldn’t be happier with the purchase.",
  },
  {
    name: "Chris Wilson",
    desig: "Architect",
    desc: "This lift is an incredible addition! Stylish, compact, and highly efficient. My clients love it too. Great job!",
  },
  {
    name: "Michael Brown",
    desig: "Engineer",
    desc: "Amazing product and excellent support! The lift blends seamlessly into my house design. Highly recommend this to everyone looking for convenience and style.",
  },
  {
    name: "Emily Davis",
    desig: "Designer",
    desc: "This is a game-changer for apartments! Compact, elegant, and extremely efficient. Couldn’t be happier with the purchase.",
  },
  {
    name: "Chris Wilson",
    desig: "Architect",
    desc: "This lift is an incredible addition! Stylish, compact, and highly efficient. My clients love it too. Great job!",
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
    slidesToShow: 5,
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

  return (
    <div className="relative">
      <Slider {...settings}>
        {CustomerTestimonails.map((testi, i) => (
          <div key={i} className="p-1 md:p-2 mt-5 z-10">
            <div className=" hover:bg-gray-100 duration-200 border border-gray-100 text-gray-600  h-80 p-5 rounded-lg flex flex-col text-center gap-1  justify-center relative">
              <RiDoubleQuotesL className="text-6xl text-mainbtn" />

              <p className="text-[10px] md:text-sm text-gray-500">{testi.desc}</p>

              <h4 className="text-base font-semibold my-2">{testi.name}</h4>
              <p className="text-xs font-light">{testi.desig}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonails;
