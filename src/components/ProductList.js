import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { ProductContext } from "../context/Product.context";
import "./style.css";

const ProductList = ({ productos, total }) => {
  const { eliminarDeCarrito, limpiarCarrito } = useContext(ProductContext);
  return (
    <>
      <Table className="table table-hover ">
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
              <td>${producto.price}</td>
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
            <td>${total}</td>
            <td>
              <Button variant="danger" onClick={() => limpiarCarrito()}>
                Vaciar carrito <i class="fa-solid fa-eraser"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
