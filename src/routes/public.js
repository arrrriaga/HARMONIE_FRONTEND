import { Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ProductosPage from "../pages/ProductosPage";
import RegisterPage from "../pages/RegisterPage";

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <LandingPage />,
  },
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/products",
    title: "Productos",
    element: <ProductosPage />,
  },
  { path: "/login", title: "Login", element: <LoginPage /> },
  { path: "/register", title: "Register", element: <RegisterPage /> },
];
