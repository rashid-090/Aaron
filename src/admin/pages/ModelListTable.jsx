import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../common/api';
import { config } from '../../common/configurations';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const ModelListTable = () => {
  // State for storing data and UI controls
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filtering and sorting state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // Categories (you can fetch these from your API as well)
  const [categories, setCategories] = useState([]);

  // Delete popup state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modelToDelete, setModelToDelete] = useState(null);

  // Fetch data from your Node.js backend
  useEffect(() => {
    const fetchData = async () => {
      try {

        // Build query parameters
        const params = {
          page: currentPage,
          limit: pageSize,
          search: searchTerm,
          category: selectedCategory,
          sortField,
          sortDir: sortDirection
        };

        // Make API request with query parameters
        const response = await axios.get(`${URL}/user/model/`, { params }, config);
        console.log(response)

        setModels(response.data.models);
        setTotalPages(Math.ceil(response.data.totalAvailableModels / pageSize));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, [currentPage, pageSize, searchTerm, selectedCategory, sortField, sortDirection]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        try {
          const response = await axios.get(`${URL}/user/category-names`, config);
          setCategories(response.data);
        } catch (err) {
          setError('Failed to fetch categories');
          console.error(err);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  // Handle sort toggle
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Open delete confirmation modal
  const openDeleteModal = (model) => {
    setModelToDelete(model);
    setIsDeleteModalOpen(true);
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setModelToDelete(null);
  };

  // Handle delete model
  const handleDeleteModel = async () => {
    if (!modelToDelete) return;

    try {
      // Make DELETE request to your API
      await axios.delete(`${URL}/user/model/${modelToDelete._id}`, config);

      // Remove the deleted model from the state
      setModels(models.filter(model => model._id !== modelToDelete._id));

      // Close the modal
      closeDeleteModal();

      // If we deleted the last item on the current page, go to the previous page
      if (models.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      // Optional: Show a success message
      // You can implement a toast or notification system here
    } catch (err) {
      console.error('Error deleting model:', err);
      // Optional: Show an error message
    }
  };

  // Render loading state
  if (loading && models.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mainbtn"></div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative my-4">
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Filter and search controls */}
      <div className="p-5 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-mainbtn focus:border-mainbtn"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-2.5 ps-10 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-mainbtn focus:border-mainbtn"
                placeholder="Search models..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Models table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" onClick={() => handleSort('createdAt')}>
                No:
                {sortField === 'createdAt' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                <div className="flex items-center">
                  Image
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  Name
                  {sortField === 'name' && (
                    <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center">
                  Category
                  {sortField === 'category' && (
                    <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {models?.length > 0 ? (
              models?.map((model, index) => {
                const adjustedIndex = (currentPage - 1) * pageSize + index + 1;
                return (
                  <tr key={model._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{adjustedIndex}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      <img src={model.images[0]} alt={model.name} className="w-16 h-16 object-contain rounded-md shadow-sm" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{model.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model?.categoryId?.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        <Link
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          to={`/admin/products/${model._id}/${model._id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          to={`${model._id}/edit`}
                        >
                          Edit
                        </Link>
                        <button
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          onClick={() => openDeleteModal(model)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-sm text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No models found</h3>
                    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">

                Showing page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <div className="flex items-center">
              <select
                className="mr-4 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-mainbtn focus:border-mainbtn"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page on limit change
                }}
              >
                {[5, 10, 25, 50].map(size => (
                  <option key={size} value={size}>
                    {size} per page
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={closeDeleteModal}
            ></div>

            {/* Modal panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Warning icon */}
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Delete Model
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete the model "{modelToDelete?.name}"? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDeleteModel}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainbtn sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelListTable;