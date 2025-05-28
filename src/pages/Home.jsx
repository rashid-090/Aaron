import React, { useEffect, useRef, useState } from "react";
import { Liftvid, LiftvidPost, Lft3, Lft2, Ban1, Lft5, LiftBanner, AbousUsImage, Banner1, Banner3, Banner4, Banner2, Banner5, Banner6, Banner8, ContactSection1, Banner9, AboutBanner } from "../assets";
import {
  EnquiryForm,
  Products,
  Testimonails,
  Services,
  Counter,
  Clients,
  Faq,
  ContactForm,
} from "../components";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Link } from "react-router-dom";
import PortfolioFullscreenSlider from "../components/Banner";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsTools } from "react-icons/bs";
import ParallaxSection from "../components/Parallex";
import { FaArrowsSpin, FaBuildingFlag } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import ContactForm2 from "../components/ContactForm2";
import ProductSection from "../components/ProductsSection";
import ParallaxFirst from "../components/ParallexFirst";
import { motion } from "framer-motion";



const Home = () => {

  const [fixedSection, setFixedSection] = useState(null);


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };


  const faqData = [
    {
      question: `What makes Aaron Elevators stand out among elevator companies in India?`,
      answer: `Our 16+ years of expertise, comprehensive service portfolio, and commitment to quality make us a leading choice for elevators in India. We combine innovative technology with superior customer service to deliver exceptional vertical transportation solutions.`,
      // videoUrl: "https://youtu.be/jX6CKPkZOQo?si=nc-OZr9eMSx4GEBx", // Optional video
    },
    {
      question: `How do you ensure the safety of your home elevators in India?`,
      answer: `We implement rigorous safety protocols, use certified components, and conduct regular maintenance checks. Our home lifts in India comply with international safety standards and undergo thorough testing before installation.`,
    },
    {
      question: `What makes Aaron Elevators stand out among elevator companies in India?`,
      answer: `Our 16+ years of expertise, comprehensive service portfolio, and commitment to quality make us a leading choice for elevators in India. We combine innovative technology with superior customer service to deliver exceptional vertical transportation solutions.`,
    },
    {
      question: `How do you ensure the safety of your home elevators in India?`,
      answer: `We implement rigorous safety protocols, use certified components, and conduct regular maintenance checks. Our home lifts in India comply with international safety standards and undergo thorough testing before installation.`,
    },
    {
      question: `What types of maintenance services do you offer for elevators in India?`,
      answer: `We provide comprehensive maintenance packages including 24/7 emergency support, preventive maintenance, and regular safety inspections to ensure your elevator's optimal performance and longevity.`,
    },
    {
      question: `How long does it typically take to install home lifts in India?`,
      answer: `Installation timeframes vary based on the project complexity, but typically range from 3-7 days for standard home elevators. We ensure minimal disruption while maintaining our quality standards.`,
    },
    {
      question: `What factors should I consider when choosing the best elevator company in India?`,
      answer: `Consider factors like experience, service quality, safety standards, maintenance support, and customer reviews. Look for companies offering comprehensive solutions and proven expertise in elevator manufacturing and installation.`,
    },
    {
      question: `Do you provide customization options for residential elevators in India?`,
      answer: `Yes, we offer extensive customization options for home elevators, including design, capacity, safety features, and finishes to match your specific requirements and architectural preferences.`,
    },
  ];




  return (
    <>

      {/* <ParallaxFirst subTitle={'Premium Elevators in India.'} image={Banner5} /> */}

      <section className="relative w-full   h-[70vh] md:h-[60vh] xl:h-screen overflow-hidden">
        <PortfolioFullscreenSlider />


      </section>

      {/* <section className="py-10 xl:py-20 w-full container mx-auto  bg-secondarygray">
      </section> */}


      <section className="  bg-white   py-10 xl:py-16 text-left sm:text-center ">
        <div className="w-11/12 xl:w-10/12 mx-auto text-white container ">
          <ContactForm2 />
        </div>
      </section>



      <div className="">
        {/* <section className="bg- py-20 mx-auto md:block  ">
          <Counter />
          <div className="w-full mx-auto grid grid-cols-1 container  md:grid-cols-2 xl:grid-cols-3 ">
            <div className=" relative overflow-hidden">
              <img
                className="w-full h-full aspect-square object-cover object-center a z-0 "
                src={Banner8}
                alt=""
              />
            </div>
            <div className="xl:col-span-2 bg-white  flex p-5 xl:p-10 flex-col gap-3 h-full justify-center text-black ">
              <h2 className="text-3xl lg:text-6xl font-normal capitalize">
                About
                <br /> <span className="text-mainbtn">Aaron Elevators</span>
              </h2>

              <p className="text-sm text-left xl:w-[80%]">
                At Aaron Elevators, we've established ourselves as one of the
                premier lift manufacturers in Kerala, committed to elevating lives
                through superior technology and unmatched service. Our
                state-of-the-art manufacturing facility and team of skilled
                professionals ensure that every elevator we produce meets the
                highest standards of quality and safety. As one of the most
                trusted lift companies in Kerala, we take pride in our ability to
                blend innovative engineering with practical functionality.
              </p>
              <button className="mb-5 mt-2 bg-maingray text-white w-fit px-3 h-10  hover:bg-secondarygray2 hover:text-white duration-150">
                Learn more
              </button>
              <div className="p-5 xl:w-[80%] rounded-lg  bg-secondarygray grid text-center grid-cols-3 md:grid-cols-3 uppercase place-items-center py-10 text-[10px] md:text-sm font-medium">
                <div className="flex flex-col items-center  gap-2">
                  <FaBuildingFlag className="text-4xl " />
                  <p className="text-xs">customized excellence</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FiCheckCircle className="text-4xl " />
                  <p className="text-xs">proven reliability</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaArrowsSpin className="text-4xl " />
                  <p className="text-xs">end-to-end service</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Mobile View */}
        <section className="pt-5 relative">
          {/* Background overlay */}
          <div className="w-full h-full absolute top-0 left-0 z-10 bg-[black] bg-opacity-50"></div>

          {/* Background image */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${AboutBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          <div className="xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-5 xl:pt-0">
            {/* Left column with headings */}
            <motion.div
              className="w-full h-full mx-auto z-20 flex flex-col justify-center px-5 xl:min-h-[50vh] xl:gap-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-xl lg:text-6xl text-left w-full capitalize text-white drop-shadow-lg font-normal">
                About
              </h2>
              <div className="flex xl:flex-col gap-5 w-fit">
                <motion.h2
                  className="text-3xl lg:text-6xl text-left w-full capitalize text-mainbtn drop-shadow-lg font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  Aaron
                </motion.h2>
                <motion.h2
                  className="text-3xl lg:text-6xl text-left w-full capitalize text-mainbtn drop-shadow-lg font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  Elevators
                </motion.h2>
              </div>
            </motion.div>

            {/* Right content section */}
            <motion.div
              className="xl:col-span-2 z-10 rounded-lg flex p-5 xl:p-10 flex-col gap-3 h-full justify-center text-mainclr"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              <motion.p
                className="text-sm text-left xl:w-[100%] text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                At Aaron Elevators, we've established ourselves as one of the
                premier lift manufacturers in Kerala, committed to elevating lives
                through superior technology and unmatched service. Our
                state-of-the-art manufacturing facility and team of skilled
                professionals ensure that every elevator we produce meets the
                highest standards of quality and safety. As one of the most
                trusted lift companies in Kerala, we take pride in our ability to
                blend innovative engineering with practical functionality.
              </motion.p>

              <motion.button
                className="mb-5 mt-2 border-2 border-white hover:border-mainbtn !text-white rounded-lg w-fit px-3 h-10 hover:bg-mainbtn hover:text-white duration-150"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false }}
              >
                Learn more
              </motion.button>

              <motion.div
                className="p-5 xl:w-[100%] rounded-lg grid xl:text-center grid-cols-3 md:grid-cols-3 uppercase gap-5 py-10 text-[10px] md:text-sm font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.2 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="flex flex-col items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <RiDoubleQuotesL className="text-2xl text-white" />
                  <p className="text-xs !text-white">customized excellence</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-start gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <RiDoubleQuotesL className="text-2xl text-white" />
                  <p className="text-xs !text-white">proven reliability</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-start gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <RiDoubleQuotesL className="text-2xl text-white" />
                  <p className="text-xs !text-white">end-to-end service</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>






        <section className="bg-secondarygray py-10 xl:pt-20 container mx-auto">
          <motion.div
            className="h-full flex flex-col justify-center text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}  // Changed from true to false
          >
            <h2 className="text-3xl xl:text-5xl font-normal capitalize">
              Why <span className="text-mainbtn">Aaron Elevators?</span>
            </h2>

            <p className="mt-5 text-sm w-full lg:w-[70%] mx-auto">
              As leading elevator manufacturers in Kerala, our commitment to
              excellence sets us apart...
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1 text-black gap-5 xl:gap-10 mx-auto text-left">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mt-5">
              {[ // map-based approach for brevity and dynamic animation
                {
                  icon: <MdOutlineSupportAgent className="text-3xl pb-2" />,
                  title: "Superior Customer Service",
                  desc: "Our dedication to customer satisfaction makes us the best lift company in Kerala...",
                },
                {
                  icon: <HiHomeModern className="text-3xl pb-2" />,
                  title: "Modernization Solutions",
                  desc: "We offer cutting-edge upgrades to existing elevators in Kerala...",
                },
                {
                  icon: <SiGooglesearchconsole className="text-3xl pb-2" />,
                  title: "Supply & Installation",
                  desc: "Our end-to-end service includes professional installation...",
                },
                {
                  icon: <BsTools className="text-3xl pb-2" />,
                  title: "24/7 Services",
                  desc: "Round-the-clock support ensures your elevator systems operate reliably...",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="border h-full xl:h-60 flex flex-col justify-center p-2 md:p-5 rounded-lg bg-white"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}  // Changed from true to false
                  variants={cardVariants}
                >
                  {item.icon}
                  <h4 className="text-xs md:text-base xl:text-lg font-medium pb-2">
                    {item.title}
                  </h4>
                  <p className="text-[10px] md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <ParallaxFirst title={' Home Elevators'} image={Banner9} description={"As pioneering lift companies in Kerala, we understand that every project demands unique elevation solutions. Whether you're looking for home elevators in Kerala or commercial installations, our extensive portfolio caters to diverse requirements. We specialize in creating the best home elevation in Kerala, ensuring that each installation meets international safety standards while complementing your architectural vision."} />

        </section>

        {/* <section className="bg-white py-10">
        <div className="w-11/12 xl:w-10/12 mx-auto">
           
          <Services/>
        </div>
      </section>
       */}
        {/* <section className="bg-secondarygray pb-10 pt-10  text-white container mx-auto">
        <div className="w-fullo text-center">
          <h2 className="text-3xl xl:text-5xl font-normal capitalize text-white">
            our <span className="text-mainbtn">products</span>
          </h2>
          <p className="text-xs md:text-sm md:max-w-[70%] mx-auto mt-5 ">
            Discover our innovative and dependable elevator solutions, built for safety and efficiency. Our designs ensure seamless and smooth mobility for any space
          </p>
          <Products />
          <Link to='/products' className="mb-8  p-2 border-2 border-mainbtn rounded-lg w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
            View more
          </Link>
        </div>
      </section> */}
        {/* <section className="bg-secondarygray pb-10 pt-10  text-white container mx-auto">
          <div className="w-fullo text-center">
            <h2 className="text-3xl xl:text-5xl font-normal capitalize text-white">
              our <span className="text-mainbtn">products</span>
            </h2>
            <p className="text-xs md:text-sm md:max-w-[70%] mx-auto mt-5 ">
              Discover our innovative and dependable elevator solutions, built for safety and efficiency. Our designs ensure seamless and smooth mobility for any space
            </p>
            <Products limit={4} />
            <Link to='/products' className="mb-8  p-2 border-2 border-mainbtn rounded-lg w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              View more
            </Link>
          </div>
        </section> */}
        <section>
          <ProductSection />
        </section>
        <section>
          <ParallaxFirst title={' Modern Elevators in India '} image={Banner6} description={"As pioneering lift companies in Kerala, we understand that every project demands unique elevation solutions. Whether you're looking for home elevators in Kerala or commercial installations, our extensive portfolio caters to diverse requirements. We specialize in creating the best home elevation in Kerala, ensuring that each installation meets international safety standards while complementing your architectural vision."} />
        </section>


        <section className="bg-secondarygray py-10 container mx-auto">
          <div className="w-full text-black">
            <h2 className="text-3xl xl:text-5xl font-normal text-center capitalize ">
              What Our <span className="text-mainbtn">Client's Say</span>
            </h2>

            <Testimonails />
          </div>
        </section>

        <section className="py-10 xl:py-20 bg container mx-auto">
          <Faq faqData={faqData} />
        </section>

        <section className="py-10 xl:py-20 bg-secondarygray">
          <Clients />
        </section>
        {/* <section className="pb-10 md:py-32  overflow-visible">
        <ContactForm/>
      
      </section> */}
        {/* <section className="">
          <div className="relative p-5  h-full flex justify-center items-center py-14 overflow-hidden">
            <img
              className="absolute object-cover top-0 left-0 w-full h-full"
              src={Ban1}
              alt=""
            />
            <div className="absolute bg-[#0000007c] w-full h-full top-0 left-0 p-10"></div>
            <div className="z-20 relative text-white text-center flex flex-col gap-2 container mx-auto">
              <h4 className="font-normal text-4xl xl:text-6xl">
                Get a Free  Consultation
              </h4>
              <p className="text-xs md:text-sm ">
                Take the first step towards superior vertical mobility.   Contact
                Kerala's trusted elevation experts for a consultation.
              </p>
              <ContactForm />
            </div>
          </div>
        </section> */}
        <section className="">
          <motion.div
            className="relative p-5 h-full flex flex-col gap-5 md:flex-row justify-center items-center bg-maingray text-white py-14 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {/* Background image with animation */}
            <motion.img
              className="w-full md:w-1/2 object-cover top-0 left-0 h-full transform scale-x-[-1]"
              src={ContactSection1}
              alt=""
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            />

            {/* Overlay with animation */}
            <motion.div
              className="absolute w-full h-full top-0 left-0 p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            ></motion.div>

            {/* Content container with staggered animations */}
            <motion.div
              className="z-20 relative text-center flex flex-col gap-2 container mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              <motion.h4
                className="font-normal text-4xl xl:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                Get a Free Consultation
              </motion.h4>

              <motion.p
                className="text-xs md:text-sm w-3/4 mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                }}
              >
                Take the first step towards superior vertical mobility. Contact
                Kerala's trusted elevation experts for a consultation.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } }
                }}
              >
                <ContactForm2 />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div >
    </>
  );
};

export default Home;
