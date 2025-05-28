import "./App.css";
import { lazy, Suspense, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {

  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import { LoadingScrn } from "./components/index";
import Login from "./admin/pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFirst } from "./redux/actions/userActions";
import { Toaster } from "react-hot-toast";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// User routes
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Modal = lazy(() => import("./pages/Products/Items"));
const Products = lazy(() => import("./pages/AllProducts"));
const Catogory = lazy(() => import("./pages/Products/Categories"));
const Home = lazy(() => import("./pages/Home"));

// Admin routes
const AddCategory = lazy(() => import("./admin/pages/AddCategory"))
const AddModel = lazy(() => import("./admin/pages/AddModel"));
const Categories = lazy(() => import("./admin/pages/Categories"));
const EditCategory = lazy(() => import("./admin/pages/EditCategory"));
const Models = lazy(() => import("./admin/pages/ModelListTable"));
const EditModel = lazy(() => import("./admin/pages/EditModel"))





function App() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getUserDataFirst());
    }
  }, [dispatch, user]);

  const ProtectedRoute = ({ element }) => {
    const { user, loading } = useSelector((state) => state.user);

    return user ? element : <Navigate to="/login" />;
  };

  if (loading) {
    return <LoadingScrn />;
  }

  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        {/* {user ? user.role === "user" && <UserLayout /> : <UserLayout />} */}
        <Suspense fallback={<LoadingScrn />}>
          <Routes>
            <Route
              path="/"
              element={
                user ? user.role === "user" && <UserLayout /> : <UserLayout />
              }
            >
              <Route
                index
                element={
                  user ? (
                    user.role === "admin" ? (
                      <Navigate to="/admin/" />
                    ) : (
                      <Home />
                    )
                  ) : (
                    <Home />
                  )
                }
              />


              {/* General Pages */}
              <Route path="/about-us" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:category" element={<Catogory />} />
              <Route path="/products/:category/:id" element={<Modal />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/login" element={<Login />} />



              {/* Admin Routes */}
              {(user && user.role === "admin") ||
                (user && user.role === "superAdmin") ? (
                <Route path="/admin/*" element={<AdminRoutes />} />
              ) : (
                <Route path="/admin" element={<Navigate to="/" />} />
              )}

              <Route path="*" element={<div>not found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

function AdminRoutes() {
  return (
    <Suspense fallback={<LoadingScrn />}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<div >Dashbord</div>} />
          <Route path="/products/:category/:id" element={<Modal />} />

          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/edit-category" element={<EditCategory />} />
          <Route path="/add-model" element={<AddModel />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id/edit" element={<EditModel />} />
          <Route path="/products/:category/:id" element={<Modal />} />

          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
