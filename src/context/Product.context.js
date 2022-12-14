import { useState, createContext, useEffect } from "react";

const ProductContext = createContext();
const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // const saveCarrito = (carritoStorage) => setCarrito(carritoStorage);
  const saveCarrito = (carritoStorage) => setCarrito(carritoStorage);
  const guardarProductos = (newProdutos) => setProductos(newProdutos);
  const agregarACarrito = (newProdutos) => {
    const newCarrito = [...carrito, newProdutos];
    setCarrito(newCarrito);
    console.log(newCarrito);
    localStorage.setItem("carritoStorage", JSON.stringify(newCarrito));
  };

  const eliminarDeCarrito = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
    localStorage.setItem("carritoStorage", JSON.stringify(newCarrito));
  };
  const limpiarCarrito = () => {
    setCarrito([]);
    localStorage.setItem("carritoStorage", JSON.stringify([]));
  };

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem("carritoStorage"));
    if (carritoStorage) {
      // saveCarrito(carritoStorage);
      saveCarrito(carritoStorage);
    } else {
      localStorage.setItem("carritoStorage", JSON.stringify([carrito]));
      saveCarrito("VACIO");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! 6.- Retornamos el componente
  return (
    <Provider
      value={{
        productos,
        carrito,
        guardarProductos,
        agregarACarrito,
        eliminarDeCarrito,
        limpiarCarrito,
      }}
    >
      {children}
    </Provider>
  );
};

export { ProductProvider, ProductContext };
