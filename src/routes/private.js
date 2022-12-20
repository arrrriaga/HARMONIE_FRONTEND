import LogoutPage from "../pages/LogoutPage";
import CartPage from "../pages/cartPage";
import ProductosPage from "../pages/ProductosPage";
import AgregarProductoPage from "../pages/AgregarProductoPage";
import ProfilePage from "../pages/ProfilePage";
import VerProductoPage from "../pages/ProductosPage/VerProductoPage";
import ActualizarProductoPage from "../pages/ProductosPage/ActualizarProductoPage";

const privateRoutes = [
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
  { path: "/", title: "Private Home", element: <h1>Private Home</h1> },

  {
    path: "/carrito",
    title: "Carrito",
    element: <CartPage />,
  },
  ...privateRoutes,
];
const adminRoutes = [
  { path: "/", title: "Private Home", element: <h1>Private Home</h1> },
  {
    path: "/new-product",
    title: "Agregar producto",
    element: <AgregarProductoPage />,
  },
  ...privateRoutes,
];

export { clienteRoutes, adminRoutes };
