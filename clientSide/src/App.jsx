import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import LoginAuth from "./pages/auth/login.jsx";
import RegisterAuth from "./pages/auth/register.jsx";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminLayout from "./components/admin-view/layout";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found/index";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [isAuthenticated, dispatch]);
  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="products" element={<AdminProducts />}></Route>
          <Route path="orders" element={<AdminOrders />}></Route>
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
