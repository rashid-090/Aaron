import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { URL } from '../../common/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { config, configMultiPart } from '../../common/configurations';
import toast from 'react-hot-toast';

const EditModel = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [categories, setCategories] = useState([]);
    const [slug, setSlug] = useState('');
    const [modelImages, setModelImages] = useState([]);
    const [modelImagesPreview, setModelImagesPreview] = useState([]);
    const [features, setFeatures] = useState([{ title: '', description: '', icon: null, iconPreview: '' }]);
    const [specifications, setSpecifications] = useState([{ title: '', value: '', icon: null, iconPreview: '' }]);

    const errorRef = useRef(null);

    // Form validation schema
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        modelDesc: yup.string().required("Model Description is required"),
        categoryId: yup.string().required("Category is required"),
        mainContent: yup.string().required("Main content is required"),
        mainFeatureContent: yup.string().required("Main content is required")
        // Add other validations as needed
    });

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    // Get the current value of the name field
    const nameValue = watch('name');

    // Generate slug from name
    const generateSlug = (name) => {
        const slug = name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Remove consecutive hyphens

        setSlug(slug);
        setValue('slug', slug);
    };

    // Update slug when name changes
    useEffect(() => {
        if (nameValue) {
            generateSlug(nameValue);
        }
    }, [nameValue, setValue]);

    // Fetch categories and model data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get(`${URL}/user/category-names`, config);
                setCategories(categoriesResponse.data);
                console.log(categoriesResponse.data)

                const modelResponse = await axios.get(`${URL}/user/model/${id}`, config);
                const modelData = modelResponse.data;

                // Set form values
                setValue('name', modelData.name);
                setValue('modelDesc', modelData.modelDescription);
                setValue("mainHeading", modelData.description.mainHeading);
                setValue("subHeading", modelData.description.subHeading);
                setValue("highlightTitle", modelData.description.highlightBox.title);
                setValue("highlightContent", modelData.description.highlightBox.content);

                setValue("featuresHeading", modelData.features.heading);
                setValue("featuresSubHeading", modelData.features.subHeading);

                setValue("specificationsHeading", modelData.specifications.heading);
                setValue("specificationsIntro", modelData.specifications.introText);

                setValue('categoryId', modelData.categoryId._id);
                setValue('mainContent', modelData.description.mainContent);
                setValue('mainFeatureContent', modelData.features.mainContent);
                // Set other form values as needed

                // Set images
                setModelImagesPreview(modelData.images);
                setModelImages(modelData.images.map(image => ({ name: image, preview: image })));

                // Set features
                setFeatures(modelData.features.items.map(feature => ({
                    title: feature.title,
                    description: feature.description,
                    icon: feature.icon,
                    iconPreview: feature.icon
                })));
                console.log("model data ", modelData)
                // Set specifications
                setSpecifications(modelData.specifications.specs.map(spec => ({
                    title: spec.title,
                    value: spec.value,
                    icon: spec.icon,
                    iconPreview: spec.icon
                })));
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
            }
        };

        fetchData();
    }, [id, setValue]);

    // Handle model images upload
    const handleModelImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setModelImages([...modelImages, ...files]);

        // Create image previews
        const newPreviews = files.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(newPreviews).then(previews => {
            setModelImagesPreview([...modelImagesPreview, ...previews]);
        });
    };

    // Validate file type
    const validateIconFile = (file) => {
        const allowedTypes = ['image/png'];
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
        return true;
    };

    // Handle feature icon upload
    const handleFeatureIconChange = (index, e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!validateIconFile(file)) {
            toast.error("Only PNG files are allowed for icons");
            return;
        }

        const newFeatures = [...features];
        newFeatures[index].icon = file;

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            newFeatures[index].iconPreview = reader.result;
            setFeatures(newFeatures);
        };
        reader.readAsDataURL(file);
    };

    // Handle specification icon upload
    const handleSpecificationIconChange = (index, e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!validateIconFile(file)) {
            toast.error("Only PNG files are allowed for icons");
            return;
        }

        const newSpecifications = [...specifications];
        newSpecifications[index].icon = file;

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            newSpecifications[index].iconPreview = reader.result;
            setSpecifications(newSpecifications);
        };
        reader.readAsDataURL(file);
    };

    // Handle features array manipulations
    const addFeature = () => {
        setFeatures([...features, { title: '', description: '', icon: null, iconPreview: '' }]);
    };

    const removeFeature = (index) => {
        const newFeatures = [...features];
        newFeatures.splice(index, 1);
        setFeatures(newFeatures);
    };

    const updateFeature = (index, field, value) => {
        const newFeatures = [...features];
        newFeatures[index][field] = value;
        setFeatures(newFeatures);
    };

    // Handle specifications array manipulations
    const addSpecification = () => {
        setSpecifications([...specifications, { title: '', value: '', icon: null, iconPreview: '' }]);
    };

    const removeSpecification = (index) => {
        const newSpecifications = [...specifications];
        newSpecifications.splice(index, 1);
        setSpecifications(newSpecifications);
    };

    const updateSpecification = (index, field, value) => {
        const newSpecifications = [...specifications];
        newSpecifications[index][field] = value;
        setSpecifications(newSpecifications);
    };

    // Remove image from preview
    const removeModelImage = (index) => {
        const newImages = [...modelImages];
        const newPreviews = [...modelImagesPreview];
        newImages.splice(index, 1);
        newPreviews.splice(index, 1);
        setModelImages(newImages);
        setModelImagesPreview(newPreviews);
    };

    // Remove feature icon
    const removeFeatureIcon = (index) => {
        const newFeatures = [...features];
        newFeatures[index].icon = null;
        newFeatures[index].iconPreview = '';
        setFeatures(newFeatures);
    };

    // Remove specification icon
    const removeSpecificationIcon = (index) => {
        const newSpecifications = [...specifications];
        newSpecifications[index].icon = null;
        newSpecifications[index].iconPreview = '';
        setSpecifications(newSpecifications);
    };

    const onSubmit = async (data) => {
        console.log(modelImages)
        if (modelImages.length === 0) {
            setError("Please upload at least one model image");
            errorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        try {





            setIsLoading(true);
            const formDataToSend = new FormData();

            // Basic information
            formDataToSend.append("name", data.name);
            formDataToSend.append("modelDescription", data.modelDesc);
            formDataToSend.append("slug", slug);
            formDataToSend.append("categoryId", data.categoryId);

            // Description tab content
            formDataToSend.append("description.mainHeading", data.mainHeading || '');
            formDataToSend.append("description.subHeading", data.subHeading || '');
            formDataToSend.append("description.mainContent", data.mainContent || '');
            formDataToSend.append("description.highlightBox.title", data.highlightTitle || '');
            formDataToSend.append("description.highlightBox.content", data.highlightContent || '');

            // // Append model images
            // modelImages.forEach((image) => {
            //     formDataToSend.append("images", JSON.stringify(image));
            // });

            // console.log("images", formDataToSend.get("images"))

            // Separate existing images (URLs) and new images (File objects)
            const existingImageURLs = modelImages
                .filter((img) => img.preview) // Filter out objects with URLs
                .map((img) => img.name); // Extract only the URLs

            const newImageFiles = modelImages.filter((img) => img instanceof File); // Keep only File objects

            // Append existing images as JSON
            formDataToSend.append("images", JSON.stringify(existingImageURLs)); // ✅ Send URLs as JSON string

            // Append new images as files
            newImageFiles.forEach((image) => {
                formDataToSend.append("newImages", image); // ✅ Upload files separately
            });

            // Features
            formDataToSend.append("features.heading", data.featuresHeading || '');
            formDataToSend.append("features.subHeading", data.featuresSubHeading || '');
            formDataToSend.append("features.mainContent", data.mainFeatureContent || '');
            // Prepare features data without icon field (will be uploaded separately)
            const formattedFeatures = features.map((feature, index) => ({
                title: feature.title || '',
                description: feature.description || '',
                iconIndex: feature.icon ? index : -1, // Use index to match icon files
            }));
            formDataToSend.append("features", JSON.stringify(formattedFeatures));

            // Upload feature icons separately
            features.forEach((feature, index) => {
                if (feature.icon) {
                    formDataToSend.append(`featureIcons`, feature.icon);
                    formDataToSend.append("featureIconIndices", index);
                }
            });

            // Specifications
            formDataToSend.append("specifications.heading", data.specificationsHeading || '');
            formDataToSend.append("specifications.introText", data.specificationsIntro || '');

            // Prepare specifications data without icon field (will be uploaded separately)
            const formattedSpecs = specifications.map((spec, index) => ({
                title: spec.title || '',
                value: spec.value || '',
                iconIndex: spec.icon ? index : -1, // Use index to match icon files
            }));
            formDataToSend.append("specifications", JSON.stringify(formattedSpecs));

            // Upload specification icons separately
            specifications.forEach((spec, index) => {
                if (spec.icon) {
                    formDataToSend.append(`specificationIcons`, spec.icon);
                    formDataToSend.append("specificationIconIndices", index);
                }
            });

            // Log FormData key-value pairs
            // formDataToSend.forEach((value, key) => {
            //     console.log(`${key}:`, value);
            // });

            // return 

            const res = await axios.put(`${URL}/user/model/${id}`, formDataToSend, configMultiPart);
            if (res.status === 200 || res.status === 201) {
                toast.success("Model created successfully");
                // navigate('/admin/all-models');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create model");
            errorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div ref={errorRef} className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-6">Edit Elevator Model</h1>

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
                    {/* Basic Information Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Basic Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                    Model Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("name")}
                                />
                                <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                                {nameValue && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        Slug: {slug}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="categoryId">
                                    Category*
                                </label>
                                <select
                                    id="categoryId"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("categoryId")}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-red-500 text-sm mt-1">{errors.categoryId?.message}</p>
                            </div>

                        </div>
                        <div className='mt-2'>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                Model Desciption*
                            </label>
                            <textarea
                                rows="6"
                                id="modelDesc"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                {...register("modelDesc")}
                            />
                            <p className="text-red-500 text-sm mt-1">{errors.modelDesc?.message}</p>

                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Model Images* (At least one required)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleModelImagesChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                            />
                            {modelImagesPreview.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {modelImagesPreview.map((preview, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={preview}
                                                alt={`Preview ${index}`}
                                                className="h-24 w-24 object-cover rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeModelImage(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Description</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="mainHeading">
                                    Main Heading
                                </label>
                                <input
                                    type="text"
                                    id="mainHeading"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("mainHeading")}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subHeading">
                                    Sub Heading
                                </label>
                                <input
                                    type="text"
                                    id="subHeading"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("subHeading")}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="mainContent">
                                Main Content*
                            </label>
                            <textarea
                                id="mainContent"
                                rows="6"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                {...register("mainContent")}
                            ></textarea>
                            <p className="text-red-500 text-sm mt-1">{errors.mainContent?.message}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="highlightTitle">
                                    Highlight Box Title
                                </label>
                                <input
                                    type="text"
                                    id="highlightTitle"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("highlightTitle")}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="highlightContent">
                                    Highlight Box Content
                                </label>
                                <textarea
                                    id="highlightContent"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("highlightContent")}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="featuresHeading">
                                    Features Heading
                                </label>
                                <input
                                    type="text"
                                    id="featuresHeading"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("featuresHeading")}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="featuresSubHeading">
                                    Features Sub Heading
                                </label>
                                <input
                                    type="text"
                                    id="featuresSubHeading"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("featuresSubHeading")}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="mainFeatureContent">
                                Main Content*
                            </label>
                            <textarea
                                id="mainFeatureContent"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                {...register("mainFeatureContent")}
                            ></textarea>
                            <p className="text-red-500 text-sm mt-1">{errors.mainFeatureContent?.message}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Features Items
                            </label>

                            {features.map((feature, index) => (
                                <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">Feature {index + 1}</h3>
                                        {features.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Title*
                                            </label>
                                            <input
                                                type="text"
                                                value={feature.title}
                                                onChange={(e) => updateFeature(index, 'title', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                                required
                                            />
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Description*
                                        </label>
                                        <textarea
                                            rows="3"
                                            value={feature.description}
                                            onChange={(e) => updateFeature(index, 'description', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addFeature}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                Add Another Feature
                            </button>
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Specifications</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="specificationsHeading">
                                    Specifications Heading
                                </label>
                                <input
                                    type="text"
                                    id="specificationsHeading"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("specificationsHeading")}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="specificationsIntro">
                                    Specifications Intro Text
                                </label>
                                <textarea
                                    id="specificationsIntro"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                    {...register("specificationsIntro")}
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Specification Items
                            </label>

                            {specifications.map((spec, index) => (
                                <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">Specification {index + 1}</h3>
                                        {specifications.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeSpecification(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Title*
                                            </label>
                                            <input
                                                type="text"
                                                value={spec.title}
                                                onChange={(e) => updateSpecification(index, 'title', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Value*
                                            </label>
                                            <input
                                                type="text"
                                                value={spec.value}
                                                onChange={(e) => updateSpecification(index, 'value', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mainbtn"
                                                required
                                            />
                                        </div>


                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addSpecification}
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                                Add Another Specification
                            </button>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center justify-end mt-8">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/all-models')}
                            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-4 py-2 min-w-40 text-white bg-mainbtn rounded-md hover:bg-mainbtnhrv duration-200 hover:text-black focus:outline-none focus:ring-1 focus:ring-mainbtn ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? <ClipLoader size={20} /> : 'Update Model'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModel;