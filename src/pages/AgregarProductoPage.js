import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { nuevoProducto } from "../services";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const AgregarProductoPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { error } = await nuevoProducto(data);
    if (error) {
      setErrorMessage(error);
    }
    setIsLoading(false);
    setImageSrc("");
    Swal.fire("Good job!", "¡Producto creado con éxito!", "success");
  };

  const imageChanged = (event) => setImageSrc(event.target.value);

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
                    type="text"
                    placeholder="Ingresa la descripción del producto"
                    name="description"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingresa el precio"
                    name="price"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Form.Group className="mb-3" controlId="img">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
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
                  <Button variant="primary" type="submit">
                    Guardar Producto
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AgregarProductoPage;
