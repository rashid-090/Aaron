import React from "react";
import { Ban1, Lft3, LiftvidPost } from "../assets";
import { ContactForm } from "../components";

const About = () => {
  return (
    <div className="">
      <div>
        <div className="flex  flex-col gap-5 relative">
          <img
            src={Lft3}
            alt="Main"
            className="w-full aspect-square  md:h-[60vh] object-cover h-auto rounded-lg shadow-lg overflow-hidden"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#00000055] h-full w-full rounded-lg text-white flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl xl:text-6xl font-medium capitalize pt-10 md:pt-0">
              Vertical Solutions that Move you Forward
            </h1>
            <p className="mx-auto  text-sm text-justifyde w-[70%] xl:w-[50%]">
              At Aaron Elevators, we're not just building elevators; we're building a better future for Kerala.
            </p>
            <button className="border-2 border-mainbtn w-fit rounded-lg px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150 uppercase">
              explore more
            </button>
          </div>
        </div>
        <div className="py-5 xl:pt-14 grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col  gap-5  h-full  justify-center">
            <h1 className="text-3xl xl:text-5xl font-medium capitalize ">
              <span className="text-mainbtn">Pioneering Vertical</span><br className="hidden md:block" /> Transportation in Kerala
            </h1>
            <p className="mx-auto text-sm text-justify tracking-wide md:tracking-wide font-light md:w-full ">
              Founded over 15 years ago, Aaron Elevators has grown from a local lift manufacturer to a trusted name in vertical transportation. We're not just building elevators; we're creating pathways that connect spaces and people. Our journey began with a simple mission: to provide Kerala's residents and businesses with world-class elevator solutions that prioritize safety, innovation, and reliability.
            </p>
            <p className="mx-auto text-sm text-justify tracking-wide md:tracking-wide font-light md:w-full ">
              Our state-of-the-art manufacturing facility houses a team of skilled professionals who breathe life into every elevator we design. We understand that each building, each space has its unique character, and our elevators are crafted to complement and enhance that individuality. From cozy homes to expansive commercial complexes, we've been the silent partners in Kerala's architectural evolution.            </p>
          </div>
          <div>
            <img
              src={Ban1}
              alt="Main"
              className="w-full aspect-video object-cover h-auto rounded-lg shadow-lg mb-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-mainbtn to-mainbtnhrv2 py-10 xl:py-32 text-center text-white">
        <h2 className="text-2xl xl:text-6xl font-normal capitalize ">
          Why Choose Aaron Elevators?
        </h2>
        <p className="w-[90%] md:w-[70%] xl:w-[60%] mx-auto text-sm text-justify md:text-center mt-3">
          What sets us apart isn't just our technology—it's our commitment to you. We're more than an elevator company; we're your partners in creating smooth, safe vertical movement. Our approach combines deep local understanding with global technological expertise.
          We offer round-the-clock support, ensuring your elevator systems operate flawlessly. Our certified technicians handle everything from initial installation to ongoing maintenance, providing peace of mind with every ride. We continuously upgrade our technologies, making sure your vertical transportation stays cutting-edge.
        </p>
      </div>

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
    </div>
  );
};

export default About;
