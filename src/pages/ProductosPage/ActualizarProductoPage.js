import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { actualizarProducto } from "../../services";
import Loader from "../../components/Loader";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";
import { ProductContext } from "../../context/Product.context";
import Swal from "sweetalert2";

const ActualizarProductoPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const { producto } = useContext(ProductContext);
  const productID = useParams().id;

  console.log(producto);
  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    await actualizarProducto(productID, productData);
    setIsLoading(false);
    setImageSrc("");
    Swal.fire(
      "Good job!",
      "¡Producto actualizado con éxito! puede tardar un poco en visualizar el cambio",
      "success"
    );
  };

  const imageChanged = (event) => setImageSrc(event.target.value);
  useEffect(() => {
    setImageSrc(producto.img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <Form onSubmit={onSubmited}>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    defaultValue={producto.nombre}
                    type="text"
                    placeholder="Ingresa el nombre"
                    name="nombre"
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="ml">
                  <Form.Label>Capacidad</Form.Label>
                  <Form.Control
                    defaultValue={producto.ml}
                    type="text"
                    placeholder="Ingresa la cantidad neta de producto"
                    name="ml"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={10}>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Descripcción</Form.Label>
                  <Form.Control
                    defaultValue={producto.description}
                    type="text"
                    placeholder="Ingresa la descripción del producto"
                    name="description"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Precio $</Form.Label>
                  <Form.Control
                    defaultValue={producto.price}
                    type="number"
                    placeholder="Ingresa el precio"
                    name="price"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  defaultValue={producto.img}
                  type="text"
                  placeholder="Ingresa la url de la imagen"
                  name="img"
                  onChange={imageChanged}
                />
              </Form.Group>
            </Row>

            <Row>
              <Col className="d-flex justify-content-center">
                {imageSrc !== "" && (
                  <Image
                    src={imageSrc}
                    style={{ height: "200px" }}
                    alt="Error, imagen no soportada."
                    thumbnail
                  />
                )}
              </Col>
            </Row>

            <Row>
              <label style={{ color: "red" }}>{errorMessage}</label>
            </Row>

            <Row className="d-flex justify-content-center mt-3">
              <Col md={3}>
                <Row>
                  <Button variant="success" type="submit">
                    Guardar Producto actualizado
                  </Button>
                </Row>
              </Col>
              <Col md={3}>
                <Row>
                  <NavLink
                    className="btn btn-secondary"
                    to={`/products/detalles/${producto._id}`}
                    type="submit"
                  >
                    Regresar
                  </NavLink>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ActualizarProductoPage;
