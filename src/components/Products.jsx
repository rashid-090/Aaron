import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Lft5, Lft6, Lft7, Lft8, commlift } from "../assets";

import AllProducts from '../components/modalsdata';
import { useNavigate } from "react-router-dom";


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

const Products = ({limit=4}) => {
  const navigate = useNavigate()
  const [descriptionLength, setDescriptionLength] = useState(200);


  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
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
        <ul className="flex gap-0">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
    ],
  };

  useEffect(() => {
    const updateDescriptionLength = () => {
      setDescriptionLength(window.innerWidth < 768 ? 50 : 100);
    };

    updateDescriptionLength(); // Set initial value

    window.addEventListener("resize", updateDescriptionLength);
    return () => window.removeEventListener("resize", updateDescriptionLength);
  }, []);

  return (
    <>
      <div className="mt-5 mb-10 hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 relative  ">

        {AllProducts.slice(0, limit).map((prod, i) => (
          <div key={i} className="p-5 z-10 ">
            <div className="relative group overflow-hidden  bg-gray-100 shadow rounded-lg text-left cursor-pointer "
              onClick={() => navigate(`/products/${prod.id}/${prod.id}`)}
            >
              {/* Product Image */}
              <img
                className="object-cover w-full h-[20rem] md:h-[30rem]  transition-transform duration-500 group-hover:scale-110  "
                src={prod.galleryImages[0].src}
                alt={prod.galleryImages[0].alt}
              />
              <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 0 transition-opacity duration-500 flex flex-col justify-end p-4 xl:p-8 text-white ">
                <h3 className="text-lg xl:text-4xl xl:pr-40 font-medium text-mainbtn uppercase">
                  {prod.pageHeader.title}
                </h3>
                <p className="text-[10px] md:text-xs my-1 md:my-3 ">
                  {prod.pageHeader.description.length > descriptionLength
                    ? `${prod.pageHeader.description.slice(0, descriptionLength)}...`
                    : prod.pageHeader.description}
                </p>
                <button
                  onClick={() => navigate(`/products/${prod.id}/${prod.id}`)}
                  className="w-fit border hover:border-mainbtn capitalize hover:bg-mainbtn px-3 py-1 text-[10px] md:text-sm opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                >
                  Learn More
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 mb-10 relative md:hidden">
        <Slider {...settings}>
          {AllProducts.map((prod, i) => (
            <div key={i} className="p-1 z-10 ">
              <div className="relative group overflow-hidden bg-gray-100 shadow rounded-lg text-left">
                {/* Product Image */}
                <img
                  className="object-cover  w-full h-[20rem] md:h-[30rem] transition-transform duration-500 group-hover:scale-110"
                  src={prod.galleryImages[0].src}
                  alt={prod.galleryImages[0].alt}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 0 transition-opacity duration-500 flex flex-col justify-end p-4 xl:p-8 text-white">
                  <h3 className="text-lg xl:text-2xl xl:pr-40 font-medium text-mainbtn text-nowrap  uppercase">
                    {prod.pageHeader.title}
                  </h3>
                  <p className="text-[10px] md:text-xs my-1 md:my-3 ">
                    {prod.pageHeader.description.length > descriptionLength
                      ? `${prod.pageHeader.description.slice(0, descriptionLength)}...`
                      : prod.pageHeader.description}
                  </p>
                  <button onClick={() => navigate(`/products/${prod.id}/${prod.id}`)} className="w-fit border hover:border-mainbtn capitalize hover:bg-mainbtn px-3 py-1 text-[10px] md:text-sm ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Products;
