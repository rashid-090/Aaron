import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



const FAQAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-10 text-mainclr">
        <div className="h-full flex justify-center text-center md:text-left items-center flex-col gap-2 mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl xl:text-5xl font-normal capitalize">
              Frequently Asked
              <br /> <span className="text-mainbtn">Questions</span>
            </h2>

            <p className="text-sm">Find Answers to Common Questions.</p>
          </div>
        </div>
        <div className=" space-y-3">
          {faqData.map((faq, index) => (
            <div key={index} className="  bg-white0 rounded-lg text-mainclr">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-3  font-medium"
              >
                <span className="text-xs font-medium md:text-base  ">
                  {faq.question}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FiChevronDown className="text-lg" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-5 text-xs md:text-sm font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
