import React, { useState } from 'react';

const ContactForm2 = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues); // Pass the form values to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:w-3/5 mx-auto gap-5 ">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="p-2  border-[1px] border-maingray bg-white text-sm"
        />
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="p-2  border-[1px] border-maingray bg-white text-sm"
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          className="p-2  border-[1px] border-maingray bg-white text-sm"
        />
        <input
          type="submit"
          className="p-2  bg-white text-maingray border-[1px] border-maingray font-semibold cursor-pointer text-sm hover:bg-secondarygray2 duration-150 hover:text-white"
        />
      </div>
    </form>
  );
};

export default ContactForm2;
