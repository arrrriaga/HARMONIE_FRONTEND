import CartPage from "../pages/cartPage";
import LogoutPage from "../pages/LogoutPage";

export const privateRoutes = [
  { path: "/", title: "Private Home", element: <h1>Private Home</h1> },
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
  { path: "/cart", title: "Carrito", element: <CartPage /> },
  { path: "/logout", title: "Logout", element: <LogoutPage /> },
];
