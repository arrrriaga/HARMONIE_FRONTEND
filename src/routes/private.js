import LogoutPage from "../pages/LogoutPage";
import CartPage from "../pages/cartPage";
import ProductosPage from "../pages/ProductosPage";
import AgregarProductoPage from "../pages/AgregarProductoPage";
import ProfilePage from "../pages/ProfilePage";
import VerProductoPage from "../pages/ProductosPage/VerProductoPage";
import ActualizarProductoPage from "../pages/ProductosPage/ActualizarProductoPage";
import { Navigate } from "react-router-dom";

const privateRoutes = [
  {
    path: "/",
    // title: "Private Home",
    element: <Navigate to="/products" />,
  },
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
  {
    path: "/products/actualizar/:id",
    // title: "actualizar", //! No se renderiza en NAV
    element: <ActualizarProductoPage />,
  },
  { path: "/profile", title: "Profile", element: <ProfilePage /> },
  { path: "/logout", title: "Logout", element: <LogoutPage /> },
];

const clienteRoutes = [
  ...privateRoutes,

  {
    path: "/carrito",
    title: <i className="fas fa-shopping-cart">CARRITO</i>,
    element: <CartPage />,
  },
];
const adminRoutes = [
  {
    path: "/new-product",
    title: "Agregar producto",
    element: <AgregarProductoPage />,
  },
  ...privateRoutes,
];

export { clienteRoutes, adminRoutes };
