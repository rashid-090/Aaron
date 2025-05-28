import React from "react";
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="relative mt-5 w-full  xl:w-[40%] mx-auto">
        <div className="bg-white   border rounded-lg w-full p-7 md:p-10">
         
          <form className="flex flex-col gap-5 mt-5">
            <input
              className="focus:border-mainbtn placeholder:text-black py-2 border-b  border-black  w-full"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="focus:border-mainbtn placeholder:text-black py-2 border-b  border-black  w-full"
              type="email"
              placeholder="Email Address"
            />
            <textarea
              className="focus:border-mainbtn placeholder:text-black py-2  border-black border-b w-full"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button className="border-2 border-mainbtn w-fit mx-auto mt-2 rounded-lg px-3 h-10 text-whiet bg-mainbtn  duration-150 uppercase">
              Contact us
            </button>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
