import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactModal from "react-modal";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "../../common/api";
import { config } from "../../common/configurations";
import { useNavigate } from "react-router-dom";

// Initialize ReactModal
ReactModal.setAppElement('#root'); // Make sure to set this to your app's root element

const Categorys = () => {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [name, setName] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [error, setError] = useState("");
    const [isReordering, setIsReordering] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories();
    }, []);


    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${URL}/user/category`, config);
            console.log(res)
            if (res.status === 200) {
                const sortedCategories = res.data.sort((a, b) => (a.order || 0) - (b.order || 0));
                setCategories(sortedCategories);
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to fetch categories");
        }
    };

    const handleSaveCategory = async () => {
        if (!name.trim()) {
            setError("Category name is required.");
            return;
        }

        if (shortDesc.trim().length < 10) {
            setError("Category shortDesc must be at least 10 characters.");
            return;
        }
        setError("");

        try {
            let res;
            if (editingCategory) {
                const currentOrder = editingCategory.order || categories.findIndex(t => t._id === editingCategory._id) + 1;
                res = await axios.put(
                    `${URL}/admin/category/${editingCategory._id}`,
                    { name, shortDesc, order: currentOrder },
                    config
                );
            } else {
                res = await axios.post(
                    `${URL}/admin/category`,
                    { name, shortDesc, order: categories.length + 1 }, // Put new category at the end
                    config
                );

                if (res.status) {
                    const allCategorysRes = await axios.get(`${URL}/admin/categories`, config);
                    if (allCategorysRes.status === 200) {
                        const allCategorys = allCategorysRes.data.categories;
                        const newCategoryId = res.data.category._id;
                        const reorderedIds = [newCategoryId];
                        allCategorys.forEach(category => {
                            if (category._id !== newCategoryId) {
                                reorderedIds.push(category._id);
                            }
                        });

                        await axios.post(
                            `${URL}/admin/category/order`,
                            { categoryIds: reorderedIds },
                            config
                        );
                    }
                }
            }

            if (res.status) {
                toast.success(editingCategory ? "Category updated." : "Category added.");
                await fetchCategories();
                setShowModal(false);
                setName("");
                setShortDesc("");
                setEditingCategory(null);
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to save category");
        }
    };

    const openDeleteConfirmation = (category) => {
        setCategoryToDelete(category);
        setShowDeleteConfirmation(true);
    };

    const handleDelete = async () => {
        if (!categoryToDelete) return;

        try {
            const res = await axios.delete(`${URL}/user/category/${categoryToDelete._id}`, config);
            if (res.status === 200) {
                setCategories(categories.filter(t => t._id !== categoryToDelete._id));
                toast.success("Category deleted successfully.");
                setShowDeleteConfirmation(false);
                setCategoryToDelete(null);
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to delete category");
        }
    };

    const handleDragEnd = async (result) => {
        const { destination, source } = result;
        if (!destination || destination.index === source.index) return;

        setIsReordering(true);

        const reorderedCategorys = [...categories];
        const [movedItem] = reorderedCategorys.splice(source.index, 1);
        reorderedCategorys.splice(destination.index, 0, movedItem);
        setCategories(reorderedCategorys);

        const orderedIds = reorderedCategorys.map(category => category._id);

        try {
            await axios.post(
                `${URL}/user/category/order`,
                { categoryIds: orderedIds },
                config
            );
        } catch (err) {
            console.log(err);
            toast.error("Failed to update category order");
            fetchCategories();
        } finally {
            setIsReordering(false);
        }
    };

    // This function is important for fixing the drag and drop issue
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        margin: `0 0 16px 0`,

        // change background colour if dragging
        background: isDragging ? "#f3f4f6" : "white",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col">
            <h2 className="text-center text-2xl font-bold mb-6">Categories</h2>
            <button
                onClick={() => { setShowModal(true); setEditingCategory(null); setName(""); setShortDesc(""); }}
                className="mb-6 ml-auto bg-mainbtn text-white py-2 px-4 rounded-md hover:bg-opacity-80"
                disabled={isReordering}
            >
                Add Category
            </button>

            <div className="mb-4 bg-blue-50 p-3 rounded border border-blue-200">
                <p className="text-blue-700 text-sm font-medium">
                    <span className="font-bold">Tip:</span> Drag and drop categories to rearrange their order. The order will be saved automatically.
                </p>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="categories-droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`min-h-[50px] ${snapshot.isDraggingOver ? 'bg-gray-50' : ''}`}
                        >
                            {categories.length === 0 ? (
                                <h1 className="text-center text-gray-500 py-8">No Categories</h1>
                            ) : (
                                categories.map((category, index) => (
                                    <Draggable
                                        key={category._id}
                                        draggableId={category._id}
                                        index={index}
                                        isDragDisabled={isReordering}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className="bg-white p-4 mb-4 rounded-xl shadow-md border-l-4 border-main"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-semibold">{category.name}</p>
                                                        <p className="mt-2">{category.shortDescription}</p>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Order: {index + 1}
                                                    </div>
                                                </div>
                                                <div className="flex justify-end space-x-2 mt-2">
                                                    <button
                                                        onClick={() => navigate("/admin/edit-category", { state: { categoryId: category._id } })}
                                                        className="text-main hover:underline"
                                                        disabled={isReordering}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => openDeleteConfirmation(category)}
                                                        className="text-red-500 hover:underline"
                                                        disabled={isReordering}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            {/* Add/Edit Category Modal */}
            <ReactModal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Add/Edit Category"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black"
                    },
                    content: {
                        position: "static",
                        maxWidth: "500px",
                        width: "90%",
                        padding: "20px",
                        borderRadius: "8px",
                        margin: "auto",
                    },
                }}
            >
                <h2 className="text-center text-xl font-bold mb-4">{editingCategory ? "Edit Category" : "Add Category"}</h2>
                <div>
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        className="w-full px-3 py-2 border rounded-lg mb-4 outline-main"
                    />
                </div>
                <div>
                    <label htmlFor="shortDesc" className="block text-gray-700">Category Text</label>
                    <textarea
                        id="shortDesc"
                        value={shortDesc}
                        onChange={(e) => setShortDesc(e.target.value)}
                        placeholder="Category"
                        className="w-full px-3 py-2 border outline-main rounded-lg mb-4"
                        rows="4"
                    ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-opacity-80"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSaveCategory}
                        className="bg-main text-white py-2 px-4 rounded-md hover:bg-opacity-80"
                        disabled={!name.trim() || shortDesc.trim().length < 10}
                    >
                        Save Category
                    </button>
                </div>
            </ReactModal>

            {/* Delete Confirmation Modal */}
            <ReactModal
                isOpen={showDeleteConfirmation}
                onRequestClose={() => setShowDeleteConfirmation(false)}
                contentLabel="Confirm Delete"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black"
                    },
                    content: {
                        position: "static",
                        maxWidth: "400px",
                        width: "90%",
                        padding: "20px",
                        borderRadius: "8px",
                        margin: "auto",
                    },
                }}
            >
                <h2 className="text-center text-xl font-bold mb-4">Confirm Delete</h2>
                <p className="text-center mb-6">
                    Are you sure you want to delete the category "{categoryToDelete?.name}"?
                    This action cannot be undone.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setShowDeleteConfirmation(false)}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-opacity-80"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-opacity-80"
                    >
                        Delete
                    </button>
                </div>
            </ReactModal>
        </div>
    );
};

export default Categorys;