import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../common/api';
import { config } from '../../common/configurations';
import { Link } from 'react-router-dom';

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

  // Fetch data from your Node.js backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

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
        setTotalPages(response.data.totalPages);
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

  // Render loading state
  if (loading && models.length === 0) {
    return <div className="text-center p-4">Loading models...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="w-full">
      {/* Filter and search controls */}
      <div className="flex flex-wrap mb-4 gap-4">
        <div className="flex-1 min-w-64">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full p-2 border rounded pra-5"
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

        <div className="flex-1 min-w-64">
          <label className="block text-sm font-medium mb-1">Search</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Search models..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Models table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th
                className="py-2 px-4 border cursor-pointer"
              >
                No:
              </th>
              <th
                className="py-2 px-4 border cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name
                {sortField === 'name' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="py-2 px-4 border cursor-pointer"
                onClick={() => handleSort('category')}
              >
                Category
                {sortField === 'category' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              {/* <th
                className="py-2 px-4 border cursor-pointer"
                onClick={() => handleSort('createdAt')}
              >
                Created At
                {sortField === 'createdAt' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th> */}
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {models?.length > 0 ? (
              models?.map((model, index) => {
                const isLast = index === models.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-200 ";
                const adjustedIndex = (currentPage - 1) * 10 + index + 1;
                return (
                  <tr key={model._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{adjustedIndex}</td>
                    <td className="py-2 px-4 border">{model.name}</td>
                    <td className="py-2 px-4 border">{model.categoryId.name}</td>
                    {/* <td className="py-2 px-4 border">
                    {new Date(model.createdAt).toLocaleDateString()}
                  </td> */}
                    <td className="py-2 px-4 border ">
                      <Link
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                        to={`/admin/products/${model._id}/${model._id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
                        to={`${model._id}/edit`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center border">
                  No models found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-sm">
            Showing page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page number buttons - show a limited range for many pages */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            // For many pages, show numbers around current page
            let pageNum = totalPages <= 5
              ? i + 1
              : Math.min(Math.max(currentPage - 2 + i, 1), totalPages);

            // Skip if we'd show duplicate numbers
            if (i > 0 && pageNum === parseInt(Array.from({ length: i }, (_, j) => {
              return totalPages <= 5
                ? j + 1
                : Math.min(Math.max(currentPage - 2 + j, 1), totalPages);
            }).slice(-1))) {
              pageNum++;
            }

            if (pageNum <= totalPages) {
              return (
                <button
                  key={pageNum}
                  className={`px-3 py-1 border rounded ${currentPage === pageNum ? 'bg-blue-500 text-white' : ''
                    }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            }
            return null;
          })}

          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div>
          <select
            className="border rounded p-1"
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
  );
};

export default ModelListTable;