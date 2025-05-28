import React, { useState, useEffect, useRef } from 'react';
import ContactForm2 from './ContactForm2';
import ContactPopupForm from './ContactPopupForn';
import { AaronLogoBlack, Banner3, OfferImage1 } from '../assets/index'


const PopupForm = ({ handlePopupClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // Add state for success animation
  const modalRef = useRef();

  // Close when clicking outside the modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handlePopupClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handlePopupClose]);

  const handleSubmit = (data) => {
    
    setFormData(data); // Store form data
    console.log('Form submitted with values:', data); // Log the form data
    setIsSubmitted(true); // Set form as submitted
    setTimeout(() => setShowSuccess(true), 300); // Delay the success message fade-in
  };

  return (
    // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-[1000] animate-fade-in">
    //   <div
    //     ref={modalRef}
    //     className="bg-white relative text-maingray flex flex-col items-center justify-center rounded shadow-lg mx-5 lg:w-2/6 pb-5 animate-slide-up"
    //   >
    //     <button
    //       className="absolute -top-10 right-0 text-white text-xl "
    //       onClick={handlePopupClose}
    //     >
    //       X
    //     </button>
    //     <img src={OfferImage1} className=' md:w-[100%]  aspect-square object-cover' alt="" />
    //     <h2 className="text-2xl font-bold  text-center pt-3 uppercase">Get A Quote</h2>

    //     {!isSubmitted ? (
    //       <div className='flex flex-col justify-center items-center w-full px-3'>
    //         <ContactPopupForm onSubmit={handleSubmit} />
    //       </div>
    //     ) : (
    //       <div
    //         className={`text-maingray p-4 rounded text-center ${showSuccess
    //           ? 'opacity-100 transition-opacity duration-500 ease-in'
    //           : 'opacity-0'
    //           }`}
    //       >
    //         <h3 className="font-bold text-mainbtn">Success!</h3>
    //         <p>Your form has been submitted successfully.</p>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div>
      <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[500]'>
        <div className='bg-[#ffffff] p-6 xl:p-10 xl:py-20 rounded-[1.5rem] shadow-2xl w-[90%] md:w-[30%] relative'>
          <img
            className="h-60 w-60 xl:h-[350px] xl:w-[350px] invert object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-5 z-10"
            src={AaronLogoBlack}
            alt=""
          />
          <div className="absolute top-3 right-5">
            {/* <CircleTimer
                duration={5000}
                onComplete={() => {
                  setShowCloseButton(true);
                }}
              /> */}

            <button
              onClick={handlePopupClose}
              className="absolute top-1 right-3 text-xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <h2 className="text-xl xl:text-4xl text-center font-normal mb-4 uppercase">
            {/* get a quote */}
            <br /> <span className="font-bold">get a quote</span>
          </h2>
          {!isSubmitted ? (
          <div className='flex flex-col justify-center items-center w-full px-3'>
            <ContactPopupForm onSubmit={handleSubmit} />
          </div>
        ) : (
          <div
            className={`text-maingray p-4 rounded text-center ${showSuccess
              ? 'opacity-100 transition-opacity duration-500 ease-in'
              : 'opacity-0'
              }`}
          >
            <h3 className="font-bold text-mainbtn">Success!</h3>
            <p>Your form has been submitted successfully.</p>
          </div>
        )}
        </div>
    </div>
    </div >
  );
};

export default PopupForm;
