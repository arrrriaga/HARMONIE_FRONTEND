import LogoutPage from "../pages/LogoutPage";
import CartPage from "../pages/cartPage";
import ProductosPage from "../pages/ProductosPage";
import AgregarProductoPage from "../pages/AgregarProductoPage";
import ProfilePage from "../pages/ProfilePage";

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
    element: <AgregarProductoPage />,
  },
  { path: "/profile", title: "Profile", element: <ProfilePage /> },
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
