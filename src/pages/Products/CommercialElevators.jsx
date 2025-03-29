import React, { useState } from "react";
import ProductShowcase from "../../components/ProductShowcase";
import Gallery from "../../components/Gallery";
import { ContactForm, Faq } from "../../components";
import { Ban1 } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";

const CommercialElevators = () => {
  const tabs = ["Description", "Features", "Specifications"];
  const [activeTab, setActiveTab] = useState(0); // Track the active tab
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  // Content for each tab
  const tabContent = [
    <div
      key="who-we-are"
      className="text-center transition-opacity duration-300"
    >
      <div className="h-full flex flex-col justify-center text-center ">
        <h2 className="text-2xl xl:text-6xl font-medium capitalize">
          <span className="text-black">
            Building Trust,
            <span className="text-mainbtn"> Floor by Floor</span>
          </span>
        </h2>

        <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto font-light">
          We've been in the elevator business for years, making buildings more
          accessible across Kerala. Our team's deep knowledge of commercial
          lifts in Kerala sets us apart, as we work closely with clients to
          understand their specific requirements and deliver solutions that work
          for them.
        </p>
      </div>

      <section className=" bg-gradient-to-r from-mainbtn to-mainbtnhrv2 xl:mt-10 py-10 mt-10  xl:py-24 text-center rounded-2xl">
        <div className="w-12/12 px-2 xl:px-2 xl:w-10/12 mx-auto text-white">
          <h2 className="text-2xl xl:text-6xl font-normal capitalize ">
            Commercial Elevators in Kerala: Built for Your Building's Needs
          </h2>
          <div className="relative w-[90%] md:w-[70%] mx-auto mt-3">
            <p className=" text-sm text-justify md:text-center tracking-wide font-light">
              Looking for commercial building elevation in Kerala? We're here to
              help. Our commercial elevators are designed specifically for
              Kerala's diverse architectural landscape, from busy shopping malls
              to modern office complexes. We understand the local building codes
              and requirements, making sure your elevator system meets all
              safety standards while keeping your operations running smoothly.
            </p>
          </div>
        </div>
      </section>
    </div>,
    <div className="features-section  max-w-6xl mx-auto px-4 text-center transition-opacity duration-300">
      <h3 className="text-2xl xl:text-6xl font-medium capitalize  text-center text-black mb-8 flex flex-col">
        Features That Make Our{" "}
        <span className="text-mainbtn">Lifts Stand Out</span>
      </h3>
      <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto  ">
        Discover a range of features designed to enhance your experience,
        including advanced technology, safety mechanisms, and aesthetic designs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Consistent Performance
            </h4>
            <p className="text-gray-600 text-sm">
              Heavy-duty construction for consistent performance
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Efficient Operation
            </h4>
            <p className="text-gray-600 text-sm">
              Smart control systems for efficient operation
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Energy Saving
            </h4>
            <p className="text-gray-600 text-sm">
              Energy-saving technology that cuts down on power bills
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Advanced Safety
            </h4>
            <p className="text-gray-600 text-sm">
              Advanced safety features for peace of mind
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Regular Maintenance
            </h4>
            <p className="text-gray-600 text-sm">Regular maintenance alerts</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Quiet Operation
            </h4>
            <p className="text-gray-600 text-sm">Smooth, quiet operation</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Spacious Cabins
            </h4>
            <p className="text-gray-600 text-sm">
              Spacious cabins designed for high traffic
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md  hover:shadow-lg transition flex md:flex-col  text-start md:text-center">
          <div className="text-mainbtn mb-4 flex   h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-black mb-3">
              Quick Response
            </h4>
            <p className="text-gray-600 text-sm">
              Quick response times during peak hours
            </p>
          </div>
        </div>
      </div>
    </div>,
  ];

  const faqData = [
    {
      question: `What makes commercial elevators in Kerala different from residential ones?`,
      answer: `Commercial elevators in Kerala are built stronger, carry more weight, and handle more trips per day. They're specifically designed for buildings with lots of daily users.`,
    },
    {
      question: `How often should I service my commercial lift in Kerala??`,
      answer: `We recommend monthly maintenance checks for commercial lifts to keep them running safely and prevent unexpected breakdowns.`,
    },
    {
      question: `What's the average lifespan of commercial lift in Kerala?`,
      answer: `With proper maintenance, our commercial elevators typically last 20-25 years, though many components can be updated to extend their life even longer.`,
    },
    {
      question: `Do you provide emergency repair services for commercial building elevation in Kerala?`,
      answer: ` Yes, we offer 24/7 emergency repair services across Kerala to keep your elevator system running when you need it most.`,
    },
    {
      question: `How long does it take to install a new commercial lift in Kerala?`,
      answer: `Installation typically takes 4-6 weeks, depending on your building's structure and the elevator system you choose.`,
    },
    {
      question: `What safety features come standard with your commercial elevators in Kerala?`,
      answer: `Our elevators include automatic rescue devices, overload protection, emergency phones, and advanced braking systems as standard features of commercial elevators in Kerala.`,
    },
  ];

  const handleTabChange = (index) => {
    setDirection(index > activeTab ? 1 : -1); // Set direction based on the index
    setActiveTab(index);
  };

   // Framer Motion variants for animation
   const variants = {
    enter: (direction) => ({
      x: direction === 1 ? "100%" : "-100%", // Slide in from the left or right
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.250 }, // Adjust duration as needed
    },
    exit: (direction) => ({
      x: direction === 1 ? "-100%" : "100%", // Slide out to the left or right
      opacity: 0,
      transition: { duration: 0.250 }, // Match this with "center"
    }),
  };


  return (
    <>
    <div className="pt-28 px-2 md:px-0 md:w-9/12 mx-auto w-full">
      <div className="text-center my-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl font-normal">
          Commercial Elevators in Keralas
        </h1>
        <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full ">
          At Aaron Elevators, we're bringing reliable commercial elevators in
          Kerala to businesses, apartments, and industrial spaces. We know how
          important smooth people movement is in busy buildings, and that's why
          we've been helping property owners with top-quality elevator solutions
          that match their needs perfectly.
        </p>
      </div>
      <Gallery />
      <div className="flex justify-center gap-4 mt-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)} // Set active tab on click
            className={`px-4 text-nowrap py-2 border text-sm lg:text-base hover:border-mainbtnhrv   border-gray-300 rounded-full transition ${
              activeTab === index
                ? "bg-mainbtn text-white"
                : "hover:bg-mainbtnhrv hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated Content Area */}
      <div className="mt-10 overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={activeTab} // Unique key for each tab to trigger animation
            className=" w-full"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction} // Pass direction to the variants
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

      <section className="mt-10">
        <div className="relative p-5 py-20 h-full flex justify-center items-center rounded-lg overflow-hidden">
          <img
            className="absolute object-cover top-0 left-0 w-full h-full"
            src={Ban1}
            alt=""
          />
          <div className="absolute bg-[#0000007c] w-full h-full top-0 left-0 px-10"></div>
          <div className="z-20 relative text-white text-center flex flex-col gap-2">
            <h4 className="font-normal text-4xl xl:text-6xl">
              Let's Talk About Your Elevator Needs
            </h4>
            <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full ">
              Ready to discuss your commercial elevators in Kerala? Our team is
              here to help you find the right solution for your building. Fill
              out the form below, and we'll get back to you quickly with
              detailed information about our services of commercial building
              elevation in kerala and how we can help.
            </p>

            <div className="xl:px-52">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
      <div className="mt-20 w-10/12 mx-auto">
        <Faq faqData={faqData} />
      </div>
    </>
  );
};

export default CommercialElevators;
