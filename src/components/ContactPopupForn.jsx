import React, { useState } from 'react';
import PhoneInput from "react-phone-number-input";


const ContactPopupForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [countryCode, setCountryCode] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(countryCode)
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Append countryCode to phone number
    const updatedFormValues = {
      ...formValues,
      phone: countryCode ? `${countryCode}${formValues.phone}` : formValues.phone,
    };
    console.log(updatedFormValues)
    onSubmit(updatedFormValues); // Pass the updated form values to the parent
    return;
    onSubmit(formValues); // Pass the form values to the parent
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full z-20 relative'>
      <div className="mb-4 flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="w-full p-2 pl-0 border-b-2 bg-transparent placeholder:text-gray-600 outline-none"
          required
        />
        {/* <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="p-2  border-[2px] border-maingray bg-white text-sm"
        /> */}
        <div className='w-full flex p-2 pl-0 bg-transparent border-b-2'>
          <PhoneInput
            required
            className="phonecode w-24 outline-none !bg-transparent"
            international
            name="msg_phn_code"
            defaultCountry="IN"
            value={countryCode}
            style={{ backgroundColor: 'transparent' }}
            onChange={setCountryCode}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder:text-gray-600"
          />

        </div>
        <div className='w-full flex p-2 pl-0 bg-transparent border-b-2'>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder:text-gray-600"
          />
        </div>


        <button
          type="submit"
          className="bg-mainbtn mt-5 text-white hover:bg-mainbtnhrv hover:text-black duration-200 h-10 px-10 w-fit rounded-full mx-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactPopupForm;
