import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { URL } from '../../common/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { config, configMultiPart } from '../../common/configurations';
import toast from 'react-hot-toast';

const AddCategory = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [slug, setSlug] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    image: null,
  });

  const schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    shortDesc: yup.string(),
  });

  // Generate slug from name
  const generateSlug = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens

    setSlug(slug);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      // Handle file upload
      const file = files[0];
      setFormData({
        ...formData,
        image: file
      });

      // Create image preview
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Generate slug if name is changed
      if (name === 'name') {
        generateSlug(value);
      }
    }
  };

  // Watch for changes to the name field via react-hook-form
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
  });
  
  // Get the current value of the name field
  const nameValue = watch('name');
  
  // Update formData.name and generate slug when nameValue changes
  useEffect(() => {
    if (nameValue) {
      setFormData(prev => ({
        ...prev,
        name: nameValue
      }));
      generateSlug(nameValue);
    }
  }, [nameValue]);

  const onSubmit = async (data) => {
    if (!formData.image) {
      setError("Please attach an image.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    formDataToSend.append("shortDescription", data.shortDesc);
    formDataToSend.append("image", formData.image);
    setError();

    try {
      setIsLoading(true);
      const res = await axios.post(`${URL}/user/category`, formDataToSend, configMultiPart);
      if (res.status) {
        toast.success("Category created");
        navigate('/admin/all-category');
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl mb-6">Add New Category</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Category Name*
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
              {...register("name")}
              onChange={(e) => {
                register("name").onChange(e); // Let react-hook-form process the change
                handleChange(e); // Then call our custom handler
              }}
            />
            <p className="w-full h-5 text-red-500 text-sm ">{errors.name?.message}</p>
            {nameValue && (
              <p className="mt-1 text-sm text-gray-500">
                Slug: {slug}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="shortDescription">
              Short Description*
            </label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
              {...register("shortDesc")}
            ></textarea>
            <p className="w-full h-5">{errors.name?.shortDesc}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
              Category Image*
            </label>
            <input
              id="image"
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
              accept="image/*"
            />
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Preview" className="h-32 object-cover rounded-md" />
              </div>
            )}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => navigate('/categories')}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 min-w-40 text-white bg-mainbtn rounded-md hover:bg-mainbtnhrv duration-200 hover:text-black focus:outline-none focus:ring-1 focus:ring-mainbtn ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? <ClipLoader size={20} /> : 'Save Category'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;