import React, { useEffect, useState } from "react";
import ProductShowcase from "../../components/ProductShowcase";
import Gallery from "../../components/Gallery";
import { ContactForm, Faq } from "../../components";
import { Ban1 } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import { commercialElevatorData } from "../../components/modalsdata"; // Import the data
import { useParams } from "react-router-dom";
import { ImCheckmark } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const CommercialElevators = () => {
  const { id } = useParams();
  // console.log(id);
  // const { tabs, tabContent, pageHeader } = commercialElevatorData;

  const [tabs, setTabs] = useState([]);
  const [tabContent, setContent] = useState([]); // 1 for right, -1 for left
  const [pageHeader, setPageHeader] = useState([]); // 1 for right, -1 for left
  const [loading, setLoading] = useState(true); // 1 for right, -1 for left
  const [data, setData]=useState([])
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [activeTab, setActiveTab] = useState(0); // Track the active tab



  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        // Find the matching data item
        const filteredData = commercialElevatorData.find(item => item.id == id);
        
        if (filteredData) {
          // Set state variables if data is found
          setData(filteredData)
          setTabs(filteredData.tabs);
          setContent(filteredData.tabContent);
          setPageHeader(filteredData.pageHeader);
          console.log("Gallery Images:", filteredData.galleryImages); // Add this line
        } else {
          console.error("No matching data found for id:", id);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>loading</h1>;
  }



  const DynamicSVG = ({ iconName }) => {
    return <div dangerouslySetInnerHTML={{ __html: svgIcons[iconName] }} />;
  };

  // Dynamic tab content rendering
  const renderTabContent = [
    // Description Tab
    <div
      key="description"
      className="text-center transition-opacity duration-300"
    >

      <div className="h-full flex flex-col justify-center text-center">
        <h2 className="text-2xl xl:text-6xl font-medium capitalize">
          <span className="text-black">
            {tabContent[0].content.heading1.main}
            <span className="text-mainbtn">
              {" "}
              {tabContent[0].content.heading1.highlight}
            </span>
          </span>
        </h2>

        <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto font-light">
          {tabContent[0].content.paragraph1}
        </p>
      </div>

      <section className="bg-gradient-to-r from-mainbtn pl-5 md:p-0 to-mainbtnhrv2 xl:mt-10 py-10 mt-10 xl:py-24 text-left md:text-center rounded-2xl">
        <div className="w-12/12 px-2 xl:px-2 xl:w-10/12 mx-auto text-white">
          <h2 className="text-2xl xl:text-6xl font-normal capitalize">
            {tabContent[0].content.banner.heading}
          </h2>
          <div className="relative w-[90%] md:w-[70%] md:mx-auto mt-3">
            <p className="text-sm text-left md:text-center tracking-wide font-light">
              {tabContent[0].content.banner.text}
            </p>
          </div>
        </div>
      </section>
    </div>,

    // Features Tab
    <div className="features-section max-w-6xl mx-auto px-4 text-center transition-opacity duration-300">
      <h3 className="text-2xl xl:text-6xl font-medium capitalize text-center text-black mb-8 flex flex-col">
        {tabContent[1].content.heading.main}{" "}
        <span className="text-mainbtn">
          {tabContent[1].content.heading.highlight}
        </span>
      </h3>
      <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto">
        {tabContent[1].content.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        {tabContent[1].content.featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-[#eee]  p-6 rounded-lg shadow-md hover:shadow-lg transition flex md:flex-col text-start md:text-center"
          >
            <div className="text-mainbtn mb-4 flex h-full items-center justify-center">
            <IoMdCheckmarkCircleOutline  size={30}/> 
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                dangerouslySetInnerHTML={{
                  __html: feature.icon,
                }}
              /> */}
                {/* <DynamicSVG iconName={} /> */}
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-black mb-3">
                {feature.title}
              </h4>
              <p className="text-maingray text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Specifications Tab
    <div
      key="specifications"
      className="specs-section max-w-6xl mx-auto px-4 text-center transition-opacity duration-300"
    >
      <h3 className="text-2xl xl:text-6xl font-medium capitalize text-center text-black mb-8">
        {tabContent[2].content.heading}
      </h3>
      <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto mb-8">
        {tabContent[2].content.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tabContent[2].content.specsList.map((spec, index) => (
          <div
            key={index}
            className="bg-[#eee] p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-mainbtn mb-2">
              {spec.category}
            </h4>
            <p className="text-black">{spec.details}</p>
          </div>
        ))}
      </div>
    </div>,
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
      transition: { duration: 0.25 }, // Adjust duration as needed
    },
    exit: (direction) => ({
      x: direction === 1 ? "-100%" : "100%", // Slide out to the left or right
      opacity: 0,
      transition: { duration: 0.25 }, // Match this with "center"
    }),
  };

  return (
    <>
      <div className="pt-28 px-2 md:px-0 md:w-9/12 mx-auto w-full text-black">
        <div className="text-center my-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-normal uppercase">
            {pageHeader.title}
          </h1>
          <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full">
            {pageHeader.description}
          </p>
        </div>
        <Gallery images={data.galleryImages || []} />
        <div className="flex justify-center gap-4 mt-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`px-4 text-nowrap py-2 border text-sm lg:text-base  hover:border-mainbtnhrv border-gray-300 rounded-full transition ${
                activeTab === index
                  ? "bg-white text-black"
                  : "bg-mainbtn text-white hover:bg-mainbtnhrv hover:text-black"
              }`}
            >
             
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Content Area */}
        <div className="mt-10 overflow-hidden mb-20">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={activeTab}
              className="w-full"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              {renderTabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>        
      </div>
    
    </>
  );
};

export default CommercialElevators;
