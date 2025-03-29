import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Lft2,Servhome,Servpassanger,Servcommercial,Servstructure,Servcapsule,Servglass,Servcar,Servhospital,Servfreight,Servbubm,Servkitchen,ServMRL } from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ourServices = [
  {
    title: `Home Elevators`,
    desc: `Custom-designed solutions perfect for residential spaces`,
    icon: Servhome,
  },
  {
    title: `Passenger Elevators`,
    desc: `Efficient people movers for commercial buildings`,
    icon: Servpassanger,
  },
  {
    title: `Commercial Elevators`,
    desc: `High-capacity solutions for business environments`,
    icon: Servcommercial,
  },
  {
    title: `Structural Elevators`,
    desc: `Robust systems for industrial applications`,
    icon: Servstructure,
  },
  {
    title: `Capsule Elevators`,
    desc: `Modern panoramic lifting solutions`,
    icon: Servcapsule,
  },
  {
    title: `Glass Elevators`,
    desc: `Elegant, transparent vertical transportation`,
    icon: Servglass,
  },
  {
    title: `Car Elevators`,
    desc: `Specialized solutions for automotive transportation`,
    icon: Servcar,
  },
  {
    title: `Hospital Elevators`,
    desc: `Medical-grade elevation systems`,
    icon: Servhospital,
  },
  {
    title: `Freight Elevators`,
    desc: `Heavy-duty cargo transportation`,
    icon: Servfreight,
  },
  {
    title: `Dumbwaiter Elevators`,
    desc: `Compact service lifting solutions`,
    icon: Servbubm,
  },
  {
    title: `Kitchen Elevators`,
    desc: `Specialized food service transportation`,
    icon: Servkitchen,
  },
  {
    title: `MRL Elevators`,
    desc: `Space-saving machine room-less systems`,
    icon: ServMRL,
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute right-12 z-20 -bottom-10 transform -translate-y-1/2  p-2 rounded-full shadow-lg bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtnhrv hover:to-mainbtn duration-200 text-white"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 z-20 -bottom-10 transform -translate-y-1/2  p-2 rounded-full shadow-lg bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtnhrv hover:to-mainbtn duration-200 text-white"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Services = () => {
  const settings = {
    dots: false,
    arrows:true,
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
      <div className="w-3 h-3 bg-red-300 hover:bg-mainbtn rounded-full transition-all duration-300 cursor-pointer"></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center items-center mt-5">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* Left Section */}
        <div className=" h-full py-10 text-white text-center flex flex-col gap-2 items-center justify-center relative overflow-hidden rounded-3xl">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 z-0 brightness-50"
            src={Lft2}
            alt=""
          />
          <div className="z-10 flex flex-col gap-3 items-center px-5">
            <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
              Our Services
            </h2>
            <p className="text-xs md:text-sm">
            Our portfolio includes everything from sophisticated home elevators in Kerala for residential spaces to robust commercial elevators for business environments.
            </p>
            <button className="border-2 border-mainbtn w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150 mt-3">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section with Slider */}
        <div className="md:col-span-2 xl:col-span-3 relative z-10">
          <Slider {...settings}>
            {ourServices.map((service, i) => (
              <div key={i} className="h-full pr-2 mb-5">
                <div className="bg-gray-100 rounded-3xl py-10 md:py-0 md:aspect-square flex flex-col items-center text-mainclr p-5 justify-center text-center gap-y-3">
                 <div className="bg-white w-20 h-20 grid place-items-center rounded-full shadow-sm">
                  <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                 </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
