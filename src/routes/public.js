import { Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <LandingPage />,
  },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", title: "Login", element: <LoginPage /> },
  { path: "/register", title: "Register", element: <RegisterPage /> },
];
