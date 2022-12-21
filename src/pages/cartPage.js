import { Col, Container, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/Product.context";
import VACIO from "../Images/VACIO.png";

const CartPage = () => {
  const { carrito } = useContext(ProductContext);

  const total = carrito.reduce((acumulador, precioProductos) => {
    return (acumulador = acumulador + precioProductos.price);
  }, 0);

  return !carrito.length ? (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <img src={VACIO} alt="Carrito Vacío" height={300}></img>
        </Col>
      </Row>
      <Row className="text-center mb-3">
        <h2>
          ¡Oops! Parece que aún no has añadido nada a tu carrito. Continua
          comprando para agregar productos a tu carrito
        </h2>
      </Row>
    </Container>
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
