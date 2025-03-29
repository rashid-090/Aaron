import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { URL } from '../../common/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { config, configMultiPart } from '../../common/configurations';
import toast from 'react-hot-toast';

const EditCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.categoryId; // Get category ID from state

  console.log("Category ID:", id); // Debugging

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [slug, setSlug] = useState('');
  const [imageChanged, setImageChanged] = useState(false);
  const [imageRemoved, setImageRemoved] = useState(false);

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

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  // Fetch category data
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (!id) {
        setError("Category ID is missing.");
        setIsFetching(false);
        return;
      }
      
      setIsFetching(true);
      try {
        const res = await axios.get(`${URL}/user/category/${id}`, config);
        if (res.data) {
          const { name, shortDescription, image } = res.data;
          
          // Set form values
          setValue("name", name);
          setValue("shortDesc", shortDescription || "");
          
          // Update form data state
          setFormData({
            name,
            shortDescription: shortDescription || "",
            image: null
          });
          
          // Set image preview if available
          if (image) {
            setCurrentImageUrl(image);
            setImagePreview(image);
          }
          
          // Generate slug
          generateSlug(name);
        }
      } catch (err) {
        setError("Failed to load category data. Please try again.");
        console.error(err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchCategoryData();
  }, [id, setValue]);

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
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      // Handle file upload
      const file = files[0];
      if (file) {
        setFormData({
          ...formData,
          image: file
        });
        setImageChanged(true);
        setImageRemoved(false);

        // Create image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
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

  // Remove current image
  const handleRemoveImage = () => {
    setImagePreview(null);
    setCurrentImageUrl(null);
    setFormData({
      ...formData,
      image: null
    });
    setImageChanged(true);
    setImageRemoved(true);
  };
  
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
    setError("");
    
    // Check if image was removed but not replaced
    if (imageRemoved && !formData.image) {
      setError("Please upload a new image.");
      return;
    }
    
    try {
      setIsLoading(true);
      
      const formDataToSend = new FormData();
      formDataToSend.append("name", data.name);
      formDataToSend.append("shortDescription", data.shortDesc || "");
      
      // Only append image if it was changed
      if (imageChanged) {
        if (formData.image) {
          formDataToSend.append("image", formData.image);
        } else if (imageRemoved) {
          // If image was removed and not replaced
          formDataToSend.append("removeImage", "true");
        }
      }

      const res = await axios.put(`${URL}/user/category/${id}`, formDataToSend, configMultiPart);
      if (res.status) {
        toast.success("Category updated successfully");
        navigate('/admin/categories');
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update category");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex justify-center items-center h-64">
          <ClipLoader size={40} />
        <div className="text-center">
          <p className="mt-4 text-gray-600">Loading category data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl mb-6">Edit Category</h1>

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
              Short Description
            </label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
              {...register("shortDesc")}
            ></textarea>
            <p className="w-full h-5">{errors.shortDesc?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
              Category Image
              {imageRemoved && !formData.image && (
                <span className="text-red-500 ml-2 text-sm">* Required</span>
              )}
            </label>
            
            {imagePreview ? (
              <div className="mt-2 mb-4">
                <div className="relative inline-block">
                  <img 
                    src={imagePreview} 
                    alt="Category" 
                    className="h-32 object-cover rounded-md" 
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
                    title="Remove image"
                  >
                    ×
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-2 mb-4">
                <p className="text-amber-600">
                  {imageRemoved ? "Image removed. Please upload a new image." : "No image available."}
                </p>
              </div>
            )}

            <input
              id="image"
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
              accept="image/*"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => navigate('/admin/categories')}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 min-w-40 text-white bg-mainbtn rounded-md hover:bg-mainbtnhrv duration-200 hover:text-black focus:outline-none focus:ring-1 focus:ring-mainbtn ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? <ClipLoader size={20} /> : 'Update Category'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;