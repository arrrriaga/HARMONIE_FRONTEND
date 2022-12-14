import { useState, createContext } from "react";

const ProductContext = createContext();
const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const guardarProductos = (newProdutos) => setProductos(newProdutos);
  const agregarACarrito = (newProdutos) =>
    setCarrito([...carrito, newProdutos]);
  const eliminarDeCarrito = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
  };
  const limpiarCarrito = () => setCarrito([]);

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
