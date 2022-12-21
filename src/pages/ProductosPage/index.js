import { useEffect, useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { eliminarProducto, verProductos } from "../../services";
import { Card, Button, Row, Col, CardGroup } from "react-bootstrap";
import "./style.css";
import { UserContext } from "../../context/User.context";
import { NavLink } from "react-router-dom";

const ProductosPage = () => {
  const Swal = require("sweetalert2");
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
  }, [productos]);
  return (
    <CardGroup className="my-5">
      <Row xs={1} xl={3} className="g-4">
        {productos.map((producto, index) => (
          <Card key={index} className="CARDS">
            <Col>
              <Row className="d-flex justify-content-center my-3">
                <Col xs={6} className="d-flex justify-content-center my-3">
                  <Card.Img
                    className="imgCard"
                    variant="top"
                    src={producto.img}
                  />
                </Col>
                <Col xs={6}>
                  <Row>
                    <Card.Body>
                      <Card.Title>
                        <h3>
                          {producto.nombre} {producto.ml}
                        </h3>
                      </Card.Title>
                      <Card.Text className="textoCard text-muted">
                        {producto.description}
                      </Card.Text>
                    </Card.Body>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Footer>
                    <Row>
                      <h3>${producto.price}</h3>
                    </Row>
                    <Row className="d-flex justify-content-center my-3">
                      <Col xs={10}>
                        <Row>
                          <NavLink
                            className="btn btn-info"
                            to={`/products/detalles/${producto._id}`}
                          >
                            <i className="fa-sharp fa-solid fa-angles-right">
                              Ver detalles
                            </i>
                          </NavLink>
                        </Row>
                      </Col>

                      <Col xs={2}>
                        {tipo === "admin" ? (
                          <Button
                            variant="link"
                            onClick={() => {
                              Swal.fire({
                                title:
                                  "¿Estás seguro que quieres eliminar este producto?",
                                text: "¡No podrás revertir este cambio!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#c6a510",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Sí ¡ya no lo quiero!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire(
                                    {
                                      title: "¡Borrado!",
                                      text: `El producto ${producto.nombre} fue borrado, puede que tarde unos segundos en desaparecer.`,
                                      icon: "success",
                                    },
                                    eliminarProducto(producto._id)
                                  );
                                }
                              });
                            }}
                          >
                            <i
                              style={{ color: "red" }}
                              className="fa-sharp fa-solid fa-trash fa-2xl"
                            >
                              {" "}
                            </i>
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            onClick={() => {
                              agregarACarrito({
                                nombre: producto.nombre + " " + producto.ml,
                                price: producto.price,
                                _id: producto._id,
                              });
                            }}
                          >
                            <i class="fa-solid fa-plus">
                              to <i className="fas fa-shopping-cart"></i>
                            </i>
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Card.Footer>
                </Col>
              </Row>
            </Col>
          </Card>
        ))}
      </Row>
    </CardGroup>
  );
};

export default ProductosPage;
