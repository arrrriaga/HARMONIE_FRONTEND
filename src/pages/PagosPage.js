import React from "react";
import PaypalButtons from "../components/PaypalButtons";
import { useContext } from "react";
import { ProductContext } from "../context/Product.context";
import { Col, Row, Table } from "react-bootstrap";

const PagosPage = () => {
  const { carrito } = useContext(ProductContext);
  const total = carrito.reduce((acumulador, precioProductos) => {
    return (acumulador = acumulador + precioProductos.price);
  }, 0);
  return (
    <Row className="d-flex justify-content-center my-3">
      <Col md={8}>
        <Row>
          <h1>Total a pagar: ${total}</h1>
          <Table className="table table-hover ">
            <thead>
              <tr>
                <th colSpan={2}>Resumen:</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{producto.nombre}</td>
                  <td>${producto.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <PaypalButtons productos={carrito} currency="MXN" amount={total} />
        </Row>
      </Col>
    </Row>
  );
};

export default PagosPage;
