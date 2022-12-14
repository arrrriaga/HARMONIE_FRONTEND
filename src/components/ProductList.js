import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { ProductContext } from "../context/Product.context";

const ProductList = ({ productos, total }) => {
  const { eliminarDeCarrito, limpiarCarrito } = useContext(ProductContext);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{producto.nombre}</td>
              <td>${producto.price.toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => eliminarDeCarrito(index)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan={2}>Total</th>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" onClick={() => limpiarCarrito()}>
        Vaciar carrito
      </Button>
    </>
  );
};

export default ProductList;
