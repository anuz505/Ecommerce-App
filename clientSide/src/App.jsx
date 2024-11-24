import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import LoginAuth from "./pages/auth/login.jsx";
import RegisterAuth from "./pages/auth/register.jsx";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminLayout from "./components/admin-view/layout";
import AdminProducts from "./pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found/index";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import CheckAuth from "./components/common/check-auth";
import { useState } from "react";
import UnauthPage from "./pages/unauth-page";

function App() {
  const [authentication, setAuthentication] = useState(false);
  const [user, setUser] = useState({
    role: "admin",
  });

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={authentication} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<LoginAuth />}></Route>
          <Route path="register" element={<RegisterAuth />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={authentication} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="products" element={<AdminProducts />}></Route>
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={authentication} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="listing" element={<ShoppingListing />}></Route>
          <Route path="account" element={<ShoppingAccount />}></Route>
          <Route path="checkout" element={<ShoppingCheckout />}></Route>
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
