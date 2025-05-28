import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const FAQAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="w-full mx-auto grid grid-cols-1 xl:grid-cols-5 gap-5 md:gap-10 text-black"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false }}
    >
      {/* Left Column - Title Section */}
      <motion.div 
        className="h-full flex justify-center col-span-2 text-center md:text-left items-center md:items-start flex-col gap-2 mb-10"
        variants={titleVariants}
      >
        <div className="space-y-2">
          <motion.h2 
            className="text-3xl xl:text-5xl font-normal capitalize"
            variants={itemVariants}
          >
            Frequently Asked
            <br /> <span className="text-mainbtn">Questions</span>
          </motion.h2>

          <motion.p 
            className="text-sm"
            variants={itemVariants}
          >
            Find Answers to Common Questions.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Column - FAQ Items */}
      <motion.div 
        className="space-y-3 col-span-3"
        variants={containerVariants}
      >
        {faqData.map((faq, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg text-black"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-5 py-3 font-medium"
            >
              <span className="text-xs font-medium md:text-base">{faq.question}</span>

              <motion.div
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <FiChevronDown className="text-lg" />
              </motion.div>
            </button>

            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0.8,
                transition: { 
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2 }
                }
              }}
            >
              <div className="p-5 text-xs md:text-sm font-light">
                {faq.answer}
                {faq.videoUrl && (
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <iframe
                      width="100%"
                      height="200"
                      src={faq.videoUrl}
                      title="FAQ Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQAccordion;