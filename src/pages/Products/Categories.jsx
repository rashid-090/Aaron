import React, { useEffect, useState } from "react";
import ProductShowcase from "../../components/ProductShowcase";
import Gallery from "../../components/Gallery";
import { ContactForm, Faq } from "../../components";
import { Ban1, Lft5, Lft6, Lft7 } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import liftModals from '../../components/categorydata';



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

const CommercialElevators = () => {
  const [data, setData] = useState(true); // 1 for right, -1 for left
  const [loading, setLoading] = useState(true); // 1 for right, -1 for left
  const { category } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        // Find the matching data item
        const filteredData = liftModals.find(item => item.slug == category);

        if (filteredData) {
          // Set state variables if data is found

          setData(filteredData)
          console.log("Data loaded:", filteredData);
        } else {
          console.error("No matching data found for id:", category);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <h1>loading</h1>;
  }

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



  return (
    <>
      <div className="pt-28 px-2 md:px-0 md:w-9/12 mx-auto w-full">
        <div className="text-center my-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-normal">
            {data.name}
          </h1>
          <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full ">
            {data.disc}
          </p>
        </div>
      </div>

      <div className="w-11/12 xl:w-10/12 mx-auto relative mb-20">
        <Slider {...settings}>
          {data.modals.map((prod, i) => (
            <div key={i} className="p-1 z-10">
              <div className="relative group overflow-hidden bg-gray-100 shadow rounded-lg text-left">
                {/* Product Image */}
                <img
                  className="object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                  src={prod.image}
                  alt={prod.name}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 0 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg pb-3 font-medium text-mainbtn">
                    {prod.title}
                  </h3>

                  <button onClick={() => navigate(`${prod.url}`)} className="w-fit border hover:border-mainbtn capitalize hover:bg-mainbtn px-3 py-1 text-[10px] md:text-sm ">
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

export default CommercialElevators;
