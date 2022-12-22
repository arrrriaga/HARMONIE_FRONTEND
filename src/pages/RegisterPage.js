import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginSignUp } from "../services";
import Loader from "../components/Loader";
import { UserContext } from "../context/User.context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const serviceType = "signup";
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { saveTipo, saveToken, saveUserId } = useContext(UserContext);

  const onSubmited = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { tipo, token, userId, error } = await loginSignUp(serviceType, data);

    if (error) {
      setErrorMessage("Debes completar todos los campos para registrarte");
      console.log(error);
    } else {
      saveToken(token);
      saveUserId(userId);
      saveTipo(tipo);
      event.target.reset();
      Swal.fire(
        "¡Bienvenido!",
        "¡Ya eres parte de la familia TLALLI!",
        "success"
      );
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Row className="d-flex justify-content-center mt-3">
        <Col md={10}>
          <Form onSubmit={onSubmited}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                  />
                </Form.Group>
              </Col>

              <Col md={5}>
                <Form.Group className="mb-3" controlId="apellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3" controlId="edad">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control type="number" placeholder="Edad" name="edad" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="correo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    name="correo"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="ciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    name="ciudad"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="CP">
                  <Form.Label>Código postal</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Código postal"
                    name="CP"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="adress">
              <Form.Label>Dirección de envío</Form.Label>
              <Form.Control type="text" placeholder="Dirección" name="adress" />
            </Form.Group>

            <Row className="text-center">
              <label style={{ color: "red" }}>{errorMessage}</label>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-3">
                <Button variant="primary" type="submit">
                  Registrarse
                </Button>
              </Col>
            </Row>
            <Row className="text-center">
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Login</Link>
              </p>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
