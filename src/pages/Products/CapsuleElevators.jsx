import React, { useState } from "react";
import ProductShowcase from "../../components/ProductShowcase";
import Gallery from "../../components/Gallery";
import { ContactForm, Faq } from "../../components";
import { Ban1 } from "../../assets";

const CapsuleElevators = () => {
  const tabs = ["Description", "Features"];
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  // Content for each tab
  const tabContent = [
    <div key="who-we-are" className="text-center">
      <div className="h-full flex flex-col justify-center text-center ">
        <h2 className="text-2xl xl:text-6xl font-medium capitalize">
          <span className="text-black">
            Your Trusted
            <span className="text-mainbtn"> Elevator Partner</span>
          </span>
        </h2>

        <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto">
          At Aaron Elevators, we've been transforming vertical transportation
          across Kerala for over a decade. Our commitment to excellence has made
          us one of the most reliable passenger lift manufacturers in Kerala,
          delivering solutions that match international standards while
          understanding local needs.
        </p>
      </div>

      <section className=" bg-gradient-to-r from-mainbtn to-mainbtnhrv2 xl:mt-10 py-10 xl:py-24 text-center rounded-2xl">
        <div className="w-11/12 xl:w-10/12 mx-auto text-white">
          <h2 className="text-2xl xl:text-6xl font-normal capitalize ">
            Setting New Standards
            <br /> for Passenger Lifts in Kerala
          </h2>
          <div className="relative w-[90%] md:w-[70%] mx-auto mt-3">
            <p className=" text-sm text-justify md:text-center tracking-wide font-light">
              We're proud to offer state-of-the-art passenger lifts in Kerala
              that combine innovative technology with unmatched safety features.
              Our passenger elevators in Kerala are designed to meet the unique
              requirements of both residential and commercial buildings,
              ensuring smooth vertical transportation for all.
            </p>
          </div>
        </div>
      </section>
    </div>,
    <div className="features-section  max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-2xl xl:text-6xl font-medium capitalize  text-center text-black mb-8 flex flex-col">
        Features That Make Our{" "}
        <span className="text-mainbtn">Lifts Stand Out</span>
      </h3>
      <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto  ">
        Discover a range of features designed to enhance your experience,
        including advanced technology, safety mechanisms, and aesthetic designs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-mainbtn mb-4">
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
          <h4 className="text-xl font-semibold text-black mb-3">
            Smart Safety Systems
          </h4>
          <p className="text-gray-600 text-sm">
            Our passenger lifts come equipped with advanced safety features like
            emergency backup power, automatic rescue devices, and multi-beam
            sensors.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-mainbtn mb-4">
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
          <h4 className="text-xl font-semibold text-black mb-3">
            Energy-Efficient Design
          </h4>
          <p className="text-gray-600 text-sm">
            Minimize power consumption while maximizing performance with our
            energy-efficient passenger elevators.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-mainbtn mb-4">
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
          <h4 className="text-xl font-semibold text-black mb-3">
            Customizable Options
          </h4>
          <p className="text-gray-600 text-sm">
            Choose from various finishes, door designs, and control panels to
            match your building's aesthetic perfectly.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-mainbtn mb-4">
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
          <h4 className="text-xl font-semibold text-black mb-3">
            Smooth Operation
          </h4>
          <p className="text-gray-600 text-sm">
            Enjoy whisper-quiet operation and gentle acceleration/deceleration
            in all our passenger lifts.
          </p>
        </div>
      </div>
    </div>,
    <div key="why-choose">
      <h3 className="text-3xl font-medium">Why Choose Aaron Elevators?</h3>
      <p className="text-gray-700 mt-4">
        When you're looking for passenger lifts in Kerala, you need a partner
        who understands your needs. Here's what makes us different: <br />
        We believe in quality that lasts. Every lift we install goes through
        rigorous testing to ensure it meets our high standards. Our team of
        experts works closely with you from design to installation, making sure
        you get exactly what you need. <br />
        Our maintenance team is always ready to help, providing quick support
        whenever you need it. As experienced passenger lift manufacturers in
        Kerala, we know that reliability is key, and that's what we deliver.
      </p>
    </div>,
  ];

  const faqData = [
    {
      question: `How long does it take to install passenger lifts in Kerala?`,
      answer: `Installation typically takes 2-3 weeks, depending on your building's structure and the lift specifications. Our team ensures minimal disruption during the process.`,
    },
    {
      question: `What maintenance do your passenger lifts in Kerala require?`,
      answer: `We recommend quarterly maintenance checks to keep your lift running smoothly. Our service packages include regular inspections and preventive maintenance.`,
    },
    {
      question: `Are your passenger lift manufacturers in kerala suitable for residential buildings?`,
      answer: `Yes! We offer various sizes and configurations perfect for residential buildings, from small apartments to luxury complexes.`,
    },
    {
      question: `How energy-efficient are your passenger lifts?`,
      answer: `Our passenger lifts in Kerala use advanced technology that reduces power consumption by up to 30% compared to conventional lifts.`,
    },
    {
      question: `What safety features do your passenger lifts include?`,
      answer: `Our passenger lifts in Kerala come with emergency backup power, automatic rescue devices, multi-beam sensors, and overload protection as standard features.`,
    },
    {
      question: `Do you provide customization options for passenger elevators in kerala?`,
      answer: `Absolutely! We offer various design options for cabin interiors, control panels, and door systems to match your building's style.`,
    },
  ];

  return (
    <div className="pt-28 px-2 md:px-0 md:w-9/12 mx-auto w-full">
      <div className="text-center my-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl font-normal">
          Experience Premium Passenger Lifts in Kerala with Aaron Elevators
        </h1>
        <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full ">
          Looking for top-quality passenger lifts in Kerala? Aaron Elevators
          brings you world-class vertical transportation solutions that blend
          safety, comfort, and reliability. As trusted passenger lift
          manufacturers in Kerala, we're here to elevate your building's
          accessibility with our cutting-edge passenger elevators in Kerala.
        </p>
      </div>
      <Gallery />
      <div className="flex justify-center gap-4 mt-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} // Set active tab on click
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
      <div className="mt-10">{tabContent[activeTab]}</div>
      <section className="mt-20">
        <div className="relative p-5 py-20 h-full flex justify-center items-center rounded-lg overflow-hidden">
          <img
            className="absolute object-cover top-0 left-0 w-full h-full"
            src={Ban1}
            alt=""
          />
          <div className="absolute bg-[#0000007c] w-full h-full top-0 left-0 p-10"></div>
          <div className="z-20 relative text-white text-center flex flex-col gap-2">
            <h4 className="font-normal text-4xl xl:text-6xl">
              Ready to Elevate Your Building?
            </h4>
            <p className="xl:w-[80%] mx-auto text-sm text-center font-extralight tracking-wide md:tracking-wide md:w-full ">
              Let's talk about how our passenger elevators in Kerala can
              transform your building's vertical transportation. Our team is
              ready to understand your needs and provide the perfect solution.
            </p>

            <div className="xl:px-52">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <Faq faqData={faqData} />
      </div>
    </div>
  );
};

export default CapsuleElevators;
