import { useContext, useEffect } from "react";
import { UserContext } from "../context/User.context";
import { ProductContext } from "../context/Product.context";

const LogoutPage = () => {
  const { clearContext } = useContext(UserContext);
  const { limpiarCarrito } = useContext(ProductContext);
  useEffect(() => {
    clearContext();
    limpiarCarrito();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default LogoutPage;
