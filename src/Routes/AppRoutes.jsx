import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Categories from "../Pages/Categories";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import MainLayout from "../components/Mainlayout";
import SignUp from "../Pages/Signup";
import Cart from "../Pages/Cart";


function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center text-gray-500 dark:text-gray-400">
            Page not found
          </div>
        }
      />

    </Routes>
  );
}

export default AppRoutes;
