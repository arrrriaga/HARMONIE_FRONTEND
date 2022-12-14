import LogoutPage from "../pages/LogoutPage";
import CartPage from "../pages/CartPage";
import ProductosPage from "../pages/ProductosPage";

export const privateRoutes = [
  { path: "/", title: "Private Home", element: <h1>Private Home</h1> },
  {
    path: "/products",
    title: "Productos",
    element: <ProductosPage />,
  },
  {
    path: "/new-product",
    title: "Agregar producto",
    element: <h1>New product</h1>,
  },
  { path: "/profile", title: "Profile", element: <h1>Profile</h1> },
  {
    path: "/profile/username",
    //title: "Profile user", //!No quiero que se renderice en map, entonces no le pongo titulo
    element: <h1>Profile user</h1>,
  },
  {
    path: "/carrito",
    title: "Carrito",
    element: <CartPage />,
  },
  { path: "/logout", title: "Logout", element: <LogoutPage /> },
];
