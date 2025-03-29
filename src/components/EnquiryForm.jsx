import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const EnquiryForm = () => {
    const [value, setValue] = useState()
  return (
    <>
      <form className="flex flex-col gap-3 w-[95%] xl:w-[65%] caret-mainbtn rounded-3xl shadow-2xl overflow-hidden bg-[#fff] backdrop-blur-md p-5 py-10   border-white/30">
        <div className="w-full">
          <input
            className="w-full p-2 xl:py-2.5 border-b focus:border-mainbtn rounded-sm"
            type="text"
            placeholder="Full Name"
            required
            title="Please Enter Name"
          />
        </div>
        <div className="w-full">
          <input
            className="w-full p-2 xl:py-2.5 border-b focus:border-mainbtn rounded-sm"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full flex p-2 xl:py-2.5 border-b focus:border-mainbtn bg-white rounded-sm overflow-hidden">
          <PhoneInput
            required
            className="phonecode w-24 outline-none"
            international
            name="msg_phn_code"
            defaultCountry="IN"
            value={value}
            onChange={setValue}
          />
          <input
            className="w-full "
            type="number"
            inputMode="numeric"
            placeholder="Mobile"
            required
          />
        </div>
        <select className="w-full p-2 xl:py-2.5 border-b focus:border-mainbtn rounded-sm bg-transparent" required>
        <option value="">Select State</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
        </select>

        <select className="w-full p-2 xl:py-2.5 border-b focus:border-mainbtn rounded-sm bg-transparent" required>
          <option value="">Select Modal</option>
          <option value="">Modal 1</option>
          <option value="">Modal 2</option>
          <option value="">Modal 3</option>
        </select>
        <button
          className="bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtn hover:to-mainbtn duration-500 hover:bg-opacity-90 h-10 xl:h-11 uppercase tracking-widest rounded-sm"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default EnquiryForm;
