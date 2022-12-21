import { Button, Card, Col, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import { verOneProduct } from "../../services/product";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { UserContext } from "../../context/User.context";

const VerProductoPage = () => {
  const { agregarACarrito } = useContext(ProductContext);
  const { tipo } = useContext(UserContext);
  const { producto, setProducto } = useContext(ProductContext);
  const idParams = useParams().id;

  useEffect(() => {
    const obtenerProducto = async () => {
      const { data } = await verOneProduct(idParams);

      setProducto(data.detalles);
    };
    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row className="d-flex justify-content-center my-3">
      <Col className="d-flex justify-content-center my-3">
        <Card style={{ width: "45rem" }}>
          <Row className="-d-flex justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
              <Card.Img
                className="my-3"
                variant="top"
                src={producto.img}
                style={{ height: "200px", width: "200px" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>
                  {producto.nombre} {producto.ml}
                </Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <h6>ID:{producto._id}</h6>
                <Card.Footer>
                  <h5>${producto.price}</h5>
                  {tipo === "admin" ? (
                    <NavLink
                      className="btn btn-info"
                      to={`/products/actualizar/${producto._id}`}
                    >
                      Actualizar producto
                    </NavLink>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => {
                        agregarACarrito({
                          nombre: producto.nombre + producto.ml,
                          price: producto.price,
                          _id: producto._id,
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                  )}
                  <NavLink
                    className="btn btn-secondary"
                    to={`/products`}
                    type="submit"
                  >
                    Regresar
                  </NavLink>
                </Card.Footer>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default VerProductoPage;
