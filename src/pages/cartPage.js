import { Col, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/Product.context";

const CartPage = () => {
  const { carrito } = useContext(ProductContext);

  const total = carrito.reduce((acumulador, precioProductos) => {
    return (acumulador = acumulador + precioProductos.price);
  }, 0);

  return !carrito.length ? (
    <h1>No hay películas, agrega una.</h1>
  ) : (
    <Row>
      <Col>
        <ProductList productos={carrito} total={total} />
      </Col>
      <Col>
        <PaypalButtons productos={carrito} currency="MXN" amount={total} />
      </Col>
    </Row>
  );
};
export default CartPage;
