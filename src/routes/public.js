import { Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ProductosPage from "../pages/ProductosPage";
import RegisterPage from "../pages/RegisterPage";
import VerProductoPage from "../pages/ProductosPage/VerProductoPage";

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
  {
    path: "/products/detalles/:id",
    // title: "detalles", //! No se renderiza en NAV
    element: <VerProductoPage />,
  },
  { path: "/login", title: "Login", element: <LoginPage /> },
  { path: "/register", title: "Register", element: <RegisterPage /> },
];
