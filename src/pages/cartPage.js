import { Col, Container, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/Product.context";
import VACIO from "../Images/VACIO.png";
import { NavLink } from "react-router-dom";

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
      <Row className="text-center ">
        <h2>
          ¡Oops! Parece que aún no has añadido nada a tu carrito. Continúa
          comprando para agregar productos a tu carrito.
        </h2>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <NavLink
            className="btn btn-success mb-3"
            to={`/products`}
            type="submit"
          >
            Regresar a ver nuestros (increibles) productos
          </NavLink>
        </Col>
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
