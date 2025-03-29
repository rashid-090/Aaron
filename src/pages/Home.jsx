import React from "react";
import { Liftvid, LiftvidPost, Lft3, Lft2, Ban1, Lft5, LiftBanner, AbousUsImage } from "../assets";
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

const Home = () => {
  const faqData = [
    {
      question: `What makes Aaron Elevators stand out among elevator companies in Kerala?`,
      answer: `Our 16+ years of expertise, comprehensive service portfolio, and commitment to quality make us a leading choice for elevators in Kerala. We combine innovative technology with superior customer service to deliver exceptional vertical transportation solutions.`,
    },
    {
      question: `How do you ensure the safety of your home elevators in Kerala?`,
      answer: `We implement rigorous safety protocols, use certified components, and conduct regular maintenance checks. Our home lifts in Kerala comply with international safety standards and undergo thorough testing before installation.`,
    },
    {
      question: `What types of maintenance services do you offer for elevators in Kerala?`,
      answer: `We provide comprehensive maintenance packages including 24/7 emergency support, preventive maintenance, and regular safety inspections to ensure your elevator's optimal performance and longevity.`,
    },
    {
      question: `How long does it typically take to install home lifts in Kerala?`,
      answer: `Installation timeframes vary based on the project complexity, but typically range from 3-7 days for standard home elevators. We ensure minimal disruption while maintaining our quality standards.`,
    },
    {
      question: `What factors should I consider when choosing the best elevator company in Kerala?`,
      answer: `Consider factors like experience, service quality, safety standards, maintenance support, and customer reviews. Look for companies offering comprehensive solutions and proven expertise in elevator manufacturing and installation.`,
    },
    {
      question: `Do you provide customization options for residential elevators in Kerala?`,
      answer: `Yes, we offer extensive customization options for home elevators, including design, capacity, safety features, and finishes to match your specific requirements and architectural preferences.`,
    },
  ];

  return (
    <>
      <section className="relative w-full mx-auto  rounded-lg h-[70vh] md:h-[60vh] xl:h-screen overflow-hidden">
        {/* <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Ban1}
          alt=""
        /> */}


        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={LiftBanner}
          autoPlay
          loop={true}
          muted
        />
        <div className="bg-black bg-opacity-40 absolute w-full h-full z-10"></div>
        {/* Content Overlay */}
        <div className="w-11/12 xl:w-8/12 mx-auto pt-32 py-20 md:pt-20 h-full grid grid-cols-1 tece gap-5 xl:gap-10 z-20 relative text-white">
          <div className="h-full flex flex-col justify-center items-center gap-3 text-center mt-5">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-7xl font-normal uppercase  ">
              Aaron Elevators
            </h1>
            <h2 className="text-base italic sm:text-lg xl:text-2xl 2xl:text-4xl font-extralight ">
              Premium Elevators in Kerala.
            </h2>
            {/* <p className="xl:w-[60%] mx-auto text-sm text-center font-extralight tracking-tighter md:tracking-tight md:w-full">
              Transform your vertical mobility experience with Aaron Elevators,
              Our Elevators in Kerala combines innovation, safety, and
              reliability, making us the best elevator company in Kerala.
            </p> */}
            <button className="border-2 border-mainbtn w-fit rounded-lg px-3 mt-16 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150 uppercase">
              <Link to='/contact-us'>
                Contact us
              </Link>
            </button>
          </div>
          {/* <div className="h-full flex flex-col justify-center items-center">
            <EnquiryForm />
          </div> */}
        </div>
      </section>

      <section className="py-10 xl:py-20 w-[98%] mx-auto">
        <Counter />
      </section>


      <section className="bg-white pb-10 hidden md:block ">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className=" relative overflow-hidden">
            <img
              className="w-full h-full aspect-square object-cover a z-0 rounded-lg object-right"
              src={AbousUsImage}
              alt=""
            />
          </div>
          <div className="xl:col-span-2 bg-gray-100 rounded-lg flex p-5 xl:p-10 flex-col gap-3 h-full justify-center text-mainclr">
            <h2 className="text-3xl lg:text-6xl font-normal capitalize">
              About
              <br /> <span className="text-mainbtn">Aaron Elevators</span>
            </h2>

            <p className="text-sm text-justify xl:w-[80%]">
              At Aaron Elevators, we've established ourselves as one of the
              premier lift manufacturers in Kerala, committed to elevating lives
              through superior technology and unmatched service. Our
              state-of-the-art manufacturing facility and team of skilled
              professionals ensure that every elevator we produce meets the
              highest standards of quality and safety. As one of the most
              trusted lift companies in Kerala, we take pride in our ability to
              blend innovative engineering with practical functionality.
            </p>
            <button className="mb-5 mt-2 border-2 border-mainbtn rounded-lg w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              Learn more
            </button>
            <div className="p-5 xl:w-[80%] rounded-lg  bg-white grid text-center grid-cols-3 md:grid-cols-3 uppercase place-items-center py-10 text-[10px] md:text-sm font-medium">
              <div className="flex flex-col items-center  gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">customized excellence</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">proven reliability</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">end-to-end service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile View */}
      <section className=" pb-10 relative  md:hidden ">
        <div className="w-full h-full absolute  top-0 left-0 z-10 rounded-lg  bg-[black] bg-opacity-50"></div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
          <div className="  overflow-hidden">
            <img
              className="w-full h-full absolute top-0 aspect-square object-cover  rounded-lg object-right"
              src={AbousUsImage}
              alt=""
            />
          </div>
          <div className="xl:col-span-2 z-10 rounded-lg flex p-5 xl:p-10 flex-col gap-3 h-full justify-center text-mainclr">
            <h2 className="text-3xl lg:text-6xl font-normal capitalize text-white">
              About
              <br /> <span className="text-mainbtn">Aaron Elevators</span>
            </h2>

            <p className="text-sm text-justify xl:w-[80%] text-white">
              At Aaron Elevators, we've established ourselves as one of the
              premier lift manufacturers in Kerala, committed to elevating lives
              through superior technology and unmatched service. Our
              state-of-the-art manufacturing facility and team of skilled
              professionals ensure that every elevator we produce meets the
              highest standards of quality and safety. As one of the most
              trusted lift companies in Kerala, we take pride in our ability to
              blend innovative engineering with practical functionality.
            </p>
            <button className="mb-5 mt-2 border-2 border-mainbtn rounded-lg w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              Learn more
            </button>
            <div className="p-5 xl:w-[80%] rounded-lg  bg-white grid text-center grid-cols-3 md:grid-cols-3 uppercase place-items-center py-10 text-[10px] md:text-sm font-medium">
              <div className="flex flex-col items-center  gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">customized excellence</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">proven reliability</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiDoubleQuotesL className="text-4xl text-mainbtn" />
                <p className="text-xs">end-to-end service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gradient-to-r from-mainbtn to-mainbtnhrv2 xl:mt-10 py-10 xl:py-24 text-center mt-5">
        <div className="w-11/12 xl:w-10/12 mx-auto text-white">
          <h2 className="text-2xl xl:text-6xl font-normal capitalize ">
            Modern Elevators in Kerala
            <br /> for Every Need
          </h2>
          <div className="relative w-[90%] md:w-[70%] mx-auto mt-3">
            {/* <RiDoubleQuotesL className="text-8xl text-[#efb03b2d] -left-40 -top-4  absolute"/> */}
            {/* <RiDoubleQuotesL className="text-8xl text-[#efb03b2d] -right-40 -top-4 scale-x-[1] rotate-180 absolute"/> */}
            <p className=" text-sm text-justify md:text-center">
              As pioneering lift companies in Kerala, we understand that every
              project demands unique elevation solutions. Whether you're looking
              for home elevators in Kerala or commercial installations, our
              extensive portfolio caters to diverse requirements. We specialize
              in creating the best home elevation in Kerala, ensuring that each
              installation meets international safety standards while
              complementing your architectural vision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 xl:pt-20">
        <div className="h-full flex flex-col justify-center text-center ">
          <h2 className="text-3xl xl:text-5xl font-normal capitalize">
            Why <span className="text-mainbtn">Aaron Elevators?</span>
          </h2>

          <p className="mt-5 text-sm w-full 2xl:w-[70%] mx-auto">
            As leading elevator manufacturers in Kerala, our commitment to
            excellence sets us apart. We've earned our reputation by delivering
            best house elevations in Kerala through our unwavering focus on
            quality and innovation. Our team of experts ensures that every
            project, from home lifts in Kerala to commercial installations,
            receives meticulous attention to detail.
          </p>
          {/* <h4 className="text-mainbtn font-medium mt-3">What Makes Us Unique Lift company in Kerala Industry -</h4> */}
        </div>
        <div className="w-full grid grid-cols-1 text-mainclr  gap-5 xl:gap-10 mx-auto text-left">
          <div className=" grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mt-5">
            <div className="border bg-white h-full xl:h-60 flex flex-col justify-center p-2 md:p-5 rounded-lg ">
              <RiDoubleQuotesL className="text-5xl text-mainbtn" />
              <h4 className="text-xs md:text-base xl:text-lg font-medium pb-2">
                Superior Customer Service
              </h4>
              <p className="text-[10px] md:text-sm">
                Our dedication to customer satisfaction makes us the best lift
                company in Kerala. We provide comprehensive support throughout
                your elevator's lifecycle.
              </p>
            </div>
            <div className="border bg-white rounded-lg  h-full xl:h-60 flex flex-col justify-center p-2 md:p-5 ">
              <RiDoubleQuotesL className="text-5xl text-mainbtn" />
              <h4 className="text-xs md:text-base xl:text-lg font-medium pb-2">
                Modernization Solutions
              </h4>
              <p className="text-[10px] md:text-sm">
                We offer cutting-edge upgrades to existing elevators in Kerala,
                ensuring your systems stay current with the latest technology.
              </p>
            </div>
            <div className="border bg-white rounded-lg  h-full xl:h-60 flex flex-col justify-center p-2 md:p-5">
              <RiDoubleQuotesL className="text-5xl text-mainbtn" />
              <h4 className="text-xs md:text-base xl:text-lg font-medium pb-2">
                Supply & Installation
              </h4>
              <p className="text-[10px] md:text-sm">
                Our end-to-end service includes professional installation by
                certified technicians, maintaining the highest safety standards.
              </p>
            </div>
            <div id="products" className="border bg-white h-full xl:h-60 flex flex-col justify-center p-2 md:p-5 rounded-lg ">
              <RiDoubleQuotesL className="text-5xl text-mainbtn" />
              <h4 className="text-xs md:text-base xl:text-lg font-medium pb-2">
                24/7 Services
              </h4>
              <p className="text-[10px] md:text-sm">
                Round-the-clock support ensures your elevator systems operate
                reliably, making us the most dependable elevator company in
                Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-10">
        <div className="w-11/12 xl:w-10/12 mx-auto">
           
          <Services/>
        </div>
      </section>
       */}
      <section className="bg-white pb-10 pt-10  text-mainclr">
        <div className="w-fullo text-center">
          <h2 className="text-3xl xl:text-5xl font-normal capitalize">
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
      </section>

      <section className="bg-white py-10 ">
        <div className="w-full text-mainclr">
          <h2 className="text-3xl xl:text-5xl font-normal text-center capitalize">
            What Our <span className="text-mainbtn">Client's Say</span>
          </h2>

          <Testimonails />
        </div>
      </section>

      <section className="py-10 xl:py-20 bg-white">
        <Faq faqData={faqData} />
      </section>

      <section className="pt-10 xl:pt-20 bg-white">
        <Clients />
      </section>
      {/* <section className="pb-10 md:py-32  overflow-visible">
        <ContactForm/>
      
      </section> */}
      <section className="mt-10 xl:mt-14">
        <div className="relative p-5 py-20 h-full flex justify-center items-center rounded-lg overflow-hidden">
          <img
            className="absolute object-cover top-0 left-0 w-full h-full"
            src={Ban1}
            alt=""
          />
          <div className="absolute bg-[#0000007c] w-full h-full top-0 left-0 p-10"></div>
          <div className="z-20 relative text-white text-center flex flex-col gap-2">
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
      </section>
    </>
  );
};

export default Home;
