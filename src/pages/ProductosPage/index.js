import { useEffect, useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { verProductos } from "../../services";
import { Card, Button, Row, Col, CardGroup } from "react-bootstrap";
import "./style.css";
import { UserContext } from "../../context/User.context";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductosPage = () => {
  const { productos, guardarProductos, agregarACarrito } =
    useContext(ProductContext);

  const { tipo } = useContext(UserContext);

  const getProductos = async () => {
    const { detalles } = await verProductos();
    guardarProductos(detalles);
  };

  useEffect(() => {
    getProductos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CardGroup className="my-5">
      <Row xs={1} md={3} className="g-4">
        {productos.map((producto, index) => (
          <Card key={index} className="CARDS">
            <Card.Img className="imgCard" variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>
                <h3>
                  {" "}
                  {producto.nombre} {producto.ml}
                </h3>
              </Card.Title>
              <Card.Text className="textoCard text-muted">
                {producto.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <h3>${producto.price}</h3>
              </Row>
              <Row>
                <Col md={8}>
                  <Row>
                    <NavLink
                      className="btn btn-info"
                      to={`/products/detalles/${producto._id}`}
                    >
                      <i class="fa-sharp fa-solid fa-angles-right">
                        {" "}
                        Ver detalles
                      </i>
                    </NavLink>
                  </Row>
                </Col>

                <Col md={4}>
                  {tipo === "admin" ? (
                    <Button
                      variant="link"
                      onClick={() => {
                        // agregarACarrito({
                        //   nombre: producto.nombre + producto.ml,
                        //   price: producto.price,
                        //   _id: producto._id,
                        // });
                        console.log("Borrar");
                      }}
                    >
                      <i
                        style={{ color: "red" }}
                        class="fa-sharp fa-solid fa-trash fa-2xl"
                      >
                        {" "}
                      </i>
                    </Button>
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
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </CardGroup>
  );
};

export default ProductosPage;
